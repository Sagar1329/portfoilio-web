import { motion } from 'framer-motion';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

export default function LanguagesInterests({ languages, interests }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Languages & Interests</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div className="bg-gray-800 p-8 rounded-xl shadow-xl">
                    <h3 className="font-heading text-text-primary text-3xl mb-4">Languages</h3>
                    <motion.ul className="list-none space-y-4">
                        {languages.map((lang, idx) => (
                            <motion.li key={idx} variants={listItemVariants} className="text-text-secondary font-body text-lg">
                                {lang}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
                <motion.div className="bg-gray-800 p-8 rounded-xl shadow-xl">
                    <h3 className="font-heading text-text-primary text-3xl mb-4">Interests</h3>
                    <motion.ul className="list-none space-y-4">
                        {interests.map((item, idx) => (
                            <motion.li key={idx} variants={listItemVariants} className="text-text-secondary font-body text-lg">
                                {item}
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
            </div>
        </motion.section>
    );
}