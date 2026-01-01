import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(350px, 1fr) minmax(500px, 1.8fr)',
                    gap: '8rem',
                    alignItems: 'center'
                }}>

                    {/* Image Column - Cosmic Portal Design */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        style={{ display: 'flex', justifyContent: 'center', position: 'relative', alignItems: 'center' }}
                        className="about-image-column"
                    >
                        {/* Outer Pulsing Aura */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{
                                position: 'absolute',
                                width: '450px',
                                height: '450px',
                                background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                                filter: 'blur(60px)',
                                zIndex: 0
                            }}
                        />

                        {/* Spinning Orbital Ring 1 (Dashed) */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                width: '380px',
                                height: '380px',
                                border: '2px dashed rgba(59, 130, 246, 0.3)',
                                borderRadius: '50%',
                                zIndex: 1
                            }}
                        />

                        {/* Spinning Orbital Ring 2 (Solid Glow) */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            style={{
                                position: 'absolute',
                                width: '340px',
                                height: '340px',
                                border: '1px solid rgba(139, 92, 246, 0.4)',
                                borderRadius: '50%',
                                boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
                                zIndex: 1
                            }}
                        />

                        {/* Image Container (The Portal) */}
                        <motion.div
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            style={{
                                width: '300px',
                                height: '300px',
                                borderRadius: '50%',
                                padding: '10px',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                position: 'relative',
                                zIndex: 2,
                                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '2px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                <img
                                    src="/my.jpg"
                                    alt="Rohit Mantur"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'contrast(1.1) brightness(1.1)'
                                    }}
                                />
                                {/* Glass Shine Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)',
                                    pointerEvents: 'none'
                                }} />
                            </div>
                        </motion.div>

                        {/* Orbiting Tech Dots */}
                        {[0, 120, 240].map((angle, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotate: [angle, angle + 360] }}
                                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                                style={{
                                    position: 'absolute',
                                    width: '400px',
                                    height: '400px',
                                    zIndex: 3
                                }}
                            >
                                <div style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    width: '8px',
                                    height: '8px',
                                    background: i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
                                    borderRadius: '50%',
                                    boxShadow: `0 0 10px ${i % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'}`
                                }} />
                            </motion.div>
                        ))}
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
                            color: '#d4d4d4',
                            lineHeight: '1.8',
                            background: 'rgba(255, 255, 255, 0.02)',
                            padding: '3.5rem',
                            borderRadius: '2.5rem',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
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
                                        style={{ color: '#a3a3a3', transition: 'color 0.3s' }}
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
                @media (max-width: 1024px) {
                    #about .container > div {
                        grid-template-columns: 1fr !important;
                        gap: 4rem !important;
                    }
                    .about-image-column { margin-bottom: 2rem; }
                }

                @media (max-width: 768px) {
                    #about { padding: 5rem 0 !important; }
                    .about-title { font-size: 2.5rem !important; margin-bottom: 1.5rem !important; text-align: center; }
                    .about-p { font-size: 1rem !important; text-align: center; }
                    .about-socials { justify-content: center; }
                }
            `}</style>
        </section>
    );
};

export default About;
