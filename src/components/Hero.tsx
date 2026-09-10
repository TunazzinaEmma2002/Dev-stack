import heroGraphic from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900">
          Build Your Ideal{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-md">
          Explore frontend, backend, database and hosting options — compare them side by side and put together the stack that fits your next project.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-full font-semibold border border-gray-300 text-gray-700 hover:border-pink-400 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <img src={heroGraphic} alt="Dev stack illustration" className="w-64" />
      </div>
    </section>
  );
}