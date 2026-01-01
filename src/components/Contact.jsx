import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Instagram, Download } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>

                <div style={{ position: 'relative' }}>
                    {/* Background cosmic glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                        opacity: 0.05,
                        filter: 'blur(100px)',
                        zIndex: -1
                    }} />

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '1.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* HERO CTA CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                gridColumn: 'span 8',
                                gridRow: 'span 2',
                                background: 'var(--surface-color)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '3rem',
                                padding: '4rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '1px',
                                background: 'linear-gradient(90deg, transparent, var(--primary-color), transparent)',
                                opacity: 0.3
                            }} />

                            <h3 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                Let's build <br />
                                <span className="gradient-text" style={{ fontSize: '1.1em' }}>something iconic.</span>
                            </h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '450px', marginBottom: '3rem' }}>
                                I'm always looking for ambitious projects and clever people to collaborate with. Let's make it happen.
                            </p>

                            <motion.a
                                href="mailto:rohitmantur21@gmail.com"
                                whileHover={{ scale: 1.05, backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '1.2rem 2.5rem',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '100px',
                                    fontWeight: '700',
                                    width: 'fit-content',
                                    transition: 'all 0.3s ease',
                                    textDecoration: 'none',
                                    color: 'inherit'
                                }}
                            >
                                <Mail size={20} />
                                Start a Conversation
                            </motion.a>
                        </motion.div>

                        {/* LINKEDIN CARD */}
                        <motion.a
                            href="https://linkedin.com/in/rohit-mantur"
                            target="_blank"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: '#0077b5' }}
                            style={{
                                gridColumn: 'span 4',
                                background: 'var(--surface-color)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '3rem',
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            <div style={{ color: '#0077b5', background: '#0077b511', width: 'fit-content', padding: '1rem', borderRadius: '1.2rem' }}>
                                <Linkedin size={32} />
                            </div>
                            <div>
                                <span style={{ color: 'var(--text-dim)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.2rem', opacity: 0.6 }}>Professional</span>
                                <p style={{ fontSize: '1.6rem', fontWeight: '800', marginTop: '0.5rem' }}>Connect</p>
                            </div>
                        </motion.a>

                        {/* INSTAGRAM CARD */}
                        <motion.a
                            href="https://instagram.com/rohit_mantur"
                            target="_blank"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: '#e4405f' }}
                            style={{
                                gridColumn: 'span 4',
                                background: 'var(--surface-color)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '2.5rem',
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ color: '#e4405f', background: '#e4405f11', padding: '0.8rem', borderRadius: '0.8rem' }}>
                                <Instagram size={28} />
                            </div>
                            <span style={{ fontSize: '1.2rem', fontWeight: '700' }}>@rohit_mantur</span>
                        </motion.a>

                        {/* LOCATION CARD */}
                        <div style={{
                            gridColumn: 'span 5',
                            background: 'var(--surface-color)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '2.5rem',
                            padding: '2.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '2rem'
                        }}>
                            <div style={{ color: 'var(--accent-color)', background: 'var(--accent-color)11', padding: '1.2rem', borderRadius: '1.5rem' }}>
                                <MapPin size={32} />
                            </div>
                            <div>
                                <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem', textTransform: 'uppercase', opacity: 0.6 }}>Location</span>
                                <p style={{ fontSize: '1.2rem', fontWeight: '700' }}>Bagalkot, Karnataka, IN</p>
                            </div>
                        </div>

                        {/* PHONE CARD */}
                        <motion.a
                            href="tel:+917019576870"
                            whileHover={{ scale: 1.02 }}
                            style={{
                                gridColumn: 'span 3',
                                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)',
                                borderRadius: '2.5rem',
                                padding: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                color: 'white'
                            }}
                        >
                            <div style={{ textAlign: 'center' }}>
                                <Phone size={24} style={{ marginBottom: '0.5rem' }} />
                                <p style={{ fontWeight: '800' }}>+91 7019576870</p>
                            </div>
                        </motion.a>

                        {/* EMAIL CARD */}
                        <motion.a
                            href="mailto:rohitmantur21@gmail.com"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: 'var(--primary-color)' }}
                            style={{
                                gridColumn: 'span 4',
                                background: 'var(--surface-color)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '2.5rem',
                                padding: '2rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1.5rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div style={{ color: 'var(--primary-color)', background: 'var(--primary-color)11', padding: '0.8rem', borderRadius: '0.8rem' }}>
                                <Mail size={28} />
                            </div>
                            <span style={{ fontSize: '1rem', fontWeight: '700', wordBreak: 'break-all' }}>rohitmantur21@gmail.com</span>
                        </motion.a>

                        {/* RESUME CARD */}
                        <motion.a
                            href="/Rohit Mantur.pdf"
                            download="Rohit_Mantur_Resume.pdf"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, borderColor: 'var(--primary-color)', background: 'rgba(59, 130, 246, 0.05)' }}
                            style={{
                                gridColumn: 'span 12',
                                background: 'var(--surface-color)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '2.5rem',
                                padding: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '2rem',
                                textDecoration: 'none',
                                color: 'inherit',
                                transition: 'all 0.4s ease',
                                marginTop: '1rem'
                            }}
                        >
                            <div style={{
                                color: 'var(--primary-color)',
                                background: 'var(--primary-color)22',
                                padding: '1.2rem',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
                            }}>
                                <Download size={32} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.2rem' }}>Download My Resume</p>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1rem', opacity: 0.6 }}>Get a detailed look at my experience</p>
                            </div>
                            <div style={{
                                marginLeft: 'auto',
                                padding: '0.8rem 1.5rem',
                                border: '1px solid var(--primary-color)',
                                borderRadius: '100px',
                                color: 'var(--primary-color)',
                                fontWeight: '700',
                                fontSize: '0.9rem'
                            }}>
                                PDF • 293 KB
                            </div>
                        </motion.a>
                    </div>
                </div>

                <style dangerouslySetInnerHTML={{
                    __html: `
                    @media (max-width: 1100px) {
                        #contact .container > div {
                            grid-template-columns: repeat(2, 1fr) !important;
                            display: flex !important;
                            flex-direction: column !important;
                        }
                        #contact .container > div > * {
                            grid-column: span 1 !important;
                        }
                    }
                `}} />
            </div>
        </section>
    );
};

export default Contact;
