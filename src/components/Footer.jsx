import { motion } from 'framer-motion';

export default function Footer({ profile }) {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="py-10 text-center text-gray-400 text-base font-body mt-20 bg-gray-900 shadow-inner"
        >
            <p>Made with ☕ and a lot of debugging. Probably still has bugs, just like my life choices.</p>
            <p className="mt-2">All rights reserved. (Except for the bugs, those are free.)</p>
        </motion.footer>
    );
}