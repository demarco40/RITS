// Ensure EmailJS SDK is initialized properly
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('BgqcGV8Jgc1BMGgH5'); // Replace with your public key

    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const contentDiv = document.getElementById('content');

    const services = [
        { title: 'Dashboards & Reports:', description: 'We create dynamic dashboards and reports using Power BI.' },
        { title: 'Data Analysis:', description: 'We analyze complex datasets to uncover trends and patterns.' },
        { title: 'Data Migration & Cleaning:', description: 'We offer seamless data migration and cleaning services.' },
        { title: 'Website Creation:', description: 'We build custom websites tailored to your business needs.' },
        { title: 'Computer Building:', description: 'We assemble custom computers to suit your requirements.' }
    ];

    const aboutCards = [
        { title: 'Experience:', description: 'We specialize in managing, cleaning, and manipulating data to create insightful reports and empower businesses with data-driven decisions.' },
        { title: 'Education:', description: 'M.S. in Business Analytics – University of Rochester (2025*), B.S. in Computing and Information Technologies – RIT (2018), A.S. in Computer Science – FLCC (2015)' }
    ];

    // Dynamically load the home page with service cards
    function loadHomePage() {
        renderCards(services);
    }

    // Dynamically load the About Us page with about cards
    function loadAboutPage() {
        renderCards(aboutCards);
    }

    // Dynamically load the Contact Us page with a form
    function loadContactPage() {
        contentDiv.innerHTML = `
            <form class="contact-form">
                <h2>Contact Us</h2>
                <input type="text" id="name" placeholder="Name" required>
                <input type="tel" id="phone" placeholder="Phone Number" required>
                <input type="email" id="email" placeholder="Email" required>
                <textarea id="description" rows="4" placeholder="Brief Description of Needs" required></textarea>
                <button type="submit">Submit</button>
                <p id="form-message"></p>
            </form>
        `;

        const form = contentDiv.querySelector('.contact-form');
        form.addEventListener('submit', sendEmail); // Bind the submit event to sendEmail function
    }

    // Function to render a list of cards
    function renderCards(cards) {
        contentDiv.innerHTML = ''; // Clear previous content
        cards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.innerHTML = `
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            `;
            contentDiv.appendChild(cardElement);
        });
    }

    // Function to send email via EmailJS
    async function sendEmail(event) {
        event.preventDefault(); // Prevent form reload

        const templateParams = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message: document.getElementById('description').value
        };

        try {
            const response = await emailjs.send('service_y49mq9o', 'template_gknldjz', templateParams);
            if (response.status === 200) {
                document.getElementById('form-message').textContent = 'Message sent successfully!';
                document.getElementById('form-message').style.color = 'green';
            } else {
                throw new Error('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('form-message').textContent = 'Error sending message. Please try again.';
            document.getElementById('form-message').style.color = 'red';
        }
    }

    // Event listeners for navigation links
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

    // Load the home page by default
    loadHomePage();
});
