/**
 * experience.js — Work history and timeline data.
 */

export const experiences = [
  {
    id: 1,
    role: 'Founder & Full Stack Developer',
    company: 'LogicoreX',
    companyUrl: 'https://logicorex.co.ke',
    period: '2023 — Present',
    type: 'Full-time · Founder',
    current: true,
    description:
      'Founded LogicoreX to deliver high-quality web development solutions to startups and businesses across Kenya and beyond. Lead all technical and product decisions.',
    responsibilities: [
      'Architect and build full stack web applications for clients using the MERN/PERN stack',
      'Design user interfaces and experiences in Figma before translating to production code',
      'Develop custom integrations including M-Pesa Daraja API for payment processing',
      'Manage end-to-end software projects — requirements, design, build, deploy, maintain',
      'Lead client discovery sessions and translate business requirements into technical specs',
      'Build and maintain REST APIs with Node.js and Express.js',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'Tailwind CSS', 'Figma'],
  },
  {
    id: 2,
    role: 'Freelance Frontend Developer',
    company: 'Independent',
    companyUrl: null,
    period: '2021 — 2023',
    type: 'Freelance',
    current: false,
    description:
      'Delivered responsive frontend projects for clients ranging from local businesses to early-stage startups, focusing on clean UIs and great user experiences.',
    responsibilities: [
      'Built responsive landing pages and multi-page websites using React and Tailwind CSS',
      'Converted Figma designs to pixel-perfect React components',
      'Implemented CMS integrations and REST API consumption',
      'Collaborated remotely with clients and backend developers',
    ],
    tech: ['React', 'JavaScript', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'REST APIs'],
  },
]

export const stats = [
  { label: 'Projects Shipped', value: '20+' },
  { label: 'Years Building', value: '4+' },
  { label: 'Clients Served', value: '15+' },
  { label: 'Technologies', value: '18+' },
]
