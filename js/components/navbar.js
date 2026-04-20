// Logica para cargar el componente navbar

document.addEventListener("DOMContentLoaded", function(){

    const navbarElement = document.querySelector(".navbar-container")

    if (navbarElement) {

        fetch("/views/components/navbar.html")
            // La respuesta la convierte a texto plano
        .then(response => response.text())
            // Insertar el contenido html del navbar en el contenedor correspondiente
        .then(data => {
            navbarElement.innerHTML = data;
        
        const currentPage = 
        window.location.pathname.split("/").pop() || "index.html"

        const navLinks = navbarElement.querySelectorAll(".navbar__link")

        navLinks.forEach(link =>{
            if (link.getAttribute("href").includes(currentPage)) {

                link.classList.add("active")

            }
        })
    })


        .catch(error => console.log("Error cargando el navbar", error));
}
    
})

