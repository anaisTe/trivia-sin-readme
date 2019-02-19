
window.onload=function(){


    function agregarNombre(){

        const data = document.getElementById("name1").value;
        
        user = document.getElementById("usuario");
        user.innerHTML = "Bienvenida " + data;
        document.getElementById("name").style.display = "none";
        document.getElementById("mi").style.display = "block";
        
    }

    document.getElementById("data1").addEventListener("click", function(){
        agregarNombre();
        
    });

   

  }



  let mostrarResultados = document.getElementById('temaPrincipal');
  let respuestasCorrectas = document.getElementById('respuestasCorrectas');
  let respuestasIncorrectas= document.getElementById('respuestasIncorrectas');  
  function agregarBoton1() {
    /* FIRST QUESTION */
      let primeraPregunta = parseInt(prompt("1.¿Quièn fue el creador de javascript? \n 1. Timoty Owens \n 2. Brendan Eich \n 3. Ritchie Newman"));
      if (primeraPregunta == 2) {
        respuestasCorrectas.innerHTML += "1.¿Quièn fue el creador de javascript? <br> <strong>Respuesta correcta:</strong> Brendan Eich";
      } else {
        respuestasIncorrectas.innerHTML += "1.¿Quièn fue el creador de javascript? <br> <strong>Marco incorrectamente la respuesta era:</strong> Brendan Eich";
      }
      /* SECOND QUESTION */ 
      let segundaPregunta = prompt("2.¿Quièn es el presidente actual de EEUU? \n 1. Barack Obama \n 2. George J. Bush \n 3. Donald Trump");
      if (segundaPregunta == 3) { 
        respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 2.¿Quièn es el presidente actual de EEUU? <br> <strong>Respuesta correcta:</strong> Donald Trump";
      } else {
        respuestasIncorrectas.innerHTML += "<br> 2.¿Quièn es el presidente actual de EEUU? <br> <strong>Marco incorrectamente la respuesta era:</strong>Donald Trump";
      }
       /* THIRD QUESTION */ 
       let terceraPregunta = prompt("3.¿Cual es la capital de Australia? \n 1. Camberra \n 2. Sidney \n 3. Austria");
       if (terceraPregunta == 1) { 
         respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br> 3.¿Cual es la capital de Australia? <br> <strong>Respuesta correcta:</strong> Camberra";
       } else {
         respuestasIncorrectas.innerHTML += "<br> <br>3.¿Cual es la capital de Australia? <br> <strong>Marco incorrectamente la respuesta era:</strong>Camberra";
       }
    }


    function agregarBoton2() {
         /* FIRST QUESTION */
          let primeraPregunta = parseInt(prompt("1.¿En que año Shakira realizò la mùsica 'Waka-Waka'? \n 1. 2005 \n 2. 2018 \n 3. 2014"));
          if (primeraPregunta == 3) { 
            respuestasCorrectas.innerHTML += "1.¿En que año Shakira realizò la mùsica Waka Waka? <br> <strong>Respuesta correcta:</strong> 2014";
          } else {
            respuestasIncorrectas.innerHTML += "1.¿En que año Shakira realizò la mùsica Waka Waka? <br> <strong>Marco incorrectamente la respuesta era:</strong> 2014";
          }
          /* SECOND QUESTION */
          let segundaPregunta = prompt("2.¿En que año se estrenò la pelicula 'cambio de hàbito'? \n 1. 1990 \n 2. 1993 \n 3. 1994");
          if (segundaPregunta == 2) { 
            respuestasCorrectas.innerHTML += respuestasCorrectas.innerHTML + "<br> 2.¿En que año se estrenò la pelicula 'cambio de hàbito'? <br> <strong>Respuesta correcta:</strong> 1993";
          } else {
            respuestasIncorrectas.innerHTML += "<br><br>2.¿En que año se estrenò la pelicula 'cambio de hàbito'? <br> <strong>Marcacion incorrecta la respuesta correcta era:</strong> 1993";
          }
          /* THIRD QUESTION */ 
          let terceraPregunta = prompt("3.¿Que genero de mùsica toca la banda 'Red Hot Chilly Pepper'? \n 1. Pop \n 2. Alternativo-Punk \n 3. Jazz");
          if (terceraPregunta == 2) { 
            respuestasCorrectas.innerHTML = respuestasCorrectas.innerHTML + "<br><br> 3.¿Que genero de mùsica toca la banda 'Red Hot Chilly Pepper? <br> <strong>Respuesta correcta:</strong> Rock Alternativo-Punk";
          } else {
            respuestasIncorrectas.innerHTML += "<br></br>3.¿Que genero de mùsica toca la banda 'Red Hot Chilly Pepper'? <br> <strong>Marco incorrectamente la respuesta era:</strong>Rock Alternativo-Punk";
          }
    }
    
    
    document.getElementById("element1").addEventListener("click", function(){
      agregarBoton1();
      mostrarResultados.style.display = '';
  })

  function limpiar() {
    respuestasCorrectas.innerHTML = "";
    respuestasIncorrectas.innerHTML = "";
    mostrarResultados.style.display = 'none';
    }
  

    document.getElementById("element2").addEventListener("click", function(){
      agregarBoton2();
      mostrarResultados.style.display = '';
  })

  

    