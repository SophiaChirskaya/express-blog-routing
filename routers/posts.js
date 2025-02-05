const express = require('express')
const router = express.Router();

// Index
router.get('/', function(req, res) {
    res.send('Lista dei blog');
});

// Show
router.get('/:id', function(req, res) {
    res.send('Dettagli dei blog' + req.params.id);
});

// Create/Store
router.post('/', function(req, res) {
    res.send('Creazione nuovo blog');
});

// Update
router.put('/:id', function(req, res) {
    res.send('Modifica integrale del blog' + req.params.id);
});

// Modify
router.patch('/:id', function(req, res) {
    res.send('Modifica parziale del blog' + req.params.id);
});

// Destroy
router.delete('/:id', function(req, res) {
    res.send('Eliminazione del blog' + req.params.id);
});

module.exports = router;
