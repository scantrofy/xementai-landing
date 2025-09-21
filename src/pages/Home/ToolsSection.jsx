import React from 'react';

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      name: "Vertex AI",
      image: "/assets/images/vertex-ai-logo.png",
      hasBackground: true
    },
    {
      id: 2,
      name: "Gemini",
      image: "/assets/images/gemini-logo.png",
      hasBackground: false
    },
    {
      id: 3,
      name: "Big Query",
      image: "/assets/images/bigquery-logo.png",
      hasBackground: true
    }
  ];

  return (
    <section 
      id="tools"
      className="w-full bg-gradient-to-b from-white to-[#d2dcff] py-16 sm:py-20"
    >
      <div className="w-full max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-[100px]">
        <div className="flex flex-col gap-12 sm:gap-16">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center px-8 sm:px-14">
            <button 
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 border border-[#22222219] rounded-[18px] bg-white hover:bg-gray-50 transition-colors"
              style={{
                fontSize: '14px',
                fontFamily: 'DM Sans',
                fontWeight: '500',
                lineHeight: '19px',
                color: '#000000'
              }}
            >
              Tools
            </button>

            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[63px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              Execution & Tools Used
            </h2>

            <p 
              className="text-base sm:text-lg leading-6 text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '300',
                lineHeight: '24px',
                color: '#010d3e'
              }}
            >
              Powered by cutting-edge AI technologies and trusted platforms
            </p>
          </div>

          {/* Tools Grid */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[14px] w-full max-w-[400px] mx-auto">
            {tools?.map((tool) => (
              <div 
                key={tool?.id}
                className={`flex items-center justify-center w-[100px] h-[100px] ${
                  tool?.hasBackground 
                    ? 'bg-white border border-[#f7f7f7] rounded-[16px] p-3' 
                    : ''
                }`}
              >
                <img 
                  src={tool?.image}
                  alt={tool?.name}
                  className={`${
                    tool?.id === 3 ? 'w-[74px] h-[74px]' : 'w-[100px] h-[100px]'
                  } object-contain`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;