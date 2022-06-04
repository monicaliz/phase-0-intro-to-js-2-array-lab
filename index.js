// Write your solution here!

// cats
const cats = ["Milo", "Otis", "Garfield"]

//array functions
//destructivelyAppendCat(name) --  appends a cat to the end of the cats array -- push method
function destructivelyAppendCat(name) {
    cats.push(name);
}

//destructivelyPrependCat(name) -- prepends a cat to the beginning of the cats array -- unshift
function destructivelyPrependCat(name){
    cats.unshift(name)
}

//destructivelyRemoveLastCat() -- removes the last cat from the cats array -- pop
function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

//destructivelyRemoveFirstCat() -- removes the first cat from the cats array -- shift
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

//appendCat(name) -- appends a cat to the cats array and returns a new array, leaving the cats array unchanged -- spread operator 
function appendCat(name){
    return [...cats, (name)]
}

//prependCat(name) -- prepends a cat to the cats array and returns a new array, leaving the cats array unchanged -- spread operator
function prependCat(name){
    return [(name), ...cats]
}

//removeLastCat() -- removes the last cat in the cats array and returns a new array, leaving the cats array unchanged -- slice
function removeLastCat () {
    return cats.slice(0, cats.length - 1)
}

//removeFirstCat() -- removes the first cat from the cats array and returns a new array, leaving the cats array unchanged -- slice
function removeFirstCat () { 
    return cats.slice(1)
}