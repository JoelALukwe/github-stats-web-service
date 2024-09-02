const axios = require('axios');

const getUserStats = async (req, res) => {
    const username = req.params.username;
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(400).json({ error: 'User not found' });
    }
};

module.exports = { getUserStats };

