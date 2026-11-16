import AboutSection from '../components/sections/AboutSection/AboutSection';
import ContactSection from '../components/sections/ContactSection/ContactSection';
import ExperienceSection from '../components/sections/ExperienceSection/ExperienceSection';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection/SkillsSection';

export default function AboutPage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
        </>
    );
}
