import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
};

const educationItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

export default function Education({ education }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Education</h2>
            <motion.div className="space-y-6">
                {education.map((ed, idx) => (
                    <motion.div key={idx} variants={educationItemVariants} className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
                        <strong className="text-text-primary text-2xl font-heading block mb-2">{ed.institution}</strong>
                        <p className="text-text-secondary font-body text-lg">{ed.details}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}