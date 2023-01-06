function getGiftsToRefill(a1, a2, a3) {
  let answer = []
  for(let i=0; i<a1.length; i++){
    if(!a2.includes(a1[i]) && !a3.includes(a1[i]) && !answer.includes(a1[i])) answer.push(a1[i])
  }
  for(let i=0; i<a2.length; i++){
    if(!a1.includes(a2[i]) && !a3.includes(a2[i]) && !answer.includes(a2[i])) answer.push(a2[i])
  }
  for(let i=0; i<a3.length; i++){
    if(!a1.includes(a3[i]) && !a2.includes(a3[i]) && !answer.includes(a3[i])) answer.push(a3[i])
  }
  return answer
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

const gifts = getGiftsToRefill(a1, a2, a3)

console.log(gifts)
