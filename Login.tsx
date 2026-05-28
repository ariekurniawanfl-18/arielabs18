CREATE TABLE tabel_admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insert User Demo admin (password: arielabs18password)
INSERT INTO tabel_admin (username, password_hash) 
VALUES ('admin', '$2y$10$vNsc9PzX5rV6N6OasA0yEu8Y26oOnA6VpY6mS9vH7R1IAn7uXvAqy');
File: login.php (PHP Authentication Secure Handler)
<?php
header('Content-Type: application/json');
session_start();

$host     = "sql105.infinityfree.com"; // Silakan ganti sesuai MySQL Hostname Anda
$username = "if0_41558326";            // Silakan ganti sesuai MySQL Username Anda
$password = "xfIlj32RigVhzPF";           // Silakan ganti sesuai MySQL Password Anda
$dbname   = "if0_41558326_db_arielabs18";    // Silakan ganti sesuai MySQL Database Name Anda

$conn = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($conn->connect_error) {
    die(json_encode(["success" => false, "error" => "Koneksi database terputus."]));
}

$input = json_decode(file_get_contents('php://input'), true);
$user = isset($input['username']) ? trim($input['username']) : '';
$pass = isset($input['password']) ? $input['password'] : '';

if (empty($user) || empty($pass)) {
    echo json_encode(["success" => false, "error" => "Input Username/Password kosong."]);
    exit;
}

// Persist Statement untuk menghindari SQL Injection harian
$stmt = $conn->prepare("SELECT password_hash FROM tabel_admin WHERE username = ?");
$stmt->bind_param("s", $user);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($pass, $row['password_hash'])) {
        $_SESSION['admin_auth'] = true;
        $_SESSION['admin_user'] = $user;
        echo json_encode([
            "success" => true,
            "message" => "Otentikasi Berhasil! Sesi Admin PHP Aktif."
        ]);
        exit;
    }
}

echo json_encode(["success" => false, "error" => "Username atau Password salah."]);
?>