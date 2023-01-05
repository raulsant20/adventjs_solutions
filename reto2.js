function countHours(year, holidays) {
  let hours = 0

  for(let date of holidays){
    let day = new Date(date + "/" + year).getDay()
    if(day > 0 && day < 6){
      hours += 2
    }
  }
  
  return hours
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25']

console.log(countHours(year, holidays))