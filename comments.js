//create web server for comment
// 1. create express app
// 2. create a route for comment
// 3. create a route for comment/:id
// 4. create a route for comment/:id/:comment_id
// 5. create a route for comment/:id/:comment_id/edit
// 6. create a route for comment/:id/:comment_id/delete
// 7. create a route for comment/:id/:comment_id/update
// 8. create a route for comment/:id/:comment_id/like
// 9. create a route for comment/:id/:comment_id/dislike

const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middlewares/auth');

router.get('/', commentController.index);
router.get('/:id', commentController.show);
router.get('/:id/:comment_id', commentController.show);
router.get('/:id/:comment_id/edit', auth, commentController.edit);
router.get('/:id/:comment_id/delete', auth, commentController.delete);
router.get('/:id/:comment_id/like', auth, commentController.like);
router.get('/:id/:comment_id/dislike', auth, commentController.dislike);

router.post('/:id/:comment_id/update', auth, commentController.update);

module.exports = router;
