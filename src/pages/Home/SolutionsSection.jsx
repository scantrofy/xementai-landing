import React from 'react';

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      title: "AI-Driven Energy<br/>Optimization (Vertex AI)",
      description: [
        "Regression model predicts energy use from plant parameters",
        "Validates Gemini recommendations with predictive energy savings (%)"
      ]
    },
    {
      id: 2,
      title: "Generative AI Recommendations (Gemini)",
      description: [
        "Provides actionable, human-readable process adjustments (e.g., reduce kiln temp by X°C)",
        "Outputs suggestions for easy integration into control systems"
      ]
    },
    {
      id: 3,
      title: "Anomaly Detection<br/>(Rule-based + AI)",
      description: [
        "Flags low grinding efficiency or abnormal kiln temps early",
        "Prevents downtime and maintains process stability"
      ]
    },
    {
      id: 4,
      title: "Scenario Simulation<br/>(Fuel Mix Simulator)",
      description: [
        "Interactive tool to simulate alternative fuel substitution (0–60%)",
        "Shows energy & CO₂ impact, supporting sustainability targets"
      ]
    }
  ];

  return (
    <section 
      id="solutions"
      className="relative w-full"
      style={{
        backgroundImage: "url('/assets/images/background-vector.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-[100px] py-16 sm:py-20">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Solutions Header */}
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
              Solutions
            </button>

            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              One AI Platform Complete<br/>Cement Plant Transformation.
            </h2>

            <p 
              className="text-base sm:text-lg leading-6 text-center max-w-2xl"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '300',
                lineHeight: '24px',
                color: '#010d3e'
              }}
            >
              End-to-end process optimization powered by Google's advanced AI technologies
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-12">
            {solutions?.map((solution) => (
              <div 
                key={solution?.id}
                className="bg-white rounded-[16px] p-6 sm:p-8 shadow-[0px_32px_64px_#00000014] border border-[#f7f7f7]"
              >
                <div className="flex flex-col gap-3">
                  <h3 
                    className="text-xl sm:text-2xl"
                    style={{
                      fontFamily: 'Lexend',
                      fontWeight: '700',
                      lineHeight: '31px',
                      color: '#07050e'
                    }}
                    dangerouslySetInnerHTML={{ __html: solution?.title }}
                  />
                  <ul className="text-base leading-6 space-y-2">
                    {solution?.description?.map((point, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-2"
                        style={{
                          fontFamily: 'Lexend',
                          fontWeight: '300',
                          color: '#7b7b7b'
                        }}
                      >
                        <span className="text-[#7b7b7b] mt-1 flex-shrink-0">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* USP Section */}
          <div id="usp" className="flex flex-col items-center gap-4 text-center mt-16 sm:mt-20">
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
              Our USP
            </button>

            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              What Makes Us the #1 Choice for<br/>Cement Plant Optimization
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
              Specialized cement expertise, and proven Google AI stack
            </p>
          </div>
        </div>
      </div>
      {/* USP Dashboard Section */}
      <div className="w-full">
        <div 
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/img_image_77.png')"
          }}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[130px]">
            <div className="flex justify-center py-8 sm:py-12 md:py-16 -mt-16 sm:-mt-24">
              <div className="relative w-full max-w-[1096px] rounded-[30px] overflow-hidden">
                <img 
                  src="/assets/images/overview-screen.jpeg" 
                  alt="ConcreteAI USP Dashboard" 
                  className="rounded-[30px]"
                  style={{
                    width: '1096px',
                    height: '778px',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute inset-0 bg-[#00000066] rounded-[30px]"></div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <img 
                    src="/assets/images/play-button.svg" 
                    alt="Play button" 
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-[128px] md:h-[126px] cursor-pointer hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;