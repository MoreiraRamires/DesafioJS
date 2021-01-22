  let name,height,weight
  let mensage= document.getElementById('result__msg');

function calc() {
   name = document.getElementById('name').value;
   height= document.getElementById( 'height').value;
   weight= document.getElementById( 'weight').value;
 
   
  let result = (weight/ ( height * height)).toFixed(2);

  
  mensage.innerHTML= `${name}, seu IMC é ${result}`;
  
  
}

function clean() {
  if(document.getElementById(name)!="" || document.getElementById(height) || document.getElementById( weight)) {
  document.getElementById('name').value="";
  document.getElementById('height').value="";
  document.getElementById('weight').value="";

  
}
mensage.innerHTML=""
}



