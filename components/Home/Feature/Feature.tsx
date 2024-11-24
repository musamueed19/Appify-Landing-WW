import { features } from "@/constant/Constant"

const Feature = () => {
  return (
    <div className="py-20 bg-pink-50" id="feature">
      <div className="mx-auto w-[80%] text-center">
        <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
          Its Everything you will ever need
        </h1>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${index * 80}`}
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md space-x-3"
            >
              <div className="text-3xl w-14 h-14 flex flex-col rounded-full items-center justify-center bg-gray-600 bg-opacity-10">
                <span>{item.icon}</span>
              </div>
              <span className="font-semibold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature