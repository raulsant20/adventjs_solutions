function createCube(size) {
  let cube = []
  let i = 0
  while(size > 0){
    let down = " ".repeat(i) + "\\/".repeat(size) + "_/".repeat(size+i)
    cube.push(down)
    let up = " ".repeat(i) + "/\\".repeat(size) + "_\\".repeat(size+i)
    cube.splice(0,0,up)
    size--
    i++
  }
  return cube.join("\n")
}

const cube = createCube(3)
const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)

console.log(cube)
console.log(cubeOfOne)
console.log(cubeOfTwo)