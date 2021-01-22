let img=document.getElementById("img");

function changeRed(){
  document.getElementById("img").src="./img/vermelho.png";
}

function changeYellow(){
    document.getElementById("img").src="./img/amarelo.png";
}

function changeGreen(){
  document.getElementById("img").src="./img/verde.png";
}


function autoplay(){
  setTimeout(() => { 
    changeRed()
    
  }, 1000);

  setTimeout(() => {
    changeGreen()
  }, 2000);

  setTimeout(() => {
    
  changeYellow()
  }, 3000);

  setTimeout(() => {
    autoplay()
    
  }, 4000);
}



