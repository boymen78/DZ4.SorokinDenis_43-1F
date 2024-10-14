let count = 0;

const counterElement = document.getElementById('counter');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');

function updateCounter() {
    counterElement.textContent = count;
}

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterElement.style.color = 'red';
        updateCounter();
    }
});

incrementBtn.addEventListener('click', () => {
    count++;
    counterElement.style.color = 'green';
    updateCounter();
});

updateCounter();
