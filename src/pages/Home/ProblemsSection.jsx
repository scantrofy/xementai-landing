import React from 'react';

const ProblemsSection = () => {
  const problems = [
    {
      id: 1,
      title: "Massive Energy Waste",
      description: "Energy costs consume 40-60% of operational budgets due to inefficient grinding and clinkerization processes",
      image: "/assets/images/massive-energy-waste.png",
      width: "40%"
    },
    {
      id: 2,
      title: "Inconsistent Product Quality", 
      description: "Raw material variability and manual controls lead to quality fluctuations that damage customer relationships",
      image: "/assets/images/inconsistent-product-quality.png",
      width: "flex-1"
    },
    {
      id: 3,
      title: "Siloed Operations",
      description: "Disconnected control systems prevent holistic optimization across interconnected production processes", 
      image: "/assets/images/siloed-operations.png",
      width: "flex-1"
    },
    {
      id: 4,
      title: "Sustainability Pressure",
      description: "Regulatory demands for alternative fuels and emissions reduction clash with production efficiency goals",
      image: "/assets/images/sustainability-pressure.png", 
      width: "40%"
    }
  ];

  return (
    <section 
      id="problem"
      className="w-full bg-gradient-to-b from-white to-[#d2dcff] py-16 sm:py-20"
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
              Cement Industy Problem
            </button>

            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              The Cement Industry's $50 Billion<br />Energy Crisis
            </h2>

            <p 
              className="text-base sm:text-lg leading-6 text-center max-w-3xl lg:whitespace-nowrap"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '300',
                lineHeight: '24px',
                color: '#010d3e'
              }}
            >
              Energy waste, quality inconsistencies, and manual systems are crushing profitability across the industry
            </p>
          </div>

          {/* Problems Grid */}
          <div className="flex flex-col gap-8">
            {/* First Row */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <div className={`w-full lg:w-[40%] bg-white rounded-[16px] p-6 shadow-sm`}>
                <div className="flex flex-col gap-4">
                  <img 
                    src={problems?.[0]?.image}
                    alt={problems?.[0]?.title}
                    className="w-full h-auto rounded-[12px]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 
                      className="text-xl sm:text-2xl"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        lineHeight: '32px',
                        color: '#07050e'
                      }}
                    >
                      {problems?.[0]?.title}
                    </h3>
                    <p 
                      className="text-base leading-6"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '300',
                        color: '#7b7b7b'
                      }}
                    >
                      {problems?.[0]?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:flex-1 bg-white rounded-[16px] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <img 
                    src={problems?.[1]?.image}
                    alt={problems?.[1]?.title}
                    className="w-full h-auto rounded-[12px]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 
                      className="text-xl sm:text-2xl"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        lineHeight: '32px',
                        color: '#07050e'
                      }}
                    >
                      {problems?.[1]?.title}
                    </h3>
                    <p 
                      className="text-base leading-6"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '300',
                        color: '#7b7b7b'
                      }}
                    >
                      {problems?.[1]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
              <div className="w-full lg:flex-1 bg-white rounded-[16px] p-6 shadow-sm">
                <div className="flex flex-col gap-4">
                  <img 
                    src={problems?.[2]?.image}
                    alt={problems?.[2]?.title}
                    className="w-full h-auto rounded-[12px]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 
                      className="text-xl sm:text-2xl"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        lineHeight: '32px',
                        color: '#07050e'
                      }}
                    >
                      {problems?.[2]?.title}
                    </h3>
                    <p 
                      className="text-base leading-6"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '300',
                        color: '#7b7b7b'
                      }}
                    >
                      {problems?.[2]?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`w-full lg:w-[40%] bg-white rounded-[16px] p-6 shadow-sm`}>
                <div className="flex flex-col gap-4">
                  <img 
                    src={problems?.[3]?.image}
                    alt={problems?.[3]?.title}
                    className="w-full h-auto rounded-[12px]"
                  />
                  <div className="flex flex-col gap-3">
                    <h3 
                      className="text-xl sm:text-2xl"
                      style={{
                        fontFamily: 'DM Sans',
                        fontWeight: '700',
                        lineHeight: '32px',
                        color: '#07050e'
                      }}
                    >
                      {problems?.[3]?.title}
                    </h3>
                    <p 
                      className="text-base leading-6"
                      style={{
                        fontFamily: 'Lexend',
                        fontWeight: '300',
                        color: '#7b7b7b'
                      }}
                    >
                      {problems?.[3]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;