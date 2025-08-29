const config = {
    name: "John Doe",
    profilePictureUrl: "https://via.placeholder.com/150",
    email: "your.email@example.com",
    socials: {
        github: "https://github.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        instagram: "https://instagram.com/johndoe",
        facebook: "https://facebook.com/johndoe",
    },
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React",
        "Vue.js",
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "MongoDB",
        "PostgreSQL",
        "Docker",
        "Git & GitHub",
        "Tailwind CSS",
        "HTML5 & CSS3",
    ],
    experience: [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Software Engineer",
            period: "Jan 2022 - Present",
            description: "Led the development of a new client-facing analytics dashboard using React and D3.js. Mentored junior engineers and improved code quality by implementing a new linting and testing pipeline."
        },
        {
            company: "Innovate Co.",
            role: "Software Engineer",
            period: "Jun 2019 - Dec 2021",
            description: "Developed and maintained features for a large-scale e-commerce platform using Vue.js and Node.js. Collaborated with cross-functional teams to deliver high-quality software in an agile environment."
        },
        {
            company: "Digital Agency",
            role: "Junior Web Developer",
            period: "Jul 2018 - May 2019",
            description: "Built responsive websites for various clients using HTML, CSS, and JavaScript. Gained experience with CMS platforms like WordPress."
        }
    ],
    projects: [
        {
            id: 'project-alpha',
            title: 'Project Alpha',
            description: 'A web application for managing tasks and boosting productivity. Built with a modern frontend framework and a robust backend.',
            longDescription: 'Project Alpha is a full-featured task management solution designed for teams. It includes features like user authentication, real-time collaboration, project boards, and deadline tracking. The backend is a RESTful API built with Node.js and Express, connected to a MongoDB database for flexible data storage.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB'],
            imageUrl: 'https://via.placeholder.com/400x250/cbd5e1/475569?text=Project+Alpha',
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'project-beta',
            title: 'Project Beta',
            description: 'A mobile-first e-commerce platform with a focus on user experience and performance. Features a clean design and intuitive navigation.',
            longDescription: 'Project Beta is a headless e-commerce site built with Vue.js and Tailwind CSS for a lightning-fast user interface. It integrates with Firebase for backend services like authentication, Firestore database, and cloud functions for payment processing. The focus was on creating a seamless shopping experience from product discovery to checkout.',
            tags: ['Vue.js', 'Tailwind CSS', 'Firebase'],
            imageUrl: 'https://via.placeholder.com/400x250/cbd5e1/475569?text=Project+Beta',
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'project-gamma',
            title: 'Project Gamma',
            description: 'An open-source data visualization library for creating interactive charts and graphs. Published as an npm package.',
            longDescription: 'Project Gamma is a lightweight and modular data visualization library built with pure JavaScript and D3.js. It allows developers to easily create beautiful and interactive charts (bar, line, pie, etc.) with a simple API. The library is highly customizable and was published as a public npm package.',
            tags: ['JavaScript', 'D3.js', 'SVG', 'NPM'],
            imageUrl: 'https://via.placeholder.com/400x250/cbd5e1/475569?text=Project+Gamma',
            liveUrl: '#',
            sourceUrl: '#'
        },
    ]
};

// Make projects available globally for other scripts
const projects = config.projects;