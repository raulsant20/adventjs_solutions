function decorateTree(base) {
  let answer = [base]
  for(let i=0; i < Math.floor(base.length/2); i++){
    let nextRow = []
    const check = answer[answer.length-1-i].split(" ")
    for(let i=1; i < check.length; i++ ){
      let RBP = ["R", "B", "P"]
      if(check[i] === check[i-1]){
        nextRow.push(check[i])
      }
      else {
        nextRow.push(RBP.filter(x => x!==check[i] && x!==check[i-1]))
      }
    }
    answer.splice(0,0,nextRow.join(" "))
  }
  return answer
}

console.log(decorateTree('B P R P'))
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B'))