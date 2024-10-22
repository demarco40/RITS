(function() {
    emailjs.init('BgqcGV8Jgc1BMGgH5'); // Replace with your EmailJS public key
})();

document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const contentDiv = document.getElementById('content');

    const services = [
        { title: 'Dashboards & Reports', description: 'We create dynamic dashboards and reports using Power BI.' },
        { title: 'Data Analysis', description: 'We analyze complex datasets to uncover trends and patterns.' },
        { title: 'Data Migration & Cleaning', description: 'We offer seamless data migration and cleaning services.' },
        { title: 'Website Creation', description: 'We build custom websites tailored to your business needs.' },
        { title: 'Computer Building', description: 'We assemble custom computers to suit your requirements.' }
    ];

    const aboutCards = [
        { title: 'Experience', description: 'We specialize in managing/cleaning/manipulating data to create insightful reports, and empower businesses with data-driven decisions.' },
        { title: 'Education', description: 'M.S. in Business Analytics – University of Rochester (2024)' },
        { title: 'Education', description: 'B.S. in Computing and Information Technologies – RIT (2018)' },
        { title: 'Education', description: 'A.S. in Computer Science – FLCC (2015)' }
    ];

    function loadHomePage() {
        renderCards(services);
    }

    function loadAboutPage() {
        renderCards(aboutCards);
    }

    function loadContactPage() {
        contentDiv.innerHTML = `
            <form class="contact-form" onsubmit="return sendEmail(event)">
                <h2>Contact Us</h2>
                <input type="text" id="name" placeholder="Name" required>
                <input type="tel" id="phone" placeholder="Phone Number" required>
                <input type="email" id="email" placeholder="Email" required>
                <textarea id="description" rows="4" placeholder="Brief Description of Needs" required></textarea>
                <button type="submit">Submit</button>
                <p id="form-message"></p>
            </form>
        `;
    }

    function renderCards(cards) {
        contentDiv.innerHTML = ''; // Clear previous content
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `<h2>${card.title}</h2><p>${card.description}</p>`;
            contentDiv.appendChild(cardElement);
        });
    }

    function sendEmail(event) {
        event.preventDefault();
        const templateParams = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('description').value
        };

        emailjs.send('service_y49mq9o', 'template_gknldjz', templateParams)
            .then(() => {
                document.getElementById('form-message').textContent = 'Message sent successfully!';
            })
            .catch(() => {
                document.getElementById('form-message').textContent = 'Error sending message. Try again.';
            });
    }

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadHomePage();
    });

    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadAboutPage();
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadContactPage();
    });

    // Load home page by default
    loadHomePage();
});
