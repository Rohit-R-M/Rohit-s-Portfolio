import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, X, Smartphone, AlertTriangle } from 'lucide-react';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(sessionStorage.getItem('mobileWarningDismissed') === 'true');


    useEffect(() => {
        const checkMobile = () => {
            // Lower threshold to 768px to allow tablets and mobile devices in 'Desktop Mode'
            if (window.innerWidth < 768) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleDismiss = () => {
        setIsDismissed(true);
        sessionStorage.setItem('mobileWarningDismissed', 'true');
    };

    if (!isVisible || isDismissed) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#050505',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10000,
                    padding: '2rem',
                    textAlign: 'center',
                    fontFamily: "'Outfit', sans-serif"
                }}
            >
                {/* Background Tech Pattern */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)',
                    backgroundSize: '30px 30px',
                    opacity: 0.5
                }} />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.02)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4rem 2rem',
                        borderRadius: '2.5rem',
                        maxWidth: '450px',
                        width: '90%', // Slightly more breathing room
                        maxHeight: '90vh', // Prevent overflow on short screens
                        overflowY: 'auto', // Allow scrolling if content is too tall
                        position: 'relative',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 0 40px rgba(0,0,0,0.5)',
                        scrollbarWidth: 'none', // Hide scrollbar but keep functionality
                        msOverflowStyle: 'none'
                    }}
                >
                    <style>{`
                        div::-webkit-scrollbar { display: none; }
                    `}</style>
                    <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Monitor size={64} style={{ color: 'var(--primary-color)' }} />
                            <motion.div
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    position: 'absolute',
                                    top: -10,
                                    right: -10,
                                    background: '#ef4444',
                                    borderRadius: '50%',
                                    padding: '4px'
                                }}
                            >
                                <AlertTriangle size={18} color="white" />
                            </motion.div>
                        </div>
                    </div>

                    <h2 style={{
                        color: '#fff',
                        fontSize: '2.2rem',
                        marginBottom: '1.5rem',
                        fontWeight: '900',
                        letterSpacing: '-1px'
                    }}>
                        DESKTOP <span className="gradient-text">REQUIRED</span>
                    </h2>

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '1.1rem',
                        lineHeight: '1.7',
                        marginBottom: '2rem'
                    }}>
                        This high-performance portfolio is built for large screens and immersive interactions.
                        Mobile access is currently restricted.
                    </p>

                    <div style={{
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '1.2rem',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <p style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Please switch to Desktop Mode
                        </p>
                        <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                            Or view on a Laptop / Desktop PC
                        </p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDismiss}
                        style={{
                            marginTop: '2rem',
                            padding: '0.8rem 1.5rem',
                            background: 'transparent',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '0.8rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Continue to Site Anyway
                    </motion.button>
                </motion.div>

            </motion.div>
        </AnimatePresence>
    );
};

export default MobileWarning;
