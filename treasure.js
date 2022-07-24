var rtreasure = Math.floor(Math.random() * 8)

console.log(rtreasure)
var bomb = Math.floor(Math.random() * 8)
if (rtreasure === bomb) {
  rtreasure = Math.floor(Math.random() * 8)
}



const treasure = (location) => {
  if(rtreasure === location) {
    document.getElementById(location).innerHTML = "🐉"
    alert("GOOD JOB! YOU WIN!")
  } else if(bomb === location) {
    document.getElementById(location).innerHTML = "💣"
    alert("BOOOO YOU LOSE!!!!")
  } else {
    document.getElementById(location).innerHTML = "🐔"
  }
}
