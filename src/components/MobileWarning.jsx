import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, X, Smartphone, AlertTriangle } from 'lucide-react';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Strict check for mobile screens (typically < 1024px for complex desktop designs)
            if (window.innerWidth < 1024) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

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
                        width: '100%',
                        position: 'relative',
                        backdropFilter: 'blur(20px)',
                        boxShadow: '0 0 40px rgba(0,0,0,0.5)'
                    }}
                >
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
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileWarning;
