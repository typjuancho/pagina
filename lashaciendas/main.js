let modal = document.getElementById("myModal");
let modalImg = document.getElementById("modalImg");
let currentIndex;

// Obtener todas las imágenes de la galería
let images = document.getElementsByClassName("gallery")[0].getElementsByTagName("img");

// Configurar el evento clic para cada imagen
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    openModal(images[i].src);
    currentIndex = i;
  });
}

function openModal(imgSrc) {
  modal.style.display = "block";
  modalImg.src = imgSrc;
}

function closeModal() {
  modal.style.display = "none";
}

function plusSlides(n) {
  currentIndex += n;
  showImage(currentIndex);
}

function showImage(index) {
  if (index >= images.length) {
    currentIndex = 0;
  }
  if (index < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
}

document.addEventListener("keydown", function (e) {
  if (modal.style.display === "block") {
    if (e.key === "ArrowLeft") {
      plusSlides(-1);
    } else if (e.key === "ArrowRight") {
      plusSlides(1);
    } else if (e.key === "Escape") {
      closeModal();
    }
  }
});


