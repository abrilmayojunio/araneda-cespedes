// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/cucho.gif",
    title: "🐈🐀 Frugívoro", //javascript aquí puedo cambiar todo jejeje
    about: "Helados de frutas, verduras y Cucho, un murciélago achorado come fruta. ",
}, {
    figure: "media/WAWA.gif",
    title: "🐈 WAWA",
    about: "Identidad de marca y diseño de packaging para pañales infantiles.",
}, {
    figure: "media/reta.gif",
    title: "🐈🐀 RETA",
    about: "RETA: Reciclaje Eficiente y Transporte de Agua, es unn sistema de reciclaje de agua en contexto de emergencia en el hogar." ,


}, {
    figure: "media/filt04.gif",
    title: "🐀 Práctica Profesional:FILT ",
    about: "FILT; fibras libres transformadas, proyecto de economía circular textil, llevado a cabo por el equipo de diseño e investigación textil Open Textiles."
  ,
}, {
    figure: "media/veco1.png",
    title: "🐈🐀 VECO",
    about: "Red social comunitaria regulada, propia de cada comunidad de departamentos. VECO tiene como objetivo mantener en contacto, a los habitantes de estas comunidades, en situaciones de emergencia tanto como en la vida diaria.",

}, {
    figure: "media/jop.gif",
    title: "🐀 Jop ",
    about: "Línea de ropa de bebés inspirada en perritos de todas las formas y clases.",
}, {
    figure: "media/contigo.gif",
    title: "🐈 Contigo.",
    about: "Linea de juguetes educativos para salas prescolares en la araucania. Inspirados en materias primas y técnicas de la zona.",
}, {
  figure: "media/chana.gif",
  title: "🐀 Accesorios Chana",
  about: "Experimentación Textil con mezclilla, con el fin de lograr una nueva línea de productos para el emprendimiento de Roxana Escalona 'Accesorios Chana'. ",
}, {
  figure: "media/ilus.png",
  title: "🐀 Ilustraciones & Dibujitos",
  about: "Un parsín por ahí y por acá, me manejo en ilustraciones digitales tanto como análogas."
},{
  figure: "media/modo diablo lol.png",
  title: "🐈 Ilustración by Cat",
  about: "Mis ilutraciones y animaciones, mayoritariamente digitales.",
}

]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
// arreglos de objeto [{},{},{},{}]

// pa poner imagenes <img src="" alt=""> el alt es link alternativo
