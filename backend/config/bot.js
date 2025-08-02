const TelegramBot = require('node-telegram-bot-api');
const classifyMessage = require('../utils/classifier');
const Message = require('../models/Message');
const dotenv = require('dotenv');
dotenv.config();

const bot = () => {
    const token = process.env.TELEGRAM_TOKEN;
    const telegramBot = new TelegramBot(token, { polling: true });

    telegramBot.on('message', async (msg) => {
        const chatId = msg.chat.id;

        try {
            if (msg.text) {
                const type = await classifyMessage(msg.text); // <-- Await here

                await Message.create({
                    type,
                    content: msg.text,
                    timestamp: new Date()
                });

                telegramBot.sendMessage(chatId, `✅ Message saved as "${type}"`);
            } else if (msg.document) {
                await Message.create({
  type: 'File',
  content: msg.document.file_name,
  file_id: msg.document.file_id
});
                telegramBot.sendMessage(chatId, '📁 File saved!');
            }
        } catch (err) {
            console.error('Error handling message:', err);
            telegramBot.sendMessage(chatId, '❌ Something went wrong!');
        }
    });

    console.log('🤖 Telegram bot is running...');
};

module.exports = bot;
