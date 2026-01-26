import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            degree: "B.E. in Computer Science & Engineering",
            institution: "Basaveshwar Engineering College, Bagalkot",
            duration: "2022 - 2026",
            grade: "8.02 CGPA",
            description: "Focused on core Computer Science principles including Data Structures, Algorithms, Computer Networks, and Operating Systems. Maintaining a strong academic record with special interest in System-level programming.",
            location: "Bagalkot, Karnataka",
            color: "#3b82f6"
        },
        {
            degree: "Pre-University Education (PCMC)",
            institution: "Tejas International PU College",
            duration: "2020 - 2022",
            grade: "First Class",
            description: "Completed higher secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
            location: "Bagalkot, Karnataka",
            color: "#8b5cf6"
        },
        {
            degree: "Secondary School Leaving Certificate (SSLC)-CBSE",
            institution: "M.R.G Internation Public School",
            duration: "2020",
            grade: "Pass",
            description: "Foundational education with a focus on science and mathematics.",
            location: "Bagalkot, Karnataka",
            color: "#06b6d4"
        }
    ];

    return (
        <section id="education" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Academic <span className="gradient-text">Journey</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>
                        Foundation of my technical expertise and engineering mindset
                    </p>
                </motion.div>

                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }} className="education-content-wrapper">
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '0px',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: 'linear-gradient(180deg, var(--primary-color), var(--secondary-color), transparent)',
                        opacity: 0.3
                    }} className="timeline-line" />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }} className="education-list">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{ position: 'relative', paddingLeft: '3.5rem' }}
                                className="education-item"
                            >
                                {/* Glowing Dot */}
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    style={{
                                        position: 'absolute',
                                        left: '-6px',
                                        top: '0',
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        background: item.color,
                                        boxShadow: `0 0 20px ${item.color}`,
                                        zIndex: 2
                                    }}
                                    className="timeline-dot"
                                />

                                <div style={{
                                    background: 'var(--surface-color)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '2rem',
                                    padding: '2.5rem',
                                    transition: 'transform 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }} className="education-card">
                                    {/* Sidebar Accent */}
                                    <div style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        width: '4px',
                                        background: item.color,
                                        opacity: 0.6
                                    }} className="card-accent" />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }} className="card-top">
                                        <div>
                                            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                                                {item.degree}
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: item.color, fontWeight: '600' }} className="institution-info">
                                                <GraduationCap size={18} />
                                                <span>{item.institution}</span>
                                            </div>
                                        </div>
                                        <div style={{ background: 'rgba(128,128,128,0.1)', padding: '0.5rem 1rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-dim)', fontSize: '0.9rem' }} className="duration-badge">
                                            <Calendar size={14} />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                    <p style={{ color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.05rem' }} className="education-desc">
                                        {item.description}
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', color: 'var(--text-dim)', fontSize: '0.9rem', opacity: 0.8, flexWrap: 'wrap' }} className="education-footer">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <MapPin size={14} />
                                            <span>{item.location}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: item.color, fontWeight: '700' }}>
                                            <Award size={14} />
                                            <span>Grade: {item.grade}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    #education {
                        padding: 4rem 0 !important;
                    }
                    #education h2 {
                        font-size: 2.2rem !important;
                        margin-bottom: 0.5rem !important;
                    }
                    #education p {
                        font-size: 1rem !important;
                    }
                    /* Remove vertical timeline line on mobile */
                    .timeline-line {
                        display: none !important;
                    }
                    /* Adjust vertical gap and padding */
                    .education-list {
                        gap: 1.5rem !important;
                    }
                    .education-item {
                        padding-left: 0 !important;
                    }
                    /* Hide timeline dot on mobile */
                    .timeline-dot {
                        display: none !important;
                    }
                    /* Adjust card styling for phone */
                    .education-card {
                        padding: 1.5rem !important;
                        border-radius: 1.5rem !important;
                    }
                    /* Remove sidebar accent on mobile to save space */
                    .card-accent {
                        display: none !important;
                    }
                    /* Compact texts */
                    h3 {
                        font-size: 1.3rem !important;
                        line-height: 1.3 !important;
                    }
                    .institution-info {
                        font-size: 0.85rem !important;
                    }
                    /* Badge/Duration styling */
                    .duration-badge {
                        padding: 0.3rem 0.8rem !important;
                        font-size: 0.75rem !important;
                        margin-bottom: 0.2rem !important;
                    }
                    /* Description and footer spacing */
                    .education-desc {
                        display: none !important;
                    }
                    .education-footer {
                        gap: 0.8rem !important;
                        flex-direction: column !important;
                        align-items: flex-start !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Education;
