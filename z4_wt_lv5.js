// Zadatak 4

let brojac = (function () {
  let vrijednost = 0;
  return {
    dodaj: function () {
      return ++vrijednost;
    },
    resetuj: function () {
      vrijednost = 0;
    }
  };
})();

console.log(brojac.dodaj()); // 1
console.log(brojac.dodaj()); // 2
console.log(brojac.dodaj()); // 3
brojac.resetuj();
console.log(brojac.dodaj()); // 1