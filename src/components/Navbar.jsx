import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '1.5rem 4rem',
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', zIndex: 60 }}>
                <a href="#">Rohit<span style={{ color: 'var(--primary-color)' }}>.</span></a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
