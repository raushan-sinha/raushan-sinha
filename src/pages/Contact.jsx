import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import './Contact.css';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const Contact = () => {
    //todo: Social info (Left Box)-
    const socialInfo = {
        heading: 'Connect With Me',
        para: 'Feel free to reach out through any platform below.',
        links: [
            { url: 'https://x.com/84Raushan', icon: <XIcon /> },
            { url: 'https://www.facebook.com/rohan.rider.1806', icon: <FacebookIcon /> },
            { url: 'https://wa.me/916203004345', icon: <WhatsAppIcon /> },
            { url: 'mailto:raushankrsinha2004@gmail.com', icon: <EmailIcon /> },
            { url: 'tel:+916203004345', icon: <PhoneAndroidIcon /> },
        ]
    };

    //todo: Validation for all Input fields in the Form -
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [formResult, setFormResult] = useState('');

    //todo: Check all input fields -
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            const err = React.createElement(
                'div',
                { className: 'error-message' },
                'Oops!⚠️ All Input fields are required'
            );
            setError(err);
            setTimeout(() => {
                setError(null);
            }, 2000);
            return;
        }

        //todo: Handle Message with an API -
        setFormResult('Sending...');
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('access_key', '5fecc6e9-0eda-423f-ba7a-2ae89e021c61');
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            if (result.success) {
                setFormResult(`Message sent successfully. Thanks ${name} for contacting Me.`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setFormResult(result.message || 'Something went wrong!');
            }
        } catch (error) {
            setFormResult('Network connection error! Please check your connection');
        }

        //? Remove Result message after message sent -
        setTimeout(() => setFormResult(''), 3000);
    }

    //todo: Reset Form -
    const resetForm = () => {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <>
            {/* Navbar */}
            <Navbar />
            {/* Contact Form */}
            <div className="contact-page">
                <div className="contact-container">
                    {/* Left Box: Social Info */}
                    <div className="contact-info">
                        <h2>{socialInfo.heading}</h2>
                        <p>{socialInfo.para}</p>
                        <div className="social-icons">
                            {socialInfo.links.map((link, idx) => (
                                <a href={link.url} key={idx} id='icon'>{link.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Right Box: Contact Form */}
                    <div className="contact-form">
                        <h2>Send Me a message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your name" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your email" name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Subject" name='subject' id='subject' value={subject} onChange={(e) => setSubject(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="Your message" name='message' id='message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <div className="form-buttons">
                                <button type="submit">Send Message</button>
                                <button type="reset" onClick={resetForm}>Reset Message</button>
                            </div>
                            {error}
                            <div className={`formResultBox ${formResult ? 'show' : ''}`}>{formResult}</div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Contact
