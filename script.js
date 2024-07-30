const locationIcon = document.querySelector('.location-icon');
const mapContainer = document.querySelector('.map-container');

locationIcon.addEventListener('mouseover', () => {
    mapContainer.style.display = 'block';
});

locationIcon.addEventListener('mouseout', () => {
    mapContainer.style.display = 'none';
});