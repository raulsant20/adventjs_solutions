function checkJump(heights) {
  let values = []
  let answer = true

  const checkingJumps = () => {
    for(let i=1; i<heights.length; i++){
      if(heights[i]>heights[i-1]){
        values.push(-1)
      }
      
      else if(heights[i]<heights[i-1]){
        values.push(1)
      }
    }
  }

  checkingJumps()

  const check = values.length === 0 || !values.includes(1) || !values.includes(-1)
  if(check) return false

  const isSorted = () => {
    for(let i=1; i < values.length; i++){
      if(values[i]<values[i-1]) return false
    }
    return true
  }

  answer = isSorted()
  return answer
}

let heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights))

heights = [1, 7, 3, 5]
console.log(checkJump(heights))