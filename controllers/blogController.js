const posts = require('../data/posts');

function index(req, res) {
    // res.send('Lista dei posts');
    res.json(posts);


    }

function show(req, res) {
    // res.send('Dettagli dei blog' + req.params.id);

    // Recupero dell'id dall'URL e l'ho trasformo in numero
    const id = parseInt(req.params.id)

    // Cerco il post via id
    const post = posts.find(post => post.id ===id);

    // Controllo
    if(!post) {
        res.status(404);
        return res.json({
            errror: "Not found",
            message: "Post non trovato"
        })
    }

    // Restituisco il post richiesto
    res.json(post);
    

}

function store(req, res) {
    res.send('Creazione nuovo blog');

}

function update(req, res) {
    res.send('Modifica integrale del blog' + req.params.id);

}

function destroy(req, res) {
    // res.send('Eliminazione del blog' + req.params.id);

        // Recupero dell'id dall'URL e l'ho trasformo in numero
        const id = parseInt(req.params.id)

        // Cerco il post via id
        const post = posts.find(post => post.id ===id);
    
        // Controllo
        if(!post) {
            res.status(404);
            return res.json({
                errror: "Not found",
                message: "Post non trovato"
            })
        }

        // Cancello il post trovato
        posts.splice(posts.indexOf(post), 1);

        // Check di aggiornamento dati
        console.log(posts);

        // Ritorno la risposta affermativa di avvenuta cancellazione
        res.sendStatus(204);
        
}

module.exports = { index, show, store, update, destroy }