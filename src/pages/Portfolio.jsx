import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { loadContent } from '../utils/contentLoader';
import { ShoppingBag, Rocket, Globe, Monitor, Smartphone, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap = {
    ShoppingBag, Rocket, Globe, Monitor, Smartphone
};

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await loadContent('portfolio');
                setProjects(data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(data.map(p => p.category).filter(Boolean))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to load portfolio:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const getIcon = (iconName) => {
        const IconComponent = iconMap[iconName] || HelpCircle;
        return <IconComponent />;
    };

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="page-container container" style={{ padding: '6rem 1rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Portfolio
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Check out our latest work
                </motion.p>
            </div>

            {/* Filter Buttons */}
            {!loading && (
                <motion.div
                    className="filter-container display-flex justify-center gap-md mb-lg"
                    style={{ marginBottom: '3rem', flexWrap: 'wrap' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? 'primary' : 'secondary'}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                padding: '0.5rem 1.2rem',
                                fontSize: '0.9rem',
                                minWidth: 'auto'
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </motion.div>
            )}

            {loading ? (
                <div className="text-center">Loading projects...</div>
            ) : (
                <motion.div
                    className="grid-3"
                    layout
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <Card
                                key={project.title} // Use unique key for animation
                                title={project.title}
                                description={project.description}
                                icon={getIcon(project.icon)}
                                image={project.image}
                                style={{ height: '100%' }}
                            // Framer Motion props handled inside Card or here as wrapper
                            // Since Card has its own animation, we can wrap it or pass layout props
                            >
                                {/* Category Label inside Card */}
                                {project.category && (
                                    <div style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--color-secondary)',
                                        fontWeight: '600',
                                        marginTop: 'auto',
                                        paddingTop: '1rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {project.category}
                                    </div>
                                )}
                            </Card>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}

            {!loading && filteredProjects.length === 0 && (
                <div className="text-center" style={{ marginTop: '2rem', color: 'var(--color-text-secondary)' }}>
                    No projects found in this category.
                </div>
            )}
        </div>
    );
};

export default Portfolio;
