const trackArea = document.getElementById('track-area');
const coords = document.getElementById('coords');

trackArea.addEventListener('mousemove', (event) => {
    const rect = trackArea.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    coords.textContent = `Coordinates: (X: ${x}, Y: ${y})`;
});

trackArea.addEventListener('mouseleave', () => {
    coords.textContent = 'Coordinates: (X: -, Y: -)';
});
