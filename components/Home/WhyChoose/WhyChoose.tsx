import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="py-16 mx-auto" id="whychoose">
          <h1 className="mt-6 text-2xl md:text-3xl font-bold capitalize text-center">Why you choose this application</h1>
          
          {/*  */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-[90%] mx-auto">
              
              {/* Column 1 */}
              <div className="whychoose__card">
                  {/* Reuseable Card - Component */}
                  <WhyChooseCard src='/images/i1.png' title='Create Free Account' label='Start Earning' />
              </div>

              
              {/* Column 2 */}
              <div className="whychoose__card">
                  {/* Reuseable Card - Component */}
                  <WhyChooseCard src='/images/i2.png' title='Monitor User Analytics' label='Sign up your store' />
              </div>

              
              {/* Column 3 */}
              <div className="whychoose__card">
                  {/* Reuseable Card - Component */}
                  <WhyChooseCard src='/images/i3.png' title='Safe & Trusted' label='Get the App' />
              </div>


              {/* Column 4 */}
              <div className="whychoose__card">
                  {/* Reuseable Card - Component */}
                  <WhyChooseCard src='/images/i4.png' title='Fast Customer Support' label='Learn More' />
              </div>
          </div>
    </div>
  );
}

export default WhyChoose