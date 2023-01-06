function selectSleigh(distance, sleighs) {
  const check = sleighs.filter(x => x.consumption * distance <= 20)
  check.unshift({name:null})
  return check.pop().name
}

const distance = 30
const sleighs = []

console.log(selectSleigh(distance, sleighs))