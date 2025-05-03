import { Link } from 'react-router-dom';
import { NotebookText } from 'lucide-react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <NotebookText />
        <Link to="/"><h1>ZenTask</h1></Link>
      </div>
      <div className='empty-space'></div>
    <Link to="/login" className='button'>Login/Sign-up</Link>
    </header>
  );
};

export default Header;