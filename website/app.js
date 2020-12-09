const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req,res) => {
    res.render('home.ejs');
})

app.get('/produtos/:categoria', (req, res) => {
    const { categoria } = req.params;
    if(categoria === "saude") {
        res.render('saude.ejs');
    } else if(categoria === 'nutricao') {
        res.render('nutricao.ejs');
    } else if(categoria === 'beleza'){
        res.render('beleza.ejs');
    } else {
        res.send("Página não encontrada");
    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})