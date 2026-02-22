VanillaTilt.init(document.querySelector("#tilt-card"), {
    max: 12, speed: 1000, glare: true, "max-glare": 0.2, gyroscope: true
});

function nextSlide(slideNum) {
    const slides = document.querySelectorAll('.slide');
    const currentSlide = document.querySelector('.slide.active');
    currentSlide.style.opacity = '0';
    currentSlide.style.transform = 'translateY(-20px) scale(0.95)';

    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('active'));
        const targetSlide = document.getElementById('slide' + slideNum);
        targetSlide.style.opacity = '';
        targetSlide.style.transform = '';
        targetSlide.classList.add('active');
    }, 400);
}

function createStars() {
    const bgContainer = document.querySelector('.bg-animation');
    
    // --- BINTANG BIASA (KEDIP-KEDIP) ---
    const starCount = 120; 
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star-generated');
        const size = Math.random() * 2 + 1; 
        star.style.width = `${size}px`; star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`; star.style.top = `${Math.random() * 100}%`;
        const delay = Math.random() * 5; const duration = Math.random() * 3 + 2;
        star.style.animation = `twinkle-effect ${duration}s infinite ease-in-out ${delay}s`;
        bgContainer.appendChild(star);
    }

    // --- BINTANG JATUH AESTHETIC (SHOOTING STARS) ---
    // Jumlah sedikit biar langka (cuma 2 yang gantian)
    const shootingStarCount = 2; 

    for (let j = 0; j < shootingStarCount; j++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        
        // Posisi start: Jauh di kanan atas luar layar
        shootingStar.style.left = `${Math.random() * 50 + 100}%`; 
        shootingStar.style.top = `${Math.random() * -100}%`; 
        
        // Delay random yang LAMA (antara 5 detik sampai 25 detik) biar munculnya satu-satu
        shootingStar.style.animationDelay = `${Math.random() * 20 + 5}s`;
        
        bgContainer.appendChild(shootingStar);
    }
}

window.addEventListener('load', createStars);