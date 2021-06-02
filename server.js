const express = require('express');
const path = require('path');

const app = express();



// init middleware
app.use(express.json({ extended: false }));


app.use('/api', require('./routes/api'))






// server static assets on prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/dist'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));