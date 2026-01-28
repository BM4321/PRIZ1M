import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { loadContent } from '../utils/contentLoader';
import { motion } from 'framer-motion';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await loadContent('packages');
                setPackages(data);
            } catch (error) {
                console.error("Failed to load packages:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="page-container container" style={{ padding: '6rem 1rem' }}>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Packages
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Choose the plan that fits your business
                </motion.p>
            </div>

            {loading ? (
                <div className="text-center">Loading packages...</div>
            ) : (
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {packages.map((pkg, index) => {
                        const isHighlighted = pkg.highlighted;
                        return (
                            <Card
                                key={index}
                                title={pkg.title}
                                description={pkg.description}
                                className="text-center"
                                style={{
                                    borderColor: isHighlighted ? 'var(--color-primary)' : 'var(--color-border)',
                                    borderWidth: isHighlighted ? '2px' : '1px',
                                    transform: isHighlighted ? 'scale(1.02)' : 'none',
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0', color: isHighlighted ? 'var(--color-primary)' : 'inherit' }}>{pkg.price}</div>
                                <ul style={{ textAlign: 'left', margin: '1.5rem 0', listStyle: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
                                    {pkg.features && pkg.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                                <Button variant={isHighlighted ? "primary" : "secondary"} style={{ width: '100%' }}>{pkg.buttonText}</Button>
                            </Card>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Packages;
