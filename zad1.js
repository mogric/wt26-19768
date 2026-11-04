
// Funkcija za procjenu trajanja cekanja korisnika
function procijeniCekanjeKorisnika(vrijednost) {

    if (vrijednost <= 5) {
        return "Kratko cekanje";
    }
    else if (vrijednost <= 10) {
        return "Umjereno cekanje";
    }
    else {
        return "Dugo cekanje";
    }

}

// Unos podatka
let unos = prompt("Unesite trajanje cekanja u minutama:"); //iskoci prozor za unos, ako ne uneau null

// Provjera unosa
if (unos === null) {

    alert("Unos je otkazan.");

}
else if (unos.trim() === "") {

    alert("Niste unijeli vrijednost!");

}
else {

    let vrijednost = Number(unos); //prompt uvijekuje string, pa ga pretvaramo u broj jer to ocekujemo

    if (!Number.isFinite(vrijednost) || vrijednost < 0) {

        alert("Neispravan unos! Unesite nenegativan broj.");

    }


        let rezultat = procijeniCekanjeKorisnika(vrijednost);

        alert("Rezultat procjene: " + rezultat);


}
