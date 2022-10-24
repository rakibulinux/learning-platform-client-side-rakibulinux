const Home = () => {
  return (
    <section>
      <div className="">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-cyan-800">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-cyan-800">
            Welcome To Rakib Learning Platform
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-cyan-800">
            Here, an user can learn using our learning platform to create an
            account using email password.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:cyan-700 text-gray-50"
            >
              Buy Courses
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:bg-cyan-700 text-gray-50"
            >
              Visit Profile
            </button>

            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-cyan-800 hover:bg-cyan-700 text-gray-50"
            >
              Login
            </button>

            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-cyan-800"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
