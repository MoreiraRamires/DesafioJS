function check(){
 
   let born = document.getElementById("born").value;
   let date= new Date();
   let text = document.getElementById("text");

    let year = date.getFullYear();

    if( born>= year || born==""){ window.alert("confira os dados")

    } else{
    let idade=year-born 
   text.innerHTML= `Olá, a idade é ${idade} anos.`}


  

   var radios = document.getElementsByName("sex");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            
         let img= document.getElementById("img").innerHTML=`${radios[i].value}`
        }
    }
}


