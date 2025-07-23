const TelegramBot = require('node-telegram-bot-api');
const classifyMessage = require('../utils/classifier');
const Message = require('../models/Message');
const dotenv=require('dotenv')
dotenv.config()

const bot = () => {
    const token = process.env.TELEGRAM_TOKEN;
    const telegramBot = new TelegramBot(token, { polling: true });

    telegramBot.on('message', async (msg) => {
        const chatId = msg.chat.id;

        if (msg.text) {
            const type = classifyMessage(msg.text);

            await Message.create({ type, content: msg.text });

            telegramBot.sendMessage(chatId, `✅ Message saved as "${type}"`);
        } else if (msg.document) {
            await Message.create({
                type: 'file',
                content: msg.document.file_name,
                file_id: msg.document.file_id
            });

            telegramBot.sendMessage(chatId, '📁 File saved!');
        }
    });

    console.log('Telegram bot is running...');
};

module.exports = bot;
