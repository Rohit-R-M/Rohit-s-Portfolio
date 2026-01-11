import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, X, Smartphone } from 'lucide-react';

const MobileWarning = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Detect if the screen is mobile sized
        const checkMobile = () => {
            if (window.innerWidth <= 768) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 9999,
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    textAlign: 'center'
                }}
            >
                <motion.div
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '3rem 2rem',
                        borderRadius: '2rem',
                        maxWidth: '400px',
                        width: '100%',
                        position: 'relative',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <button
                        onClick={() => setIsVisible(false)}
                        style={{
                            position: 'absolute',
                            top: '1.5rem',
                            right: '1.5rem',
                            background: 'none',
                            border: 'none',
                            color: 'rgba(255, 255, 255, 0.5)',
                            cursor: 'pointer'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                        <Smartphone size={40} className="text-red-500" style={{ opacity: 0.5 }} />
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <X size={20} style={{ color: 'var(--primary-color)' }} />
                        </motion.div>
                        <Monitor size={48} style={{ color: 'var(--primary-color)' }} />
                    </div>

                    <h2 style={{
                        color: '#fff',
                        fontSize: '1.8rem',
                        marginBottom: '1rem',
                        fontWeight: '800'
                    }}>
                        Desktop <span className="gradient-text">Optimized</span>
                    </h2>

                    <p style={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '2rem'
                    }}>
                        For the best visual experience and interactive 3D elements, please open this portfolio in <b>Desktop Mode</b>.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsVisible(false)}
                        style={{
                            background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                            color: 'white',
                            border: 'none',
                            padding: '1rem 2rem',
                            borderRadius: '1rem',
                            fontSize: '1rem',
                            fontWeight: '700',
                            cursor: 'pointer',
                            width: '100%',
                            boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.3)'
                        }}
                    >
                        Continue Anyway
                    </motion.button>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default MobileWarning;
