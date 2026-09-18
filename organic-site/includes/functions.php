<?php
declare(strict_types=1);

function json_out(array $payload, int $code = 200): void {
    http_response_code($code);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function read_json_body(): array {
    $raw = file_get_contents('php://input');
    if (!$raw) return [];
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function default_db(): array {
    return [
        'settings' => [
            'companyName' => 'کود ارگانیک',
            'heroTitle' => 'برای خاک بهتر، انتخاب هوشمندانه‌تر',
            'heroDesc' => 'تأمین کود ارگانیک و طبیعی با کیفیت برای کشاورزی پایدار',
            'heroBtn1' => 'مشاهده محصولات',
            'heroBtn2' => 'درخواست مشاوره',
            'heroCardTitle' => 'محصول ویژه',
            'heroCardDesc' => '',
            'heroFeaturedProductId' => 1,
            'heroFeaturedImage' => '',
            'aboutImage' => '',
            'seasonalMode' => 'auto',
            'manualSeason' => 'spring',
        ],
        'stats' => ['products' => 0, 'customers' => 0, 'consultations' => 0, 'years' => 15, 'solutions' => 48, 'naturalPercent' => 100],
        'categories' => ['کود ارگانیک', 'کود آلی', 'بهبوددهنده خاک', 'کود مخصوص باغ'],
        'products' => [],
        'users' => [[
            'id' => 1,
            'name' => 'مدیر اصلی',
            'email' => 'admin@natural.ir',
            'mobile' => '09120000000',
            'password' => 'admin123',
            'role' => 'owner',
            'status' => 'active',
            'avatar' => 'profile1',
            'permissions' => [],
            'createdAt' => date('c'),
        ]],
        'consultations' => [],
        'tickets' => [],
        'activityLog' => [],
        'quickLinks' => [],
        'currentUser' => null,
    ];
}

function load_store(): array {
    if (!is_dir(dirname(DATA_FILE))) {
        mkdir(dirname(DATA_FILE), 0755, true);
    }
    if (!file_exists(DATA_FILE)) {
        $db = default_db();
        save_store($db);
        return $db;
    }
    $raw = file_get_contents(DATA_FILE);
    $data = json_decode($raw ?: '[]', true);
    if (!is_array($data)) {
        $data = default_db();
        save_store($data);
    }
    if (!isset($data['users']) || !count($data['users'])) {
        $data = array_merge(default_db(), $data);
        $data['users'] = default_db()['users'];
        save_store($data);
    }
    return $data;
}

function save_store(array $db): bool {
    if (!is_dir(dirname(DATA_FILE))) {
        mkdir(dirname(DATA_FILE), 0755, true);
    }
    $tmp = DATA_FILE . '.tmp';
    $ok = file_put_contents($tmp, json_encode($db, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
    if ($ok === false) return false;
    return rename($tmp, DATA_FILE);
}

function current_session_user(array $db): ?array {
    if (empty($_SESSION['user_id'])) return null;
    foreach ($db['users'] as $u) {
        if ((int)$u['id'] === (int)$_SESSION['user_id']) {
            return [
                'id' => $u['id'],
                'name' => $u['name'],
                'email' => $u['email'],
                'role' => $u['role'],
                'permissions' => $u['permissions'] ?? [],
                'avatar' => $u['avatar'] ?? 'profile1',
            ];
        }
    }
    return null;
}

function require_staff(array $db): array {
    $user = current_session_user($db);
    if (!$user || !in_array($user['role'], ['owner', 'admin'], true)) {
        json_out(['ok' => false, 'error' => 'دسترسی غیرمجاز'], 403);
    }
    return $user;
}

function normalize_mobile(string $m): string {
    $map = ['۰'=>'0','۱'=>'1','۲'=>'2','۳'=>'3','۴'=>'4','۵'=>'5','۶'=>'6','۷'=>'7','۸'=>'8','۹'=>'9'];
    $m = strtr($m, $map);
    return preg_replace('/\D+/', '', $m) ?: '';
}
