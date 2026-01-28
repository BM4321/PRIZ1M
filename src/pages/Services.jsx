import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { loadContent } from '../utils/contentLoader';
import { Monitor, Smartphone, Palette, Search, PenTool, Layout, Code, Database, Server, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
    Monitor, Smartphone, Palette, Search, PenTool, Layout, Code, Database, Server
};

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await loadContent('services');
                setServices(data);
            } catch (error) {
                console.error("Failed to load services:", error);
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

    return (
        <div className="page-container container" style={{ padding: '6rem 1rem' }}>
            <div className="text-center" style={{ marginBottom: '4rem' }}>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Services
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Expert solutions tailored to your needs
                </motion.p>
            </div>

            {loading ? (
                <div className="text-center">Loading services...</div>
            ) : (
                <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={getIcon(service.icon)}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Services;
