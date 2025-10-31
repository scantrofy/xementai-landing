import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "Plant Manager, UltraTech Cement",
      avatar: "/assets/images/rajesh-sharma.png",
      testimonial: "Concrete.ai reduced our energy consumption by 18% in the first 6 months. The AI optimization of our grinding circuits alone saved us ₹2.5 crores annually. This platform has revolutionized how we manage our Rajasthan facility."
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Operations Director, Ambuja Cement",
      avatar: "/assets/images/priya-mehta.png",
      testimonial: "Quality consistency was our biggest challenge with varying limestone composition. Since implementing concrete.ai, our cement strength variations dropped by 35%, and customer complaints reduced to near zero."
    },
    {
      id: 3,
      name: "Vikram Singh",
      avatar: "/assets/images/vikram-singh.png",
      testimonial: "The cross-process optimization is remarkable. Our clinker factor improved by 12%, and we successfully Increased alternative fuel usage from 8% to 28% without compromising production quality."
    }
  ];

  return (
    <section 
      id="testimonials"
      className="w-full bg-white py-16 sm:py-20 scroll-animate"
    >
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <button 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 border border-[#22222219] rounded-[18px] bg-white hover:bg-gray-50 transition-colors cursor-default"
              style={{
                fontSize: '14px',
                fontFamily: 'DM Sans',
                fontWeight: '500',
                lineHeight: '19px',
                color: '#000000'
              }}
            >
              Testimonial
            </button>

            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center"
              style={{
                fontFamily: 'Lexend',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              Trusted by Leading Cement<br/>Manufacturers Across India
            </h2>

            <p 
              className="text-base sm:text-lg leading-6 sm:leading-[27px] text-center max-w-4xl"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '300',
                color: '#010d3e'
              }}
            >
              See how concrete.ai is transforming operations and delivering measurable <br className="hidden lg:block"/>results for India's top cement producers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials?.map((testimonial) => (
              <div 
                key={testimonial?.id}
                className="bg-white rounded-[16px] p-6 shadow-[0px_32px_64px_#00000014] border border-[#f7f7f7] flex flex-col gap-4"
              >
                {/* User Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial?.avatar}
                    alt={testimonial?.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <h3 
                      className="text-xl"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '700',
                        lineHeight: '25px',
                        color: '#07050e'
                      }}
                    >
                      {testimonial?.name}
                    </h3>
                    <p 
                      className="text-base"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '300',
                        lineHeight: '20px',
                        color: '#07050e'
                      }}
                    >
                      {testimonial?.position}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p 
                  className="text-base leading-6"
                  style={{
                    fontFamily: 'Lexend',
                    fontWeight: '300',
                    color: '#07050e'
                  }}
                >
                  {testimonial?.testimonial}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;