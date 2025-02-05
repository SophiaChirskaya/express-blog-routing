const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts');

// Definizione d'uso di una cartella per i file statici
app.use(express.static('public'));

// Definizone di rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Utilizziamo le rotta delle pizze definendo la parte iniziale delle rotte
app.use("/posts", postsRouter)




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
});