import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="w-full pt-[4rem] md:pt-[12rem] h-screen bg-[#f7f6fb]"
      id="hero"
    >
      <div className="flex flex-col justify-center w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                News
              </div>
              <p className="text-[0.7rem] sm:text-sm">
                We have update our terms & condition policy
              </p>
            </div>

            {/* Heading */}
            {/* sm:leading-[2rem] */}
            <h1
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className="text-2xl sm:text-4xl md:text-5xl my-6 font-bold md:leading-[3.5rem] lg:leading-[3.5rem]"
            >
              The premier workspace companion for your daily needs.
            </h1>

            {/* Description */}
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              suscipit quisquam minima, obcaecati laboriosam dolorum quasi
              veniam! Modi, magnam quam!
            </p>

            {/* Play Store & App store images */}

            <div className="flex my-8 items-center space-x-4">
              <Image
                src="/images/gp.png"
                alt="google play store img"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/images/as.png"
                alt="apple store img"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>

          {/* Image Content */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
            className="hidden lg:block"
          >
            <Image src="/images/hero.png" width={700} height={700} alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
