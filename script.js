document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
            title: 'Dashboards & Reports',
            description: 'We create dynamic dashboards and reports using Power BI, turning data into actionable insights.'
        },
        {
            title: 'Data Analysis',
            description: 'Our team helps analyze complex datasets to uncover trends, patterns, and key business metrics.'
        },
        {
            title: 'Data Migration & Cleaning',
            description: 'We offer seamless data migration and cleaning services to ensure data integrity and smooth transitions.'
        },
        {
            title: 'Website Creation',
            description: 'Need a website? We build custom websites tailored to your business needs and vision.'
        },
        {
            title: 'Computer Building',
            description: 'From gaming rigs to workstations, we assemble custom computers to suit your requirements.'
        },
        {
            title: 'And More!',
            description: 'Explore our wide range of technology-related services designed to keep your business running smoothly.'
        }
    ];

    const contentDiv = document.getElementById('content');

    services.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = service.title;

        const description = document.createElement('p');
        description.textContent = service.description;

        card.appendChild(title);
        card.appendChild(description);
        contentDiv.appendChild(card);
    });
});
