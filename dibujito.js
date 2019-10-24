var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujo");//trae un elemento atravez de su ID
var ancho = d.width;
var lienzo = d.getContext("2d");//metodo del canvas, tambien existe 3d

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();//fincion de arranque, las funciones ocurren solo con ()
  lienzo.strokeStyle = color;//atributo o propiedad del objeto lienzo
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();//funcion que finaliza, se cierra para seguir dibijando.
}
function dibujoPorClick()
{

  var lineas = parseInt(texto.value);
  var l = 0; //variable L que itera que se repite en cada ciclo
  var yi, xf;
  var espacio = ancho / lineas;

  //for(l = 0; l < lineas; l++)//ciclo for : variable l que arranca en 0,mientras que la variable L sea menor que lineas que vale 30, se le sume 1 en cada ciclo ahi es donde entra el (l++)
  while(l<lineas)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("black", 0, yi, xf, 300);
    l = l + 1;
  }

  dibujarLinea("red", 1,1,1,299);
  dibujarLinea("red", 1,299,299,299);


}
