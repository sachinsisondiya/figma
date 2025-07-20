/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inpVal = document.getElementById("inp")
let cBtn= document.getElementById("btn")
let lenToFeet = document.getElementById("len-to-feet")

let kiloToPounds = document.getElementById("mass")

let literToGall = document.getElementById("vol")
const m= 3.281
const l=0.264
const kg=2.204

cBtn.addEventListener("click" ,function(){
    let val = Number(inpVal.value) 
      convert( val,"meter", "feet" , m,lenToFeet)
      convert( val,"kilos", "pound" , kg ,kiloToPounds) 
      convert( val,"meter", "feet" , l,literToGall)    
})

function convert(val, mtr ,ft , m , con){
   let meterToFeet = val * m
   let feetToMeter = val/m
  
    let desc = `<p class="smpara">${val} ${mtr} = ${meterToFeet.toFixed(3)} ${ft}
    | ${val} ${ft} = ${feetToMeter.toFixed(3)} ${mtr}<p>`
    con.innerHTML += desc
}
