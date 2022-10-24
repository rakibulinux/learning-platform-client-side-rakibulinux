import { NavLink } from "react-router-dom";
import logo from "./../logos.png";
const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img className="w-7 h-7" src={logo} alt="" />
          <span className="ml-3 text-xl">Rakib Learning Platform</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Courses
          </NavLink>
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Profile
          </NavLink>

          <button className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>

          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Login
          </NavLink>
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
