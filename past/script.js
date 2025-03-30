const carrousel = document.querySelector('.carrousel');
const items = document.querySelectorAll('.carrousel-item');
let angle = 0; // Angle initial pour que les éléments commencent correctement
const totalItems = items.length;
const radius = 400; // Rayon du cercle 3D, plus grand = plus écartés
const rotationSpeed = 30; // Vitesse de la rotation (en degrés)

function rotateCarrousel() {
  items.forEach((item, index) => {
    // Calculer l'angle pour chaque élément
    let angleItem = (360 / totalItems) * index + angle;

    // Boucle circulaire
    if (angleItem > 360) {
      angleItem -= 360 * Math.floor(angleItem / 360);
    } else if (angleItem < -360) {
      angleItem += 360 * Math.floor(Math.abs(angleItem) / 360);
    }

    // Positionner les éléments en 3D autour de l'axe Y
    item.style.transform = `translate(-50%, -50%) rotateY(${angleItem}deg) translateZ(${radius}px)`;

    // Disparition progressive des éléments derrière le carrousel
    if (angleItem > 90 || angleItem < -90) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
}

// Contrôles avec les touches gauche/droite
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    angle += rotationSpeed; // Tourner vers la droite
    rotateCarrousel();
  } else if (event.key === 'ArrowLeft') {
    angle -= rotationSpeed; // Tourner vers la gauche
    rotateCarrousel();
  }
});

// Optionnel : Contrôles avec la molette de la souris
document.querySelector('.carrousel-container').addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    angle += rotationSpeed; // Tourner vers la droite
    rotateCarrousel();
  } else {
    angle -= rotationSpeed; // Tourner vers la gauche
    rotateCarrousel();
  }
});

// Fonction pour démarrer le carrousel avec les éléments correctement positionnés
function initializeCarrousel() {
  // Positionner les éléments initialement
  rotateCarrousel();
}

// Initialiser le carrousel
initializeCarrousel();
