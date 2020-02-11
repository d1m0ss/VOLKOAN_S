document.getElementById("dbtn").onclick = function(){
    showMenu();
}

function showMenu(){
    document.getElementById("dropmenu").classList.toggle("dropmenu_active");
    document.getElementById("cont1").classList.toggle("contblur");
    document.getElementById("cont2").classList.toggle("contblur");
    document.getElementById("cont3").classList.toggle("contblur");
    document.getElementById("cont4").classList.toggle("contblur");
    document.getElementById("cont5").classList.toggle("contblur");
}


document.getElementById("dbtn2").onclick = function(){
    hideMenu();
}

function hideMenu(){
    document.getElementById("dropmenu").classList.toggle("dropmenu_active");
    document.getElementById("cont1").classList.toggle("contblur");
    document.getElementById("cont2").classList.toggle("contblur");
    document.getElementById("cont3").classList.toggle("contblur");
    document.getElementById("cont4").classList.toggle("contblur");
    document.getElementById("cont5").classList.toggle("contblur");
}