function wrapping(gifts) {
  let wrappedGifts = []
  for(let gift of gifts){
    let top = "*".repeat(gift.length+2)
    wrappedGifts.push(`${top}\n*${gift}*\n${top}`)
  }
  return wrappedGifts
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)