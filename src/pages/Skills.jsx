import React from "react";
import Navbar from "../components/Navbar";
import './Skills.css';

const Skills = () => {
    //todo: Heading -
    const heading = 'My Skills';

    //todo: Frontend Tools  -
    const title1 = 'Frontend';
    const frontendTools = ['HTML5', 'CSS3', 'JavaScript', 'React', 'BootStrap', 'TailwindCSS'];

    //todo: Tools & Platforms -
    const title2 = 'Tools & Platforms';
    const designTools = ['Git & GitHub', 'VS Code', 'Netlify / Vercel', 'Chrome DevTools'];

    //todo: Build Tools -
    const title3 = 'Build Tools';
    const buildTools = ['NPM / Yarn', 'Webpack', 'Vite'];

    //todo: Other Tools -
    const title4 = 'Other Skills';
    const otherTools = ['SEO Basics', 'DSA (Basic)', 'AI Tools (e.g., ChatGPT, Grok, Claude, v0.dev, Lovable, Cursor, Copilot)', 'MS-Word'];

    return (
        <>
            <Navbar />
            <div className="background-animation"></div>
            {/* Skills */}
            <section className="skills-section">
                <h2>{heading}</h2>
                <div className="skills-grid">
                    {/* Frontend Tools */}
                    <div className="skill-card">
                        <h3 className="skill-category">{title1}</h3>
                        {frontendTools.map((tech, idx) => (
                            <ul className="skill-list" key={idx}>
                                <li className="skill-item">{tech}</li>
                            </ul>
                        ))}
                    </div>
                    {/* Tools & Platforms */}
                    <div className="skill-card">
                        <h3 className="skill-category">{title2}</h3>
                        {designTools.map((tech, idx) => (
                            <ul className="skill-list" key={idx}>
                                <li className="skill-item">{tech}</li>
                            </ul>
                        ))}
                    </div>
                    {/* Build Tools */}
                    <div className="skill-card">
                        <h3 className="skill-category">{title3}</h3>
                        {buildTools.map((tech, idx) => (
                            <ul className="skill-list" key={idx}>
                                <li className="skill-item">{tech}</li>
                            </ul>
                        ))}
                    </div>
                    {/* Other Tools */}
                    <div className="skill-card">
                        <h3 className="skill-category">{title4}</h3>
                        {otherTools.map((tech, idx) => (
                            <ul className="skill-list" key={idx}>
                                <li className="skill-item">{tech}</li>
                            </ul>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
}

export default Skills;