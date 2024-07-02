const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let comments = [];

// Route to get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Route to post a new comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    if (comment) {
        comments.push(comment);
        res.status(201).json({ message: 'Comment added successfully!' });
    } else {
        res.status(400).json({ message: 'Comment cannot be empty!' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
