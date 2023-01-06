function checkStepNumbers(systemNames, stepNumbers) {
  let sequence = {}
  for(let i=0; i < stepNumbers.length; i++){
    let name = systemNames[i]
    if(!sequence[name]){
      sequence[name] = []
      sequence[name].push(stepNumbers[i])
    }
    else {
      if (sequence[name][sequence[name].length-1] < stepNumbers[i]){
        sequence[name].push(stepNumbers[i])
      }
      else {
        return false
      }
    }
  }   
  return true  
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) // true
// console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])) //false