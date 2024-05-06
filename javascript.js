var currentImageIndex = 0; // Variable para almacenar el índice de la imagen actual

function openModal(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

function changeImage(direction) {
    var images = document.querySelectorAll('.gallery-image'); // Obtener todas las imágenes de la galería
    currentImageIndex += direction; // Incrementar o decrementar el índice de la imagen actual según la dirección

    // Verificar si se superan los límites de la galería
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Volver al principio si se alcanza el final
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Ir al final si se está en el principio
    }

    document.getElementById('modal-image').src = images[currentImageIndex].src; // Mostrar la nueva imagen en el modal
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1); // Cambiar a la imagen anterior si se presiona la flecha izquierda
    } else if (event.key === 'ArrowRight') {
        changeImage(1); // Cambiar a la imagen siguiente si se presiona la flecha derecha
    }
});





function toggleMenu() {
    var menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('active');
}






