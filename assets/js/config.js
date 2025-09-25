const config = {
    name: "Khoirul Anam",
    heroSubtitle: "Software Engineer, AI Engineer",
    heroDescription: "I am a software engineer with experience in full-stack development and a deep interest in artificial intelligence (AI). I am passionate about solving complex problems and turning ideas into reality through technology.",
    profilePictureUrl: "https://i.ibb.co/wr2fFS7/Whats-App-Image-2025-08-29-at-13-25-17.jpg",
    email: "anamskansamal@gmail.com",
    socials: {
        github: "https://github.com/kanam129",
        linkedin: "https://linkedin.com/in/k-anam",
        instagram: "https://instagram.com/a_im88",
        facebook: "https://facebook.com/aimagination88",
    },
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Python",
        "Langflow",
        "Node.js",
        "Next.js",
        "React",
        "React Native",
        "Express.js",
        "Fastify",
        "Git",
        "Tailwind CSS",
        "HTML5 & CSS3",
    ],
    experience: [
        {
            company: "PT Mitra Pedagang Indonesia",
            role: "Full Stack Developer",
            period: "Jan 2022 - Present",
            description: "Responsible for maintaining and developing new features for the cashier application (Point of Sale), ensuring the system runs smoothly and meets business needs."
        },
        {
            company: "Solvin",
            role: "Front End Developer",
            period: "Jun 2023 - Present",
            description: "Building a legal consultation application from scratch using React Native, with a focus on developing an intuitive and responsive user interface (UI)."
        }
    ],
    projects: [
        {
            id: 'mpstore',
            title: 'MPStore App',
            description: 'A SuperApp for Indonesian MSMEs, offering a comprehensive suite of digital services and a robust POS system.',
            longDescription: `
                <p><strong>MPStore</strong> is a comprehensive SuperApp developed for Indonesian Micro, Small, and Medium Enterprises (MSMEs), primarily focusing on traditional kiosks like Warung Madura. My key role in this project was in developing the Point of Sale (POS) system, which is a core feature of the application.</p>
                <p>I started as a frontend developer, crafting a highly responsive and intuitive cashier interface using <strong>React Native</strong>. The goal was to create a seamless checkout process that is fast and efficient for business owners. Following the successful implementation of the frontend, I transitioned into a full-stack role for the POS feature.</p>
                <p>In this full-stack capacity, I was responsible for the entire POS system lifecycle, from user interface design to backend logic. My work included integrating the app with a backend for real-time inventory management, processing digital payments via QRIS, and generating financial reports. This experience allowed me to build a scalable and reliable POS solution that fully supports daily business operations.</p>
                <p>The app also provides other valuable features such as digital product sales (PPOB), supply chain management (FMCG), and access to financial services for MSMEs.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Real-time Point of Sale (POS) system</li>
                    <li>Inventory management</li>
                    <li>QRIS digital payment processing</li>
                    <li>Financial report generation</li>
                    <li>PPOB (digital product sales)</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>React Native, Node.js, Express.js, MySQL, Redis</p>
            `,
            tags: ['React Native', 'Mobile', 'POS', 'Fullstack', 'MSME'],
            imageUrls: [
                'https://kanam129.github.io/my-portofolio/assets/images/mpstore_1.jpg',
                'https://kanam129.github.io/my-portofolio/assets/images/mpstore_2.jpg',
                'https://kanam129.github.io/my-portofolio/assets/images/mpstore_3.jpg',
            ],
            liveUrl: 'http://mpstore.co.id/app',
            sourceUrl: '#'
        },
        {
            id: 'mpstore-miniweb',
            title: 'MPStore Miniweb',
            description: 'An e-commerce mini-website platform integrated within the MPStore POS system, enabling merchants to sell their own products.',
            longDescription: `
                <p>The <strong>MPStore Miniweb</strong> project is an innovative e-commerce platform that I developed as an integrated feature within the main MPStore Point of Sale (POS) application. This platform allows business owners to create and manage their own online storefront directly from the POS system.</p>
                <p>My responsibilities included developing the full end-to-end e-commerce functionality, from product listing and inventory management, to handling secure payment gateways and shipment tracking. A key highlight of this project is the integration of an <strong>AI-powered chat feature</strong> that streamlines the customer checkout process. Customers can interact with the AI to complete their purchases quickly and seamlessly.</p>
                <p>This project has enhanced the MPStore ecosystem by empowering small businesses with a powerful digital sales channel. It was a comprehensive full-stack experience that showcased my skills in both front-end and back-end development, ensuring a smooth and efficient user experience for both merchants and customers.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>E-commerce storefront creation and management</li>
                    <li>Product and inventory management</li>
                    <li>AI-powered chat for customer checkout</li>
                    <li>Secure payment gateway integration</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>React.js, Next.js, Node.js, Express.js, Langflow, Python</p>
            `,
            tags: ['React Native', 'ReactJS', 'NextJS', 'E-commerce', 'AI', 'Fullstack'],
            imageUrls: ['https://kanam129.github.io/my-portofolio/assets/images/miniweb_1.jpg', 'https://kanam129.github.io/my-portofolio/assets/images/miniweb_2.jpg'],
            liveUrl: 'https://toko.mpstore.co.id/mpixcafe',
            sourceUrl: '#'
        },
        {
            id: 'personal-project-erpnext-ai',
            title: 'ERPNext AI Integration',
            description: 'A personal project to integrate an AI assistant into ERPNext, enabling conversational control over business data and processes.',
            longDescription: `
                <p>This project focused on integrating an AI assistant with <strong>ERPNext</strong>, a comprehensive enterprise resource planning system. Using <strong>Langflow</strong>, I created an AI that is embedded within the ERPNext interface.</p>
                <p>The AI is able to interact with the ERPNext database by making API calls, allowing it to perform a range of actions based on user commands. This includes creating, viewing, updating, and deleting data entries. For example, a user can simply ask the AI to "create a new sales order for customer X" or "show me the stock level of product Y," and the AI will execute the action by interacting with the ERPNext API.</p>
                <p>This project showcases my ability to connect advanced AI models with existing business systems to create more intuitive and efficient user experiences.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Conversational AI assistant for ERPNext</li>
                    <li>Create, Read, Update, Delete (CRUD) operations via natural language</li>
                    <li>API-based interaction with ERPNext</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Langflow, Python, ERPNext API, Docker</p>
            `,
            tags: ['AI', 'ERPNext', 'Langflow', 'API', 'Fullstack'],
            imageUrls: [
                'https://kanam129.github.io/my-portofolio/assets/images/erpnext_1.png',
                'https://kanam129.github.io/my-portofolio/assets/images/erpnext_2.jpeg',
                'https://kanam129.github.io/my-portofolio/assets/images/erpnext_3.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'solvin-app',
            title: 'Solvin App',
            description: 'A legal consultation platform connecting users with legal experts and lawyers via a chat-based system.',
            longDescription: `
                <p><strong>Solvin</strong> is a dual-application legal consultation platform that I built from the ground up as a frontend developer. My main task was to create two separate, yet interconnected, mobile applications for both users and legal professionals.</p>
                <p>Using <strong>React Native</strong>, I developed a user-friendly app where individuals can hire lawyers and consult with legal experts through a real-time chat feature. The application allows users to ask questions, share documents, and receive professional legal advice conveniently from their mobile devices.</p>
                <p>Simultaneously, I developed a dedicated app for lawyers and legal experts. This app provides them with a streamlined dashboard to manage their consultations, communicate with clients, and handle case files. Both applications are cross-platform, running seamlessly on both <strong>Android</strong> and <strong>iOS</strong>, ensuring a wide reach and accessibility for all users.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Dual mobile applications for clients and legal experts</li>
                    <li>Real-time chat for legal consultations</li>
                    <li>Document sharing and case management</li>
                    <li>Cross-platform support (Android & iOS)</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>React Native, Firebase, WebSocket</p>
            `,
            tags: ['React Native', 'Mobile', 'Frontend', 'Legal Tech', 'Chat'],
            imageUrls: [
                'https://kanam129.github.io/my-portofolio/assets/images/solvin_1.jpg',
                'https://kanam129.github.io/my-portofolio/assets/images/solvin_2.jpg',
            ],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'personal-project-puppeteer-langflow',
            title: 'AI Browser Automation',
            description: 'A personal project utilizing Puppeteer and Langflow to create an AI that can interact with a web browser based on natural language commands.',
            longDescription: `
                <p>This project is a personal exploration into the capabilities of AI-driven browser automation. I used <strong>Puppeteer</strong>, a Node.js library, to control a headless browser, and integrated it with <strong>Langflow</strong>, a no-code tool for building and deploying AI applications.</p>
                <p>The core functionality of this project is to allow an AI to interpret natural language commands and execute actions on a web browser, such as clicking buttons, filling out forms, or navigating to specific pages. This demonstrates the potential for creating intelligent agents that can automate complex web-based tasks and streamline workflows.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Natural language control of a web browser</li>
                    <li>Automated web tasks (form filling, navigation, etc.)</li>
                    <li>Integration with Langflow for AI processing</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Puppeteer, Node.js, Langflow, Python</p>
            `,
            tags: ['AI', 'Puppeteer', 'Langflow', 'Automation', 'Node.js'],
            imageUrls: ['https://placehold.co/400x250/a1a1aa/3f3f46?text=AI+Browser+Automation'],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'al-asror-website',
            title: 'Pondok Tahfizil Qur’an Al-Asror Website',
            description: 'A comprehensive website for a Qur’an memorization school, featuring a public-facing company profile and an internal management system.',
            longDescription: `
                <p>I developed the official website for <strong>Pondok Tahfizil Qur’an Al-Asror</strong> using the <strong>Laravel</strong> framework. The website is divided into two main parts: a public-facing company profile and a comprehensive internal management system.</p>
                <p>The public section showcases the institution’s mission and includes an article management system for sharing news and achievements. The core of my work was on the internal system, which provides robust features for administration and data management. This includes modules for managing classes and buildings, student and alumni data, dormitories, and tracking the institution’s achievements.</p>
                <p>This project was a full-stack experience that demonstrated my ability to build complex web applications, manage databases, and create secure systems for both public interaction and internal operations.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Public-facing company profile with article management</li>
                    <li>Internal management system for students, classes, and dormitories</li>
                    <li>Alumni and achievement tracking</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Laravel, PHP, MySQL, Bootstrap</p>
            `,
            tags: ['Laravel', 'PHP', 'Web Development', 'Fullstack', 'CMS'],
            imageUrls: ['https://placehold.co/400x250/a1a1aa/3f3f46?text=Al-Asror+Website'],
            liveUrl: '#',
            sourceUrl: '#'
        },
    ]
};

// Make projects available globally for other scripts
const projects = config.projects;
