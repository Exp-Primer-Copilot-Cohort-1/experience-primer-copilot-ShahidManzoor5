const express = require('express');
const app = express();
const port = 3000;

// 2. create a route for comments
app.get('/comments', (req, res) => {
  res.send('Comments');
});

// 3. create a route for comments/new
app.get('/comments/new', (req, res) => {
  res.send('New Comment');
});

// 4. create a route for comments/:id
app.get('/comments/:id', (req, res) => {
  res.send('Comment ID: ' + req.params.id);
});

// 5. create a route for comments/:id/edit
app.get('/comments/:id/edit', (req, res) => {
  res.send('Edit Comment ID: ' + req.params.id);
});

// 6. create a route for comments/:id/delete
app.get('/comments/:id/delete', (req, res) => {
  res.send('Delete Comment ID: ' + req.params.id);
});

// 7. create a route for comments/:id/like
app.get('/comments/:id/like', (req, res) => {
  res.send('Like Comment ID: ' + req.params.id);
});

// 8. create a route for comments/:id/dislike
app.get('/comments/:id/dislike', (req, res) => {
  res.send('Dislike Comment ID: ' + req.params.id);
});

// 9. create a route for comments/:id/report
app.get('/comments/:id/report', (req, res) => {
  res.send('Report Comment ID: ' + req.params.id);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});