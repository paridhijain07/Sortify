// utils/classifier.js
const axios = require('axios');

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

const LABELS = [
  "Poem",
  "Note",
  "URL",
  "Reminder",
  "Quote",
  "Idea",
  "Code",
  "File"
];
async function classifyMessage(message) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-mnli',
      {
        inputs: message,
        parameters: {
          candidate_labels: LABELS,
        }
      },
      {
        headers: {
          Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json',
        }
      }
    );

    const topLabel = response.data.labels[0]; // highest score
    return topLabel;

  } catch (err) {
    console.error('Error in classifyMessage:', err.response?.data || err.message);
    return "Uncategorized";
  }
}

module.exports = classifyMessage;
