import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0 2rem 0',
            background: 'transparent',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
        }}>
            <div className="container">
                <h3 className="gradient-text" style={{
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    fontWeight: '700'
                }}>
                    Thanks for stopping by!
                </h3>
                <p style={{
                    color: 'var(--text-dim)',
                    opacity: 0.6,
                    fontSize: '0.9rem'
                }}>
                    © {new Date().getFullYear()} Rohit Mantur. Built with passion and code.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
