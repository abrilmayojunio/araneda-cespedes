// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Lorem ipsum 01", //javascript aquí puedo cambiar todo jejeje
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-02.jpg",
    title: "Lorem ipsum 02",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-03.jpg",
    title: "Lorem ipsum 03",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-04.jpg",
    title: "Lorem ipsum 04",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-05.jpg",
    title: "Lorem ipsum 05",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-06.jpg",
    title: "Lorem ipsum 06",
    about: "Nulla pretium non sapien eget fermentum",
}, {
    figure: "media/foto-07.jpg",
    title: "Lorem ipsum 07",
    about: "Nulla pretium non sapien eget fermentum",
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
