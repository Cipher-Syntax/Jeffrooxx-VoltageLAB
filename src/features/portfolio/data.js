export const student = {
    name: "Jeffrey A. Toong Jr.",
    program: "BSIT — Electrical Tecnology",
    school: "Zamboanga Peninsula Polytechnic State University",
    year: "Batch 2026",
    email: "your.email@gmail.com",           
    phone: "+63 912 345 6789",                
    location: "Zamboanga City, Philippines",
    linkedin: "linkedin.com/in/yourprofile",   
    availability: "Available for Work",
    bio: [
        "Hi, I'm Jeffrey A. Toong Jr. — a BSIT graduate majoring in Electrical Tecnology at Zamboanga Peninsula Polytechnic State University. I specialize in translating architectural concepts into precise, well-detailed technical drawings.",
        "My training covers everything from freehand sketching and orthographic projection to AutoCAD drafting, 3D modeling in SketchUp, and architectural visualization. I take pride in the cleanliness and accuracy of every plate I produce.",
        "I'm driven by a passion for design and construction, and I aspire to work as an architectural drafter and eventually become a licensed architect."
    ]
};

export const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'ojt', label: 'OJT' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
];

export const stats = [
    { value: '400', label: 'OJT Hours' },
    { value: '8', label: 'Core Skills' },
    { value: '4', label: 'Projects' },
    { value: '6', label: 'Certificates' },
];

export const skills = [
    { name: 'Electrical Wiring & Installation', level: 90, group: 'Installation' },
    { name: 'PLC Programming', level: 75, group: 'Automation' },
    { name: 'AutoCAD Electrical', level: 80, group: 'Design' },
    { name: 'Motor Control Systems', level: 85, group: 'Control' },
    { name: 'Panel Board Installation', level: 88, group: 'Power' },
    { name: 'Arduino / Microcontrollers', level: 70, group: 'Embedded' },
    { name: 'Circuit Analysis', level: 82, group: 'Diagnostics' },
    { name: 'Electrical Safety Protocols', level: 95, group: 'Safety' },
];

export const projects = [
    {
        slug: 'automated-lighting-control',
        title: 'Automated Lighting Control System',
        description: 'Designed and built an automated lighting setup using motion and light sensors for energy-efficient building simulation.',
        year: '2024',
        tags: ['Arduino', 'Sensors', 'Wiring'],
    },
    {
        slug: 'motor-speed-controller',
        title: 'Motor Speed Controller',
        description: 'Built a PWM-based motor speed controller circuit with manual and automated modes for a three-phase motor model.',
        year: '2024',
        tags: ['PWM', 'Motor Control', 'Circuit Design'],
    },
    {
        slug: 'solar-panel-layout',
        title: 'Solar Panel Installation Layout',
        description: 'Drafted a residential solar layout with wiring diagrams, load calculations, and safety disconnects in AutoCAD.',
        year: '2023',
        tags: ['AutoCAD', 'Renewable Energy', 'Schematics'],
    },
    {
        slug: 'smart-home-wiring-simulation',
        title: 'Smart Home Wiring Simulation',
        description: 'Created a capstone simulation for smart home electrical planning with load management and circuit protection.',
        year: '2025',
        tags: ['PLC', 'Schematic', 'Capstone'],
    },
];

export const ojt = {
    company: 'PowerGrid Solutions Inc.',
    location: 'Davao City, Philippines',
    duration: 'Jan 2025 - Apr 2025',
    hours: '400',
    rating: 'A',
    summary: 'Completed field training with licensed electrical engineers and electricians, assisting with commercial panel boards, preventive maintenance, motor-control testing, and safety inspections.',
    tasks: [
        'Panel board installation',
        'Wiring and termination',
        'Motor-control testing',
        'Safety inspections',
        'Load calculations',
        'Preventive maintenance',
    ],
    reflection: 'My OJT experience sharpened the way I think about precision, documentation, and safety. Every connection matters, from the drawing board to the final test.',
};

export const certificates = [
    { title: 'TESDA NC II', sub: 'Electrical Installation & Maintenance', year: '2024', color: '#f5c100' },
    { title: 'Electrical Safety', sub: 'Occupational Health & Safety Training', year: '2023', color: '#ff6b2b' },
    { title: 'PLC Fundamentals', sub: 'Siemens SIMATIC Certified Training', year: '2024', color: '#00a6d6' },
    { title: 'Basic Electronics', sub: 'Circuit Theory & Analysis', year: '2023', color: '#00b86b' },
    { title: 'AutoCAD Electrical', sub: 'Autodesk Certified User', year: '2024', color: '#e23b3b' },
    { title: 'IoT in Industry', sub: 'Industrial Internet of Things Seminar', year: '2024', color: '#8a6cff' },
];

// export const galleryItems = [
//     { title: 'Lab Work', label: 'Bench testing and wiring practice', type: 'lab', span: true },
//     { title: 'Wiring', label: 'Conduit and termination layout', type: 'wiring' },
//     { title: 'PLC Setup', label: 'Ladder logic and I/O testing', type: 'plc' },
//     { title: 'Panel Board', label: 'Breaker and busbar planning', type: 'panel' },
//     { title: 'OJT Site', label: 'Field maintenance documentation', type: 'site', span: true },
//     { title: 'Circuit Build', label: 'Breadboard and component assembly', type: 'circuit' },
//     { title: 'Schematics', label: 'Electrical drafting plates', type: 'schematic' },
//     { title: 'Teamwork', label: 'Safety briefing and task planning', type: 'team' },
// ];

// 1. Import your actual images from the assets folder
// import proj1 from '../../../assets/images/project1.jpg';
// import proj2 from '../../../assets/images/project2.jpg';
// import proj3 from '../../../assets/images/project3.jpg';

export const galleryItems = [
    {
        title: 'Lab Work',
        label: 'Bench testing and wiring practice',
        type: 'lab',
        span: true,
        image: null,
    },
    {
        title: 'Wiring',
        label: 'Conduit and termination layout',
        type: 'wiring',
        image: null,
    },
    {
        title: 'PLC Setup',
        label: 'Ladder logic and I/O testing',
        type: 'plc',
        image: null,
    },
    {
        title: 'Panel Board',
        label: 'Breaker and busbar planning',
        type: 'panel',
        image: null,
    },
    {
        title: 'OJT Site',
        label: 'Field maintenance documentation',
        type: 'site',
        span: true,
        image: null,
    },
    {
        title: 'Circuit Build',
        label: 'Breadboard and component assembly',
        type: 'circuit',
        image: null,
    },
    {
        title: 'Schematics',
        label: 'Electrical drafting plates',
        type: 'schematic',
        image: null,
    },
    {
        title: 'Teamwork',
        label: 'Safety briefing and task planning',
        type: 'team',
        image: null,
    },
];

export const contacts = [
    { label: 'Email', value: student.email, href: `mailto:${student.email}` },
    { label: 'Phone', value: student.phone, href: `tel:${student.phone.replace(/\s/g, '')}` },
    { label: 'Location', value: student.location, href: '#' },
    { label: 'LinkedIn', value: student.linkedin, href: '#' },
];
