import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

const GalaxyBackground = ({ theme }) => {
    const { scrollY, scrollYProgress } = useScroll();
    const isDark = theme === 'dark';

    // Capture scroll velocity
    const scrollVelocity = useVelocity(scrollY);

    // Create a smoothed scroll progress for ultra-smooth parallax
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 40,
        restDelta: 0.001
    });

    const smoothVelocity = useSpring(scrollVelocity, {
        stiffness: 80,
        damping: 40
    });

    const velocityOffset = useTransform(smoothVelocity, [-3000, 3000], [-100, 100]);
    const warpScale = useTransform(smoothVelocity, [-4000, 0, 4000], [4, 1, 4]);
    const nebulaY = useTransform(smoothProgress, [0, 1], ['0%', '-10%']);

    const starLayer1Y = useTransform(
        [smoothProgress, velocityOffset],
        ([p, v]) => `${(p * -15) + (v * 0.8)}%`
    );
    const starLayer2Y = useTransform(
        [smoothProgress, velocityOffset],
        ([p, v]) => `${(p * -25) + (v * 1.5)}%`
    );
    const starLayer3Y = useTransform(
        [smoothProgress, velocityOffset],
        ([p, v]) => `${(p * -40) + (v * 2.5)}%`
    );

    const floatTransition = {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
    };

    const stars = useMemo(() => {
        const layers = { small: [], medium: [], bright: [] };
        for (let i = 0; i < 300; i++) {
            layers.small.push({
                id: i,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1
            });
        }
        for (let i = 0; i < 100; i++) {
            layers.medium.push({
                id: i,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                duration: Math.random() * 4 + 2
            });
        }
        for (let i = 0; i < 40; i++) {
            layers.bright.push({
                id: i,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.4,
                duration: Math.random() * 2 + 1,
                size: Math.random() * 2 + 1.5
            });
        }
        return layers;
    }, []);

    const starColor = isDark ? '#fff' : '#2563eb';
    const nebulaOpacityMultiplier = isDark ? 1 : 0.3;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            backgroundColor: 'var(--bg-color)',
            overflow: 'hidden',
            pointerEvents: 'none',
            transition: 'background-color 0.5s ease'
        }}>
            {/* 1. Nebula Gradients Layer */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '200%',
                    y: nebulaY,
                    willChange: 'transform'
                }}
            >
                {/* Soft Blue Nebula */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        opacity: [0.08 * nebulaOpacityMultiplier, 0.12 * nebulaOpacityMultiplier, 0.08 * nebulaOpacityMultiplier]
                    }}
                    transition={floatTransition}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '0%',
                        width: '80vw',
                        height: '80vw',
                        background: isDark ? 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' : 'radial-gradient(circle, #bfdbfe 0%, transparent 70%)',
                        filter: 'blur(120px)',
                        borderRadius: '50%'
                    }}
                />

                {/* Deep Purple Nebula */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                        opacity: [0.05 * nebulaOpacityMultiplier, 0.1 * nebulaOpacityMultiplier, 0.05 * nebulaOpacityMultiplier]
                    }}
                    transition={{ ...floatTransition, duration: 25 }}
                    style={{
                        position: 'absolute',
                        top: '40%',
                        right: '-10%',
                        width: '90vw',
                        height: '90vw',
                        background: isDark ? 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' : 'radial-gradient(circle, #ddd6fe 0%, transparent 70%)',
                        filter: 'blur(140px)',
                        borderRadius: '50%'
                    }}
                />
            </motion.div>

            {/* Light Mode Sparkles */}
            {!isDark && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={`sparkle-${i}`}
                            animate={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.2, 0],
                                y: ['0vh', '-20vh']
                            }}
                            transition={{
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "easeOut"
                            }}
                            style={{
                                position: 'absolute',
                                top: (Math.random() * 100) + '%',
                                left: (Math.random() * 100) + '%',
                                width: '2px',
                                height: '2px',
                                background: 'var(--primary-color)',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px var(--primary-color)',
                                zIndex: 1
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 2. Star Layers */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', y: starLayer1Y, scaleY: warpScale, willChange: 'transform', opacity: isDark ? 1 : 0.4 }}>
                {stars.small.map(star => (
                    <div key={star.id} style={{
                        position: 'absolute',
                        top: star.top,
                        left: star.left,
                        width: '1px',
                        height: '1px',
                        background: starColor,
                        opacity: star.opacity,
                        borderRadius: '50%'
                    }} />
                ))}
            </motion.div>

            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', y: starLayer2Y, scaleY: warpScale, willChange: 'transform', opacity: isDark ? 1 : 0.6 }}>
                {stars.medium.map(star => (
                    <motion.div
                        key={star.id}
                        animate={{
                            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                            scale: !isDark ? [1, 1.5, 1] : [1, 1.2, 1]
                        }}
                        transition={{
                            duration: !isDark ? star.duration * 0.7 : star.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            position: 'absolute',
                            top: star.top,
                            left: star.left,
                            width: '2px',
                            height: '2px',
                            background: starColor,
                            borderRadius: '50%',
                            opacity: star.opacity,
                            boxShadow: isDark ? '0 0 4px rgba(255, 255, 255, 0.4)' : `0 0 6px ${starColor}44`
                        }}
                    />
                ))}
            </motion.div>

            {/* 3. Light Mode Atmospheric Orbs (Only visible in light mode) */}
            {!isDark && (
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`orb-${i}`}
                            animate={{
                                x: [
                                    Math.random() * 100 + '%',
                                    (Math.random() * 100) + '%',
                                    (Math.random() * 100) + '%'
                                ],
                                y: [
                                    Math.random() * 100 + '%',
                                    (Math.random() * 100) + '%',
                                    (Math.random() * 100) + '%'
                                ],
                                scale: [1, 1.2, 0.9, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                                duration: 20 + Math.random() * 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{
                                position: 'absolute',
                                width: '30vw',
                                height: '30vw',
                                background: i % 2 === 0 ? 'radial-gradient(circle, #dcfce7 0%, transparent 70%)' : 'radial-gradient(circle, #e0f2fe 0%, transparent 70%)',
                                filter: 'blur(100px)',
                                borderRadius: '50%',
                                pointerEvents: 'none',
                                zIndex: 0
                            }}
                        />
                    ))}
                </div>
            )}

            {/* 4. Subtle Grain / Noise Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isDark ? 0.02 : 0.01,
                pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

            {/* 5. Layer Overlay for Contrast (Vignette) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: isDark
                    ? 'radial-gradient(circle, transparent 40%, rgba(3, 3, 3, 0.7) 100%)'
                    : 'radial-gradient(circle, transparent 70%, rgba(248, 250, 252, 0.4) 100%)',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default GalaxyBackground;
