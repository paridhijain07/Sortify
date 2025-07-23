function classifyMessage(text) {
    if (text.includes('http')) return 'url';
    if (text.length > 200) return 'note';
    if (text.match(/roses.*red/i)) return 'poem'; 
    return 'note';
}

module.exports = classifyMessage;
