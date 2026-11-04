
function generisiPlan(n, k) {

    for (let i = 1; i <= n; i++) {

        console.log("Ponavljanje " + i);

        if (i % k === 0 && i < n) {
            console.log("Pauza!");
        }

    }

    console.log("Plan zavrsen!");

}

// Unos podataka
let unosN = prompt("Unesite broj ponavljanja:");
let unosK = prompt("Unesite interval za pauzu:");

// Provjera da li je unos otkazan ili prazan
if (unosN === null || unosK === null ||
    unosN.trim() === "" || unosK.trim() === "") {

    alert("Unos je otkazan ili je prazan!");

}
else {

    let n = Number(unosN);
    let k = Number(unosK);

    // Provjera ispravnosti unosa
    if (Number.isInteger(n) && n > 0 &&
        Number.isInteger(k) && k > 0) {

        generisiPlan(n, k);

    }
    else {
        alert("Unesite pozitivne cijele brojeve!");
    }

}
