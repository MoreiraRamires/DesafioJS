
  let name = document.getElementById('name').value;
  let height= document.getElementById( 'height').value;
  let weight= document.getElementById( 'weight').value;
 
  let mensage= document.getElementById('result__msg');

function calc() {

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



