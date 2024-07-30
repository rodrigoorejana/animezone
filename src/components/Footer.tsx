import { FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <div className='container-fluid text-center '>
      <p>© 2024 Rodrigo Orejana da Costa. All rights reserved.</p>

        <div className="socialLinks row">
          <a href="https://www.linkedin.com/in/rodrigo-orejana-da-costa" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} /> rodrigo-orejana-da-costa
          </a>
          <a href="https://github.com/rodrigoorejana/animezone" target="_blank" rel="noopener noreferrer">
           <FaGithub size={24} /> rodrigoorejana
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
