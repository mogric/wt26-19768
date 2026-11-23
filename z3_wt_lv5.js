// Zadatak 3

function napraviResurs(pocetnaKolicina) {
  if (typeof pocetnaKolicina !== "number" || !Number.isFinite(pocetnaKolicina) || pocetnaKolicina < 0) {
    throw new RangeError("Početna količina mora biti nenegativan broj.");
  }

  let stanje = pocetnaKolicina; // privatna varijabla

  return {
    // vraća true ako je potrošnja izvršena, false ako je odbijena
    potrosi: function (kolicina) {
      if (typeof kolicina !== "number" || !Number.isFinite(kolicina) || kolicina < 0 || kolicina > stanje) {
        return false;
      }
      stanje -= kolicina;
      return true;
    },
    preostalo: function () {
      return stanje;
    }
  };
}

// Dvije nezavisne instance
const papir = napraviResurs(100);
const minute = napraviResurs(30);

console.log(papir.preostalo()); // 100
console.log(minute.preostalo()); // 30

console.log(papir.potrosi(40)); // true
console.log(papir.preostalo()); // 60
console.log(minute.preostalo()); // 30 (nije promijenjeno)

console.log(minute.potrosi(50)); // false (više od raspoloživog)
console.log(minute.potrosi(-5)); // false (negativna količina)
console.log(minute.preostalo()); // 30

console.log(minute.potrosi(30)); // true
console.log(minute.preostalo()); // 0
console.log(papir.preostalo()); // 60 (druga instanca netaknuta)

// Direktan pristup stanju nije moguć
console.log(papir.stanje); // undefined