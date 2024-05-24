import React from 'react';
<<<<<<<< HEAD:blogg-app/src/components/home/ContactSection.jsx
import '../styling/home.css';
import nurImage from '../../assets/media/images/nurTree.png';
import 'tailwindcss/tailwind.css';
import '../styling/Contact.css';
import Email from '../../assets/media/images/email.png';
import Github from '../../assets/media/images/github.png';
import Linkedin from '../../assets/media/images/linkedin.png';
========
import '../../styling/home.css';
import nurImage from '../../media/images/nurTree.png';
import 'tailwindcss/tailwind.css';
import '../Contact.css';
import Email from '../../media/images/email.png';
import Github from '../../media/images/github.png';
import Linkedin from '../../media/images/linkedin.png';
>>>>>>>> 08ceca28e8f71319d8367ac9751634dcaa842be1:blogg-app/src/assets/components/home/ContactSection.jsx

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <img src={nurImage} className="contact-img" alt="Contact Image" />
        <p>Eager to connect and collaborate. Let's make things happen!</p>
        <div className="social-links">
        <a href="mailto:nur.gultekin1@gmail.com">
          <img src={Email} alt="Email" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nur-g%C3%BCltekin-ab5273bb/">
          <img src={Linkedin} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://github.com/nurgultekin">
          <img src={Github} alt="Github" className="social-icon" />
        </a>
      </div>
      </div>
      
    </section>
  );
};

export default ContactSection;

