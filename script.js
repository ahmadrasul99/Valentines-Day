// Get elements
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const successModal = document.getElementById('successModal');
const photoModal = document.getElementById('photoModal');
const revealBtn = document.getElementById('revealBtn');
const closeBtn = document.getElementById('closeBtn');
const closePhotoBtn = document.getElementById('closePhotoBtn');

// Track if No button has moved
let noButtonMoved = false;

// Function to get random position for No button
function getRandomPosition() {
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate boundaries (with padding)
    const maxX = cardRect.width - btnRect.width - 40;
    const maxY = cardRect.height - btnRect.height - 40;
    
    // Generate random position
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    return { x: randomX, y: randomY };
}

// Move No button to random position
function moveNoButton() {
    if (!noButtonMoved) {
        // First time - make it absolutely positioned
        noBtn.style.position = 'absolute';
        noButtonMoved = true;
    }
    
    const pos = getRandomPosition();
    noBtn.style.left = pos.x + 'px';
    noBtn.style.top = pos.y + 'px';
}

// Event Listeners
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Also move on hover for extra fun
noBtn.addEventListener('mouseenter', () => {
    if (Math.random() > 0.5) { // 50% chance to move on hover
        moveNoButton();
    }
});

yesBtn.addEventListener('click', () => {
    successModal.classList.add('active');
});

revealBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
    photoModal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    successModal.classList.remove('active');
});

closePhotoBtn.addEventListener('click', () => {
    photoModal.classList.remove('active');
});

// Close modals when clicking outside
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.classList.remove('active');
    }
});

photoModal.addEventListener('click', (e) => {
    if (e.target === photoModal) {
        photoModal.classList.remove('active');
    }
});
