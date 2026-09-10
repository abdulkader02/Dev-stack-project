import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto bg-white">
      <div className="flex justify-between min-h-130  items-center px-6 py-16">
        <div>
          <h1 className="font-extrabold text-[#0F172A] text-5xl">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-[#475569] mt-7  text-[18px]">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits your
            <br /> next project.
          </p>

          {/* buttons */}

          <div className="flex items-center mt-5 gap-4">
            <button className="rounded-md bg-linear-to-r from-orange-500 to-pink-500 font-semibold px-5 py-3 text-white text-sm hover:opacity-80 transtion">
              Explore Technologies
            </button>
            <button className="border border-[#E5E7EB] rounded-md bg-white text-sm font-medium px-5 py-3 transition hover:bg-pink-400">
              Learn More
            </button>
          </div>
        </div>

        {/* Image  */}
        
        <div className="md:flex justify-center hidden w-[45%]">
          <img src={banner} alt="banner-main-image" className="w-95 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
