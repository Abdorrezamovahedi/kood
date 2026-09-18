<?php
require_once dirname(__DIR__) . '/config/config.php';
require_once dirname(__DIR__) . '/includes/functions.php';

$db = load_store();
$db['currentUser'] = current_session_user($db);
// رمزها را به کلاینت نفرست
$safeUsers = array_map(function ($u) {
    $x = $u;
    unset($x['password']);
    return $x;
}, $db['users'] ?? []);
$out = $db;
$out['users'] = $safeUsers;
json_out(['ok' => true, 'data' => $out]);
