import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>© 2023 ZenTask</p>
      <div className='empty-space'></div>
      <Link to="/donate">Donate</Link>
    </footer>
  );
};

export default Footer;