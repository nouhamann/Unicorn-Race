"use strict"

let uniDivs = []
let uniXs = []
let colors = "Brown, Red, Orange, Yellow, Green, Blue, Purple, Violet, Pink, Gray".split(",")
const numberOfUnicorns = 10 

let i = 0
while (i<numberOfUnicorns){
    uniDivs[i] = document.createElement("div")
    document.body.appendChild(uniDivs[i])
    uniDivs[i].classList.add("unicorn")
    uniDivs[i].style.top = i * 8 + "%"
    uniDivs[i].style.backgroundColor = colors[i]

    uniXs[i] = 0
    i++
}
let start=document.getElementById("start")
start.addEventListener("click",startGame)

let reset=document.getElementById("reset")
reset.addEventListener("click",resetUnicorns)

// requestAnimationFrame(moveUnicorns)

function startGame(){
    requestAnimationFrame(moveUnicorns) 
}

function resetRace(){
    let i = 0
    while(i<numberOfUnicorns){
        uniXs[i]=0 + "%"
        i++
    }
}
let paragraph=document.getElementById("text")
document.body.appendChild(paragraph)

function moveUnicorns(){
    let i = 0
    while(i<numberOfUnicorns){
        uniDivs[i].style.left = uniXs[i] + "%"
        uniXs[i] += Math.random()

        if (uniXs[i]>=90){
            paragraph.innerHTML=`${colors[i]} wins the race`
            resetRace()
        }
        i++
    }
    

    requestAnimationFrame(moveUnicorns)


}

function resetUnicorns(){
    location.reload()
}
