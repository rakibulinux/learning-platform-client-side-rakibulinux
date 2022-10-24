import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <header className="text-cyan-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-cyan-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>

          <span className="ml-3 text-xl">Rakib Learning Platform</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/home"
            aria-label="Home"
            title="Home"
            className="mr-5 hover:text-cyan-900"
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            aria-label="Courses"
            title="Courses"
            className="mr-5 hover:text-cyan-900"
          >
            Courses
          </NavLink>
          <NavLink
            to="/faq"
            aria-label="FAQ"
            title="FAQ"
            className="mr-5 hover:text-cyan-900"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/blog"
            aria-label="Blog"
            title="Blog"
            className="mr-5 hover:text-cyan-900"
          >
            Blog
          </NavLink>
          <NavLink
            to="/profile"
            aria-label="Profile"
            title="Profile"
            className="mr-5 hover:text-cyan-900"
          >
            Profile
          </NavLink>

          <button className="inline-flex items-center bg-cyan-700 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-600 rounded text-white mt-4 md:mt-0">
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

          <NavLink
            to="/login"
            aria-label="Login"
            title="Login"
            className="mr-5 hover:text-cyan-900"
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            aria-label="Register"
            title="Register"
            className="mr-5 hover:text-cyan-900"
          >
            Register
          </NavLink>
          <button
            aria-label="Dark Or Light"
            title="Dark Or Light"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
