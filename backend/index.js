const dotenv=require('dotenv')
dotenv.config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const connectDB=require('./config/db')
const bot=require('./config/bot')
const cors=require('cors')
connectDB()
bot()
app.use(cors())
const messageRoutes = require('./routes/messages');
app.use('/api/messages', messageRoutes);
// Basic express route
app.get('/', (req, res) => {
    res.send('Sortify backend is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
