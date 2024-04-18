const cats=["Milo", "Otis", "Garfield",]

function destructivelyAppendCat(name){
  cats.push(name)
}

function destructivelyPrependCat(name){
  cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
cats.pop()
}

function destructivelyRemoveFirstCat(){
  cats.shift()
}


function appendCat(name){
  //return[...cats, name]
const newCatsArray = [...cats]  
newCatsArray.push(name)
return newCatsArray
}

function prependCat(name){
  //return[name, ...cats]
const newCatsArray = [...cats]
newCatsArray.unshift(name)
return newCatsArray
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}