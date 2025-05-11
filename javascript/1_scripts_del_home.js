/* Javascript - JS */
/* Aqui estan todas las aplicaciones, efectos animaciones validaciones de formularios ...*/
/* Es decir que al tocar esta pared prenda un bombillo...y asi con todas sus interacciones  */ 
/*aqui encontraremos "todo" en funciones, con condicionales, whiles, ifs...que se ejecutaran cuando "un boton" se presione
o cuando algo pase*/
// Variable global para poder accederla desde ambas funciones

console.log("hola desde java");

document.getElementById("nombre").addEventListener("keyup",mostrarnombre);

function mostrarnombre(e) 
{
  var cadena=e.target.value;
  //tambien se podia hacer asi
  // var cadena =document.getElementById("nombre").value;

  if(cadena.length==0) // si al levantar la tecla no hay nada ej:al borrar
  {
    document.getElementById("sugerencia").innerHTML="";
    return;
  }
  else
  {
      // Paso 3: 
      // creo mi objeto xmlhttprequest
      // que me va a permitir pedirle datos al servidor y ya no al cliente(navegador)
      var xhr=new XMLHttpRequest(); 

      // Paso 7: 
      // definimos la funcion onreadystatechange para que cada que 
      // cambie el estado de tramite o readyState de la solicitud 
      // del 0 a 1, del 1 al 2 de 2 a 3 y de 3 a 4
      // ejecuté esta funcion
      // si no carga bien, es porque en algunos navegadores 
      // esta funcion  deberia antes del open y del send()
      xhr.onreadystatechange=function() 
      {
        // Paso 8: Si el estado del tramite o readyState es 4
        // osea si el servidor recibió la solicitud, la tramito y 
        // tiene una respuesta y si el status es 200, osea si esa 
        // respuesta es que encontró el archivo
        if(this.readyState===4 && this.status===200)
        {
          // Paso 9: 
          // Defino que debo hacer con la solicitud que hice.
          // en este caso mi solicitud fue abrir el archivo: catalogo.xml
          // y lo que quiero hacer con ese texto que abrí y que ahorita  
          // lo tiene mi objeto xhr, es imprimirlo 
          // coloco xhr.responsexml  si fuera un .txt pondria xhr.responsetext
          
            document.getElementById("sugerencia").innerHTML=this.responseText;
            // envio por parametro el objeto que 
            // tiene la lista asignada dentro osea el objeto httprequest que 
            // cree y que guardo el xml que abrí
        }
      };
        // Paso 5: 
      // Hacemos la request o solicitud: en este caso de que se abra
      // el archivo externo datos.txt 
      // que se agreguen a la url ?
      xhr.open("GET","../arraynombres.php?nombre="+cadena,true);


      // Paso 6: 
      // Enviamos la solicitud al servidor, va sin parametro 
      // porque usamos get 
      xhr.send(); 
      
  }
}











// Paso 2: 
// copio el boton a java y le agrego un escuchador de eventos
// para que cuando hagan clic llame  a la funcion cambia contenido
//***document.getElementById("botonquecargacatalogo").addEventListener("click",funcioncargarcatalogo)


// Paso 4: 
// creo la funcion cambia contenido.
//***function funcioncargarcatalogo()
//***{

  

//***}
