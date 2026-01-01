import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Main Content */}
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    style={{
                        height: '100vh',
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
                            fontSize: 'clamp(4rem, 12vw, 8rem)',
                            fontWeight: '900',
                            lineHeight: 0.8,
                            marginBottom: '2.5rem',
                        }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)', letterSpacing: '20px' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '-2px' }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                            style={{ display: 'inline-block' }}
                        >
                            ROHIT
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 1.1, filter: 'blur(20px)', letterSpacing: '20px' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', letterSpacing: '-2px' }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
                            className="gradient-text hero-name"
                            style={{ display: 'inline-block' }}
                        >
                            MANTUR
                        </motion.span>
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
                            with strong fundamentals in Computer Networks, DSA, and system-level concepts.
                        </span>
                    </motion.p>
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hero-greeting { fontSize: 1.1rem !important; letterSpacing: 2px !important; }
                    h1 { fontSize: 3.5rem !important; line-height: 1 !important; }
                    .hero-description { fontSize: 1.2rem !important; padding: 0 1rem; }
                    .hero-description span { fontSize: 0.9rem !important; }
                }
            `}</style>

            {/* Background Glows (Static but persistent) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--primary-color)',
                    filter: 'blur(150px)',
                    borderRadius: '50%'
                }}
            />
        </section>
    );
};

export default Hero;
