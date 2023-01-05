function distributeGifts(packOfGifts, reindeers) {
  const packWeigth = packOfGifts.reduce((acc,value) => acc + value.length,0)
  const maxWeigth = reindeers.reduce((acc,value) => acc + 2*value.length,0)
  
  
  return Math.floor(maxWeigth/packWeigth)
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers))