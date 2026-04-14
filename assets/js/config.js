const config = {
    name: "Khoirul Anam",
    heroSubtitle: "Software Engineer, AI Engineer",
    heroDescription: "I'm a software engineer with experience in full-stack development and a deep interest in artificial intelligence. Passionate about solving complex problems and turning ideas into reality through technology.",
    cvDescription: "A results-driven Software Engineer & AI Engineer with over {years} years of professional experience delivering end-to-end solutions across web and mobile platforms. Specializing in React Native, Next.js, Node.js, and AI integration using LangChain, MCP Server, and agentic AI pipelines — consistently translating complex business requirements into clean, maintainable, and high-impact software. Committed to continuous learning and building products that create real, measurable value.",
    careerStartYear: 2022,
    profilePictureUrl: "assets/images/profile.jpeg",
    email: "anamskansamal@gmail.com",
    socials: {
        github: "https://github.com/kanam129",
        linkedin: "https://www.linkedin.com/in/k-anam/",
        instagram: "https://www.instagram.com/a_im88/",
        facebook: "https://facebook.com/aimagination88",
        website: "https://kanam129.github.io/my-portofolio/"
    },
    skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Rust",
        "Python",
        "LangChain",
        "MCP",
        "Langflow",
        "n8n",
        "Node.js",
        "Next.js",
        "React",
        "React Native",
        "Expo",
        "Express.js",
        "Fastify",
        "MySQL",
        "PostgreSQL",
        "Cloudflare Wrangler",
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
    education: [
        {
            degree: "Sistem Informasi",
            institution: "University of Trunojoyo Madura",
            level: "S1",
            period: "08/2019 - 08/2025",
            gpa: "3.83",
            description: "Balanced high academic performance with active participation in competitions and research, honing practical skills alongside theoretical knowledge.",
            achievements: [
                "2nd Place — Essay Competition, English Festival 2021",
                "Bronze Medal — National Applied Science Project Olympiad 2020",
                "Author — Khazanah: Jurnal Mahasiswa Volume 12 Issue 2",
                "2nd Place — TREN LKTIN 2020"
            ]
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
            description: 'Platform e-commerce mini-website per-merchant yang terintegrasi dengan ekosistem MPStore POS, lengkap dengan AI chat checkout, peta interaktif, dan deploy edge via Cloudflare Workers.',
            longDescription: `
                <p>The <strong>MPStore Miniweb</strong> is a multi-tenant e-commerce platform I built as an integrated feature within the MPStore POS ecosystem. Each merchant automatically gets their own branded storefront accessible at a unique URL (e.g., <code>toko.mpstore.co.id/[store-slug]</code>), requiring zero additional configuration from the business owner.</p>
                <p>I was responsible for the full end-to-end architecture — from designing the dynamic routing system in <strong>Next.js 14 App Router</strong> to integrating a complete shopping flow covering product browsing, cart management, shipping calculation, and payment processing. The platform supports digital product downloads as well, giving merchants flexibility over what they sell.</p>
                <p>A key highlight is the <strong>AI-powered chat checkout</strong> feature. Using <strong>Langflow</strong>, I built a conversational AI agent that can answer product questions and guide customers through the entire checkout process through a natural chat interface — reducing drop-off and improving conversion for small merchants.</p>
                <p>The platform also integrates <strong>interactive maps</strong> via Leaflet for address picking, <strong>geolocation</strong> for auto-detecting customer location, and <strong>QR code generation</strong> for digital product delivery. The entire application is deployed on <strong>Cloudflare Workers</strong> using OpenNext for edge-optimized performance globally.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Multi-tenant storefront — unique URL per merchant</li>
                    <li>Full e-commerce flow: product listing, cart, checkout, order tracking</li>
                    <li>AI chat-based checkout powered by Langflow</li>
                    <li>Interactive map & geolocation for delivery address</li>
                    <li>Digital product download support with QR code</li>
                    <li>Secure payment gateway integration</li>
                    <li>Edge deployment via Cloudflare Workers (OpenNext)</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Next.js 14, TypeScript, Tailwind CSS, Langflow, Leaflet, next-auth, Cloudflare Workers (OpenNext / Wrangler)</p>
            `,
            tags: ['Next.js', 'TypeScript', 'E-commerce', 'Multi-tenant', 'AI Chatbot', 'Langflow', 'Cloudflare Workers', 'Fullstack'],
            imageUrls: ['https://kanam129.github.io/my-portofolio/assets/images/miniweb_1.jpg', 'https://kanam129.github.io/my-portofolio/assets/images/miniweb_2.jpg'],
            liveUrl: 'https://toko.mpstore.co.id/mpixcafe',
            sourceUrl: '#'
        },
        {
            id: 'stock-analysis-mcp-server',
            title: 'Stock Analysis MCP Server',
            description: 'Dual-mode server analisis saham IDX & global dengan 16 tools teknikal, fundamental, dan berita — bisa dijalankan sebagai REST API maupun MCP Server untuk Claude Desktop.',
            longDescription: `
                <p><strong>Stock Analysis MCP Server</strong> adalah server analisis saham berbasis Python yang dirancang untuk mendukung dua mode operasi sekaligus: sebagai <strong>REST API</strong> (via FastAPI/uvicorn) dan sebagai <strong>MCP Server</strong> (Model Context Protocol) yang dapat terkoneksi langsung ke Claude Desktop atau editor seperti Cursor.</p>
                <p>Saya mengembangkan proyek ini secara personal untuk menjawab kebutuhan analisis saham IDX yang lebih mendalam dan otomatis. Versi ketiga (v3) hadir dengan perbaikan bug pada kolom Bollinger Bands di pandas-ta, pembaruan konstituen LQ45/IDX30/IDX80 ke periode resmi BEI 2026, serta penambahan indikator teknikal lanjutan seperti Stochastic Oscillator, ATR, ADX+DI, OBV, VWAP 20-hari, Williams %R, CCI, Golden/Death Cross, dan Ichimoku Cloud.</p>
                <p>Screening engine yang tersedia mendukung kombinasi filter fundamental dan teknikal secara bersamaan dengan preset siap pakai (value, dividend, growth, oversold, momentum, defensive, quality), serta sumber berita real-time tanpa API key melalui DuckDuckGo dan RSS feed dari CNBC Indonesia, Kontan, Bisnis.com, Reuters, Bloomberg, dan Financial Times.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Dual-mode: REST API (FastAPI) + MCP Server (stdio) dalam satu file</li>
                    <li>16 tools: teknikal dasar & lanjutan, fundamental, screening, berita</li>
                    <li>Indikator teknikal lanjutan: Stochastic, ATR, ADX, OBV, VWAP, Williams %R, CCI, Ichimoku Cloud, Golden/Death Cross</li>
                    <li>Screening saham IDX (LQ45/IDX30/IDX80/Sektoral) dengan 15+ filter fundamental & teknikal + 7 preset siap pakai</li>
                    <li>Berita ekonomi real-time via DuckDuckGo Search + 9 RSS feed Indonesia & global (tanpa API key)</li>
                    <li>In-memory caching untuk efisiensi request API</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Python, FastAPI, Uvicorn, MCP (Model Context Protocol), pandas, pandas-ta, NumPy, DuckDuckGo Search, feedparser</p>
            `,
            tags: ['Python', 'MCP Server', 'FastAPI', 'Stock Analysis', 'AI Tools'],
            imageUrls: [
                'assets/images/mcp-saham/1.png',
                'assets/images/mcp-saham/2.png',
                'assets/images/mcp-saham/3.png',
                'assets/images/mcp-saham/4.png',
            ],
            liveUrl: '#',
            sourceUrl: '#',
        },
        {
            id: 'garsindo-erp-dashboard',
            title: 'Garsindo ERP Dashboard',
            description: 'A custom-built internal ERP dashboard for a distribution company, covering the full sales cycle from quotation to invoice and payment, built with AdminJS.',
            longDescription: `
                <p><strong>Garsindo ERP Dashboard</strong> adalah sistem manajemen internal berbasis web yang dibangun khusus untuk perusahaan distribusi, mencakup seluruh siklus operasional bisnis mulai dari pengadaan, penjualan, hingga akuntansi.</p>
                <p>Saya bertanggung jawab penuh atas arsitektur dan pengembangan sistem ini sebagai fullstack developer. Proyek ini dibangun di atas <strong>AdminJS</strong> dengan backend <strong>Express.js</strong> dan <strong>Sequelize ORM</strong>, dengan kustomisasi mendalam pada setiap resource — termasuk custom action handlers, before/after hooks, dan komponen React kustom untuk masing-masing modul. Tantangan terbesar adalah merancang alur dokumen yang saling terhubung: Sales Quotation → Sales Order → Sales Delivery → Sales Invoice → Sales Payment, dengan logika agregasi otomatis dan validasi stok real-time di setiap tahapan.</p>
                <p>Sistem ini juga dilengkapi fitur cetak dokumen (invoice, surat jalan) berbasis template HTML, manajemen stok dengan FIFO stock movement, serta modul akuntansi dengan Chart of Account dan jurnal otomatis.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Alur penjualan lengkap: Quotation → Order → Delivery → Invoice → Payment</li>
                    <li>Manajemen stok real-time dengan FIFO stock movement dan multi-warehouse</li>
                    <li>Custom React components untuk input detail item, pajak, dan multi-dokumen selector</li>
                    <li>Cetak dokumen (invoice & surat jalan) berbasis template HTML kustom</li>
                    <li>Modul pembelian (Purchase Order, Receiving, Purchase Invoice, Payment)</li>
                    <li>Modul akuntansi dengan Chart of Account dan pelacakan piutang/hutang</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>AdminJS, React, TypeScript, Express.js, Sequelize ORM, PostgreSQL, Node.js</p>
            `,
            tags: ['AdminJS', 'TypeScript', 'Fullstack', 'ERP', 'Node.js', 'PostgreSQL'],
            imageUrls: [
                'assets/images/garsindo/1.jpeg',
                'assets/images/garsindo/2.jpeg',
                'assets/images/garsindo/3.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#',
        },
        {
            id: 'mpstore-payment-link',
            title: 'MPStore Payment Link & Invoice',
            description: 'A shareable payment link system integrated with the MPStore ecosystem, allowing merchants to send invoice links to customers for seamless multi-method payment.',
            longDescription: `
                <p><strong>MPStore Payment Link & Invoice</strong> adalah sistem pembayaran berbasis link yang dibangun sebagai bagian dari ekosistem MPStore. Merchant dapat mengirimkan link tagihan ke pelanggan, dan pelanggan cukup membuka link tersebut untuk melihat detail invoice dan langsung menyelesaikan pembayaran — tanpa perlu install aplikasi apapun.</p>
                <p>Saya mengerjakan project ini secara penuh sebagai fullstack developer. Tantangan utamanya adalah mengelola tiga mode integrasi payment sekaligus: flow standar MPStore (via order ID terenkripsi), flow H2H (Host-to-Host direct dengan bank), dan flow Web (integrasi third-party tanpa autentikasi MPStore). Setiap mode memiliki logika enkripsi payload, admin fee calculation, dan status polling yang berbeda. Admin fee dihitung secara dinamis — QRIS menggunakan reverse fee formula, kartu kredit pakai persentase flat, sementara virtual account mengambil harga fee dari API secara real-time.</p>
                <p>Seluruh aplikasi di-deploy di edge menggunakan <strong>Cloudflare Workers</strong> via OpenNext, sehingga response time payment page tetap cepat meskipun diakses dari berbagai region. QR code untuk bukti transaksi di-generate langsung di sisi client tanpa roundtrip ke server.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Shareable invoice link dengan enkripsi order ID untuk keamanan</li>
                    <li>Multi-method payment: QRIS, Virtual Account (multi-bank), Kartu Kredit</li>
                    <li>Dynamic admin fee calculator (reverse QRIS fee, flat CC rate, real-time VA fee)</li>
                    <li>Tiga mode integrasi: Standard, H2H (Host-to-Host), dan Web</li>
                    <li>Real-time payment status polling otomatis</li>
                    <li>QR code generation untuk bukti pembayaran digital</li>
                    <li>Edge deployment via Cloudflare Workers (OpenNext / Wrangler)</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Next.js 15, TypeScript, Tailwind CSS, Cloudflare Workers, OpenNext, Wrangler, Axios, Moment.js</p>
            `,
            tags: ['Next.js', 'TypeScript', 'Cloudflare Workers', 'Fullstack', 'Payment'],
            imageUrls: [
                'assets/images/payment-link/1.jpeg',
                'assets/images/payment-link/2.jpeg',
                'assets/images/payment-link/3.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#',
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
            id: 'mpstore-cashier-dashboard',
            title: 'MPStore Cashier Dashboard',
            description: 'Dashboard manajemen multi-branch untuk sistem kasir MPStore. Menyediakan tampilan agregasi data produk, sinkronisasi antar cabang, dan filtering canggih secara real-time.',
            longDescription: `
                <p><strong>MPStore Cashier Dashboard</strong> adalah sistem dashboard berbasis web yang dirancang untuk mengelola data operasional dari beberapa cabang toko (branch) sekaligus dalam satu antarmuka terpusat.</p>
                <p>Saya membangun sistem ini secara fullstack — mulai dari arsitektur backend API dengan Rust (Axum + SeaORM) yang performant, hingga frontend Next.js menggunakan pola BFF (Backend for Frontend) dengan Shadcn UI. Tantangan utamanya adalah merancang sistem filter berbasis JSON yang fleksibel di sisi Rust, serta memastikan sinkronisasi data produk antar branch berjalan konsisten dengan kontrol granular per cabang.</p>
                <p>Sistem ini menerapkan URL-synchronized filtering menggunakan React hooks (<code>useCallback</code>, <code>useMemo</code>), sehingga state filter tetap persisten saat navigasi. Backend Rust memproses query filter kompleks secara efisien langsung di sisi server.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Dashboard agregasi multi-branch dengan filter cabang dinamis</li>
                    <li>Manajemen produk dengan Advanced Filter Builder berbasis JSON</li>
                    <li>Sinkronisasi produk antar cabang (termasuk bulk sync "Sapu Jagat")</li>
                    <li>Kontrol hak edit harga per cabang via flag <code>sync_allow_custom_price</code></li>
                    <li>URL-synchronized filter state untuk UX yang konsisten</li>
                    <li>Autentikasi dan server-side data fetching dengan pola BFF</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Rust, Axum, SeaORM, Next.js, TypeScript, Shadcn UI, React, PostgreSQL</p>
            `,
            tags: ['Rust', 'Next.js', 'Fullstack', 'Dashboard', 'TypeScript', 'SeaORM'],
            imageUrls: [
                'assets/images/cashier-dashboard/1.jpeg',
                'assets/images/cashier-dashboard/2.jpeg',
                'assets/images/cashier-dashboard/3.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#',
        },
        {
            id: 'agendakota-app',
            title: 'AgendaKota — Event Management App',
            description: 'Aplikasi mobile untuk manajemen event end-to-end, mulai dari pembuatan event, penjualan tiket, hingga check-in peserta berbasis QR Code.',
            longDescription: `
                <p><strong>AgendaKota</strong> adalah platform manajemen event berbasis mobile yang dirancang untuk para organizer event di Indonesia. Aplikasi ini menyediakan ekosistem lengkap untuk mengelola seluruh siklus hidup sebuah event — dari pembuatan event dan organisasi, penjualan tiket berbayar maupun gratis, hingga check-in peserta secara real-time melalui scan QR Code.</p>
                <p>Saya mengerjakan project ini sebagai mobile frontend developer, membangun seluruh antarmuka menggunakan <strong>React Native (Expo)</strong> dengan <strong>NativeWind</strong> sebagai styling system. Tantangan utamanya adalah mengimplementasikan sistem autentikasi berlapis — termasuk login via Google OAuth, OTP, dan Two-Factor Authentication — serta membangun mekanisme keamanan request level frontend berupa JWT-signed <code>x-api-key</code> dengan AES-256-CBC payload encryption untuk setiap API call.</p>
                <p>Arsitektur aplikasi menggunakan Expo Router dengan file-based routing, dipadukan dengan React Hook Form + Zod untuk validasi form, dan design system kustom menggunakan token warna dan komponen yang konsisten di seluruh halaman dashboard, event, keuangan, dan profil.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Manajemen multi-organisasi dan multi-event dalam satu akun</li>
                    <li>Penjualan tiket berbayar dan gratis dengan sistem voucher diskon</li>
                    <li>QR Code scanner untuk check-in peserta secara real-time</li>
                    <li>Dashboard statistik organizer (active events, revenue, total peserta, check-in)</li>
                    <li>Login multi-method: Email/Password, Google OAuth, OTP via email, 2FA</li>
                    <li>API security layer dengan JWT x-api-key dan AES-256-CBC payload encryption</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>React Native, Expo (SDK 54), TypeScript, NativeWind, Expo Router, React Hook Form, Zod, Axios, Day.js, expo-camera, expo-auth-session</p>
            `,
            tags: ['React Native', 'Expo', 'TypeScript', 'Mobile', 'Event Management'],
            imageUrls: [
                'assets/images/agendakota/1.jpeg',
                'assets/images/agendakota/2.jpeg',
                'assets/images/agendakota/3.jpeg',
                'assets/images/agendakota/4.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#',
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
            id: 'pay-access',
            title: 'Pay Access',
            description: 'Aplikasi mobile fintech cross-platform untuk transfer uang internasional dengan konversi mata uang real-time. Mendukung berbagai metode pembayaran seperti QRIS dan kartu kredit/debit.',
            longDescription: `
                <p><strong>Pay Access</strong> adalah aplikasi mobile fintech yang dibangun untuk memfasilitasi transfer uang lintas negara dengan konversi mata uang secara real-time, dirancang agar dapat berjalan di Android, iOS, maupun web dari satu codebase.</p>
                <p>Saya mengerjakan project ini sebagai personal project fullstack — mulai dari arsitektur navigasi berbasis file-system routing menggunakan Expo Router, integrasi REST API untuk autentikasi dan manajemen penerima, hingga seluruh tampilan UI menggunakan NativeWind. Tantangan utamanya adalah memastikan pengalaman yang konsisten antara platform mobile dan web sambil tetap menjaga performa dengan teknik memoization (<code>useCallback</code>, <code>useMemo</code>).</p>
                <p>Project ini menggunakan event-driven state management antar screen agar data seperti currency yang dipilih dan metode pembayaran dapat dikomunikasikan secara efisien tanpa overhead Redux yang berlebihan.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Transfer uang internasional dengan konversi real-time (USD ↔ IDR dan multi-currency)</li>
                    <li>Dukungan metode pembayaran QRIS dan kartu kredit/debit dengan alur berbeda</li>
                    <li>Manajemen daftar penerima (tambah, simpan, pilih bank & nomor rekening)</li>
                    <li>Riwayat transaksi terkelompok per tanggal (hari ini, kemarin, minggu ini)</li>
                    <li>Autentikasi aman dengan Expo Secure Store & session management</li>
                    <li>Dukungan multi-bahasa (i18n) dan tampilan responsif untuk mobile & web</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>React Native, Expo SDK 54, Expo Router, TypeScript, NativeWind (Tailwind CSS), Redux Toolkit, Axios, React Native Reanimated, i18n-js, Expo Secure Store, Expo Haptics</p>
            `,
            tags: ['React Native', 'Expo', 'Fintech', 'TypeScript', 'NativeWind', 'Fullstack'],
            imageUrls: [
                'https://placehold.co/600x400/0d1628/63b3ed?text=Pay+Access',
            ],
            liveUrl: '#',
            sourceUrl: '#',
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
