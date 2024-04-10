const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalText = document.getElementById("modal-text");
const gallery = document.querySelector(".gallery");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const modalContent = document.querySelector(".modal-content");

let currentIndex = 0;
const images = document.querySelectorAll(".box");

gallery.addEventListener("click", function(event) {
    if (event.target.classList.contains("box")) {
        currentIndex = Array.from(images).indexOf(event.target);
        updateModalContent(currentIndex);
        modal.style.display = "block";
	modalContent.classList.add("preview-mode");
    }
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateModalContent(currentIndex);
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    updateModalContent(currentIndex);
});

function updateModalContent(index) {
    const image = images[index];
    modalImage.src = image.style.backgroundImage.slice(5, -2).replace(/["']/g, "");
    const additionalText = image.dataset.text; // Retrieve text from data-text attribute
    modalText.innerText = additionalText; // Set modal text to the retrieved text
}
