import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
    },
};

const projectCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
};

export default function Projects({ projects }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Projects</h2>
            <motion.div className="grid gap-8 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        variants={projectCardVariants}
                        className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <h3 className="text-3xl font-heading text-text-primary mb-3">{project.title}</h3>
                        <p className="text-base font-body text-gray-400 mb-4">{project.period}</p>
                        <p className="text-text-secondary font-body mb-6 leading-relaxed">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-accent text-white font-body px-6 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg"
                        >
                            <FaGithub /> <span>View GitHub</span>
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}