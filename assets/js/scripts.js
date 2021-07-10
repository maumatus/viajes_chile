//Codigo copiado y modificado de estándar smooth scroll.
//Fuente original: https://www.codeply.com/go/Pv5Ef2WbsR/bootstrap-smooth-scroll-template
$("navbar-nav ul li a[href^='#']").on('click', function(e) {

    // previene comportamiento "default del movimiento"
    e.preventDefault();
 
    // guarda hash
    var hash = this.hash;
 
    // animacion movimiento
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
 
        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
 
 });

//Codigo original, no optimizado en una funcion para invocar acción sobre Hover. Probablemente se puede mejorar con nivel de abstracción.
//La invocación de codigo se realiza con evento directo "onmousehover" en el html.
//Javascript Vainilla (nativo), no depende de JQuery.

 function hoverPrimero(element) {
    document.getElementById("img1").setAttribute('src', 'assets/img/viajes.jpg');
  }
  
  function unhoverPrimero(element) {
    document.getElementById("img1").setAttribute('src', 'assets/img/card1.jpg');
  }
  
  function hoverSegundo(element) {
    document.getElementById("img2").setAttribute('src', 'assets/img/viajes.jpg');
  }
  
  function unhoverSegundo(element) {
    document.getElementById("img2").setAttribute('src', 'assets/img/card2.jpg');
  }
  
  function hoverTercero(element) {
    document.getElementById("img3").setAttribute('src', 'assets/img/viajes.jpg');
  }
  
  function unhoverTercero(element) {
    document.getElementById("img3").setAttribute('src', 'assets/img/card3.jpg');
  }

  function hoverCuarto(element) {
    document.getElementById("img4").setAttribute('src', 'assets/img/viajes.jpg');
  }
  
  function unhoverCuarto(element) {
    document.getElementById("img4").setAttribute('src', 'assets/img/card4.jpg');
  }

  
