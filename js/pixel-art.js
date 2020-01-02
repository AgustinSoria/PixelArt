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

// Variables Globales

var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");

// Funcion Paleta de colores

function armarPaletaDeColores (){
 nombreColores.forEach(color => {
    const celdaColor = document.createElement("div");
    celdaColor.id = color;
    celdaColor.style.backgroundColor = color;
    celdaColor.className = "color-paleta";
    paleta.appendChild(celdaColor);
    
  });
}

armarPaletaDeColores();

// Funcion Armar Grilla de Pixeles

function armarGrilla(){
    for (i = 0; i < 1749; i++){
    var pixel = document.createElement("div");
    grillaPixeles.appendChild(pixel);
    }
}

armarGrilla();


// Variable para guardar el elemento 'color-personalizado'

var paleta = document.querySelector("#paleta");
paleta.addEventListener("click", indicarColorSeleccionado, false);

// Funcion para mostrar el color seleccionado

function indicarColorSeleccionado(e) {
  if (e.target !== e.currentTarget) {
    var colorClickeado = e.target.id;
   
    var indicadorDeColor = document.getElementById("indicador-de-color");
    indicadorDeColor.style.backgroundColor = colorClickeado;
    }

  e.stopPropagation();
}

var pixel = $(grillaPixeles).children("div");

// Color seleccionado por la rueda.

var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    $("#indicador-de-color").css("background-color", colorActual);
  })
);

// Funcion pintar para todos los eventos

function pintarPixel(){
}
var mouse = false;

pixel.mousedown(function(){
  mouse = true;
  var color = $("#indicador-de-color").css("background-color");
  console.log(color);
  $(this).css("background-color", color);
   
});
pixel.mouseover(function(){
  if (mouse) {
    var color = $("#indicador-de-color").css("background-color");
    console.log(color);
    $(this).css("background-color", color);
    }
  
});
pixel.mouseup(function(){
  mouse = false;
});


// Funcion guardar
$(guardar).click(guardarPixelArt);

// function borrar con efecto fade out

$("#borrar").click(borrarTodo);

function borrarTodo(){
  $("#grilla-pixeles").children().animate({ "backgroundColor": "#FFFFFF", }, 1000);
}


// Funcion cargar heroes en Grilla

$("#batman").click(seleccionarBatman);

function seleccionarBatman(){
  cargarSuperheroe(batman); 
}

$("#wonder").click(seleccionarWonder);

function seleccionarWonder() {
  cargarSuperheroe(wonder);
}

$("#flash").click(seleccionarFlash);

function seleccionarFlash() {
  cargarSuperheroe(flash);
}

$("#invisible").click(seleccionarInvisible);

function seleccionarInvisible() {
  cargarSuperheroe(invisible);
}