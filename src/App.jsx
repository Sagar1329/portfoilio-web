import {
    profile,
    careerObjective,
    skills,
    certificates,
    projects,
    miniProjects,
    education,
    languages,
    interests
} from './data.js';
import { motion } from 'framer-motion';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Certificates from './components/Certificates.jsx';
import Projects from './components/Projects.jsx';
import MiniProjects from './components/MiniProjects.jsx';
import Education from './components/Education.jsx';
import LanguagesInterests from './components/LanguagesInterests.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


export default function App() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-primary min-h-screen"
        >
            <Header profile={profile} />
            <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
                <About careerObjective={careerObjective} />
                <Skills skills={skills} />
                <Certificates certificates={certificates} />
                <Projects projects={projects} />
                <MiniProjects miniProjects={miniProjects} />
                <Education education={education} />
                <LanguagesInterests languages={languages} interests={interests} />
                <Contact profile={profile} />
            </main>
            <Footer profile={profile} />
        </motion.div>
    );
}