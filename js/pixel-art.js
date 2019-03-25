$(document).ready(function(){
  //Not working
  /*
    nombreColores.map((color)=>{
      let divColor = '<div class="color-paleta"></div>';    
      $('#paleta').append(divColor);
      $(".color-paleta").css("background-color", color);
      console.log(color);      
    })*/
   
    crearPaleta()
    crearPixeles()

    //cambia color del indicador con la paleta
 $(".paletaClickeable").click(
  function() {           
    colorActual = $(this).css("background-color");    
    console.log(colorActual);    
    $('#indicador-de-color').css("background-color",colorActual);
  });

  //boton borrar
  $("#borrar").click(function(){
    $("#grilla-pixeles div").each(function(pixel){
      $(this).animate({backgroundColor : 'White'})
    })
    
  });


    //cambia color de pixeles $('#myElement').on('mousedown', function() {

      let isMouseDown = false;

    $("#grilla-pixeles div").mousedown(function(){
      isMouseDown = true;
      let $thisPixel = $(this);
      cambiarColorPixel($thisPixel);
    })

    $("#grilla-pixeles div").mouseup(function(){
      isMouseDown = false;
    })

    $("#grilla-pixeles div").mouseover(function(){
      let $thisPixel = $(this);
      cambiarColorPixel($thisPixel);
    })

    function cambiarColorPixel(thisPixel){
      if(isMouseDown){        
      let nuevoColor = $('#indicador-de-color').css("background-color")
      thisPixel.css("background-color",nuevoColor)
      }      
    }

});

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    $('#indicador-de-color').css("background-color",colorActual);

  })
);

//creacion paleta
function crearPaleta(){
  for(let i = 0;i<nombreColores.length;i++){
    let divColor = '<div class=color-paleta' + i + '></div>';
    $("#paleta").append(divColor);
    $(".color-paleta"+ i).addClass("paletaClickeable");
    $(".color-paleta"+ i).css("background-color",nombreColores[i]);
   
  }
}

//creacion de pixeles
function crearPixeles(){
  for(let i = 0; i<1750;i++){
    let divPixel = '<div class =' + i +'></div>';    
    $('#grilla-pixeles').append(divPixel);
    $("."+ i).addClass("pixel");
  }
}


//Funciones para pintan los superheroes

$("#batman").click(function(){
   cargarSuperheroe(batman)
});

$("#wonder").click(function(){
  cargarSuperheroe(wonder)
 });

 $("#flash").click(function(){
    cargarSuperheroe(flash)
 });

 $("#invisible").click(function(){
  cargarSuperheroe(invisible)
 });

 //Evento para guardar, se modifico la funcion en recursos.js para que tome el nombre por parametro

 $("#guardar").click(function(){
  let nombre = prompt("Ingresar nombre para el archivo")
  if(nombre != null){
    if(nombre === ""){
      nombre = "pixel-art"
    }    
    guardarPixelArt(nombre)
  }
});
