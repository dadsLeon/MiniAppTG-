# Telegram Bot Logger

## Установка

1. Установи Python (если еще не установлен): https://www.python.org/downloads/

2. Установи зависимости:
```bash
pip install -r requirements.txt
```

## Настройка бота

1. Создай бота через @BotFather:
   - Напиши `/newbot`
   - Придумай имя и username
   - Получишь токен

2. Узнай свой Chat ID:
   - Напиши боту @userinfobot
   - Он покажет твой ID

3. Открой `bot_server.py` и замени:
   - `YOUR_BOT_TOKEN` на токен бота
   - `YOUR_ADMIN_CHAT_ID` на свой Chat ID

## Запуск

1. Запусти сервер:
```bash
python bot_server.py
```

2. Открой `index.html` в браузере

Теперь все данные из модальных окон будут приходить тебе в Telegram!
