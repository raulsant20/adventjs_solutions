function countTime(leds) {
  const joinEdges = leds[0] !== 1 && leds[leds.length-1] !== 1
  let splited = leds.reduce((acc,value) => acc += value,"").split("1")
  if (joinEdges) {
    splited[0]+=splited[splited.length-1]
    splited.pop()
  }
  return Math.max(...splited.map(x => x.length))*7
}

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds))

console.log(countTime([0, 0, 0, 1]))
console.log(countTime([0, 0, 1, 0, 0]))

