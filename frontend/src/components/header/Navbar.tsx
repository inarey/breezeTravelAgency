import { Link } from "react-router-dom"
import {breezeLogo} from "../../assets/imgs-brz/breezeLogo.png"

const Navbar = () => {
  return (
    <>
      {/* Header Styles */}
      <header className='w-full mx-auto flex items-center justify-between bg-primary-500'>
        <nav className='flex justify-between items-center sticky z-10 mx-auto py-4 bg-red-500'>
          {/* Brand Logo Link to Home */}
          <Link>
            <img src={breezeLogo} alt='' />
          </Link>
        </nav>
      </header>
    </>
  );
}
export default Navbar