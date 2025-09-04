const config = {
    name: "Khoirul Anam",
    heroSubtitle: "Software Engineer, AI Engineer",
    heroDescription: "Saya seorang software engineer dengan pengalaman di bidang full-stack development dan ketertarikan mendalam pada kecerdasan buatan (AI). Saya bersemangat dalam memecahkan masalah kompleks dan mengubah ide menjadi kenyataan melalui teknologi.",
    profilePictureUrl: "https://i.ibb.co.com/wr2fFS7J/Whats-App-Image-2025-08-29-at-13-25-17.jpg",
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
            description: "Bertanggung jawab untuk memelihara dan mengembangkan fitur-fitur baru pada aplikasi kasir (Point of Sale), memastikan sistem berjalan lancar dan memenuhi kebutuhan bisnis."
        },
        {
            company: "Solvin",
            role: "Front End Developer",
            period: "Jun 2023 - Present",
            description: "Membangun aplikasi konsultasi hukum dari awal menggunakan React Native, dengan fokus pada pengembangan antarmuka pengguna (UI) yang intuitif dan responsif."
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
            `,
            tags: ['React Native', 'Mobile', 'POS', 'Fullstack', 'MSME'],
            imageUrl: 'https://via.placeholder.com/400x250/a1a1aa/3f3f46?text=MPStore+App',
            liveUrl: 'http://mpstore.co.id/app',
            sourceUrl: '#'
        },
        {
            id: 'mpstore-miniweb',
            title: 'MPStore Miniweb',
            description: 'An e-commerce mini-website platform integrated within the MPStore POS system, enabling merchants to sell their own products.',
            longDescription: `
                <p>The <strong>MPStore Miniweb</strong> project is an innovative e-commerce platform that I developed as an integrated feature within the main MPStore Point of Sale (POS) application. This platform allows business owners to create and manage their own online storefront directly from the POS system.</p>
                <p>My responsibilities included developing the full end-to-end e-commerce functionality, from product listing and inventory management to handling secure payment gateways and shipment tracking. A key highlight of this project is the integration of an <strong>AI-powered chat feature</strong> that streamlines the customer checkout process. Customers can interact with the AI to complete their purchases quickly and seamlessly.</p>
                <p>This project has enhanced the MPStore ecosystem by empowering small businesses with a powerful digital sales channel. It was a comprehensive full-stack experience that showcased my skills in both front-end and back-end development, ensuring a smooth and efficient user experience for both merchants and customers.</p>
            `,
            tags: ['React Native', 'ReactJS', 'NextJS', 'E-commerce', 'AI', 'Fullstack'],
            imageUrl: 'https://via.placeholder.com/400x250/a1a1aa/3f3f46?text=MPStore+Miniweb',
            liveUrl: 'https://toko.mpstore.co.id/mpixcafe',
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
