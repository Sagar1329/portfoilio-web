import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
};

const miniProjectItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

export default function MiniProjects({ miniProjects }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Mini Projects</h2>
            <motion.ul className="list-none space-y-4">
                {miniProjects.map((item, idx) => (
                    <motion.li key={idx} variants={miniProjectItemVariants} className="bg-gray-800 p-6 rounded-lg shadow-xl text-text-primary font-body text-lg">
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.section>
    );
}