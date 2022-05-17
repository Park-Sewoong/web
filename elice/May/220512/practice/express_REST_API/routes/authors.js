const { Router } = require('express');
const Note = require('../models/note');

const router = Router();

router.get('/', (req, res, next) => {
    const notes = Note.authorList();
    res.json(notes);
});

router.get('/:author/notes', (req, res, next) => {
    try {
        const notes = Note.findByAuthor(req.params.author);
        res.json(notes);
    } catch (e) {
        next(e);
    }

});

module.exports = router;