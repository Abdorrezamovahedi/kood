<?php
declare(strict_types=1);
session_start();

define('ROOT_PATH', dirname(__DIR__));
define('DATA_FILE', ROOT_PATH . '/data/db.json');
define('UPLOAD_PATH', ROOT_PATH . '/uploads');
define('SITE_NAME', 'کود ارگانیک');

// بعداً برای MySQL:
// define('DB_HOST', 'localhost');
// define('DB_NAME', 'organic_site');
// define('DB_USER', 'root');
// define('DB_PASS', '');

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Credentials: true');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}
