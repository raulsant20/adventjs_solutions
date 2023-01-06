function sortToys(toys, positions) {
  let array = toys.map(x=>{
    let obj = {};
    obj.toy = x;
    obj.number = positions[toys.indexOf(x)]
    return obj
  })
  return array.sort((a,b) => a.number - b.number).map(x => x.toy)
}

const toys = ['ball', 'doll', 'car', 'puzzle']
const positions = [2, 3, 1, 0]

console.log(sortToys(toys, positions))
// ['puzzle', 'car', 'ball', 'doll']

const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
const morePositions = [8, 6, 5, 7, 9]

console.log(sortToys(moreToys, morePositions))