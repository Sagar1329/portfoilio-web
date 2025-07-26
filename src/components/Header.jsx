import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 100 },
    },
};

export default function Header({ profile }) {
    return (
        <motion.header
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-primary to-gray-800 py-8 text-center shadow-lg"
        >
            <motion.h1 variants={itemVariants} className="text-6xl font-heading text-white tracking-wider">
                {profile.name}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl font-body text-gray-300 mt-3">
                {profile.title}
            </motion.p>
            <motion.div variants={itemVariants} className="flex justify-center gap-6 mt-6 flex-wrap">
                <a href={`mailto:${profile.contact.email}`} className="text-accent hover:text-blue-400 transition-colors duration-300 text-lg font-body border border-accent px-4 py-2 rounded-full hover:bg-accent hover:text-white flex items-center space-x-2">
                    <FaEnvelope /> <span>Email</span>
                </a>
                <a href={profile.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-body border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-300 hover:text-primary flex items-center space-x-2">
                    <FaGithub /> <span>GitHub</span>
                </a>
                <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-body border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-300 hover:text-primary flex items-center space-x-2">
                    <FaLinkedin /> <span>LinkedIn</span>
                </a>
            </motion.div>
            <motion.p variants={itemVariants} className="text-base font-body text-gray-400 mt-5">
                <span className="inline-block mr-2">📱</span> {profile.contact.phone}
            </motion.p>
        </motion.header>
    );
}