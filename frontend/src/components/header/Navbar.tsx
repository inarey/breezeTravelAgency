import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      {/* Header Styles */}
      <header className='w-full mx-auto flex items-center justify-between bg-primary-500'>
        <nav className='container mx-auto flex justify-between items-center sticky z-10 py-4'>
          {/* Brand Logo Link to Home */}
          {/* <Link to="/">
            <img src={breezeLogo} alt='' />
          </Link> */}
          <span className='text-xl text-brz-white font-bold tracking-tight'>
            <Link to="/">BreezeLogo</Link>
          </span>
          <div className="flex gap-6 justify-between">
            <div className="flex px-1 py-1 gap-8">
              <span className="text-lg text-primary-100">
                <Link to="/about">About</Link>
              </span>
              <span className="text-lg text-primary-100">
                <Link to="/services">Services</Link>
              </span>
              <span className="text-lg text-primary-100">
                <Link to="/blog">Blog</Link>
              </span>
              <span className="text-lg text-primary-100">
                <Link to="/about">Contact</Link>
              </span>
            </div>
          </div>
          {/* Add in here a shopping cart */}
          {/* Add in here a members login */}
        </nav>
      </header>
    </>
  );
}
export default Navbar