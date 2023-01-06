function fitsInOneBox(boxes) {
  let answer = true
  const sortedBoxes = boxes.sort((a,b) => b.l - a.l)
  for(let i=0; i<sortedBoxes.length-1; i++){
    if(sortedBoxes[i].l <= sortedBoxes[i+1].l){
      return false
    }
    else if(sortedBoxes[i].w <= sortedBoxes[i+1].w){
      return false
    }
    else if(sortedBoxes[i].h <= sortedBoxes[i+1].h){
      return false
    }
  }
  return answer
}

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 }
]))

let boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]
console.log(fitsInOneBox(boxes))

boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]
console.log(fitsInOneBox(boxes))

