function generisiArtikal(artikal) {
    let a = ` <div class="col-lg-3 col-md-6 col-sm-6" >
    <div class="product__item">
                        <div class="product__item__pic" style="background-image: url(${artikal.url}); background-repeat: no-repeat;background-size: contain">
                            <div class="product__label">
                                <span>${artikal.tip}</span>
                            </div>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${artikal.naziv}</a></h6>
                            <div class="product__item__price">${artikal.cijena}</div>
                            <div class="cart_add">
                                <a href="#" onclick="dodajUKorpu(${artikal.id})">Dodaj u korpu</a>
                            </div>
                        </div>
                        </div>
                    </div>`
    return a;
}
function dodajUKorpu(artikal) {
    if(!window.localStorage.korpa){
        window.localStorage.korpa = "";
    }
    window.localStorage.korpa += `${artikal},`;


}

function ucitajArtikle() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/artikli", true);
    ajax.send();
    ajax.onreadystatechange = function () {// Anonimna funkcija
        if (ajax.readyState == 4 && ajax.status == 200) {
            let container = document.getElementById("artikli");
            container.innerHTML = "";
            JSON.parse(ajax.response).forEach(artikal => {
                container.innerHTML += generisiArtikal(artikal);
            });
        }
        if (ajax.readyState == 4 && ajax.status == 404) {
            alert("greska prema bazi")
        }
    }
}

window.onload = function () {
    ucitajArtikle();
}
