<?php
require_once dirname(__DIR__) . '/config/config.php';
require_once dirname(__DIR__) . '/includes/functions.php';

$db = load_store();
$body = read_json_body();
$action = $body['action'] ?? ($_GET['action'] ?? '');

if ($action === 'me') {
    json_out(['ok' => true, 'user' => current_session_user($db)]);
}

if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    json_out(['ok' => true]);
}

if ($action === 'login') {
    $email = strtolower(trim((string)($body['email'] ?? '')));
    $mobile = normalize_mobile((string)($body['mobile'] ?? ''));
    $password = (string)($body['password'] ?? '');
    $otp = trim((string)($body['otp'] ?? ''));

    // OTP ساده سمت سرور (برای اتصال کاوه‌نگار جایگزین می‌شود)
    if (!empty($_SESSION['otp'])) {
        $s = $_SESSION['otp'];
        if ($s['mobile'] !== $mobile || $s['code'] !== $otp || time() > $s['exp']) {
            json_out(['ok' => false, 'error' => 'کد تأیید نامعتبر یا منقضی'], 400);
        }
    } else {
        json_out(['ok' => false, 'error' => 'ابتدا کد را درخواست کنید'], 400);
    }

    $user = null;
    foreach ($db['users'] as &$u) {
        $uem = strtolower($u['email'] ?? '');
        $um = normalize_mobile($u['mobile'] ?? '');
        if (($email && $uem === $email) || ($mobile && $um === $mobile)) {
            if (($u['password'] ?? '') !== $password) {
                json_out(['ok' => false, 'error' => 'رمز عبور اشتباه است'], 401);
            }
            if (($u['status'] ?? '') === 'blocked') {
                json_out(['ok' => false, 'error' => 'حساب مسدود است'], 403);
            }
            $user = $u;
            break;
        }
    }
    unset($u);

    if (!$user) {
        $user = [
            'id' => (int)(microtime(true) * 1000),
            'name' => $email ? explode('@', $email)[0] : 'کاربر',
            'email' => $email,
            'mobile' => $mobile,
            'password' => $password,
            'role' => 'user',
            'status' => 'active',
            'avatar' => 'profile1',
            'permissions' => [],
            'createdAt' => date('c'),
        ];
        $db['users'][] = $user;
        save_store($db);
    }

    $_SESSION['user_id'] = $user['id'];
    unset($_SESSION['otp']);
    json_out([
        'ok' => true,
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email'],
            'role' => $user['role'],
            'permissions' => $user['permissions'] ?? [],
            'avatar' => $user['avatar'] ?? 'profile1',
        ],
    ]);
}

if ($action === 'send_otp') {
    $mobile = normalize_mobile((string)($body['mobile'] ?? ''));
    if (strlen($mobile) < 10) {
        json_out(['ok' => false, 'error' => 'موبایل نامعتبر'], 400);
    }
    $code = (string)random_int(10000, 99999);
    $_SESSION['otp'] = ['mobile' => $mobile, 'code' => $code, 'exp' => time() + 300];
    // TODO: Kavenegar API — فعلاً برای تست در پاسخ dev_code (در پروداکشن حذف شود)
    json_out(['ok' => true, 'message' => 'کد ارسال شد', 'dev_code' => $code]);
}

json_out(['ok' => false, 'error' => 'action نامعتبر'], 400);
