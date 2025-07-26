import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
};

const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

const IconMap = {
    ...FaIcons,
    ...SiIcons,
};

export default function Skills({ skills }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Skills</h2>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, idx) => {
                    const IconComponent = IconMap[skill.icon];
                    return (
                        <motion.div
                            key={idx}
                            variants={skillVariants}
                            className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-accent/50 transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center"
                        >
                            {IconComponent && <IconComponent className="text-4xl text-accent mb-3" />}
                            <p className="text-text-primary font-body text-lg">{skill.name}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
}