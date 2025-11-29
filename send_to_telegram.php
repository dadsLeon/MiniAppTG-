<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    // Настройки бота
    $botToken = '8441453823:AAEkUNbZGYa72ywlGNWLWjq0AGxzz-ko4bU';
    $chatId = '8566417314';
    
    $modal = $data['modal'] ?? 'Unknown';
    $value = $data['value'] ?? 'Empty';
    $userId = $data['userId'] ?? 'Unknown';
    $username = $data['username'] ?? 'Unknown';
    
    // Формируем сообщение
    $message = "🔔 Новые данные из модального окна\n\n";
    $message .= "📝 Окно: " . $modal . "\n";
    $message .= "💬 Значение: " . $value . "\n";
    $message .= "👤 User ID: " . $userId . "\n";
    $message .= "📛 Username: @" . $username . "\n";
    $message .= "⏰ Время: " . date('Y-m-d H:i:s');
    
    // Отправляем в Telegram
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    $postData = [
        'chat_id' => $chatId,
        'text' => $message,
        'parse_mode' => 'HTML'
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    echo json_encode(['success' => true, 'message' => 'Sent to Telegram']);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
}
?>
