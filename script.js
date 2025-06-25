// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobileMenu').classList.add('hidden');
        }
    });
});

// Plan Selection
function selectPlan(plan) {
    let message = '';
    switch(plan) {
        case 'starter':
            message = 'Sie haben den Starter-Plan gewählt (299€/Monat).';
            break;
        case 'professional':
            message = 'Sie haben den Professional-Plan gewählt (599€/Monat).';
            break;
        case 'enterprise':
            message = 'Sie interessieren sich für unseren Enterprise-Plan.';
            break;
    }
    
    // Show confirmation and redirect to contact form
    if (confirm(message + '\n\nMöchten Sie Ihre Kontaktdaten hinterlassen?')) {
        // Scroll to contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Pre-select interest based on plan
        const interestSelect = document.querySelector('select[name="interest"]');
        if (plan === 'enterprise') {
            interestSelect.value = 'Preisanfrage';
        } else {
            interestSelect.value = 'Proof of Concept';
        }
    }
}

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    // In a real implementation, this would send data to a server
    // For now, we'll just show a success message
    alert('Vielen Dank für Ihre Anfrage!\n\nWir werden uns innerhalb von 24 Stunden bei Ihnen melden.\n\nIhre Daten:\n' + 
          'Name: ' + data.name + '\n' +
          'Unternehmen: ' + data.company + '\n' +
          'E-Mail: ' + data.email + '\n' +
          'Interesse: ' + data.interest);
    
    // Reset form
    this.reset();
    
    // In production, you would send this data to your server:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to feature cards
document.querySelectorAll('.hover\\:shadow-xl').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Initialize
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';