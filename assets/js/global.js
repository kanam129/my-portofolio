document.addEventListener('DOMContentLoaded', () => {
    const page = window.location.pathname.split('/').pop() || 'index.html';

    const setupNavigation = () => {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        if (!navMenu || !mobileMenu) return;

        let navLinksHTML = '';

        // Define navigation links for different pages
        if (page === 'index.html') {
            navLinksHTML = `
                <a href="#about" class="text-slate-600 hover:text-slate-900 transition">About</a>
                <a href="#skills" class="text-slate-600 hover:text-slate-900 transition">Skills</a>
                <a href="#experience" class="text-slate-600 hover:text-slate-900 transition">Experience</a>
                <a href="#projects" class="text-slate-600 hover:text-slate-900 transition">Projects</a>
                <a href="#contact" class="text-slate-600 hover:text-slate-900 transition">Contact</a>
            `;
        } else {
            // Links for other pages like projects.html, project-detail.html
            navLinksHTML = `
                <a href="index.html" class="text-slate-600 hover:text-slate-900 transition">Home</a>
                <a href="projects.html" class="text-slate-600 hover:text-slate-900 transition">All Projects</a>
                <a href="index.html#contact" class="text-slate-600 hover:text-slate-900 transition">Contact</a>
            `;
        }
        
        navMenu.innerHTML = navLinksHTML;
        mobileMenu.innerHTML = navLinksHTML;
    };

    const setupMobileMenuToggle = () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    };

    if (typeof config === 'undefined') {
        console.error("config.js is not loaded or config object is not defined.");
        return;
    }

    // --- DYNAMIC CONTENT POPULATION ---

    const populateSocialLinks = (selector) => {
        const container = document.querySelector(selector);
        if (!container) return;

        const socialSvgs = {
            github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
            linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
            instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
            facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
        };

        const socialLinksHTML = Object.entries(config.socials).map(([key, value]) => {
            if (value && socialSvgs[key]) {
                return `<a href="${value}" target="_blank" rel="noopener noreferrer" aria-label="${key}" class="text-slate-500 hover:text-slate-800 transition w-6 h-6">${socialSvgs[key]}</a>`;
            }
            return '';
        }).join('');
        container.innerHTML = socialLinksHTML;
    };

    // --- PAGE-SPECIFIC POPULATION ---
    if (page === 'index.html') {
        const heroName = document.getElementById('hero-name');
        if (heroName) heroName.textContent = `Hi, I'm ${config.name}`;

        const profilePic = document.getElementById('profile-picture');
        if(profilePic) profilePic.src = config.profilePictureUrl;

        const contactEmail = document.getElementById('contact-email');
        if (contactEmail) contactEmail.href = `mailto:${config.email}`;

        const skillsList = document.getElementById('skills-list');
        if (skillsList) {
            skillsList.innerHTML = config.skills.map(skill => `
                <li class="bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg text-center">${skill}</li>
            `).join('');
        }

        const experienceList = document.getElementById('experience-list');
        if (experienceList && config.experience) {
            experienceList.innerHTML = config.experience.map(job => `
                <div class="mb-8">
                    <div class="absolute -left-3.5 mt-1.5 w-6 h-6 bg-slate-300 rounded-full border-4 border-slate-50"></div>
                    <p class="text-sm text-slate-500 font-medium">${job.period}</p>
                    <h3 class="text-xl font-bold text-slate-800 mt-1">${job.role}</h3>
                    <p class="text-lg text-slate-600 font-semibold">${job.company}</p>
                    <p class="text-slate-600 mt-2">${job.description}</p>
                </div>
            `).join('');
        }
        populateSocialLinks('#social-links-hero');
    }
    
    const footerName = document.getElementById('footer-name');
    if (footerName) footerName.innerHTML = `&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.`;
    populateSocialLinks('#social-links-footer');

    // Initial setup calls that need to run after potential DOM population
    setupNavigation();
    setupMobileMenuToggle();
});
