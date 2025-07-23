const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    type: String,          
    content: String, 
    file_id: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
