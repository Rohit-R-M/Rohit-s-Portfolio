import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Code2 } from 'lucide-react';

const GithubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const username = 'Rohit-R-M';

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch up to 30 repos to represent "all"
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`);
                const data = await response.json();
                if (Array.isArray(data)) {
                    setRepos(data);
                }
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    // Double the repos for a seamless loop
    const duplicatedRepos = [...repos, ...repos];

    return (
        <section id="github" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', marginBottom: '1rem' }}>
                            GITHUB <span className="gradient-text">ACTIVITY</span>
                        </h2>
                        <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                            A live feed of my latest open-source contributions and code explorations.
                        </p>
                    </motion.div>
                </div>
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '4rem' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                        <Github size={40} style={{ opacity: 0.3 }} />
                    </motion.div>
                </div>
            ) : (
                <div className="marquee-container" style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '2rem 0' }}>
                    {/* Shadow overlays for smooth fade */}
                    <div className="fade-overlay left" />
                    <div className="fade-overlay right" />

                    <div className="marquee-track">
                        {duplicatedRepos.map((repo, index) => (
                            <div
                                key={`${repo.id}-${index}`}
                                className="repo-card"
                            >
                                <div className="card-header">
                                    <Code2 size={24} className="icon-code" />
                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={18} className="icon-link" />
                                    </a>
                                </div>

                                <h3 className="repo-name">
                                    {repo.name.replace(/-/g, ' ')}
                                </h3>

                                <p className="repo-description">
                                    {repo.description || "Experimental project and code exploration."}
                                </p>

                                <div className="repo-stats">
                                    {repo.language && (
                                        <div className="stat">
                                            <span className="dot" />
                                            {repo.language}
                                        </div>
                                    )}
                                    <div className="stat">
                                        <Star size={12} />
                                        {repo.stargazers_count}
                                    </div>
                                    <div className="stat">
                                        <GitFork size={12} />
                                        {repo.forks_count}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    #github {
                        display: none !important;
                    }
                }

                #github::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, var(--border-color), transparent);
                }

                .fade-overlay {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 15vw;
                    z-index: 10;
                    pointer-events: none;
                }

                .fade-overlay.left {
                    left: 0;
                    background: linear-gradient(to right, var(--bg-color), transparent);
                }

                .fade-overlay.right {
                    right: 0;
                    background: linear-gradient(to left, var(--bg-color), transparent);
                }

                .marquee-track {
                    display: flex;
                    gap: 2rem;
                    width: max-content;
                    padding: 1rem;
                    animation: marquee 60s linear infinite;
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .repo-card {
                    width: 320px;
                    background: var(--surface-color);
                    border: 1px solid var(--border-color);
                    border-radius: 1.5rem;
                    padding: 1.8rem;
                    display: flex;
                    flex-direction: column;
                    transition: all 0.3s ease;
                    backdrop-filter: blur(10px);
                }

                .repo-card:hover {
                    border-color: var(--primary-color);
                    transform: translateY(-5px);
                    background: rgba(var(--primary-rgb), 0.05);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 1.2rem;
                }

                .icon-code { color: var(--primary-color); }
                .icon-link { color: var(--text-dim); opacity: 0.5; transition: opacity 0.3s; }
                .icon-link:hover { opacity: 1; color: var(--primary-color); }

                .repo-name {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin-bottom: 0.8rem;
                    color: var(--text-color);
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .repo-description {
                    color: var(--text-dim);
                    font-size: 0.85rem;
                    line-height: 1.5;
                    margin-bottom: 1.5rem;
                    flex-grow: 1;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    height: 2.5rem;
                }

                .repo-stats {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;
                    font-size: 0.8rem;
                    color: var(--text-dim);
                }

                .stat { display: flex; alignItems: center; gap: 0.4rem; }
                .stat .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--primary-color); }

                .visit-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    padding: 1rem 2.5rem;
                    border-radius: 100px;
                    background: var(--primary-gradient);
                    color: white;
                    text-decoration: none;
                    font-weight: 700;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                    transition: all 0.3s ease;
                }
            `}</style>
        </section>
    );
};

export default GithubRepos;
