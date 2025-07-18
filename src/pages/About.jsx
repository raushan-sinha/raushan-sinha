import React from "react";
import './About.css';
import myImage from '../assets/Raushan-Image.jpg';
import Navbar from "../components/Navbar";

const About = () => {
    //todo: Developer Stats -
    const devStats = [
        { heading: '2.5+', para: 'Years Experience' },
        { heading: '30+', para: 'Years Experience' },
        { heading: '5+', para: 'Happy Clients' }
    ];

    //todo: Tech Stacks -
    const techStacks = [
        'HTML, ', 'CSS3, ', 'JavaScript (ES6+), ', 'React, ', 'Bootstrap, ', 'Tailwind CSS'
    ];


    return (
        <>
            <Navbar />
            <div className="background-animation"></div>
            <section className="about-section">

                {/* Top Section: Image + Bio */}
                <div className="about-grid">
                    {/* Image */}
                    <div className="about-image">
                        <img src={myImage} alt="Raushan Sinha" />
                    </div>

                    {/* Bio Info */}
                    <div className="about-info">
                        <p className="name">Raushan Sinha</p>
                        <p className="role">Frontend Developer & Web Designer</p>

                        {/* Stats */}
                        <div className="stats">
                            {devStats.map((title, idx) => (
                                <div key={idx}>
                                    <h3>{title.heading}</h3>
                                    <p>{title.para}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline Section */}
                <div className="timeline">
                    <h3>My Journey</h3>

                    <div className="timeline-item">
                        <h4>First Steps into Coding 🚀 <span>2021</span></h4>
                        <p>
                            I began my coding journey inspired by a friend. Initially unaware of this path, I soon realized how much I loved logic and problem-solving. That curiosity marked the beginning of a new chapter in my life.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4>Starting My College and Course Path 🎓 <span>2022</span></h4>
                        <p>
                            I enrolled in BCA at Maharaja College, VKSU. My education gave me a strong foundation in programming, especially in C++, Java, and the basics of software development.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4>My Coding Journey 💻 <span>2023</span></h4>
                        <p>
                            I built projects like login forms, portfolios, calculators, and a Ludo game using HTML & CSS. I also practiced DSA, improved my problem-solving skills, and deployed projects on Vercel and Netlify.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h4>Professional Growth ⚙️ <span>2024 - Present</span></h4>
                        <p>
                            I'm mastering JavaScript, React, Tailwind, and Bootstrap to build responsive UIs. I’ve started backend learning with MySQL and plan to move on to Node.js and MongoDB to become a Full Stack Developer.
                        </p>
                    </div>
                </div>

                {/* Who I Am */}
                <div className="whoami">
                    <h3>Who I Am</h3>
                    <p>
                        Hi, I’m <strong>Raushan Sinha</strong> — a passionate Frontend Developer 👨‍💻 who builds responsive and interactive websites.
                        I use {techStacks.map((name, idx) => (
                            <strong key={idx}>{name}</strong>
                        ))}.
                        Some of my best works include <em>VirtuoX</em>, <em>Sendify</em>, and <em>TechStorm</em>.
                    </p>
                    <p>
                        I’m currently learning backend technologies like MySQL, and planning to add <strong>Next.js, Node.js</strong>, and <strong>MongoDB</strong> to my stack.
                        I post blogs on Dev Community and Daily.dev, and share projects on GitHub, LinkedIn, and X to showcase my work and connect with potential employers.
                    </p>
                    <p>
                        Outside of coding, I love exploring new tech, writing, and learning continuously. My dream is to build full-scale web apps that make users' lives better, cleaner, and more engaging.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;