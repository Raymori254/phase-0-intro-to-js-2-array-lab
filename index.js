const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  return [...cats, name];
}
function prependCat(name) {
  return ["Arnold", ...cats];
}
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat() {
  return cats.slice(1);
}
console.log(appendCat("Broom"));
console.log(prependCat("Arnold"));
console.log(removeLastCat());
console.log(removeFirstCat());
console.log(cats);