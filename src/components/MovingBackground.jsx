import React, { useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity } from 'framer-motion';

const GalaxyBackground = () => {
    const { scrollY, scrollYProgress } = useScroll();

    // Capture scroll velocity
    const scrollVelocity = useVelocity(scrollY);

    // Create a smoothed scroll progress for ultra-smooth parallax
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 40,
        restDelta: 0.001
    });

    // Smooth both progress and velocity for a high-end feel
    const smoothVelocity = useSpring(scrollVelocity, {
        stiffness: 80,
        damping: 40
    });

    // Velocity-based offset (Much stronger for "warp" feel)
    const velocityOffset = useTransform(smoothVelocity, [-3000, 3000], [-100, 100]);

    // Warp effect: Stretch stars vertically based on speed
    const warpScale = useTransform(smoothVelocity, [-4000, 0, 4000], [4, 1, 4]);

    // Enhanced parallax layers - combining base progress and dynamic velocity offset
    const nebulaY = useTransform(smoothProgress, [0, 1], ['0%', '-10%']);

    // Star layers now react aggressively to scrolling speed
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

    // Independent floating animation for objects (slow drifting)
    const floatTransition = {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
    };

    // Memoize stars to prevent re-renders and save performance
    const stars = useMemo(() => {
        const layers = { small: [], medium: [], bright: [] };

        // Layer 1: Tiny distant stars (High density)
        for (let i = 0; i < 300; i++) {
            layers.small.push({
                id: i,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        // Layer 2: Medium twinkling stars
        for (let i = 0; i < 100; i++) {
            layers.medium.push({
                id: i,
                top: `${Math.random() * 200}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                duration: Math.random() * 4 + 2
            });
        }

        // Layer 3: Brighter "closer" stars
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

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
            backgroundColor: '#030303', // Deep dark base
            overflow: 'hidden',
            pointerEvents: 'none'
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
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={floatTransition}
                    style={{
                        position: 'absolute',
                        top: '5%',
                        left: '0%',
                        width: '80vw',
                        height: '80vw',
                        background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
                        filter: 'blur(120px)',
                        borderRadius: '50%'
                    }}
                />

                {/* Deep Purple Nebula */}
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, -50, 0],
                        opacity: [0.05, 0.1, 0.05]
                    }}
                    transition={{ ...floatTransition, duration: 25 }}
                    style={{
                        position: 'absolute',
                        top: '40%',
                        right: '-10%',
                        width: '90vw',
                        height: '90vw',
                        background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
                        filter: 'blur(140px)',
                        borderRadius: '50%'
                    }}
                />

                {/* Subtle Cyan Accent */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '120%',
                        left: '10%',
                        width: '60vw',
                        height: '60vw',
                        background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
                        filter: 'blur(100px)',
                        opacity: 0.04,
                        borderRadius: '50%'
                    }}
                />
            </motion.div>

            {/* 2. Dainty Star Layers */}

            {/* Layer 1: Distant Small Stars (300 stars) */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', y: starLayer1Y, scaleY: warpScale, willChange: 'transform' }}>
                {stars.small.map(star => (
                    <div key={star.id} style={{
                        position: 'absolute',
                        top: star.top,
                        left: star.left,
                        width: '1px',
                        height: '1px',
                        background: '#fff',
                        opacity: star.opacity,
                        borderRadius: '50%'
                    }} />
                ))}
            </motion.div>

            {/* Layer 2: Medium Parallax Stars (100 stars) */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', y: starLayer2Y, scaleY: warpScale, willChange: 'transform' }}>
                {stars.medium.map(star => (
                    <motion.div
                        key={star.id}
                        animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
                        transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: star.top,
                            left: star.left,
                            width: '2px',
                            height: '2px',
                            background: '#fff',
                            borderRadius: '50%',
                            opacity: star.opacity,
                            boxShadow: '0 0 4px rgba(255, 255, 255, 0.4)'
                        }}
                    />
                ))}
            </motion.div>

            {/* Layer 3: Bright "Closer" Stars (40 stars) */}
            <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '200%', y: starLayer3Y, scaleY: warpScale, willChange: 'transform' }}>
                {stars.bright.map(star => (
                    <motion.div
                        key={star.id}
                        animate={{
                            opacity: [star.opacity, star.opacity * 0.5, star.opacity],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            top: star.top,
                            left: star.left,
                            width: star.size + 'px',
                            height: star.size + 'px',
                            background: '#fff',
                            borderRadius: '50%',
                            opacity: star.opacity,
                            boxShadow: '0 0 8px rgba(255, 255, 255, 0.6)'
                        }}
                    />
                ))}
            </motion.div>

            {/* 3. Subtle Grain / Noise Overlay for Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0.02,
                pointerEvents: 'none',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />

            {/* 4. Vignette for Readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, transparent 40%, rgba(3, 3, 3, 0.7) 100%)',
                pointerEvents: 'none'
            }} />
        </div>
    );
};

export default GalaxyBackground;
