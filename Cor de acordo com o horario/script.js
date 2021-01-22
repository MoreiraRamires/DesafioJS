
function load(){
  let text__date = document.getElementById("text__date");
  let text__hour= document.getElementById("text__hour");
  let img = document.getElementById("img");
  

  let data = new Date();
    let hora    = data.getHours();          // 0-23
    
    let min     = data.getMinutes();        // 0-59

  text__date.innerHTML = ` Hoje é ${data.getDate()}/ ${data.getMonth()} /${data.getFullYear()}`;
  text__hour.innerHTML= ` Horário: ${hora} : ${min}`;


 if( hora>=0 && hora < 12) {
    img.src="./images/dia.jpg";
    document.body.style.backgroundColor="rgba(89, 89, 243, 0.2)"

  } else if (hora >= 12 && hora<= 18) { 
    img.src="./images/tarde.jpeg";
    document.body.style.backgroundColor="rgba(89, 89, 243, 0.637)"

  }
  else {
    img.src="./images/noite.jpeg";

    document.body.style.backgroundColor="rgba(89, 89, 243, 1)"
  }

  
}



