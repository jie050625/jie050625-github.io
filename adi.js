// Global tracking of the sub-menu layout configuration
let isInsideSubItem = false;

// Basic Multi-Page Navigation Handler
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active-page');
    });

    // Show destination page
    const targetPage = document.getElementById(pageId);
    targetPage.classList.remove('hidden');
    targetPage.classList.add('active-page');

    // Initialize or run specific page logic loops
    if (pageId === 'page-confetti') {
        startConfetti();
    }
}

// Sub-page item details expansion configuration
function openSubPage(contentId) {
    isInsideSubItem = true;
    
    // Hide the primary navigation layout list selection grids
    document.querySelector('.cards-grid').classList.add('hidden');
    
    // Display targeted panel details dynamically
    document.getElementById(contentId).classList.remove('hidden');
    
    // Update the button text to a minimal layout style requested in Photo 5
    const backBtn = document.getElementById('dynamic-back-btn');
    backBtn.textContent = "Back";
    backBtn.className = "nav-btn-simple-back";
}

// Context-aware Back Button Controller
function handleBackAction() {
    if (isInsideSubItem) {
        // Exit single menu item view and return back to the 3-cards dashboard selection layout
        isInsideSubItem = false;
        
        // Re-display the grid navigation options elements
        document.querySelector('.cards-grid').classList.remove('hidden');
        
        // Hide individual container panels elements completely
        const subContents = document.querySelectorAll('.sub-content');
        subContents.forEach(content => content.classList.add('hidden'));
        
        // Reset button parameters to original structure requirements
        const backBtn = document.getElementById('dynamic-back-btn');
        backBtn.textContent = "add a black button here and once it click it will go back to the main page which is the sunsent";
        backBtn.className = "nav-btn-black-long";
    } else {
        // Return clear back to the primary sunset initialization menu directly
        navigateTo('page-main');
    }
}

// Continuous Render Engine for Exploded Confetti (Photo 3 Guardrail Request)
let confettiInterval;
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    // Auto scale canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#ffbc42', '#ffffff', '#e19526', '#b5832a'];
    const particleCount = 120;
    const particles = [];

    // Initialize particles array
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 6 + 4,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: Math.random() * 4 - 2
        });
    }

    clearInterval(confettiInterval);
    
    // Render Animation Loop Loop
    confettiInterval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            ctx.save();
            ctx.fillStyle = p.color;
            ctx.translate(p.x + p.size / 2, p.y + p.size / 2);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * (Math.random() * 0.4 + 0.8));
            ctx.restore();

            // Update particle physics properties for natural float drops
            p.y += p.speed;
            p.rotation += p.rotationSpeed;

            // Simple reset to top of scene loop to make sure it keeps falling indefinitely
            if (p.y > canvas.height) {
                p.y = -20;
                p.x = Math.random() * canvas.width;
            }
        });
    }, 1000 / 60);
}

// Adjust sizes on resize profile layout configuration metrics parameters
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti-canvas');
    if (canvas && !canvas.classList.contains('hidden')) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});
