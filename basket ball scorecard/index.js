let btn= document.getElementById("change");
let value=Number(btn.textContent);
let guest=document.getElementById("gchange");
let secondValue=Number(guest.textContent);



function add1(){  
    value+=1;
    btn.textContent=value;
}
function add2(){  
    value+=2;
    btn.textContent=value;
}
function add3(){  
    value+=3;
    btn.textContent=value;
}

function gadd1(){  
    secondValue+=1;
    guest.textContent=secondValue;
}
function gadd2(){  
    secondValue+=2;
    guest.textContent=secondValue;
}
function gadd3(){  
    secondValue+=3;
    guest.textContent=secondValue;
}
function start(){
 value=0;
 secondValue=0;
 guest.textContent=secondValue;
 btn.textContent=value;   
}