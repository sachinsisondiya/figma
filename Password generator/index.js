const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let firstPassword= document.getElementById("firstPassword")
let secondPassword = document.getElementById("secondPassword")
let passwordLength=document.getElementById("passwordLength")
console.log(passwordLength.textContent)
let input = document.getElementById("passwordLength")
console.log(input)


function generatePassword(){
   input.addEventListener("input",function () {
      console.log(input.value)
      
    })
    
     firstPassword.value="";
     secondPassword.value="";
    for(let i=0;i<input.value;i++){
      let generate =Math.floor(Math.random()*characters.length)
    
     
       console.log(firstPassword.textContent)
       secondPassword.value += characters[generate] 
       secondPassword.style.userSelect="none"
           
      //   console.log(secondPassword.textContent)   
    }
    
    for(let i=0;i<input.value;i++){
        let generate =Math.floor(Math.random()*characters.length)
          firstPassword.value += characters[generate]
    }
  input.value=""
  
   firstPassword.addEventListener("click" ,function (){
    firstPassword.select()
     document.execCommand("copy");
   })
} 






