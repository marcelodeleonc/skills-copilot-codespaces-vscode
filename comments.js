// Create web server 
// Start server: node server.js
// Stop server: ctrl + c
// View server: http://localhost:3000
// View server: http://localhost:3000/comments
// View server: http://localhost:3000/comments/1

// Import express
const express = require('express');

// Create web server
const app = express();

// Port
const port = 3000;

// Create data
const comments = [
    { id: 1, username: 'Nguyễn Văn A', content: 'Hello World!' },
    { id: 2, username: 'Trần Thị B', content: 'Hello World!' },
    { id: 3, username: 'Phạm Văn C', content: 'Hello World!' }
];

// Create route
// GET /comments: get all comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// GET /comments/:id: get comment by id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (!comment) {
        res.status(404).send('Comment not found!');
    }
    res.send(comment);
});

// POST /comments: create new comment
app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        username: req.body.username,
        content: req.body.content
    };
    comments.push(comment);
    res.send(comment);
});

// PUT /comments/:id: update comment
app.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (!comment) {
        res.status(404).send('Comment not found!');
    }
    comment.username = req.body.username;
    comment.content = req.body.content;
    res.send(comment);
});

// DELETE /comments/:id: delete comment
app.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (!comment) {
        res.status(404).send('Comment not found!');
    }
    const index = comments.indexOf(comment);
