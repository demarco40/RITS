document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('BgqcGV8Jgc1BMGgH5'); // Replace with your public key

    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const projectsLink = document.getElementById('projects-link');
    const contentDiv = document.getElementById('content');

    const services = [
        { title: 'Dashboards & Reports:', icon: '📊', description: 'We create dynamic dashboards and reports using Power BI.' },
        { title: 'Data Analysis:', icon: '📈', description: 'We analyze complex datasets to uncover trends and patterns.' },
        { title: 'Data Migration & Cleaning:', icon: '🧹', description: 'We offer seamless data migration and cleaning services.' },
        { title: 'Website Creation:', icon: '💻', description: 'We build custom websites tailored to your business needs.' },
        { title: 'Computer Building:', icon: '🖥️', description: 'We assemble custom computers to suit your requirements.' }
    ];

    const sampleProjects = [
        {
            title: 'Sales Dashboard for Retail',
            description: 'A Power BI dashboard that provides insights into monthly sales, top products, and sales by region.',
            features: ['Monthly Sales Overview', 'Product Category Insights', 'Regional Sales Map'],
            imageUrl: 'assets/dashboard.png',
            caption: 'Sales Dashboard for Retail'
        }
    ];

    function loadHomePage() {
        contentDiv.innerHTML = ''; // Clear previous content
        services.forEach(service => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <div class="card-icon">${service.icon}</div>
                <h2>${service.title}</h2>
                <p>${service.description}</p>
            `;
            contentDiv.appendChild(card);
        });

        const whyChooseUsSection = document.createElement('section');
        whyChooseUsSection.classList.add('why-choose-us');
        whyChooseUsSection.innerHTML = `
            <h2>Why Choose Us</h2>
            <ul>
                <li><strong>Data-Driven Insights</strong> – We turn data into actionable insights to drive your business forward.</li>
                <li><strong>Custom Solutions</strong> – Every business is unique, and so are our solutions.</li>
                <li><strong>Professional Support</strong> – We provide ongoing support to ensure your success.</li>
            </ul>
        `;
        contentDiv.appendChild(whyChooseUsSection);
    }

    function loadAboutPage() {
        contentDiv.innerHTML = `
            <div class="about-section">
                <h2>About Us</h2>
                <p>At Rizzieri IT Services, we specialize in providing data-driven solutions for small to medium-sized businesses. Our mission is to empower organizations to make informed decisions through custom dashboards, data cleaning, and analysis.</p>

                <section class="education">
                    <h3>Educational Background</h3>
                    <ul>
                        <li><strong>M.S. in Business Analytics and Applied AI</strong> – University of Rochester (Expected 2025)</li>
                        <li><strong>B.S. in Computing and Information Technology</strong> – Rochester Institute of Technology (2018)</li>
                        <li><strong>A.S. in Computer Science</strong> – Finger Lakes Community College (2015)</li>
                    </ul>
                </section>

                <section class="experience">
                    <h3>Professional Experience</h3>
                    <p>With years of experience in IT and data solutions, we have worked with clients across industries to help them make data-driven decisions. Some of our core skills and services include:</p>
                    <ul>
                        <li>Data Management and Cleaning</li>
                        <li>Power BI Dashboard Creation and Reporting</li>
                        <li>Risk Analysis and Project Management</li>
                        <li>Financial Data Analysis and Insights</li>
                    </ul>
                </section>
            </div>
        `;
    }

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
        form.addEventListener('submit', sendEmail);
    }

    function loadProjectsPage() {
        contentDiv.innerHTML = '';
        sampleProjects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project-card');
            projectElement.innerHTML = `
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image-side" data-caption="${project.caption}">
                <div class="project-details">
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `;
            contentDiv.appendChild(projectElement);
        });

        document.querySelectorAll('.project-image-side').forEach(image => {
            image.addEventListener('click', function() {
                openModal(this.src, this.getAttribute('data-caption'));
            });
        });
    }

    function openModal(src, caption) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("caption");

        modal.style.display = "flex";
        modalImg.src = src;
        captionText.textContent = caption;
    }

    document.querySelector('.close').onclick = function() {
        document.getElementById("imageModal").style.display = "none";
    };

    document.getElementById("imageModal").onclick = function(event) {
        if (event.target === this) {
            this.style.display = "none";
        }
    };

    async function sendEmail(event) {
        event.preventDefault();

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

    projectsLink.addEventListener('click', (e) => {
        e.preventDefault();
        loadProjectsPage();
    });

    loadHomePage();
});
