import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, Maximize2, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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

const ProjectCard = ({ project, isActive, isPrev, isNext, onClick }) => {
    return (
        <motion.div
            className="project-card"
            animate={{
                scale: isActive ? 1.05 : 0.75,
                opacity: isActive ? 1 : 0.3,
                zIndex: isActive ? 20 : isPrev || isNext ? 10 : 1,
                rotateY: isPrev ? 25 : isNext ? -25 : 0,
                x: isPrev ? '-85%' : isNext ? '-15%' : '-50%',
                filter: isActive ? 'blur(0px)' : 'blur(4px)',
                y: isActive ? [0, -15, 0] : 0
            }}
            transition={{
                x: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                rotateY: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.8 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            onClick={onClick}
            style={{
                background: 'var(--surface-color)',
                backdropFilter: 'blur(30px)',
                borderRadius: '3rem',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                width: 'min(100%, 750px)',
                height: '520px',
                position: 'absolute',
                left: '50%',
                cursor: isActive ? 'pointer' : 'default',
                boxShadow: isActive
                    ? `0 50px 100px -20px rgba(0, 0, 0, 0.4), 0 0 40px ${project.color}20`
                    : '0 20px 40px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                pointerEvents: isActive ? 'auto' : 'none'
            }}
        >
            {/* Shimmer Effect */}
            {isActive && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
                        zIndex: 5,
                        pointerEvents: 'none'
                    }}
                />
            )}

            {/* Left: Project Image */}
            <div className="card-image-wrapper" style={{ width: '45%', position: 'relative', overflow: 'hidden' }}>
                <motion.img
                    src={project.image}
                    alt={project.title}
                    animate={{ scale: isActive ? 1.05 : 1 }}
                    transition={{ duration: 1 }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to right, transparent, rgba(0,0,0,0.3))`
                }} />
            </div>

            {/* Right: Content */}
            <div className="card-content-wrapper" style={{ width: '55%', padding: '3rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    fontSize: '0.75rem',
                    fontWeight: '800',
                    color: project.color,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    marginBottom: '1rem',
                    background: `${project.color}15`,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '100px',
                    width: 'fit-content',
                    border: `1px solid ${project.color}30`
                }}>
                    {project.category}
                </div>

                <h3 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '1.2rem', color: 'var(--text-color)', lineHeight: 1.1 }}>
                    {project.title}
                </h3>

                <p className="project-desc" style={{ color: 'var(--text-dim)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1rem' }}>
                    {project.description}
                </p>

                <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: 'auto' }}>
                    {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} style={{
                            fontSize: '0.7rem',
                            padding: '0.4rem 0.9rem',
                            background: 'rgba(255,255,255,0.03)',
                            borderRadius: '10px',
                            border: `1px solid var(--border-color)`,
                            color: 'var(--text-color)',
                            fontWeight: '600'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginTop: '1rem' }}>
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, color: project.color }}
                        onClick={(e) => e.stopPropagation()}
                        style={{ color: 'var(--text-dim)' }}
                    >
                        <Github size={24} />
                    </motion.a>
                    <button
                        onClick={(e) => { e.stopPropagation(); onClick(); }}
                        style={{
                            marginLeft: 'auto',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            color: 'var(--primary-color)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        VIEW DETAILS <ExternalLink size={16} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, []);

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }, []);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(nextProject, 3500);
        return () => clearInterval(interval);
    }, [isAutoPlaying, nextProject]);

    return (
        <section id="projects" style={{ padding: '10rem 0', position: 'relative', overflow: 'hidden' }}>
            {/* Active Project Color Background Aura */}
            <motion.div
                animate={{
                    background: `radial-gradient(circle, ${projects[currentIndex].color}10 0%, transparent 70%)`
                }}
                transition={{ duration: 1 }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100vw',
                    height: '100vw',
                    zIndex: -1,
                    filter: 'blur(80px)',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <div style={{ overflow: 'hidden' }}>
                        <motion.h2
                            initial={{ y: "100%" }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', fontWeight: '900' }}
                        >
                            PROJECT <span className="gradient-text">WORK</span>
                        </motion.h2>
                    </div>
                </div>

                {/* 3D Slider Area */}
                <div style={{ height: '600px', position: 'relative', perspective: '1200px' }}>

                    {/* Floating Navigation Buttons (Left & Right Sides) */}
                    <motion.button
                        whileHover={{ scale: 1.1, x: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { prevProject(); setIsAutoPlaying(false); }}
                        style={{
                            position: 'absolute',
                            left: 'calc(50% - min(48vw, 500px))',
                            top: '40%',
                            transform: 'translateY(-50%)',
                            zIndex: 100,
                            color: 'var(--text-color)',
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                        }}
                    >
                        <ChevronLeft size={32} />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1, x: 5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { nextProject(); setIsAutoPlaying(false); }}
                        style={{
                            position: 'absolute',
                            right: 'calc(50% - min(48vw, 500px))',
                            top: '40%',
                            transform: 'translateY(-50%)',
                            zIndex: 100,
                            color: 'var(--text-color)',
                            background: 'rgba(255,255,255,0.03)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '50%',
                            width: '64px',
                            height: '64px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            pointerEvents: 'auto'
                        }}
                    >
                        <ChevronRight size={32} />
                    </motion.button>

                    <AnimatePresence mode="popLayout">
                        {projects.map((project, index) => {
                            const isActive = index === currentIndex;
                            const isPrev = index === (currentIndex - 1 + projects.length) % projects.length;
                            const isNext = index === (currentIndex + 1) % projects.length;

                            if (!isActive && !isPrev && !isNext) return null;

                            return (
                                <ProjectCard
                                    key={project.title}
                                    project={project}
                                    isActive={isActive}
                                    isPrev={isPrev}
                                    isNext={isNext}
                                    onClick={() => setSelectedProject(project)}
                                />
                            );
                        })}
                    </AnimatePresence>

                    {/* Centered Pagination Dots */}
                    <div style={{
                        position: 'absolute',
                        bottom: '-4rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '0.8rem',
                        zIndex: 10
                    }}>
                        {projects.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                                style={{
                                    width: i === currentIndex ? '30px' : '8px',
                                    height: '8px',
                                    borderRadius: '10px',
                                    background: i === currentIndex ? 'var(--primary-color)' : 'var(--border-color)',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    border: 'none',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </div>
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
                @media (max-width: 1100px) {
                    .project-card {
                        width: 100% !important;
                        left: 50% !important;
                    }
                    button[style*="left: calc"] { left: 1rem !important; }
                    button[style*="right: calc"] { right: 1rem !important; }
                }
                @media (max-width: 768px) {
                    #projects {
                        padding: 6rem 0 !important;
                    }
                    #projects .container > div:nth-child(2) {
                        height: auto !important;
                        display: flex !important;
                        overflow-x: auto !important;
                        padding: 2rem 1.5rem 4rem !important;
                        gap: 1.5rem !important;
                        scroll-snap-type: x mandatory !important;
                        perspective: none !important;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    #projects .container > div:nth-child(2)::-webkit-scrollbar {
                        display: none;
                    }
                    .project-card {
                        flex-shrink: 0 !important;
                        width: 85vw !important;
                        height: 550px !important;
                        position: relative !important;
                        left: 0 !important;
                        transform: none !important;
                        scroll-snap-align: center !important;
                        flex-direction: column !important;
                        opacity: 1 !important;
                        filter: none !important;
                        border-radius: 2.5rem !important;
                        pointer-events: auto !important;
                        margin: 0 !important;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.3) !important;
                    }
                    .card-image-wrapper {
                        width: 100% !important;
                        height: 40% !important;
                    }
                    .card-content-wrapper {
                        width: 100% !important;
                        height: 60% !important;
                        padding: 2rem !important;
                    }
                    .card-content-wrapper h3 {
                        font-size: 1.8rem !important;
                        margin-bottom: 1rem !important;
                    }
                    .card-content-wrapper p {
                        font-size: 0.95rem !important;
                        -webkit-line-clamp: 4 !important;
                    }
                    button[style*="left: calc"], button[style*="right: calc"] {
                        display: none !important;
                    }
                    div[style*="bottom: -4rem"] {
                        bottom: 0.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Projects;
