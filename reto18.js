function dryNumber(dry, numbers) {
  let answer = []
  for(let i = 1; i <= numbers; i++){
    let verify = i.toString().split("")
    if(verify.includes(dry.toString())){
      answer.push(i)
    }
  }
    return answer
}

console.log(dryNumber(1, 15))
console.log(dryNumber(2, 20))