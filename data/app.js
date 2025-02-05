const express = require('express')
const app = express()
const port = 3000

// Definizione d'uso di una cartella per i file statici
app.use(express.static('public'));

// Definizone di rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
})