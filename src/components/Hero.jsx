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
    const [phase, setPhase] = useState('entering'); // entering, collision, reveal

    useEffect(() => {
        const collisionTimer = setTimeout(() => setPhase('collision'), 800);
        const revealTimer = setTimeout(() => setPhase('reveal'), 1200);
        return () => {
            clearTimeout(collisionTimer);
            clearTimeout(revealTimer);
        };
    }, []);

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
            {/* Warp Strike Animation */}
            <AnimatePresence>
                {phase === 'entering' && (
                    <>
                        {/* Left Energy Meteor */}
                        <motion.div
                            initial={{ x: '-120vw', y: '20vh', scale: 0.2, opacity: 0 }}
                            animate={{ x: '0vw', y: '0vh', scale: 1, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: 'absolute',
                                width: '150px',
                                height: '2px',
                                background: 'linear-gradient(90deg, transparent, #3b82f6, #fff)',
                                borderRadius: '100px',
                                filter: 'blur(1px)',
                                zIndex: 30,
                                left: '50%',
                                top: '50%',
                                transformOrigin: 'right center',
                                transform: 'translateX(-100%) rotate(-15deg)'
                            }}
                        >
                            <div style={{ position: 'absolute', right: 0, top: '-4px', width: '10px', height: '10px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 20px #3b82f6' }} />
                        </motion.div>

                        {/* Right Energy Meteor */}
                        <motion.div
                            initial={{ x: '120vw', y: '-20vh', scale: 0.2, opacity: 0 }}
                            animate={{ x: '0vw', y: '0vh', scale: 1, opacity: 1 }}
                            exit={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            style={{
                                position: 'absolute',
                                width: '150px',
                                height: '2px',
                                background: 'linear-gradient(-90deg, transparent, #8b5cf6, #fff)',
                                borderRadius: '100px',
                                filter: 'blur(1px)',
                                zIndex: 30,
                                right: '50%',
                                top: '50%',
                                transformOrigin: 'left center',
                                transform: 'translateX(100%) rotate(-15deg)'
                            }}
                        >
                            <div style={{ position: 'absolute', left: 0, top: '-4px', width: '10px', height: '10px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 20px #8b5cf6' }} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Shockwave Effect */}
            <AnimatePresence>
                {phase === 'collision' && (
                    <>
                        <motion.div
                            initial={{ scale: 0, opacity: 1, border: '2px solid #fff' }}
                            animate={{ scale: 4, opacity: 0, border: '0px solid #fff' }}
                            transition={{ duration: 0.5 }}
                            style={{
                                position: 'absolute',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                zIndex: 25,
                                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)'
                            }}
                        />
                        <motion.div
                            initial={{ scale: 0, opacity: 0.5 }}
                            animate={{ scale: 8, opacity: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            style={{
                                position: 'absolute',
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                border: '4px solid #3b82f6',
                                zIndex: 24
                            }}
                        />
                    </>
                )}
            </AnimatePresence>

            {/* Main Content Reveal */}
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
                {phase === 'reveal' && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
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
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="hero-greeting"
                            style={{
                                fontSize: '1.5rem',
                                color: 'var(--primary-color)',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '4px',
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
                                letterSpacing: '-2px'
                            }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, type: "spring", stiffness: 80, delay: 0.2 }}
                                style={{ display: 'inline-block' }}
                            >
                                ROHIT
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5, filter: 'blur(20px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1, type: "spring", stiffness: 80, delay: 0.4 }}
                                className="gradient-text hero-name"
                                style={{ display: 'inline-block' }}
                            >
                                MANTUR
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="hero-description"
                            style={{
                                fontSize: '1.5rem',
                                color: '#e5e5e5',
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
                            <span style={{ fontSize: '1.1rem', color: '#a3a3a3', fontWeight: '400' }}>
                                with strong fundamentals in Computer Networks, DSA, and system-level concepts.
                            </span>
                        </motion.p>
                    </motion.div>
                )}
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
                whileInView={{ opacity: 0.15 }}
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
