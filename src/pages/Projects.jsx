import React from "react";
import Navbar from '../components/Navbar';
import './Projects.css';

const Projects = () => {
    //todo: Projects details -
    const projectDetails = [
        {
            title: 'VirtuoX - AI Assistant', desc: `An AI-powered virtual assistant with natural language processing capabilities for task automation,
                                    information retrieval, and personalized recommendations.`, tech: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'], link: 'https://github.com/raushan-sinha/virtuoX', demo: 'https://virtuo-x.vercel.app/', target: '_blank'
        },
        {
            title: 'Sendify Login Form', desc: `A modern, responsive login form with validation, forgot password functionality, and social login options designed with a sleek UI.`, tech: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'], link: 'https://github.com/raushan-sinha/Sendify', demo: 'https://sendify-smoky.vercel.app/', target: '_blank'
        },
        {
            title: 'Contact Form', desc: `  A clean, modern Contact form using React and responsive design. You can send Message to me. I'll reply you.`, tech: ['React', 'API Integration'], link: 'https://github.com/raushan-sinha/contact-form-react', demo: 'https://contact-form-indol-one.vercel.app/', target: '_blank'
        }
    ];


    return (
        <>
            <Navbar />
            {/* Projects Sections */}
            <section id="projects" className="projects-section">
                <div className="projects-container">
                    <h1 className="section-title">
                        My <span className="highlight-text">Projects</span>
                    </h1>
                    {/* Project */}
                    <div className="projects-grid">
                        {projectDetails.map((project, idx) => (
                            <div className="project-card" key={idx}>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">
                                        {project.desc}
                                    </p>
                                    <div className="project-tech" >
                                        {project.tech.map((item, i) => (
                                            <span className="tech-badge" key={i}>{item}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.link} className="project-link" target={project.target}>
                                            <i className="fab fa-github"></i> Code
                                        </a>
                                        <a href={project.demo} className="project-demo" target={project.target}>
                                            <i className="fas fa-external-link-alt"></i> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;