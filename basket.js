// // let home=0
// // let guest=0
// let home = document.getElementById("home-result").textContent
// let guest = document.getElementById("guest-result").textContent


// function addHomme1() {
//      let count=0
//      home.textContent=45
//      console.log(home)
   
     
// }
// console.log(home)

let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("home-result")
let guestScoreEl = document.getElementById("guest-result")




function add1Home(){
    homeScore+=1
    homeScoreEl.textContent=homeScore

}
    
function add2Home(){
      homeScore+=2
    homeScoreEl.textContent=homeScore
}
function add3Home(){
      homeScore+=3
    homeScoreEl.textContent=homeScore
}


function add1away(){
     guestScore+=1
     guestScoreEl.textContent=guestScore
}

function add2away(){
     guestScore+=2
     guestScoreEl.textContent=guestScore
}

function add3away(){
     guestScore+=3
     guestScoreEl.textContent=guestScore
}