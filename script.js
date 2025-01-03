const images = document.querySelectorAll('.slider img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const imageInfo = document.getElementById('image-info');

let currentIndex = 0;

function updateSlider(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    imageInfo.textContent = `Изображение ${index + 1} из ${images.length}`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
});
