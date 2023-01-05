function checkPart(part) {
  let counter = 0
  part = part.split("")
  const n = part.length

  for(let i=0, j=n-1; i<parseInt(n/2)-1; i++){
    if(part[i]===part[j-i]) continue
    if(part[i]===part[j-i-1] && counter < 2){
      j--
      counter++
    }
    else if(part[i+1]===part[j-i] && counter < 2){
      i++
      counter++
    }
    else return false
  }
  return counter < 2
}

console.log(checkPart("uwu"))
console.log(checkPart("miidim"))
console.log(checkPart("midu"))