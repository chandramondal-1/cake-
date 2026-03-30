<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawBody = file_get_contents('php://input');
$decoded = json_decode($rawBody ?: '', true);
$payload = is_array($decoded) && $decoded ? $decoded : $_POST;

if (!is_array($payload) || !$payload) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'No submission data received']);
    exit;
}

$formType = preg_replace('/[^a-z0-9_-]/i', '', (string)($payload['formType'] ?? 'general')) ?: 'general';

function sanitizeText(string $value, int $maxLength = 1000): string
{
    $value = strip_tags($value);
    $value = trim(preg_replace('/\s+/u', ' ', $value) ?? '');

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

$entry = [
    'formType' => $formType,
    'submittedAt' => gmdate('c'),
    'ip' => sanitizeText((string)($_SERVER['REMOTE_ADDR'] ?? ''), 80),
    'userAgent' => sanitizeText((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 300),
    'payload' => []
];

foreach ($payload as $key => $value) {
    if ($key === 'formType') {
        continue;
    }

    if (is_scalar($value)) {
        $cleanKey = preg_replace('/[^a-z0-9_-]/i', '', (string)$key);
        if (!$cleanKey) {
            continue;
        }

        $entry['payload'][$cleanKey] = sanitizeText((string)$value);
    }
}

$storageDir = __DIR__ . DIRECTORY_SEPARATOR . 'data';
if (!is_dir($storageDir) && !mkdir($storageDir, 0775, true) && !is_dir($storageDir)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Unable to prepare storage directory']);
    exit;
}

$storageFile = $storageDir . DIRECTORY_SEPARATOR . 'submissions.ndjson';
$jsonLine = json_encode($entry, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if ($jsonLine === false || file_put_contents($storageFile, $jsonLine . PHP_EOL, FILE_APPEND | LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Unable to store submission']);
    exit;
}

$notifyEmail = getenv('NAWAABS_NOTIFY_EMAIL');
if ($notifyEmail && filter_var($notifyEmail, FILTER_VALIDATE_EMAIL)) {
    $subject = sprintf("New %s form submission", ucfirst($formType));
    $message = "A new form submission was captured:\n\n" . print_r($entry, true);
    @mail($notifyEmail, $subject, $message);
}

echo json_encode(['ok' => true, 'message' => 'Submission captured']);
