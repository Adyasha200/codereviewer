const aiService = require('../services/ai.service');

module.exports.getResponse = async (req, res) => {
  const prompt = req.query.prompt;

  if (!prompt) {
    return res.status(400).send('Prompt is required');
  }

  try {
    const response = await aiService(prompt);
    res.send(response); // ✅ Now it's inside
  } catch (error) {
    console.error("AI Service Error:", error.message);
    res.status(500).send("Something went wrong while generating response.");
  }
};
