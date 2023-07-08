    //POP UP
$("#btn-abrir" ).click(function() {
    $("#myForm").css({"display": "block"});
});

$("#cerrar" ).click(function() {
    $("#myForm").css({"display": "none"});
});


$(document).ready(function() {
    //Datos del formulario
$('#myForm').submit(function(e) {
    e.preventDefault();
    

    // OBTENER LOS DATOS. 
    var campo1 = $('#nombre').val();
    var campo2 = $('#apellido').val();
    var campo3 = $('#email').val();
    var campo4 = $('#psw').val();

    if (campo1.length < 1){
        $('#Input-nombre').after(alert('Campo nombre vacio'));
      }
      if(campo2.length < 1){
        $('#Input-apellido').after(alert('Campo apellido vacio'));
      }
      if(campo3.length < 1){
        $('#Input-email').after(alert('Campo email vacio'));}
      
      if (campo4.length < 6){
        $('#Input-contraseña').after(alert('Su contraseña debe tener al menos 6 digitos'));
      }
    if(campo1.length > 1 && campo2.length > 1 && campo3.length > 1 &&  campo4.length >= 6){
        $('form').get(0).reset();
        $("#myForm").css({"display": "none"});
        $('body').append(`<div class=saludo><h1>Hola ${$("#nombre").val()}!</h1><div>`);
        $('.form-container').get(0).reset();
        $("#btn-abrir").css({"display": "none"});
        
    }
    if ($('#nombre').val()){
    }
    
    
    $(".saludo h1").fadeOut(6000);
    }
);
    //Creador de tareas
    const form = document.querySelector("#Nueva-tarea-form");
    const input = document.querySelector("#Nueva-tarea-input");
    const list_el = document.querySelector("#tareas");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tarea = input.value;

        if (!tarea){
            alert("Por favor agregar una tarea");
            return;
        }
        const tarea_el = document.createElement("div");
        tarea_el.classList.add("tarea");
        
        const tarea_content_el = document.createElement("div");
        tarea_content_el.classList.add("contenido");
        tarea_el.appendChild(tarea_content_el);

        const tarea_input_el = document.createElement("input");
        tarea_input_el.classList.add("texto");
        tarea_input_el.type = "texto";
        tarea_input_el.value = tarea;
        tarea_input_el.setAttribute("readonly","readonly");

        tarea_content_el.appendChild(tarea_input_el);

        const tarea_acciones_el = document.createElement("div");
        tarea_acciones_el.classList.add("acciones");


        const tarea_editar_el = document.createElement("button");
        tarea_editar_el.classList.add("editar");
        tarea_editar_el.innerHTML = "Editar";

        const tarea_eliminar_el = document.createElement("button");
        tarea_eliminar_el.classList.add("eliminar");
        tarea_eliminar_el.innerHTML = "Eliminar";

        tarea_acciones_el.appendChild(tarea_editar_el);
        tarea_acciones_el.appendChild(tarea_eliminar_el);

        tarea_el.appendChild(tarea_acciones_el);


        list_el.appendChild(tarea_el);

        input.value = "";

        tarea_editar_el.addEventListener('click', () => {
            if(tarea_editar_el.innerText.toLowerCase() == "editar"){
                tarea_input_el.removeAttribute("readonly");
                tarea_input_el.focus();
                tarea_editar_el.innerText = "Guardar";
            } else {
                tarea_editar_el.innerText = "Editar";
                tarea_input_el.setAttribute("readonly","readonly");
                
            }
        });
        
        tarea_eliminar_el.addEventListener('click', () => {
            list_el.removeChild(tarea_el);
        });
    });
});
//Ojo de Contraseña

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#psw");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
    const forma = document.querySelector("form");
    form.addEventListener('submit', function (e) {
    e.preventDefault();
});
