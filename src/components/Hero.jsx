import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

const Typewriter = ({ texts, delay = 100, waitTime = 2000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const fullText = texts[currentIndex];

            if (!isDeleting) {
                if (charIndex < fullText.length) {
                    setCurrentText(fullText.substring(0, charIndex + 1));
                    setCharIndex(prev => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), waitTime);
                }
            } else {
                if (charIndex > 0) {
                    setCurrentText(fullText.substring(0, charIndex - 1));
                    setCharIndex(prev => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentIndex(prev => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? delay / 2 : delay);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentIndex, texts, delay, waitTime]);

    return (
        <span style={{
            color: 'var(--primary-color)',
            fontWeight: '600',
            borderRight: '2px solid var(--primary-color)',
            paddingRight: '4px',
            display: 'inline-block',
            minHeight: '1.2em',
            verticalAlign: 'bottom',
            animation: 'cursor-blink 0.8s infinite'
        }}>
            {currentText}
            <style>{`
                @keyframes cursor-blink {
                    0%, 100% { border-color: transparent }
                    50% { border-color: var(--primary-color) }
                }
            `}</style>
        </span>
    );
};

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                minHeight: '85vh',
                padding: '15rem 0 6rem 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                position: 'relative',
                overflow: 'visible'
            }}
        >
            {/* Main Content */}
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10, letterSpacing: '10px' }}
                        animate={{ opacity: 1, y: 0, letterSpacing: '4px' }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="hero-greeting"
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--primary-color)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            marginBottom: '1rem'
                        }}
                    >
                        Hello, I'm
                    </motion.span>

                    <motion.h1
                        style={{
                            fontSize: 'clamp(2.5rem, 10vw, 8rem)',
                            fontWeight: '900',
                            lineHeight: 1,
                            marginBottom: '2.5rem',
                            fontFamily: "'Outfit', sans-serif",
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '0.3rem',
                            filter: 'drop-shadow(0 0 20px rgba(var(--primary-rgb), 0.2))',
                            whiteSpace: 'nowrap',
                            letterSpacing: '-0.04em',
                            textTransform: 'uppercase'
                        }}
                    >
                        {"ROHIT".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 80, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.5 + i * 0.1,
                                    ease: [0.215, 0.61, 0.355, 1]
                                }}
                                style={{ display: 'inline-block', originY: 'bottom' }}
                            >
                                {char}
                            </motion.span>
                        ))}

                        <span style={{ width: '0.3em' }} />

                        {"MANTUR".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 80, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 1.2 + i * 0.1,
                                    ease: [0.215, 0.61, 0.355, 1]
                                }}
                                className="gradient-text"
                                style={{ display: 'inline-block', originY: 'bottom' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="hero-description"
                        style={{
                            fontSize: '1.5rem',
                            color: 'var(--text-color)',
                            maxWidth: '800px',
                            lineHeight: '1.6',
                            fontWeight: '500'
                        }}
                    >
                        A passionate <Typewriter texts={[
                            'Computer Science Student',
                            'Flutter Developer',
                            'Problem Solver',
                            'Tech Enthusiast'
                        ]} />
                        <br />
                        <span style={{ fontSize: '1.1rem', color: 'var(--text-dim)', fontWeight: '400' }}>
                            Strong, Determined, and No Excuses.
                        </span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4, duration: 1 }}
                        style={{ marginTop: '3rem' }}
                    >
                        <motion.a
                            href="Rohit Mantur.pdf"
                            download="Rohit_Mantur_Resume.pdf"
                            className="resume-btn"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: 'var(--primary-color)',
                                color: '#fff',
                                boxShadow: '0 0 30px var(--primary-color)44'
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.2rem 2.8rem',
                                background: 'transparent',
                                border: '1px solid var(--primary-color)',
                                borderRadius: '100px',
                                color: 'var(--primary-color)',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                zIndex: 20,
                                position: 'relative'
                            }}
                        >
                            <Download size={22} />
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-greeting { 
                        font-size: 1rem !important; 
                        letter-spacing: 2px !important; 
                        margin-bottom: 0.5rem !important;
                    }
                    h1 { 
                        font-size: clamp(2.5rem, 12vw, 4.5rem) !important; 
                        line-height: 1 !important; 
                        margin-bottom: 2rem !important;
                        flex-direction: row !important;
                        flex-wrap: wrap !important;
                    }
                    .hero-description { 
                        font-size: 1.1rem !important; 
                        padding: 0 1rem; 
                        line-height: 1.5 !important;
                    }
                    .hero-description span { 
                        font-size: 0.9rem !important; 
                    }
                    .resume-btn {
                        padding: 1rem 2rem !important;
                        font-size: 1rem !important;
                        margin-top: 2rem !important;
                    }
                }
            `}</style>

            {/* Background Glows (Animated) */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [0.8, 1.1, 0.8],
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--primary-color)',
                    filter: 'blur(150px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
            {/* Secondary Animated Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [1, 1.3, 1],
                    x: [0, -60, 0],
                    y: [0, 40, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    background: 'var(--secondary-color)',
                    filter: 'blur(180px)',
                    borderRadius: '50%',
                    zIndex: 0
                }}
            />
        </section>
    );
};

export default Hero;
