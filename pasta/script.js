document.querySelectorAll(".toggle-button").forEach(button => {
    button.addEventListener("click", function() {
        let targetId = this.getAttribute("data-target"); // Récupère l'ID cible
        let targetDiv = document.getElementById(targetId);

        // Cache tous les .project-card
        document.querySelectorAll(".project-card").forEach(div => {
            div.classList.remove("active");
        });

        // Affiche seulement le bon div
        if (targetDiv) {
            targetDiv.classList.add("active");
        }
    });
});


let currentActive = null;

function handleClick(element,lequel) {
    // Si un autre div est déjà actif, on enlève la classe active
    if (currentActive && currentActive !== element) {
        currentActive.classList.remove('active');
    }

    // Ajouter ou enlever la classe active
    element.classList.toggle('active');

    // Mettre à jour l'élément actuellement actif
    currentActive = element.classList.contains('active') ? element : null;

    switch (lequel) {
        case 1:
            document.getElementById("section_carrousel_1").style.display = "block";
            document.getElementById("section_carrousel_2").style.display = "none";
            document.getElementById("section_carrousel_3").style.display = "none";
            break;
        case 2:
            document.getElementById("section_carrousel_1").style.display = "none";
            document.getElementById("section_carrousel_2").style.display = "block";
            document.getElementById("section_carrousel_3").style.display = "none";
            break;
        case 3:
            document.getElementById("section_carrousel_1").style.display = "none";
            document.getElementById("section_carrousel_2").style.display = "none";
            document.getElementById("section_carrousel_3").style.display = "block";
            break;
    
        default:
            break;
    }
    
}

