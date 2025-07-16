import React from "react";
import './Home.css';
import Navbar from "../components/Navbar";
import myImage from '../assets/Raushan-Image.jpg';
import { FaGithub, FaInstagram, FaDev, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { MdOutlineRocketLaunch } from "react-icons/md";

const Home = () => {
    //todo: Dev Title -
    const devName = 'Raushan Sinha';
    const devRole = 'Frontend Developer';

    //todo: Social Media Links -
    const socialLinks = [
        { href: 'https://x.com/84Raushan', icon: <RiTwitterXFill /> },
        { href: 'https://www.instagram.com/raushan_sinha02/?hl=en', icon: <FaInstagram /> },
        { href: 'https://github.com/raushan-sinha', icon: <FaGithub /> },
        { href: 'https://www.linkedin.com/in/raushan-sinha-4b94452a1/', icon: <FaLinkedinIn /> },
        { href: 'https://dev.to/raushan_sinha_8efb05c7b1c', icon: <FaDev /> }
    ];

    return (
        <>
            <Navbar />
            {/* Home */}
            <div className="home-container">
                <div className="background-animation"></div>
                <div className="content-wrapper">
                    <div className="image-container">
                        <img
                            src={myImage}
                            alt="Raushan Sinha"
                            className="profile-image"
                        />
                    </div>
                    <div className="info-container">
                        <h1 className="name">{devName}</h1>
                        <h2 className="role">{devRole} <MdOutlineRocketLaunch /></h2>
                        <p className="bio">
                            I'm a passionate Frontend Developer with expertise in building responsive and user-friendly web applications using React.JS, JavaScript, Next.JS and modern CSS. I love creating seamless digital experiences and am always eager to learn new technologies to enhance my skills.
                        </p>
                        <a href="#" className="resume-button" download>
                            Download Resume
                        </a>
                        <div className="social-links">
                            {socialLinks.map((link, idx) => (
                                <a key={idx} href={link.href}>{link.icon}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;