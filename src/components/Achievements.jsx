import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "1st Place - Project Competition",
            organization: "Student Academics Management (SAM)",
            date: "2025",
            description: "Secured 1st place in a major project competition for developing 'SAM', a comprehensive academic management system recognized for its practical utility and technical execution.",
            icon: <Award size={24} />,
            color: "#3b82f6"
        },
        {
            title: "3rd Place - Hackathon",
            organization: "Student Academics Management (SAM)",
            date: "2025",
            description: "Achieved 3rd place in a competitive hackathon by pitching and demonstrating the core functionalities of the Student Academics Management system.",
            icon: <Zap size={24} />,
            color: "#8b5cf6"
        },
        {
            title: "1st Place - Quiz Competition",
            organization: "Technical Quiz Contest",
            date: "2025",
            description: "Secured 1st place in a technical quiz competition, showcasing quick thinking and a strong grasp of computer science and general technology concepts.",
            icon: <Award size={24} />,
            color: "#10b981"
        },
        {
            title: "Privacy and Security in Online Social Media",
            organization: "NPTEL",
            date: "2024",
            score: "72%",
            description: "Successfully identified privacy risks and implemented security protocols for online social platforms in this comprehensive certification.",
            icon: <Award size={24} />,
            color: "#06b6d4"
        },
        {
            title: "Wildlife Ecology",
            organization: "NPTEL",
            date: "2025",
            score: "91%",
            description: "Explored foundational knowledge in ecology, conservation strategies, and the delicate balance of natural ecosystems.",
            icon: <Star size={24} />,
            color: "#10b981"
        },
        {
            title: "Flutter Application Development",
            organization: "Infosys Springboard",
            date: "2024",
            description: "Developed proficiency in building high-performance, cross-platform mobile applications using the Flutter framework and Dart.",
            icon: <Trophy size={24} />,
            color: "#f59e0b"
        }
    ];

    return (
        <section id="achievements" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', fontWeight: '900', marginBottom: '1rem' }}>
                        Major <span className="gradient-text">Milestones</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', padding: '0 1rem' }}>
                        Recognition of my passion for building and solving
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: '2rem'
                }}>
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                background: 'var(--surface-color)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '2.5rem',
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                            }}
                        >
                            {/* Accent Glow */}
                            <div style={{
                                position: 'absolute',
                                top: '-20%',
                                right: '-20%',
                                width: '150px',
                                height: '150px',
                                background: item.color,
                                filter: 'blur(100px)',
                                opacity: 0.1,
                                borderRadius: '50%'
                            }} />

                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '1.2rem',
                                background: `${item.color}15`,
                                border: `1px solid ${item.color}30`,
                                color: item.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '2rem'
                            }}>
                                {item.icon}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.4rem', color: 'var(--text-color)' }}>
                                            {item.title}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
                                            <p style={{ color: item.color, fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                {item.organization}
                                            </p>
                                            {item.score && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    background: `${item.color}20`,
                                                    color: item.color,
                                                    padding: '0.2rem 0.6rem',
                                                    borderRadius: '100px',
                                                    fontWeight: '800',
                                                    border: `1px solid ${item.color}40`
                                                }}>
                                                    SCORE: {item.score}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '600', opacity: 0.6, whiteSpace: 'nowrap' }}>{item.date}</span>
                                </div>

                                <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'var(--primary-color)',
                filter: 'blur(150px)',
                opacity: 0.05,
                zIndex: -1,
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Achievements;
