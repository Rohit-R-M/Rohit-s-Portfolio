import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';

const projects = [
    {
        title: 'Student Academic Management',
        category: 'Academic Management App',
        description: 'Complete academic management system with real-time tracking, attendance, and grade analytics.',
        tags: ['Flutter', 'Firebase', 'Dart'],
        color: '#3b82f6',
        link: 'https://github.com/Rohit-R-M/Student-Academics-Management-SAM-.git'
    },
    {
        title: 'Bagalkot Tourism App',
        category: 'Travel Guide App',
        description: 'A dedicated guide for exploring Bagalkot’s heritage with interactive maps and local guides.',
        tags: ['Flutter', 'Firebase', 'Google Maps', 'API Integration', 'Dart'],
        color: '#8b5cf6',
        link: 'https://github.com/Rohit-R-M/Project_BGK.git'
    },
    {
        title: 'Intrusion Detection System',
        category: 'Network Security',
        description: 'ML-based network traffic analysis tool for detecting unauthorized access and anomalies.',
        tags: ['Python', 'Scikit-Learn', 'Machine Learning', 'Network Security', 'Scapy', 'Flask'],
        color: '#06b6d4',
        link: 'https://github.com/Vijaydharmar4/ids-ensemble.git'
    },
    {
        title: 'Electrical Material Management',
        category: 'Electrical Management App',
        description: 'A comprehensive inventory and order tracking system for electrical supplies with real-time stock updates.',
        tags: ['Flutter', 'Firebase', 'Dart', 'Data Persistence', 'Inventory'],
        color: '#f59e0b',
        link: 'https://github.com/Rohit-R-M/SSE.git'
    },
    {
        title: 'Interactive BMI Calculator',
        category: 'Health Tech App',
        description: 'A sleek, interactive BMI calculator with health recommendations and progress tracking.',
        tags: ['Flutter', 'UI/UX', 'Dart', 'Firebase', 'HealthKit'],
        color: '#10b981',
        link: 'https://github.com/Rohit-R-M/BMI_Application.git'
    },
    {
        title: 'Productivity To-Do App',
        category: 'Productivity App',
        description: 'A minimalist task management application with kategorization, reminders, and cross-device sync.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Local Notifications'],
        color: '#f43f5e',
        link: 'https://github.com/Rohit-R-M/todo-list-application.git'
    }
];

const ProjectCard = ({ project, index }) => {
    // Alternating side for slide-in effect
    const xOffset = index % 2 === 0 ? -100 : 100;

    return (
        <motion.div
            initial={{ opacity: 0, x: xOffset, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -10 }}
            style={{
                background: 'var(--surface-color)',
                backdropFilter: 'blur(20px)',
                borderRadius: '2.5rem',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
            }}
        >
            {/* Top Color Accent Bar */}
            <div style={{
                height: '6px',
                width: '100%',
                background: project.color,
                opacity: 0.8
            }} />

            {/* Content Section */}
            <div style={{ padding: '3rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    style={{
                        fontSize: '0.75rem',
                        fontWeight: '800',
                        color: project.color,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        marginBottom: '1.2rem',
                        display: 'inline-block',
                        background: `${project.color}15`,
                        padding: '0.5rem 1.2rem',
                        borderRadius: '100px',
                        width: 'fit-content',
                        border: `1px solid ${project.color}30`
                    }}
                >
                    {project.category}
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.2rem', letterSpacing: '-0.5px', color: 'var(--text-color)' }}
                >
                    {project.title}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + (index * 0.1) }}
                    style={{ color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '2.5rem', fontSize: '1.05rem', flex: 1 }}
                >
                    {project.description}
                </motion.p>

                {/* Staggered Tag Animation */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'transparent',
                                color: project.color,
                                borderColor: project.color,
                                boxShadow: `0 0 15px ${project.color}44`
                            }}
                            transition={{
                                delay: 0.4 + (i * 0.01),
                                type: "spring",
                                stiffness: 300,
                                damping: 15
                            }}
                            style={{
                                fontSize: '0.75rem',
                                padding: '0.4rem 1.2rem',
                                background: 'rgba(128,128,128,0.05)',
                                borderRadius: '10px',
                                border: `1px solid ${project.color}33`,
                                color: 'var(--text-dim)',
                                fontWeight: '600',
                                transition: 'all 0.4s ease',
                                cursor: 'default'
                            }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>

                {/* Animated Footer/Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + (index * 0.1) }}
                    style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
                >
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ rotate: 360, scale: 1.2, color: project.color }}
                        transition={{ duration: 0.6 }}
                        style={{ color: 'var(--text-dim)' }}
                    >
                        <Github size={28} />
                    </motion.a>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px' }}
                    >
                        SELECTED <span className="gradient-text">PROJECTS</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ height: '4px', background: 'var(--primary-color)', width: '100px', margin: '1.5rem auto 0', borderRadius: '10px' }}
                    />
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #projects { padding: 5rem 0 !important; }
                    #projects h2 { fontSize: 2.5rem !important; }
                }
            `}</style>
        </section>
    );
};

export default Projects;
