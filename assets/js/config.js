const config = {
    name: "Khoirul Anam",
    heroSubtitle: "Full-Stack & AI Engineer",
    heroDescription: "Shipping production software for Indonesian MSMEs — POS systems, AI e-commerce, and multi-tenant platforms — for 4+ years.",
    cvDescription: "Full-Stack & AI Engineer with {years}+ years delivering end-to-end production systems across web and mobile. Built a POS platform used by thousands of MSME merchants, an AI-powered multi-tenant e-commerce deployed on Cloudflare edge, and a 16-tool stock analysis MCP Server for IDX markets — using React Native, Next.js, Node.js, Rust, and LangChain. Focused on systems that ship fast, scale cleanly, and create measurable business value.",
    careerStartYear: 2022,
    profilePictureUrl: "assets/images/profile.jpeg",
    email: "anamskansamal@gmail.com",
    socials: {
        github: "https://github.com/kanam129",
        linkedin: "https://www.linkedin.com/in/k-anam/",
        instagram: "https://www.instagram.com/a_im88/",
        facebook: "https://facebook.com/aimagination88",
        website: "https://kanam.web.id"
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
            description: "Delivered a full-stack POS system used daily by MSME merchants across Indonesia — covering real-time inventory, QRIS payment processing, and automated financial reporting — by owning the complete cycle from React Native frontend to Node.js and Express.js backend."
        },
        {
            company: "Solvin",
            role: "Front End Developer",
            period: "Jun 2023 - Present",
            description: "Shipped a dual cross-platform legal consultation app from zero to production on Android and iOS, enabling real-time client–lawyer communication, by building both the user and lawyer interfaces using React Native and Firebase."
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
            description: 'Reduced daily checkout friction for thousands of MSME merchants by delivering a full POS system — inventory, QRIS payments, and financial reports — built end-to-end with React Native and Node.js.',
            longDescription: `
                <p>Delivered a full-stack POS system that became the daily operational backbone for thousands of Indonesian MSME merchants — by owning every layer from the React Native cashier UI to the Node.js/Express.js backend, within a SuperApp ecosystem targeting traditional warung and kiosk businesses.</p>
                <p>Reduced checkout complexity and payment failure rate by building a real-time cashier interface covering inventory look-up, QRIS payment processing, and automated receipt generation — then scaled to full-stack ownership to design the backend data model and integrate financial reporting used in daily reconciliation.</p>
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
                'https://kanam.web.id/assets/images/mpstore_1.jpg',
                'https://kanam.web.id/assets/images/mpstore_2.jpg',
                'https://kanam.web.id/assets/images/mpstore_3.jpg',
            ],
            liveUrl: 'http://mpstore.co.id/app',
            sourceUrl: '#'
        },
        {
            id: 'mpstore-miniweb',
            title: 'MPStore Miniweb',
            description: 'Enabled zero-config branded storefronts for every MPStore merchant by architecting a multi-tenant Next.js 14 platform with AI chat checkout, deployed globally on Cloudflare Workers edge.',
            longDescription: `
                <p>Enabled zero-configuration branded storefronts for every MPStore merchant — each accessible at a unique URL with no setup required — by designing a dynamic multi-tenant routing system in Next.js 14 App Router, owning the full architecture from product browsing to QRIS payment completion.</p>
                <p>Improved merchant conversion by integrating an AI-powered chat checkout, allowing customers to browse products and complete the entire purchase through natural conversation — without leaving the page or installing an app.</p>
                <p>Reduced global latency for all storefronts by deploying the entire platform on Cloudflare Workers via OpenNext edge, with client-side QR code generation for digital product delivery — eliminating server roundtrips at the moment of purchase.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Multi-tenant storefront — unique URL per merchant</li>
                    <li>Full e-commerce flow: product listing, cart, checkout, order tracking</li>
                    <li>AI chat-based checkout</li>
                    <li>Interactive map & geolocation for delivery address</li>
                    <li>Digital product download support with QR code</li>
                    <li>Secure payment gateway integration</li>
                    <li>Edge deployment via Cloudflare Workers (OpenNext)</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Next.js 14, TypeScript, Tailwind CSS, Leaflet, next-auth, Cloudflare Workers (OpenNext / Wrangler)</p>
            `,
            tags: ['Next.js', 'TypeScript', 'E-commerce', 'Multi-tenant', 'AI Chatbot', 'Cloudflare Workers', 'Fullstack'],
            imageUrls: ['https://kanam.web.id/assets/images/miniweb_1.jpg', 'https://kanam.web.id/assets/images/miniweb_2.jpg'],
            liveUrl: 'https://toko.mpstore.co.id/mpixcafe',
            sourceUrl: '#'
        },
        {
            id: 'stock-analysis-mcp-server',
            title: 'Stock Analysis MCP Server',
            description: 'Built a 16-tool IDX stock analysis engine — covering technical indicators, fundamental screening, and real-time news — runnable as both a REST API and a native MCP Server for Claude Desktop, using Python and FastAPI.',
            longDescription: `
                <p>Enabled advanced market analysis for Indonesian stocks without paid API costs by building a dual-mode engine — REST API and native MCP Server — that integrates 15+ technical/fundamental filters and real-time news feeds directly into Claude Desktop.</p>
                <p>Improved analytical accuracy by shipping version 3, which included bug fixes for Bollinger Bands, updated 2026 IDX constituent data, and the addition of 9 advanced market indicators (Stochastic, Ichimoku, VWAP, etc.), enabling professional-grade screening within an AI conversational interface.</p>
                <p>Minimized infrastructure overhead by implementing in-memory caching for redundant API requests, ensuring fast performance for the 16 available analysis tools while leveraging real-time data from 9 Indonesian and global sources.</p>
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
            description: 'Cut manual sales cycle overhead by building a full internal ERP — Quotation to Payment in one connected flow — with real-time FIFO stock management and automated accounting, using AdminJS, Express.js, and PostgreSQL.',
            longDescription: `
                <p>Cut manual sales cycle overhead for a distribution company by architecting an integrated ERP flow (Quotation → Order → Delivery → Invoice → Payment) — using AdminJS, Sequelize ORM, and PostgreSQL — to automate document generation and stock validation as the sole fullstack developer.</p>
                <p>Eliminated data fragmentation by replacing manual tracking with a unified source of truth, featuring deep customization including custom React components for item entry and per-module hooks for real-time FIFO stock movement and multi-warehouse management.</p>
                <p>Automated accounting workflows by building a finance module that converts document stages into automated journal entries, drastically reducing reconciliation time compared to the previous manual bookkeeping method.</p>
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
            description: 'Eliminated payment integration complexity for merchants by building a shareable invoice link system supporting QRIS, multi-bank Virtual Account, and Credit Card — with dynamic fee calculation and edge deployment on Cloudflare Workers.',
            longDescription: `
                <p>Eliminated payment friction for MPStore merchants by building a shareable invoice link system — customers open a link, review the invoice, and pay without installing any app — handling three integration modes (Standard, H2H, and Web) with separate encryption logic and status polling per mode, as the sole fullstack developer.</p>
                <p>Prevented payment amount discrepancies by implementing dynamic admin fee calculation: reverse QRIS fee formula, flat credit card percentage, and real-time Virtual Account fee fetched from the payment provider API — ensuring the amount customers see before confirming is always accurate.</p>
                <p>Maintained fast page load for all payment flows by deploying on Cloudflare Workers edge via OpenNext, with client-side QR code generation for payment proof — eliminating the server roundtrip at the final confirmation step.</p>
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
            description: 'Enabled natural language control of ERP business data — full CRUD operations via conversational commands — by integrating a Langflow AI agent directly into the ERPNext interface via its REST API.',
            longDescription: `
                <p>Enabled non-technical staff to perform full CRUD operations on ERPNext business data by integrating a Langflow AI agent into the dashboard, which interprets natural language commands and executes them via REST API calls.</p>
                <p>Reduced data entry and operational complexity by streamlining tasks like "create sales order" or "check inventory" into conversational prompts, effectively removing the need for manual navigation through deep menu trees.</p>
                <p>Demonstrated the feasibility of AI-driven business process automation by deploying the Langflow-to-API bridge, allowing for scalable, text-based interaction with complex ERP datasets.</p>
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
                'https://kanam.web.id/assets/images/erpnext_1.png',
                'https://kanam.web.id/assets/images/erpnext_2.jpeg',
                'https://kanam.web.id/assets/images/erpnext_3.jpeg',
            ],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'mpstore-cashier-dashboard',
            title: 'MPStore Cashier Dashboard',
            description: 'Reduced multi-branch data reconciliation effort by building a centralized dashboard with Advanced JSON filter builder and bulk product sync, using a performant Rust (Axum + SeaORM) backend and a Next.js frontend.',
            longDescription: `
                <p>Reduced multi-branch reconciliation effort for administrators by building a centralized management dashboard — using a Rust (Axum + SeaORM) backend and Next.js BFF frontend — that aggregates complex store data from multiple branches into a single unified interface.</p>
                <p>Increased operational efficiency for large inventories by engineering a server-side JSON filter builder, allowing admins to execute complex queries across thousands of records with zero performance degradation.</p>
                <p>Ensured consistent pricing and catalog management across branches by developing a "Sapu Jagat" bulk product sync system, providing granular control over price overrides while maintaining branch-specific operational flexibility.</p>
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
            description: 'Built an end-to-end event management platform enabling ticket sales, QR-based attendee check-in, and multi-org management — secured with layered auth (Google OAuth, OTP, 2FA) — using React Native, Expo SDK 54, and TypeScript.',
            longDescription: `
                <p>Enabled end-to-end event management by building a multi-platform mobile application — handling ticket sales, revenue tracking, and real-time QR check-ins — using React Native with Expo SDK 54 and TypeScript.</p>
                <p>Secured sensitive user and financial data against unauthorized access by implementing a multi-layered authentication strategy: combining Google OAuth, OTP, and 2FA with AES-256-CBC payload encryption and JWT-signed API keys for every request.</p>
                <p>Optimized frontend development velocity by creating a custom design system and reusable component library, ensuring UI consistency across dashboard, finance, and ticketing screens while maintaining high performance via Expo Router.</p>
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
            description: 'Shipped a dual cross-platform app — client and lawyer interfaces — enabling real-time legal consultation via chat with document sharing, built from zero to production on Android and iOS using React Native and Firebase.',
            longDescription: `
                <p>Enabled direct access to professional legal advice by shipping a dual-interface mobile application (Client and Lawyer apps) from zero to production on Android and iOS, using a unified React Native codebase.</p>
                <p>Reduced the friction of hiring lawyers by building a real-time, secure chat system that supports document sharing and case file management, allowing users to consult and receive professional guidance instantly from their mobile devices.</p>
                <p>Streamlined the entire legal consultation workflow by integrating Firebase for real-time state management, providing immediate communication between lawyers and clients while maintaining secure data handling for sensitive legal records.</p>
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
                'https://kanam.web.id/assets/images/solvin_1.jpg',
                'https://kanam.web.id/assets/images/solvin_2.jpg',
            ],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'pay-access',
            title: 'Pay Access',
            description: 'Built a cross-platform fintech app enabling international money transfers with real-time currency conversion and multi-method payment support (QRIS, Credit Card) — delivered for Android, iOS, and web from a single React Native + Expo codebase.',
            longDescription: `
                <p>Enabled international money transfers and cross-platform financial management by delivering a unified mobile and web application built with React Native and Expo, architected to run seamlessly on Android, iOS, and browsers via Expo Router.</p>
                <p>Ensured smooth user performance under heavy financial workflows by applying advanced memoization techniques (useCallback, useMemo) and event-driven state management to track currency conversion and payment selection without Redux overhead.</p>
                <p>Enhanced accessibility for global users by implementing multi-language support (i18n) and a date-grouped transaction history system, delivering a clean, readable financial interface regardless of the user's region or device.</p>
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
            description: 'Enabled natural language browser control — click, fill, navigate — without explicit scripts, by connecting an AI agent with Puppeteer to interpret and execute user intent on live web pages.',
            longDescription: `
                <p>Enabled end-to-end web automation via natural language by connecting an AI agent with Puppeteer, allowing users to execute complex browser tasks — navigating, clicking, and form filling — through simple plain-text prompts without writing a single script.</p>
                <p>Reduced manual script authoring by building an intent-to-action pipeline where the AI agent translates user commands into specific Puppeteer directives, enabling rapid prototyping and automation of standard web operations.</p>
                <p>Demonstrated AI-driven browser control for routine tasks, proving that complex web interactions can be handled autonomously without hard-coded logic for every individual step.</p>
                <br>
                <h4>Key Features:</h4>
                <ul>
                    <li>Natural language control of a web browser</li>
                    <li>Automated web tasks (form filling, navigation, etc.)</li>
                    <li>AI agent-driven browser execution pipeline</li>
                </ul>
                <br>
                <h4>Technical Stack:</h4>
                <p>Puppeteer, Node.js, Python</p>
            `,
            tags: ['AI', 'Puppeteer', 'Automation', 'Node.js'],
            imageUrls: ['https://placehold.co/400x250/a1a1aa/3f3f46?text=AI+Browser+Automation'],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: 'al-asror-website',
            title: 'Pondok Tahfizil Qur’an Al-Asror Website',
            description: 'Delivered a full institutional web presence — public company profile plus an internal management system for students, alumni, classes, and achievements — using Laravel and MySQL.',
            longDescription: `
                <p>Delivered a full institutional web presence for Pondok Tahfizil Qur'an Al-Asror — including a public profile with article management and a complete internal management system — by building end-to-end in Laravel and MySQL as the sole developer.</p>
                <p>Reduced administrative overhead for institution staff by centralizing all operational data into one internal system: student and alumni records, class and building management, dormitory tracking, and achievement logs — replacing scattered spreadsheet-based management with a single structured database.</p>
                <p>Demonstrated the ability to manage full-stack requirements, from creating secure public content delivery to architecting database schemas for complex administrative internal operations, significantly modernizing the institution's digital capabilities.</p>
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
