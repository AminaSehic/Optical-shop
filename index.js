const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./baza.js');
const Op = db.Sequelize.Op;

const DOZVOLJENI_TIPOVI = ["dioptrijske", "suncane", "sociva", "ostalo"];
const DOZVOLJENI_NAZIVI = ["Avanglion", "Sover", "ReyBan"];
var stanjeKorpe = [];

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/index.html'))
})
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/about.html'))
})
app.get('/blog', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/blog.html'))
})
app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/contact.html'))
})
app.get('/shop', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/shop.html'))
})
app.get('/korpa', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/html/korpa.html'))
})
app.get('/artikal/:naziv', function (req, res) {
    db.artikal.findOne({where: {naziv: req.params.naziv}}).then(
        (rs) => {
            if (rs) {
                res.send(rs);
            } else {
                res.send(null)
            }
        }).catch((err) => {
        res.send(err);
    });
});
app.delete('/artikal/:naziv', function (req, res) {
    db.artikal.destroy({
        where: {naziv: req.params.naziv}
    }).then(function () {
        console.log('Izbrisi artikal po nazivu');
        res.send();
    }).catch((err) => {
            res.status(404).send({
                "message": "Wrong parameters sent. Please try again!"
            });
        }
    )
});
app.put('/artikal/:naziv', function (req, res) {
    db.artikal.update(
        {naziv: req.body.naziv},
        {where: {naziv: req.params.naziv}}
    ).then(result => {
        console.log(result)
        res.send(result)
    }).catch(err => {
        console.error(err)
        res.send(err)
    })
});
app.get('/artikli', function (req, res) {
    db.artikal.findAll().then((resultSet) => {
        const artikli = resultSet.map(e => {
            return {id: e.id, naziv: e.naziv, tip: e.tip, cijena: e.cijena, url: `img/products/${e.tip}/${e.id}.jpg`};
        });
        res.send(artikli);
    }).catch((err) => {
            res.status(404).send({
                "message": "Wrong parameters sent. Please try again!"
            });

        }
    );
});
app.put('/artikal', function (req, res) {
    db.artikal.update(
        {stanjeUSkladistu: req.body.stanjeUSkladistu + 1},
        {where: {stanjeUSkladistu: req.params.stanjeUSkladistu}}
    ).then(result => {
        console.log(result)
        res.send(result)
    }).catch(err => {
        console.error(err)
        res.send(err)
    })
});
app.post('/artikal', function (req, res) {
    let artikal = req.body;
    if (!artikal.naziv || !DOZVOLJENI_NAZIVI.includes(artikal.naziv.toLowerCase())
        || !DOZVOLJENI_TIPOVI.includes(artikal.tip.toLowerCase()) || artikal.cijena <= 0
        || artikal.stanjeUSkladistu < 0
    ) {
        res.send({message: "Unesite ispravne podatke"});
        return;
    }
    db.artikal.create({
        naziv: artikal.naziv
    }).then((rs) => {
        res.send(rs);
    }).catch((err) => {
            res.status(404).send({
                "message": "Wrong parameters sent. Please try again!"
            });
        }
    )
});
const port = (process.env.NODE_ENV === "test") ? 3001 : 3000;
app.listen(port, function () {
    console.log("Started server")
});
module.exports = app;