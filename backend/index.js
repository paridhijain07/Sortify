const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 3000;

// Telegram Bot
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// Log incoming messages
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log("Received message:", msg.text || "non-text (maybe a file)");

    bot.sendMessage(chatId, "Hi! I'm your file organizer bot 🗂️");
});

// Basic express route
app.get('/', (req, res) => {
    res.send('Sortify backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
