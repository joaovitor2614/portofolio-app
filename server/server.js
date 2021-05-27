const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const app = express();
// connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));









// server static assets on prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));