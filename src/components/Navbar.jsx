import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Sun, Moon, Users } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [visitorCount, setVisitorCount] = useState(23);

    // Global Realtime Visitor Counter Implementation
    useEffect(() => {
        const NAMESPACE = "rohit_stats";
        const KEY = "visits";
        const OFFSET = 73;

        const trackVisit = async () => {
            try {
                const now = Date.now();
                const sixHours = 6 * 60 * 60 * 1000;
                const lastVisit = localStorage.getItem('v_last_time');

                let method = 'get';
                if (!lastVisit || (now - parseInt(lastVisit)) > sixHours) {
                    method = 'up';
                    localStorage.setItem('v_last_time', now.toString());
                }

                const response = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/${method}`);
                const data = await response.json();

                // Growth bonus: +1 for every 6h since launch
                const refDate = new Date('2024-01-01').getTime();
                const growthBonus = Math.floor((now - refDate) / sixHours);

                if (data.count !== undefined) {
                    setVisitorCount(data.count + OFFSET + growthBonus);
                }
            } catch (err) {
                console.error("Counter API error:", err);
                setVisitorCount(OFFSET);
            }
        };

        trackVisit();

        const interval = setInterval(async () => {
            try {
                const response = await fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}`);
                const data = await response.json();
                const now = Date.now();
                const growthBonus = Math.floor((now - new Date('2026-01-01').getTime()) / (6 * 60 * 60 * 1000));
                if (data.count !== undefined) setVisitorCount(data.count + OFFSET + growthBonus);
            } catch (err) {
                console.error("Polling error:", err);
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

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

    // Sub-component for rolling number animation
    const AnimatedNumber = ({ value }) => {
        const [displayVal, setDisplayVal] = useState(value);

        useEffect(() => {
            const controls = animate(displayVal, value, {
                type: "spring",
                stiffness: 50,
                damping: 15,
                onUpdate: (latest) => setDisplayVal(Math.round(latest))
            });
            return () => controls.stop();
        }, [value]);

        return <span>{displayVal.toLocaleString()}</span>;
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

            {/* Logo with Staggered Letters */}
            <div style={{ fontSize: '1.6rem', fontWeight: '800', zIndex: 60, letterSpacing: '-0.5px' }}>
                <a
                    href="#home"
                    onClick={() => handleClick('home')}
                    style={{ color: 'var(--text-color)', textDecoration: 'none', display: 'flex' }}
                >
                    {"Rohit".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                    <motion.span
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 400, delay: 0.5 }}
                        style={{ color: 'var(--primary-color)' }}
                    >
                        .
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
                {/* Visitor Counter Pill */}
                <motion.div
                    className="visitor-counter"
                    style={{
                        padding: '0.45rem 1rem',
                        borderRadius: '100px',
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        backdropFilter: 'blur(10px)',
                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)',
                        zIndex: 10,
                        minWidth: '80px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Users size={14} style={{ color: 'var(--primary-color)' }} />
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            color: 'var(--text-color)',
                            letterSpacing: '0.5px'
                        }}>
                            <AnimatedNumber value={visitorCount} />
                        </span>
                        <motion.div
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [0.9, 1.1, 0.9]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                background: '#ef4444',
                                boxShadow: '0 0 8px #ef4444'
                            }}
                        />
                    </div>
                </motion.div>

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
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
