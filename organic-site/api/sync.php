<?php
require_once dirname(__DIR__) . '/config/config.php';
require_once dirname(__DIR__) . '/includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['ok' => false, 'error' => 'POST only'], 405);
}

$db = load_store();
$user = require_staff($db);
$body = read_json_body();
if (!$body) {
    json_out(['ok' => false, 'error' => 'داده خالی است'], 400);
}

// همگام‌سازی بخش‌های مجاز از پنل
$allowed = ['settings', 'stats', 'categories', 'products', 'consultations', 'tickets', 'activityLog', 'quickLinks', 'users'];
foreach ($allowed as $key) {
    if (array_key_exists($key, $body)) {
        $db[$key] = $body[$key];
    }
}

// حفظ رمز عبور کاربران اگر از کلاینت بدون password آمده
if (!empty($body['users']) && is_array($body['users'])) {
    $oldById = [];
    foreach (load_store()['users'] as $ou) {
        $oldById[(int)$ou['id']] = $ou;
    }
    $merged = [];
    foreach ($body['users'] as $nu) {
        $id = (int)($nu['id'] ?? 0);
        if ($id && isset($oldById[$id]) && empty($nu['password'])) {
            $nu['password'] = $oldById[$id]['password'];
        }
        $merged[] = $nu;
    }
    $db['users'] = $merged;
}

if (!save_store($db)) {
    json_out(['ok' => false, 'error' => 'خطا در ذخیره‌سازی'], 500);
}

json_out(['ok' => true, 'message' => 'ذخیره شد', 'by' => $user['name']]);
