let video = document.getElementById('video')
let contenedor= document.getElementById('contenedor-video')
video.addEventListener('click',function(){

    if(contenedor.style.display == 'block'){
        contenedor.style.display ='none'
    }else{
        contenedor.style.display ='block'
    }
    
})


function seleccionar(){
    let opciones = document.getElementById('opciones')
    var galeriaElement = document.getElementById("galeria");
    var primerHijo = galeriaElement.firstElementChild;
    var segundoHijo = galeriaElement.lastElementChild;
    var img = primerHijo.querySelector('img')
    var img2 = segundoHijo.querySelector('img')
        if(opciones.value == 'interior'){
            img.src = '/assets/img/image-7-s.jpg'
            img2.src = '/assets/img/image-8-s.jpg'
        }
        else{
            img.src = '/assets/img/image-4-s (1).jpg'
            img2.src = '/assets/img/image-9-s.jpg'
        }
    
}
function cambioColor(text){
    let imagenes = document.getElementById('imagenes-colores')
    let distintos = imagenes.firstElementChild;
    distintos.src = `/assets/img/variation-car-${text}.png`
    
}
    
        // let menu = document.getElementById("menu-mb")
        // let mostrar = document.getElementById("mostrar")
        // mostrar.addEventListener('click',function(){
        //     if(menu.style.display == "block"){
        //         menu.style.display = "none"
        //     }else{
        //         menu.style.display = "block"
        //     }
        // })
        
        
