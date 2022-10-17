const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name); // DESTRUCTIVELY adds something to the end of an array.
}

function destructivelyPrependCat(name) {
    cats.unshift(name); // DESTRUCTIVELY adds something to the beginning of an array.
}

function destructivelyRemoveLastCat(name) {
    cats.pop(); // DESTRUCTIVELY removes the last element of an array.
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(); // DESTRUCTIVELY removes the first element of an array.
}

function appendCat(name) {
    return ([...cats, name]); // Adds an element to the end of an array.
}

function prependCat(name) {
    return ([name, ...cats]); // Adds an element to the beginning of an array.
}

function removeLastCat(name) {
    return (cats.slice(0, -1)); // Returns everything except the last element of the array.
}

function removeFirstCat(name) {
    return (cats.slice(1)); // Returns everything except the first element of the array.
}