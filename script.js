// Initialize EmailJS with your public key
(function() {
    emailjs.init('BgqcGV8Jgc1BMGgH5'); // Replace with your actual public key
})();

document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const contentDiv = document.getElementById('content');

    const services = [
        { title: 'Dashboards & Reports', description: 'We create dynamic dashboards and reports using Power BI, turning data into actionable insights.' },
        { title: 'Data Analysis', description: 'Our team helps analyze complex datasets to uncover trends, patterns, and key business metrics.' },
        { title: 'Data Migration & Cleaning', description: 'We offer seamless data migration and cleaning services to ensure data integrity and smooth transitions.' },
        { title: 'Website Creation', description: 'Need a website? We build custom websites tailored to your business needs and vision.' },
        { title: 'Computer Building', description: 'From gaming rigs to workstations, we assemble custom computers to suit your requirements.' }
    ];

    function loadHomePage() {
        contentDiv.innerHTML = '';
        services.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `<h2>${service.title}</h2><p>${service.description}</p>`;
            contentDiv.appendChild(card);
        });
    }

    function loadAboutPage() {
        contentDiv.innerHTML = `
            <div class="about">
                <h2>About Us</h2>
                <p>We have extensive experience in managing company and project financial data. We specialize in creating insightful reports and dashboards, empowering businesses to make data-driven decisions.</p>
                <h3>Our Education</h3>
                <ul>
                    <li>M.S. in Business Analytics and Applied AI – University of Rochester (2024)</li>
                    <li>B.S. in Computing and Information Technology – RIT (2018)</li>
                    <li>A.S. in Computer Science – Finger Lakes Community College (2015)</li>
                </ul>
            </div>
        `;
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
                document.getElementById('form-message').textContent = 'Your message has been sent successfully!';
            })
            .catch(() => {
                document.getElementById('form-message').textContent = 'Error sending message. Please try again.';
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

    loadHomePage();
});
