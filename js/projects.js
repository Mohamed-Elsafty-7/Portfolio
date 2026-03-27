const projects = [
    {
        title: "STRICT",
        category: "web",
        image: "IMGS/STRICT.png",
        description: "This is my first website, built entirely from scratch using pure HTML and CSS with no frameworks or JavaScript.",
        tags: ["HTML5", "CSS3"],
        link: "https://mohamed-elsafty-7.github.io/STRICT-PROJECT/"
    },
    {
        title: "Food Lover",
        category: "web",
        image: "IMGS/FOOD_LOVER.png",
        description: "This is a food recipe website built using HTML5 and CSS3, designed to provide users with a seamless experience for discovering and sharing delicious recipes.",
        tags: ["HTML5", "CSS3"],
        link: "https://mohamed-elsafty-7.github.io/Food_Lover_Project/?message="
    },
    {
        title: "Improved Food Lover",
        category: "web",
        image: "IMGS/FOOD_LOVER.png",
        description: "This is an improved version of the original Food Lover website, enhanced with JavaScript to provide a more interactive and dynamic user experience.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        link: "https://mohamed-elsafty-7.github.io/Improved-Food-lover/"
    },
    {
        title: "Furni Project",
        category: "web",
        image: "IMGS/Furni_Project.png",
        description: "This is a modern furniture e-commerce website built using HTML5, CSS3, and JavaScript.",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        link: "https://mohamed-elsafty-7.github.io/Furni_Project/"
    },
    {
        title: "Python Library",
        category: "python",
        image: "IMGS/python_logo_icon_168886.svg",
        description: "This is a Python project that demonstrates my skills in Python programming, showcasing my ability to create efficient and effective solutions.",
        tags: ["Python"],
        link: "https://github.com/Mohamed-Elsafty-7/Project1.git"
    },
    {
        title: "Python Game",
        category: "python",
        image: "IMGS/python_logo_icon_168886.svg",
        description: "This is a Python game, showcasing my skills in game development and Python programming.",
        tags: ["Python"],
        link: "https://github.com/Mohamed-Elsafty-7/Project2.git"
    },
    {
        title: "EN_DE_Crypt",
        category: "python",
        image: "IMGS/python_logo_icon_168886.svg",
        description: "This is a Python encryption/decryption tool, showcasing my skills in cryptography and Python programming.",
        tags: ["Python"],
        link: "https://github.com/Mohamed-Elsafty-7/Project3.git"
    },
    {
        title: "Gym Management System",
        category: "python",
        image: "IMGS/python_logo_icon_168886.svg",
        description: "This is a Python gym management system, showcasing my skills in software development and Python programming.",
        tags: ["Python"],
        link: "https://github.com/Mohamed-Elsafty-7/GYM-MEMBERSHIP.git"
    }
];

function createProjectCard(project) {
    const cardHTML = `
            <div class="col-lg-4 col-md-6 project-item ${project.category}">
                <div class="project-card h-100">
                    <img src="${project.image}" class="project-img w-100" alt="${project.title}">
                    <div class="p-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge ${project.category === 'web' ? 'bg-info text-dark' : 'bg-warning text-dark'}">
                                ${project.category === 'web' ? 'WEB' : 'PROGRAMMING'}
                            </span>
                            <i class="ri-box-3-line"></i>
                        </div>
                        <h4 class="fw-bold">${project.title}</h4>
                        <p class="text-light-emphasis small">${project.description}</p>
                        <div class="d-flex gap-2 flex-wrap mb-4">
                            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                        <a href="${project.link}" target="_blank" class="btn btn-view w-100">View Project</a>
                    </div>
                </div>
            </div>
        `;
    return cardHTML;
}

function renderProjects(filteredProjects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    filteredProjects.forEach(project => {
        container.innerHTML += createProjectCard(project);
    });
}

function filterProjects(category) {
    document.querySelectorAll('#btn-all, #btn-web, #btn-python').forEach(btn => {
        btn.classList.remove('active');
    });

    if (category === 'all') {
        document.getElementById('btn-all').classList.add('active');
    } else if (category === 'web') {
        document.getElementById('btn-web').classList.add('active');
    } else if (category === 'python') {
        document.getElementById('btn-python').classList.add('active');
    }

    let filtered = projects;
    if (category !== 'all') {
        filtered = projects.filter(project => project.category === category);
    }

    renderProjects(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects(projects);

    document.getElementById('btn-all').addEventListener('click', () => filterProjects('all'));
    document.getElementById('btn-web').addEventListener('click', () => filterProjects('web'));
    document.getElementById('btn-python').addEventListener('click', () => filterProjects('python'));
});
