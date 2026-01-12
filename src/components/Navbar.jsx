import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Education', id: 'education' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Achievements', id: 'achievements' },
        { name: 'Contact', id: 'contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            threshold: 0.1, // Trigger as soon as 10% is visible
            rootMargin: '-5% 0px -45% 0px' // Wider window for detection
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        navLinks.forEach((link) => {
            const el = document.getElementById(link.id);
            if (el) observer.observe(el);
        });

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleClick = (id) => {
        setActiveSection(id);
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '0.8rem 4rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(15px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            className="navbar"
        >
            <style>{`
                @media (max-width: 1024px) {
                    .navbar { padding: 0.6rem 2rem !important; }
                    .nav-links { gap: 1.5rem !important; }
                }
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                }
            `}</style>

            {/* Logo - Name Only */}
            <div style={{ zIndex: 60 }}>
                <a
                    href="#home"
                    onClick={() => handleClick('home')}
                    style={{
                        color: 'var(--text-color)',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <motion.span
                        className="nav-logo-text"
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            letterSpacing: '-0.5px',
                            fontFamily: "'Outfit', sans-serif"
                        }}
                    >
                        Rohit<span style={{ color: 'var(--primary-color)' }}>.</span>
                    </motion.span>
                </a>
            </div>

            {/* Desktop Nav Links with Glow Active State */}
            <div className="nav-links" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                {navLinks.map((link, i) => (
                    <div key={link.id} style={{ position: 'relative' }}>
                        <motion.a
                            href={`#${link.id}`}
                            onClick={() => handleClick(link.id)}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            whileHover={{ y: -1 }}
                            style={{
                                color: 'var(--text-color)',
                                textDecoration: 'none',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                opacity: activeSection === link.id ? 1 : 0.5,
                                transition: 'all 0.3s ease',
                                padding: '0.6rem 1rem',
                                display: 'block',
                                position: 'relative',
                                zIndex: 2,
                            }}
                        >
                            {link.name}
                        </motion.a>

                        {activeSection === link.id && (
                            <motion.div
                                layoutId="nav-box-highlight"
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 14,
                                    mass: 1.2
                                }}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: theme === 'dark'
                                        ? 'rgba(255, 255, 255, 0.12)'
                                        : 'rgba(0, 0, 0, 0.06)',
                                    borderRadius: '12px',
                                    border: theme === 'dark'
                                        ? '1px solid rgba(255, 255, 255, 0.25)'
                                        : '1px solid rgba(0, 0, 0, 0.08)',
                                    boxShadow: theme === 'dark'
                                        ? '0 0 20px rgba(255, 255, 255, 0.1)'
                                        : '0 4px 12px rgba(0, 0, 0, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    zIndex: 1
                                }}
                            />
                        )}
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 60 }}>
                <motion.a
                    href="https://github.com/Rohit-R-M"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.9, type: "spring" }}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        padding: '0.65rem',
                        borderRadius: '50%',
                        background: 'var(--surface-color)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                    className="nav-github-link"
                >
                    <Github size={19} />
                </motion.a>

                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    style={{
                        padding: '0.65rem',
                        borderRadius: '50%',
                        background: 'var(--surface-color)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}
                >
                    {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
                </motion.button>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .navbar { padding: 0.6rem 2rem !important; }
                    .nav-links { gap: 0.5rem !important; }
                }
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                    .nav-github-link { display: none !important; }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
