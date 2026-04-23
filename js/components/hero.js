
document.addEventListener("DOMContentLoaded", function(){

    const heroElement = document.querySelector(".hero-container")

    if (!heroElement) return;

        fetch("/views/components/hero.html")
            // La respuesta la convierte a texto plano
        .then(response => response.text())
            // Insertar el contenido html del navbar en el contenedor correspondiente
        .then(data => {
            heroElement.innerHTML = data;
    })


        .catch(error => console.log("Error cargando el hero", error));
    
})