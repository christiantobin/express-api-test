const router = require('express').Router();

const books = require('./books_dump');

let booksDir = books;

router.get('/books', function(req, res){
    res.send(booksDir);    
});
router.get('/books/:id', function(req, res){
    const { id } = req.params;

    const book = booksDir.find(b => b.isbn == id);
    if (!book) return res.status(404).send('Book does not exist');

    res.send(book);
});
router.post('/books', function(req, res){
    res.send("Not available yet.")
});
router.put('/books/:id', function(req, res){
    res.send("Not available yet.")

});

router.delete('/books/:id', function(req, res){
    const { id } = req.params;

    let book = booksDir.find(b => b.isbn == id);
    if (!book) return res.status(404).send('Book does not exist');

    booksDir = booksDir.filter(b => b.isbn != id);

    res.send('Success');
});

module.exports = router;
