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




// Sélectionner tous les input radio
document.querySelectorAll('input[type="radio"][name="position"]').forEach(input => {
    input.addEventListener('change', function() {
        // Vérifier si c'est le dernier input (le dernier radio "checked")
        if (this.id === "radio5") {
            // Exécuter le même comportement que pour le bouton
            let targetId = "projet_gestion_intervention";  // Remplace par ton target
            let targetDiv = document.getElementById(targetId);

            // Cache tous les .project-card
            document.querySelectorAll(".project-card").forEach(div => {
                div.classList.remove("active");
            });

            // Affiche seulement le bon div
            if (targetDiv) {
                targetDiv.classList.add("active");
            }
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

handleClick(document.getElementById("first_selected_category"),1)


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch("https://formspree.io/f/xvgkwqeq", {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            document.getElementById("form-message").style.display = "block";
            form.reset();
        } else {
            alert("Une erreur s'est produite. Veuillez réessayer.");
        }
    }).catch(error => {
        alert("Erreur de connexion. Vérifiez votre connexion internet.");
    });
});






// Affiche l'overlay avec le PDF
function showCV(event) {
    event.preventDefault(); // Évite que le lien fasse son action par défaut
    document.getElementById('cvOverlay').style.display = 'flex'; // Affiche l'overlay
}

// Ferme l'overlay
function closeCV() {
    document.getElementById('cvOverlay').style.display = 'none'; // Cache l'overlay
}






