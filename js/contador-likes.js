
var likes = 50;
var unlikes = 50;

//console.log("si estoy leyendo");






document.getElementById("me-gusta").innerHTML = likes+'%';
document.getElementById("no-gusta").innerHTML = unlikes + '%';


$('.like-background').click(
    function ()
    {
        
        /*Recibimos la clase del boton para remover el atributo que lo inhabilita */
        $('.btn').removeAttr('disabled');
        /*Por cada click se suma un voto*/
        likes += 1;
        document.getElementById("me-gusta").innerHTML = likes+'%';
        
    }

      
    
);


$('.unlike-background').click(
    function ()
    {
        /*Recibimos la clase del boton para remover el atributo que lo inhabilita */
        $('.btn').removeAttr('disabled');
        /*Por cada click se suma un voto*/
        unlikes += 1;
        document.getElementById("no-gusta").innerHTML = unlikes+'%';
        
    }
);
