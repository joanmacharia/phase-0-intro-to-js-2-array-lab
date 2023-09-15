// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats
}

function appendCat(name){
    const appendCat = [...cats, name]
    return appendCat
}

function prependCat(name){
    const prependCat = [name, ...cats]
    return prependCat
}

function removeLastCat(){
    const removeLastCat = cats.slice(0, cats.length-1)
    return removeLastCat
}

function removeFirstCat(){
    const removeFirstCat = cats.slice(1)
    return removeFirstCat
} 