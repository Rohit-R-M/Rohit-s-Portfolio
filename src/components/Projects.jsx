import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Maximize2 } from 'lucide-react';

const BASE_PATH = import.meta.env.BASE_URL;

const projects = [
    {
        title: 'Student Academic Management',
        category: 'Academic Management App',
        description: 'Complete academic management system with real-time tracking, attendance, and grade analytics.',
        tags: ['Flutter', 'Firebase', 'Dart'],
        color: '#3b82f6',
        link: 'https://github.com/Rohit-R-M/Student-Academics-Management-SAM-.git',
        image: `${BASE_PATH}projects/sam.png`
    },
    {
        title: 'Bagalkot Tourism App',
        category: 'Travel Guide App',
        description: 'A dedicated guide for exploring Bagalkot’s heritage with interactive maps and local guides.',
        tags: ['Flutter', 'Firebase', 'Google Maps', 'API Integration', 'Dart'],
        color: '#8b5cf6',
        link: 'https://github.com/Rohit-R-M/Project_BGK.git',
        image: `${BASE_PATH}projects/tourism.png`
    },
    {
        title: 'Intrusion Detection System',
        category: 'Network Security',
        description: 'ML-based network traffic analysis tool for detecting unauthorized access and anomalies.',
        tags: ['Python', 'Scikit-Learn', 'Machine Learning', 'Network Security', 'Scapy', 'Flask'],
        color: '#06b6d4',
        link: 'https://github.com/Vijaydharmar4/ids-ensemble.git',
        image: `${BASE_PATH}projects/ids.png`
    },
    {
        title: 'Electrical Material Management',
        category: 'Electrical Management App',
        description: 'A comprehensive inventory and order tracking system for electrical supplies with real-time stock updates.',
        tags: ['Flutter', 'Firebase', 'Dart', 'Data Persistence', 'Inventory'],
        color: '#f59e0b',
        link: 'https://github.com/Rohit-R-M/SSE.git',
        image: `${BASE_PATH}projects/electrical.png`
    },
    {
        title: 'Interactive BMI Calculator',
        category: 'Health Tech App',
        description: 'A sleek, interactive BMI calculator with health recommendations and progress tracking.',
        tags: ['Flutter', 'UI/UX', 'Dart', 'Firebase', 'HealthKit'],
        color: '#10b981',
        link: 'https://github.com/Rohit-R-M/BMI_Application.git',
        image: `${BASE_PATH}projects/bmi.png`
    },
    {
        title: 'Productivity To-Do App',
        category: 'Productivity App',
        description: 'A minimalist task management application with kategorization, reminders, and cross-device sync.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Local Notifications'],
        color: '#f43f5e',
        link: 'https://github.com/Rohit-R-M/todo-list-application.git',
        image: `${BASE_PATH}projects/todo.png`
    }
];

const ProjectCard = ({ project, index, onClick }) => {
    const xOffset = index % 2 === 0 ? -100 : 100;

    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, x: xOffset, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 1,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ y: -10 }}
            onClick={() => onClick(project)}
            style={{
                background: 'var(--surface-color)',
                backdropFilter: 'blur(20px)',
                borderRadius: '2rem',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer'
            }}
        >
            {/* Project Image Preview */}
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    className="project-img"
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 0%, ${project.color}33 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }} className="img-overlay">
                    <Maximize2 color="white" size={32} />
                </div>
            </div>

            {/* Top Color Accent Bar */}
            <div style={{
                height: '4px',
                width: '100%',
                background: project.color,
                opacity: 0.8
            }} />

            {/* Content Section */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    fontSize: '0.7rem',
                    fontWeight: '800',
                    color: project.color,
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    marginBottom: '1rem',
                    background: `${project.color}15`,
                    padding: '0.4rem 1rem',
                    borderRadius: '100px',
                    width: 'fit-content',
                    border: `1px solid ${project.color}30`
                }}>
                    {project.category}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-color)' }}>
                    {project.title}
                </h3>

                <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, marginBottom: '2rem', fontSize: '0.95rem', flex: 1 }}>
                    {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                    {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            padding: '0.3rem 0.8rem',
                            background: 'rgba(128,128,128,0.05)',
                            borderRadius: '8px',
                            border: `1px solid var(--border-color)`,
                            color: 'var(--text-dim)',
                            fontWeight: '600'
                        }}>
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 3 && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
                            +{project.tags.length - 3} more
                        </span>
                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1, color: project.color }}
                        style={{ color: 'var(--text-dim)' }}
                    >
                        <Github size={24} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.h2
                        initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
                        whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        style={{ fontSize: 'clamp(2.5rem, 10vw, 3.5rem)', fontWeight: '900', letterSpacing: '-2px' }}
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
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            zIndex: 1000,
                            background: 'rgba(0,0,0,0.85)',
                            backdropFilter: 'blur(10px)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                background: 'var(--surface-color)',
                                borderRadius: '2.5rem',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)',
                                position: 'relative',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(400px, 1.2fr) 1fr'
                            }}
                            className="modal-container"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                style={{
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    color: 'white'
                                }}
                            >
                                <X size={24} />
                            </button>

                            {/* Image Section */}
                            <div style={{ height: '100%', background: '#000', display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    style={{ width: '100%', height: 'auto', display: 'block' }}
                                />
                            </div>

                            {/* Details Section */}
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', maxHeight: '90vh', overflowY: 'auto' }}>
                                <div style={{
                                    fontSize: '0.8rem',
                                    fontWeight: '800',
                                    color: selectedProject.color,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '1rem'
                                }}>
                                    {selectedProject.category}
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-color)', lineHeight: 1.1 }}>
                                    {selectedProject.title}
                                </h2>
                                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                                    {selectedProject.description}
                                </p>

                                <div style={{ marginBottom: '2.5rem' }}>
                                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-color)', marginBottom: '1rem', textTransform: 'uppercase' }}>Technologies Used</h4>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: '0.8rem',
                                                padding: '0.5rem 1.2rem',
                                                background: 'rgba(128,128,128,0.05)',
                                                borderRadius: '10px',
                                                border: `1px solid var(--border-color)`,
                                                color: 'var(--text-color)',
                                                fontWeight: '600'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ marginTop: 'auto', display: 'flex', gap: '1.5rem' }}>
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            flex: 1,
                                            padding: '1rem',
                                            borderRadius: '1rem',
                                            background: selectedProject.color,
                                            color: 'white',
                                            textDecoration: 'none',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '0.8rem',
                                            fontWeight: '700'
                                        }}
                                    >
                                        <Github size={20} /> View Github
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 900px) {
                    .modal-container {
                        grid-template-columns: 1fr !important;
                        max-height: 95vh;
                    }
                    .modal-container > div:first-child {
                        height: 300px;
                    }
                }
                .project-card:hover .project-img { transform: scale(1.1); }
                .project-card:hover .img-overlay { opacity: 1 !important; }
            `}</style>
        </section>
    );
};

export default Projects;
