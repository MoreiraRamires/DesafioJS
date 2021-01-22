
let img = document.getElementById("lamp")

function turnOn(){

  if( img.className == "broken") { 
      console.log( "Lampada está quebrada")
     } 
     else {

      document.getElementById("lamp").src="./assets/lampon.jpg"

      document.getElementById("lamp").className="turnOn"
    }

  
  }


function turnOff(){

  if( img.className == "broken") { 
      console.log( "Lampada está quebrada") 
    }
     else {

      document.getElementById("lamp").src="./assets/lampoff.jpg"

      document.getElementById("lamp").className="turnOff" 
}
}

function broken(){
  document.getElementById("lamp").src="./assets/lampbroken.jpg"

  document.getElementById("lamp").className="broken"
}







