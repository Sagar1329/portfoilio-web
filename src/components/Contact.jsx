import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
};

const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120 },
    },
};

export default function Contact({ profile }) {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-4xl font-heading text-accent mb-6 border-b-2 border-accent pb-2">Contact</h2>
            <motion.div className="space-y-6 text-text-secondary bg-gray-800 p-8 rounded-xl shadow-xl">
                <motion.p variants={contactItemVariants} className="text-xl font-body flex items-center space-x-3">
                    <FaEnvelope className="text-accent" /> <span>Email:</span> <a href={`mailto:${profile.contact.email}`} className="text-accent hover:text-blue-400 transition-colors duration-300">{profile.contact.email}</a>
                </motion.p>
                <motion.p variants={contactItemVariants} className="text-xl font-body flex items-center space-x-3">
                    <FaPhone className="text-accent" /> <span>Phone:</span> <span className="text-text-primary">{profile.contact.phone}</span>
                </motion.p>
                <motion.p variants={contactItemVariants} className="text-xl font-body flex items-center space-x-3">
                    <FaGithub className="text-accent" /> <span>GitHub:</span> <a href={profile.contact.github} className="text-accent hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">{profile.contact.github}</a>
                </motion.p>
                <motion.p variants={contactItemVariants} className="text-xl font-body flex items-center space-x-3">
                    <FaLinkedin className="text-accent" /> <span>LinkedIn:</span> <a href={profile.contact.linkedin} className="text-accent hover:text-blue-400 transition-colors duration-300" target="_blank" rel="noopener noreferrer">{profile.contact.linkedin}</a>
                </motion.p>
            </motion.div>
        </motion.section>
    );
}