import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-cyan-800">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-cyan-800">
            Let’s Started
          </h1>
          <p className="mt-6 mb-8 text-3xl sm:mb-12 xl:max-w-3xl text-cyan-800">
            Learning Skills & Upgrade Your Life
          </p>
          <div className="flex flex-wrap justify-center">
            {user?.uid ? (
              <>
                <Link to="/courses">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:cyan-700 text-gray-50"
                  >
                    Buy Courses
                  </button>
                </Link>
                <Link to="/profile">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:bg-cyan-700 text-gray-50"
                  >
                    Visit Profile
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:bg-cyan-700 text-gray-50"
                  >
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button
                    type="button"
                    className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-cyan-800"
                  >
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
