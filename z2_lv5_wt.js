// Zadatak 2

// --- Originalni modul (ranjiv) ---
function napraviProfilOriginal() {
  let profil = { naziv: "Početni" };
  return {
    pregled: function () { return profil; },
    postaviNaziv: function (n) { profil.naziv = n; }
  };
}

// 1. Izmjena mimo predviđene metode
const p1 = napraviProfilOriginal();
const referenca = p1.pregled();
referenca.naziv = "Hakovano";
console.log(p1.pregled()); // { naziv: 'Hakovano' }  <- privatno stanje promijenjeno!
// Razlog: pregled() vraća REFERENCU na isti objekat koji čuva modul.

// 2. i 3. Popravljen modul + dodatno primitivno svojstvo (godina)
function napraviProfil() {
  let profil = { naziv: "Početni", godina: 2024 };
  return {
    pregled: function () {
      // vraćamo NOVI objekat sa kopiranim primitivnim vrijednostima
      return { naziv: profil.naziv, godina: profil.godina };
    },
    postaviNaziv: function (n) { profil.naziv = n; },
    postaviGodinu: function (g) { profil.godina = g; }
  };
}

const p2 = napraviProfil();
const kopija = p2.pregled();
kopija.naziv = "Hakovano";
kopija.godina = 1;
console.log(p2.pregled()); // { naziv: 'Početni', godina: 2024 }  <- nepromijenjeno

p2.postaviNaziv("Novi naziv");
console.log(p2.pregled()); // { naziv: 'Novi naziv', godina: 2024 }

/*
Razlika između privatnosti varijable i izlaganja reference:
- Closure čini varijablu `profil` privatnom: izvana se ne može direktno čitati
  niti dodijeliti joj se nova vrijednost.
- Ali varijabla je samo "kutija" koja sadrži referencu na objekat. Ako metoda
  vrati tu referencu, pozivalac dobija pristup ISTOM objektu i može mijenjati
  njegova svojstva, iako nikad nije vidio varijablu `profil`.
- Zato modul treba vraćati kopiju (novi objekat s primitivnim vrijednostima).
  Napomena: ovo je plitka kopija; za ugniježđene objekte treba posebno
  razmotriti kopiranje.
*/