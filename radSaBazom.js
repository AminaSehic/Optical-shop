const db = require('./baza.js');
db.sequelize.sync({force: true}).then(() => {
    initialize().then(() => {
        console.log("Gotovo kreiranje tabela i ubacivanje pocetnih podataka!");
        process.exit();
    }).catch((err) => {
        console.log(err)
    });
}).catch((err) => {
    console.log(err)
});

function initialize() {
    let artikal1 = {naziv: 'Sover', tip: 'dioptrijske', cijena: 130, stanjeUSkladistu: 11};
    let artikal2 = {naziv: 'ReyBan', tip: 'dioptrijske', cijena: 140, stanjeUSkladistu: 2};
    let artikal3 = {naziv: 'ReyBan', tip: 'dioptrijske', cijena: 120, stanjeUSkladistu: 3};
    let artikal4 = {naziv: 'Avanglion', tip: 'dioptrijske', cijena: 140, stanjeUSkladistu: 12};
    let artikal5 = {naziv: 'ReyBan', tip: 'dioptrijske', cijena: 140, stanjeUSkladistu: 14};
    let artikal6 = {naziv: 'Avanglion', tip: 'dioptrijske', cijena: 130, stanjeUSkladistu: 25};
    let artikal7 = {naziv: 'Sover', tip: 'dioptrijske', cijena: 130, stanjeUSkladistu: 11};
    let artikal8 = {naziv: 'ReyBan', tip: 'suncane', cijena: 120, stanjeUSkladistu: 3};
    let artikal9 = {naziv: 'Avanglion', tip: 'suncane', cijena: 200, stanjeUSkladistu: 31};
    let artikal10 = {naziv: 'Sover', tip: 'suncane', cijena: 150, stanjeUSkladistu: 3};
    let artikal11 = {naziv: 'Lens', tip: 'sociva', cijena: 500, stanjeUSkladistu: 25};
    let artikal12 = {naziv: 'Kapi', tip: 'ostalo', cijena: 50, stanjeUSkladistu: 30};


    let artikli = [];
    return new Promise((resolve, reject) => {
        artikli.push(db.artikal.create({naziv: artikal1.naziv, tip: artikal1.tip, cijena: artikal1.cijena, stanjeUSkladistu: artikal1.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal2.naziv, tip: artikal2.tip, cijena: artikal2.cijena, stanjeUSkladistu: artikal2.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal3.naziv, tip: artikal3.tip, cijena: artikal3.cijena, stanjeUSkladistu: artikal3.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal4.naziv, tip: artikal4.tip, cijena: artikal4.cijena, stanjeUSkladistu: artikal4.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal5.naziv, tip: artikal5.tip, cijena: artikal5.cijena, stanjeUSkladistu: artikal5.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal6.naziv, tip: artikal6.tip, cijena: artikal6.cijena, stanjeUSkladistu: artikal6.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal7.naziv, tip: artikal7.tip, cijena: artikal7.cijena, stanjeUSkladistu: artikal7.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal8.naziv, tip: artikal8.tip, cijena: artikal8.cijena, stanjeUSkladistu: artikal8.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal9.naziv, tip: artikal9.tip, cijena: artikal9.cijena, stanjeUSkladistu: artikal9.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal10.naziv, tip: artikal10.tip, cijena: artikal10.cijena, stanjeUSkladistu: artikal10.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal11.naziv, tip: artikal11.tip, cijena: artikal11.cijena, stanjeUSkladistu: artikal11.stanjeUSkladistu}))
        artikli.push(db.artikal.create({naziv: artikal12.naziv, tip: artikal12.tip, cijena: artikal12.cijena, stanjeUSkladistu: artikal12.stanjeUSkladistu}))
    }).catch((error) =>{
        console.log("Greska" + error);
    })
}