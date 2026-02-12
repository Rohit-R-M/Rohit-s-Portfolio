import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles } from 'lucide-react';

const Experience = () => {
    const experienceData = [
        {
            title: "Internship",
            company: "Hindustan Aeronautics Limited (HAL)",
            duration: "Jan 2026 - Ongoing",
            location: "HAL ADB",
            description: "Working in HAL ADB department on aircraft design–related activities.",
            responsibilities: [
                "Assisting in analysis, documentation, and study of aircraft systems and design concepts",
                "Contributing to research initiatives within the aviation sector",
                "Learning and applying software concepts in a professional aerospace environment"
            ],
            color: "#3b82f6",
        }
    ];

    return (
        <section id="experience" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '6rem' }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Professional <span className="gradient-text">Experience</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem' }}>
                        My career journey and professional contributions
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--surface-color)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '2.5rem',
                                padding: '3rem',
                                position: 'relative',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '3rem',
                                transition: 'all 0.4s ease'
                            }}
                            className="experience-card"
                            whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.1)' }}
                        >
                            {/* Decorative elements */}
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                opacity: 0.1,
                                pointerEvents: 'none'
                            }}>
                                <Briefcase size={80} color={exp.color} />
                            </div>

                            <div style={{ flex: '1 1 300px' }} className="exp-info">
                                <div style={{
                                    background: `${exp.color}15`,
                                    color: exp.color,
                                    padding: '0.6rem 1.2rem',
                                    borderRadius: '100px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    marginBottom: '1.5rem'
                                }}>
                                    <Sparkles size={14} />
                                    <span>Work Experience</span>
                                </div>

                                <h3 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', lineHeight: '1.2' }}>
                                    {exp.title}
                                </h3>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: exp.color, fontSize: '1.2rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                                    <span>{exp.company}</span>
                                    {exp.link && (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.6 }}>
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-dim)', fontSize: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <Calendar size={18} />
                                        <span>{exp.duration}</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <MapPin size={18} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    {exp.description}
                                </p>
                            </div>

                            <div style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.02)', borderRadius: '2rem', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)' }} className="exp-details">
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Key Responsibilities
                                </h4>
                                <ul style={{ listStyle: 'none', display: 'grid', gap: '1.2rem' }}>
                                    {exp.responsibilities.map((item, i) => (
                                        <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-dim)', fontSize: '1.05rem', lineHeight: '1.5' }}>
                                            <div style={{
                                                minWidth: '24px',
                                                height: '24px',
                                                borderRadius: '50%',
                                                background: `${exp.color}20`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: exp.color,
                                                marginTop: '2px'
                                            }}>
                                                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    #experience {
                        padding: 4rem 0 !important;
                    }
                    #experience h2 {
                        font-size: 2.2rem !important;
                    }
                    .experience-card {
                        padding: 2rem !important;
                        border-radius: 2rem !important;
                        gap: 2rem !important;
                    }
                    .experience-card h3 {
                        font-size: 1.6rem !important;
                    }
                    .exp-details {
                        padding: 1.5rem !important;
                    }
                    .exp-details h4 {
                        font-size: 0.9rem !important;
                    }
                    .exp-details li {
                        font-size: 0.95rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Experience;
