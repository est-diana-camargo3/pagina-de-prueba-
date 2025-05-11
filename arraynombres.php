<?php
  // PHP
  //Array de nombres
  $a=array("Sara","Imanol","Dani","Antonio","David","Igor","Naroa","Cristian","Joseba","Angel","Alex","Dumitru","Mikel","Ivan","Martin");


  //Tomamos el  valor del input procedente de la URL
  // Capturará el valor que tenga la variable nombre 
  //tambien se puede hacer asi $nombre=$_GET
   $nombre=$_REQUEST["nombre"]; // en php las variables se definen asi
   $sugerencia=""; // la definimos vacia
  if($nombre!=="")
  {
    //pasamos a minusculas
    $nombre=strtolower($nombre);
    //capturamos la longitud del nombre 
    $long =strlen($nombre);
    // tenemos que ir viendo cada elemento del array apra compararlo con 
    //la cadena que tenemos aca 
    // del array a $nom
    //cada elemento del array lo pasa a $nom en cada iteracion 
    foreach($a as $nom)
    {
        //comparar 2 cadenas
        //si coincide la cadena pasada con los primeros caracteres de algun 
        // elemento del array
        if(stristr($nombre,substr($nom,0,$long)))
        {
            //devolvemos la cadena llamada sugerencia
            if($sugerencia==="") //sino hay texto en sugerencia
            {
                $sugerencia=$nom;
            }
            else
            {
                //$sugerencia= "sugerencia,$nom";
                $sugerencia .= ($sugerencia === "") ? $nom : ",$nom";

            }
        }
    }
  }
    
if($sugerencia==="")echo"No hay sugerencias";
else echo $sugerencia;
//otra forma de hacerlo
//echo ($sugerencia==="") ? "No hay sugerencias":$sugerencia;
?>