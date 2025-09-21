import React from 'react';
import Button from '../../components/ui/Button';

const HeroSection = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-white"
    >
      
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 md:py-20">
          {/* Hero Content */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 text-center max-w-4xl">
            {/* Badge */}
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
              Revolutionary AI Solution
            </button>

            {/* Main Heading */}
            <h1 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center max-w-4xl"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              Transform Cement Operations with AI-Optimized Excellence
            </h1>

            {/* Description */}
            <p 
              className="text-base sm:text-lg leading-6 sm:leading-[27px] text-center max-w-3xl"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '300',
                color: '#010d3e'
              }}
            >
              Reduce energy consumption by 15%, improve quality consistency, and accelerate sustainability with our Generative AI platform
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <a 
                href="https://concrete-ai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center px-[34px] py-4 bg-[#1e293c] border border-[#1e293c] rounded-[10px] hover:bg-opacity-90 transition-all cursor-pointer no-underline"
              >
                <span 
                  className="text-lg text-white text-center"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '500',
                    lineHeight: '24px'
                  }}
                >
                  Explore Now
                </span>
              </a>
              
              <Button
                text="Watch free demo"
                text_font_size="18"
                text_font_family="DM Sans"
                text_font_weight="500"
                text_text_transform="none"
                text_line_height="24px"
                text_color="#18181b"
                fill_background_color="transparent"
                border_border="1px solid #1e293c"
                border_border_radius="10px"
                padding="16px 34px"
                layout_width="auto"
                position="static"
                variant="secondary"
                size="medium"
                className=""
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;