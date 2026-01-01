import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2,
    Smartphone,
    Cpu,
    Network,
    Cloud,
    Sparkles,
    Database,
    Terminal,
    Globe,
    Layout,
    Layers,
    Zap,
    Container,
    Server,
    Github
} from 'lucide-react';

const Skills = () => {
    const allSkills = [
        { name: "Android Studio", icon: <Layers size={18} />, color: "#3ddc84" },
        { name: "C", icon: <Terminal size={18} />, color: "#64748b" },
        { name: "Cloud Computing", icon: <Cloud size={18} />, color: "#0ea5e9" },
        { name: "Computer Architecture", icon: <Cpu size={18} />, color: "#a78bfa" },
        { name: "Computer Networking", icon: <Network size={18} />, color: "#38bdf8" },
        { name: "Dart", icon: <Zap size={18} />, color: "#06b6d4" },
        { name: "DB Management", icon: <Database size={18} />, color: "#f472b6" },
        { name: "DSA", icon: <Layout size={18} />, color: "#f87171" },
        { name: "Firebase", icon: <Database size={18} />, color: "#f59e0b" },
        { name: "Flutter", icon: <Smartphone size={18} />, color: "#3b82f6" },
        { name: "Git / GitHub", icon: <Github size={18} />, color: "#f05032" },
        { name: "Java", icon: <Code2 size={18} />, color: "#ef4444" },
        { name: "JavaScript", icon: <Code2 size={18} />, color: "#facc15" },
        { name: "Operating Systems", icon: <Cpu size={18} />, color: "#818cf8" },
        { name: "Prompt Engineering", icon: <Sparkles size={18} />, color: "#fbbf24" },
        { name: "Python", icon: <Terminal size={18} />, color: "#3776ab" },
        { name: "REST APIs", icon: <Globe size={18} />, color: "#10b981" },
        { name: "Web Development", icon: <Globe size={18} />, color: "#fb7185" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <section id="skills" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem' }}>
                        Technical <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p style={{ color: '#a3a3a3', fontSize: '1.2rem' }}>
                        Individual building blocks of my engineering journey
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    {allSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                borderColor: skill.color,
                                boxShadow: `0 0 20px ${skill.color}30`
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 2rem',
                                background: 'rgba(23, 23, 23, 0.4)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                borderRadius: '100px',
                                color: '#fff',
                                cursor: 'default',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <span style={{ color: skill.color, display: 'flex', alignItems: 'center' }}>
                                {skill.icon}
                            </span>
                            <span style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                letterSpacing: '0.5px'
                            }}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Subtle Ambient Background Glow */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
                zIndex: -1,
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Skills;
