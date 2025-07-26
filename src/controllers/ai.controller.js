const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
  const code = req.body.code;

  if (!code) {
    return res.status(400).send('Code is required');
  }

  try {
    const response = await aiService(code); // Make sure this is a function
    res.send(response); // Or use res.json({ response })
  } catch (error) {
    console.error("AI Service Error:", error.message);
    res.status(500).send("Something went wrong while generating response.");
  }
};
