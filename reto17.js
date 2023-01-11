function carryGifts(gifts, maxWeight) {
  let coat = []
  let answer = []
  for(let gift of gifts) {
    if(gift.length <= maxWeight){
      coat.push(gift)
      if(coat.map(x => x.length).reduce((acc,value) => acc+= value,0) > maxWeight){
        coat.pop()
        answer.push(coat.join(" "))
        coat = [gift]
      }
    }
  }
  if(coat.map(x => x.length).reduce((acc,value) => acc+= value,0) <= maxWeight && coat.length > 0){
    answer.push(coat.join(" "))
  }
  return answer
}

console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2))
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7))
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4))
console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6))