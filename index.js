// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() { 
    cats.push("Ralph");
}

function destructivelyPrependCat() { 
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

const addCat = [...cats, "Broom"];
function appendCat() {
    cats.slice
    return addCat;
}

const frontCat = ["Arnold", ...cats];
function prependCat(){
    cats.slice
    return frontCat;
}

const lastCat = cats.slice(0,cats.length - 1);
function removeLastCat(){
    cats.slice
    return lastCat;
}

const firstCat = cats.slice(1);
function removeFirstCat(){
    cats.slice
    return firstCat
}