// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const mainImage = item.querySelector('.main-image');
        const hoverImage = item.querySelector('.hover-image');

        item.addEventListener('mouseover', () => {
            mainImage.style.opacity = '0';
            hoverImage.style.opacity = '1';
        });

        item.addEventListener('mouseout', () => {
            mainImage.style.opacity = '1';
            hoverImage.style.opacity = '0';
        });

        mainImage.addEventListener('click', function() {
            openModal(this.src, this.alt);
        });

        hoverImage.addEventListener('click', function() {
            openModal(mainImage.src, mainImage.alt);
        });
    });

    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeModal = document.getElementsByClassName("close")[0];

    function openModal(src, alt) {
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = alt;
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        const mailtoLink = `mailto:ns5376@nyu.edu?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;

        // Clear the form fields after submission
        contactForm.reset();
    });
});
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const text = "Hello, I am Nisa";
    let index = 0;
    const speed = 150; // Adjust the speed as needed
    const animatedTextElement = document.getElementById('animated-text');

    function typeWriter() {
        if (index < text.length) {
            animatedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();

    // Existing JavaScript code...
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        const mailtoLink = `mailto:ns5376@nyu.edu?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

        window.location.href = mailtoLink;

        // Clear the form fields after submission
        contactForm.reset();
    });
});
 