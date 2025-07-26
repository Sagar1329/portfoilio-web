import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function About({ careerObjective }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-gray-800 p-8 rounded-lg shadow-xl"
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Career Objective</h2>
            <p className="text-text-primary text-xl font-body leading-relaxed">{careerObjective}</p>
        </motion.section>
    );
}