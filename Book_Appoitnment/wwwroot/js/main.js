// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const header = document.querySelector('.header');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Add animation class
    setTimeout(() => {
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
        modal.querySelector('.modal-content').style.opacity = '1';
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                closeModal(modal.id);
            }
        });
    }
});

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Medical Discipline Selection
function selectDiscipline(discipline) {
    // Check if user is logged in
    const isLoggedIn = checkUserLogin();

    if (!isLoggedIn) {
        openModal('patientLoginModal');
        return;
    }

    // Redirect to doctor selection page with discipline filter
    console.log(`Selected discipline: ${discipline}`);
    // In a real application, this would redirect to a doctor selection page
    alert(`Redirecting to ${discipline} doctors...`);
}

// Doctor Booking
function bookDoctor(doctorId) {
    const isLoggedIn = checkUserLogin();

    if (!isLoggedIn) {
        openModal('patientLoginModal');
        return;
    }

    console.log(`Booking appointment with doctor: ${doctorId}`);
    // In a real application, this would open a booking form
    alert(`Booking appointment with ${doctorId}...`);
}

// Check if user is logged in (mock function)
function checkUserLogin() {
    // In a real application, this would check localStorage, cookies, or session
    return false; // Return false to simulate not logged in
}

// Admin Dashboard Functions
function openAdminDashboard() {
    console.log('Opening admin dashboard...');
    // In a real application, this would redirect to admin panel
    alert('Redirecting to Admin Dashboard...');
}

// Show admin section (for demo purposes)
function showAdminSection() {
    const adminSection = document.getElementById('adminSection');
    adminSection.style.display = 'block';
}

// Hide admin section
function hideAdminSection() {
    const adminSection = document.getElementById('adminSection');
    adminSection.style.display = 'none';
}

// Form Handling
document.addEventListener('DOMContentLoaded', () => {
    // Patient Login Form
    const patientLoginForm = document.querySelector('#patientLoginModal .modal-form');
    if (patientLoginForm) {
        patientLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handlePatientLogin();
        });
    }

    // Doctor Login Form
    const doctorLoginForm = document.querySelector('#doctorLoginModal .modal-form');
    if (doctorLoginForm) {
        doctorLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleDoctorLogin();
        });
    }

    // Register Form
    const registerForm = document.querySelector('#registerModal .modal-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleRegistration();
        });
    }
});

// Handle Patient Login
function handlePatientLogin() {
    const email = document.getElementById('patientEmail').value;
    const password = document.getElementById('patientPassword').value;

    // Show loading state
    const submitBtn = document.querySelector('#patientLoginModal .modal-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Logging in...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
        console.log('Patient login:', { email, password });

        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Close modal and show success
        closeModal('patientLoginModal');
        showNotification('Login successful!', 'success');

        // Update UI for logged in user
        updateUIForLoggedInUser('patient');
    }, 2000);
}

// Handle Doctor Login
function handleDoctorLogin() {
    const email = document.getElementById('doctorEmail').value;
    const password = document.getElementById('doctorPassword').value;

    const submitBtn = document.querySelector('#doctorLoginModal .modal-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Logging in...';
    submitBtn.disabled = true;

    setTimeout(() => {
        console.log('Doctor login:', { email, password });

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        closeModal('doctorLoginModal');
        showNotification('Login successful!', 'success');

        updateUIForLoggedInUser('doctor');
    }, 2000);
}

// Handle Registration
function handleRegistration() {
    const formData = new FormData(document.querySelector('#registerModal .modal-form'));
    const userData = Object.fromEntries(formData);

    const submitBtn = document.querySelector('#registerModal .modal-btn');
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = '<span class="loading"></span> Creating account...';
    submitBtn.disabled = true;

    setTimeout(() => {
        console.log('Registration:', userData);

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        closeModal('registerModal');
        showNotification('Account created successfully!', 'success');
    }, 2000);
}

// Update UI for logged in user
function updateUIForLoggedInUser(userType) {
    const navAuth = document.querySelector('.nav-auth');

    if (userType === 'admin') {
        showAdminSection();
    }

    // Replace auth buttons with user menu
    navAuth.innerHTML = `
        <div class="user-menu">
            <button class="user-btn" onclick="toggleUserMenu()">
                <i class="fas fa-user-circle"></i>
                Welcome, User
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="user-dropdown" id="userDropdown">
                <a href="#profile"><i class="fas fa-user"></i> Profile</a>
                <a href="#appointments"><i class="fas fa-calendar"></i> Appointments</a>
                <a href="#settings"><i class="fas fa-cog"></i> Settings</a>
                <a href="#" onclick="logout()"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        </div>
    `;
}

// Toggle user dropdown menu
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

// Logout function
function logout() {
    // Reset UI to logged out state
    location.reload();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add notification styles
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    }
    
    .notification-success {
        background: #10b981;
    }
    
    .notification-error {
        background: #ef4444;
    }
    
    .notification-info {
        background: #3b82f6;
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .user-menu {
        position: relative;
    }
    
    .user-btn {
        background: #2563eb;
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    .user-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        display: none;
        z-index: 1000;
    }
    
    .user-dropdown.show {
        display: block;
    }
    
    .user-dropdown a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        color: #374151;
        text-decoration: none;
        transition: background 0.3s ease;
    }
    
    .user-dropdown a:hover {
        background: #f3f4f6;
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Close user dropdown when clicking outside
document.addEventListener('click', (e) => {
    const userMenu = document.querySelector('.user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown) {
            dropdown.classList.remove('show');
        }
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// Doctor carousel auto-scroll (optional)
function initDoctorCarousel() {
    const carousel = document.querySelector('.doctors-carousel');
    if (carousel) {
        let scrollAmount = 0;
        const scrollStep = 320; // card width + gap

        setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmount = 0;
            }
            carousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }, 5000);
    }
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', initDoctorCarousel);

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Export functions for global access
window.openModal = openModal;
window.closeModal = closeModal;
window.scrollToSection = scrollToSection;
window.selectDiscipline = selectDiscipline;
window.bookDoctor = bookDoctor;
window.openAdminDashboard = openAdminDashboard;
window.toggleUserMenu = toggleUserMenu;
window.logout = logout; 