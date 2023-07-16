const express = require('express');
const axios = require('axios');


const webhookUrl = 'https://discord.com/api/webhooks/1130183990498840699/cJJN1kJ9jAbdJTCUyRkeCngRrXapNKnH1GirtaJUTv8OC5LdE46flW83fCh6SaL9TQxf';

const sendWebhookMessage = async (message) => {
    try {
        const response = await axios.post(webhookUrl, { content: message });
        console.log('Message sent to Discord webhook');
    } catch (error) {
        console.error('Error sending message to Discord webhook:', error);
    }
};

const app = express();

app.get('/', (req, res) => {
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    res.send(`Your ip is now sent to the webhook`);
    sendWebhookMessage(ip);
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
