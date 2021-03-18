function ucitavanjeIzKorpe() {
   // document.getElementById("result").innerHTML = localStorage.getItem("id");
    let korpa = document.getElementById("artikal");
    console.log(window.localStorage.getItem(korpa.id));
    korpa.innerHTML = window.localStorage.getItem("korpa")
}
function generisiNarudzbu(){
    let a= `   <grid-container id="artikal">
        <div class="slika"> <img></div>
        <div class="tekst">${artikal.naziv}</div>
    
    </grid-container> <br>
    `
}
window.onload = ucitavanjeIzKorpe();