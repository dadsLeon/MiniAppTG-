from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Настройки бота
BOT_TOKEN = '8441453823:AAEkUNbZGYa72ywlGNWLWjq0AGxzz-ko4bU'
ADMIN_CHAT_ID = '8566417314'

@app.route('/test', methods=['GET'])
def test():
    return jsonify({'status': 'Server is running!', 'bot_configured': True})

@app.route('/send_to_telegram', methods=['POST'])
def send_to_telegram():
    try:
        data = request.json
        print(f'📥 Получены данные: {data}')
        
        modal = data.get('modal', 'Unknown')
        value = data.get('value', 'Empty')
        user_id = data.get('userId', 'Unknown')
        username = data.get('username', 'Unknown')
        
        # Формируем сообщение
        message = f"""🔔 Новые данные из модального окна

📝 Окно: {modal}
💬 Значение: {value}
👤 User ID: {user_id}
📛 Username: @{username}
⏰ Время: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"""
        
        print(f'📤 Отправляем сообщение в Telegram...')
        
        # Отправляем в Telegram
        url = f'https://api.telegram.org/bot{BOT_TOKEN}/sendMessage'
        payload = {
            'chat_id': ADMIN_CHAT_ID,
            'text': message
        }
        
        response = requests.post(url, json=payload)
        print(f'📡 Ответ от Telegram: {response.status_code}')
        print(f'📄 Содержимое ответа: {response.text}')
        
        if response.status_code == 200:
            print('✅ Сообщение успешно отправлено!')
            return jsonify({'success': True, 'message': 'Sent to Telegram'})
        else:
            print(f'❌ Ошибка отправки: {response.text}')
            return jsonify({'success': False, 'message': 'Failed to send', 'error': response.text}), 500
            
    except Exception as e:
        print(f'❌ Исключение: {str(e)}')
        return jsonify({'success': False, 'message': str(e)}), 500

if __name__ == '__main__':
    print('🚀 Сервер запущен на http://localhost:5000')
    print('📱 Не забудь настроить BOT_TOKEN и ADMIN_CHAT_ID')
    app.run(host='0.0.0.0', port=5000, debug=True)
