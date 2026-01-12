import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0 8rem 0', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="about-grid">
                    <style>{`
                        .about-grid {
                            display: grid;
                            grid-template-columns: minmax(400px, 1fr) 1.8fr;
                            gap: 10rem;
                            align-items: center;
                        }

                        .tech-square-container {
                            position: relative;
                            width: 380px;
                            height: 380px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }

                        .square-main {
                            width: 340px;
                            height: 340px;
                            background: var(--surface-color);
                            position: relative;
                            z-index: 2;
                            overflow: hidden;
                            border: 1px solid rgba(255, 255, 255, 0.1);
                            border-radius: 48px;
                        }

                        .square-border-offset {
                            position: absolute;
                            width: 340px;
                            height: 340px;
                            border: 2px solid var(--primary-color);
                            opacity: 0.2;
                            z-index: 1;
                            transform: translate(15px, 15px);
                            border-radius: 48px;
                        }

                        .corner-bracket {
                            position: absolute;
                            width: 30px;
                            height: 30px;
                            border: 2px solid var(--primary-color);
                            z-index: 3;
                        }

                        .br-tl { top: -10px; left: -10px; border-right: none; border-bottom: none; }
                        .br-tr { top: -10px; right: -10px; border-left: none; border-bottom: none; }
                        .br-bl { bottom: -10px; left: -10px; border-right: none; border-top: none; }
                        .br-br { bottom: -10px; right: -10px; border-left: none; border-top: none; }

                        @media (max-width: 1024px) {
                            .about-grid {
                                grid-template-columns: 1fr;
                                gap: 4rem;
                                text-align: center;
                            }
                            .tech-square-container { width: 300px; height: 300px; margin: 0 auto; }
                            .square-main, .square-border-offset { 
                                width: 260px; 
                                height: 260px; 
                                border-radius: 32px;
                            }
                        }
                    `}</style>

                    {/* Image Column - Future-Tech Orb Design */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}
                        className="about-image-column"
                    >
                        {/* Core Aura - Dynamic Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                width: '460px',
                                height: '460px',
                                background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                                filter: 'blur(50px)',
                                zIndex: 0
                            }}
                        />



                        {/* High-Tech Square Profile Design */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="tech-square-container"
                        >
                            {/* Decorative Offset Border */}
                            <motion.div
                                animate={{ opacity: [0.1, 0.3, 0.1], x: [15, 20, 15], y: [15, 20, 15] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="square-border-offset"
                            />

                            {/* Corner Brackets */}
                            <div className="corner-bracket br-tl" />
                            <div className="corner-bracket br-tr" />
                            <div className="corner-bracket br-bl" />
                            <div className="corner-bracket br-br" />

                            {/* Main Square Content */}
                            <div className="square-main">
                                <img
                                    src="my.jpeg"
                                    alt="Rohit Mantur"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'contrast(1.05) brightness(1.1)'
                                    }}
                                />

                                {/* Vertical Laser Scan */}
                                <motion.div
                                    animate={{ top: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        width: '100%',
                                        height: '2px',
                                        background: 'var(--primary-color)',
                                        boxShadow: '0 0 15px var(--primary-color)',
                                        zIndex: 3
                                    }}
                                />

                                {/* Glass Grid Effect */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                                    backgroundSize: '20px 20px',
                                    zIndex: 2,
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            {/* Floating Tech Fragments */}
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                    style={{
                                        position: 'absolute',
                                        width: '12px',
                                        height: '12px',
                                        border: '1px solid var(--primary-color)',
                                        zIndex: 4,
                                        top: i === 0 ? '10%' : i === 1 ? '85%' : '45%',
                                        left: i === 0 ? '95%' : i === 1 ? '5%' : '105%',
                                    }}
                                />
                            ))}
                        </motion.div>


                    </motion.div>

                    {/* Text Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="about-text-column"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ fontSize: '3.5rem', marginBottom: '2rem', fontWeight: '800' }}
                            className="about-title"
                        >
                            About <span className="gradient-text">Me</span>
                        </motion.h2>

                        <div style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-dim)',
                            lineHeight: '1.8',
                            background: 'var(--surface-color)',
                            padding: '3.5rem',
                            borderRadius: '2.5rem',
                            border: '1px solid var(--border-color)',
                            backdropFilter: 'blur(5px)'
                        }}>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                style={{ marginBottom: '1.5rem' }}
                                className="about-p"
                            >
                                I am a Flutter Developer and Computer Science Engineering student with a strong interest in computer networking and system-level concepts. I have hands-on experience in building responsive and scalable mobile applications using Flutter, along with a solid foundation in core computer science subjects.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                style={{ marginBottom: '1.5rem' }}
                                className="about-p"
                            >
                                My technical skills include Flutter, C, Java, Data Structures & Algorithms (DSA), and Computer Networks. I enjoy understanding how data flows across networks and how systems communicate to impact real-world application performance.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                style={{ marginBottom: '2.5rem' }}
                                className="about-p"
                            >
                                I am passionate about applying networking concepts to build better software solutions. I am open to internships, collaborations, and networking opportunities in Flutter development and software engineering. Let’s learn and grow together.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                style={{ display: 'flex', gap: '2rem' }}
                                className="about-socials"
                            >
                                {[
                                    { Icon: Github, href: 'https://github.com/Rohit-R-M' },
                                    { Icon: Linkedin, href: 'https://linkedin.com/in/rohit-mantur' },
                                    { Icon: Mail, href: 'mailto:rohitmantur21@gmail.com' }
                                ].map(({ Icon, href }, index) => (
                                    <motion.a
                                        key={index}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: 'var(--primary-color)', y: -5 }}
                                        style={{ color: 'var(--text-dim)', transition: 'color 0.3s' }}
                                    >
                                        <Icon size={32} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
            <style>{`
                :root {
                }

                @media (max-width: 1024px) {
                    #about .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                    .about-image-column { margin-bottom: 2rem; }
                }

                @media (max-width: 768px) {
                    :root {
                    }
                    #about { padding: 5rem 0 !important; }
                    .about-title { font-size: 2.5rem !important; margin-bottom: 1.5rem !important; text-align: center; }
                    .about-p { font-size: 1rem !important; text-align: center; }
                    .about-socials { justify-content: center; }
                    .about-floating-logo { padding: 8px !important; borderRadius: 10px !important; }
                }

                @media (max-width: 480px) {
                    :root {
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
