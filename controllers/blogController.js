const posts = require('../data/posts');

function index(req, res) {
    res.send('Lista dei posts');
    

    // let filteredPosts = posts;
    // if(req.query.tag) {
    //     filteredPosts = posts.filter(
    //         post => post.tags.includes(req.query.tag)
    //     );
    // }
    // res.json(filteredPosts);
    }

function show(req, res) {
    res.send('Dettagli dei blog' + req.params.id);

}

function store(req, res) {
    res.send('Creazione nuovo blog');

}

function update(req, res) {
    res.send('Modifica integrale del blog' + req.params.id);

}

function destroy(req, res) {
    res.send('Eliminazione del blog' + req.params.id);

}

module.exports = { index, show, store, update, destroy }