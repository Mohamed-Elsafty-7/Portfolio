const projects = [
    { title: "STRICT", category: "web", image: "IMGS/STRICT.png", description: "This is my first website, built entirely from scratch using pure HTML and CSS with no frameworks or JavaScript.", tags: ["HTML5", "CSS3"], link: "https://mohamed-elsafty-7.github.io/STRICT-PROJECT/" },
    { title: "Food Lover", category: "web", image: "IMGS/FOOD_LOVER.png", description: "This is a food recipe website built using HTML5 and CSS3, designed to provide users with a seamless experience for discovering and sharing delicious recipes.", tags: ["HTML5", "CSS3"], link: "https://mohamed-elsafty-7.github.io/Food_Lover_Project/?message=" },
    { title: "Improved Food Lover", category: "web", image: "IMGS/FOOD_LOVER.png", description: "This is an improved version of the original Food Lover website, enhanced with JavaScript to provide a more interactive and dynamic user experience.", tags: ["HTML5", "CSS3", "JavaScript"], link: "https://mohamed-elsafty-7.github.io/Improved-Food-lover/" },
    { title: "Furni Project", category: "web", image: "IMGS/Furni_Project.png", description: "This is a modern furniture e-commerce website built using HTML5, CSS3, and JavaScript.", tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"], link: "https://mohamed-elsafty-7.github.io/Furni_Project/" },
    { title: "Python Library", category: "python", image: "IMGS/python_logo_icon_168886.svg", description: "This is a Python project that demonstrates my skills in Python programming, showcasing my ability to create efficient and effective solutions.", tags: ["Python"], link: "https://github.com/Mohamed-Elsafty-7/Project1.git" },
    { title: "Python Game", category: "python", image: "IMGS/python_logo_icon_168886.svg", description: "This is a Python game, showcasing my skills in game development and Python programming.", tags: ["Python"], link: "https://github.com/Mohamed-Elsafty-7/Project2.git" },
    { title: "EN_DE_Crypt", category: "python", image: "IMGS/python_logo_icon_168886.svg", description: "This is a Python encryption/decryption tool, showcasing my skills in cryptography and Python programming.", tags: ["Python"], link: "https://github.com/Mohamed-Elsafty-7/Project3.git" },
    { title: "Gym Management System", category: "python", image: "IMGS/python_logo_icon_168886.svg", description: "This is a Python gym management system, showcasing my skills in software development and Python programming.", tags: ["Python"], link: "https://github.com/Mohamed-Elsafty-7/GYM-MEMBERSHIP.git" },
    { title: "Discover Egypt", category: "backend", description: "A tourism website introducing visitors to Egyptian destinations through featured city cards and place descriptions. Built with PHP and currently in development; the contact form is not yet connected to message processing.", tags: ["PHP", "Tourism Website", "In Development"], link: "https://github.com/Mohamed-Elsafty-7/DISCOVER_EGY", status: "IN DEVELOPMENT" }
];

function createProjectCard(project) {
    const imageHTML = project.image
        ? '<img src="' + project.image + '" class="project-img w-100" alt="' + project.title + '">'
        : '<div class="project-img w-100 d-flex align-items-center justify-content-center bg-secondary text-white" role="img" aria-label="Tourism project placeholder"><i class="ri-earth-line display-1"></i></div>';
    const categoryClass = project.category === 'web' ? 'bg-info text-dark' : project.category === 'backend' ? 'bg-primary text-white' : 'bg-warning text-dark';
    const categoryLabel = project.category === 'web' ? 'WEB' : project.category === 'backend' ? 'BACK-END' : 'PROGRAMMING';
    const statusHTML = project.status ? '<span class="badge bg-secondary">' + project.status + '</span>' : '<i class="ri-box-3-line"></i>';

    return '<div class="col-lg-4 col-md-6 project-item ' + project.category + '">' +
        '<div class="project-card h-100">' + imageHTML +
        '<div class="p-4">' +
        '<div class="d-flex justify-content-between align-items-center mb-3">' +
        '<span class="badge ' + categoryClass + '">' + categoryLabel + '</span>' + statusHTML +
        '</div>' +
        '<h4 class="fw-bold">' + project.title + '</h4>' +
        '<p class="text-light-emphasis small">' + project.description + '</p>' +
        '<div class="d-flex gap-2 flex-wrap mb-4">' + project.tags.map(tag => '<span class="tag">' + tag + '</span>').join('') + '</div>' +
        '<a href="' + project.link + '" target="_blank" rel="noopener noreferrer" class="btn btn-view w-100">' +
        (project.link.includes('github.com') ? 'View Source Code' : 'View Project') + '</a>' +
        '</div></div></div>';
}

function renderProjects(filteredProjects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    filteredProjects.forEach(project => { container.innerHTML += createProjectCard(project); });
}

function filterProjects(category) {
    document.querySelectorAll('#btn-all, #btn-web, #btn-python, #btn-backend').forEach(btn => btn.classList.remove('active'));
    const buttonIds = { all: 'btn-all', web: 'btn-web', python: 'btn-python', backend: 'btn-backend' };
    document.getElementById(buttonIds[category]).classList.add('active');
    const filtered = category === 'all' ? projects : projects.filter(project => project.category === category);
    renderProjects(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);
    document.getElementById('btn-all').addEventListener('click', () => filterProjects('all'));
    document.getElementById('btn-web').addEventListener('click', () => filterProjects('web'));
    document.getElementById('btn-python').addEventListener('click', () => filterProjects('python'));
    document.getElementById('btn-backend').addEventListener('click', () => filterProjects('backend'));
});
