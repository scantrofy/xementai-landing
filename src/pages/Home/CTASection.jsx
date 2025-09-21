import React from 'react';
import Button from '../../components/ui/Button';

const CTASection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-[#d2dcff] py-12 sm:py-16">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center gap-8 sm:gap-10 text-center">
          {/* Main Content */}
          <div className="w-full max-w-[600px] flex flex-col items-center gap-6">
            <h2 
              className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-tight sm:leading-tight md:leading-tight lg:leading-[60px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '700',
                color: '#1e293c'
              }}
            >
              Ready to Transform Your Cement Operations?
            </h2>

            <p 
              className="text-lg sm:text-xl md:text-[22px] leading-6 sm:leading-7 md:leading-[30px] text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                color: '#010d3e'
              }}
            >
              Join leading manufacturers who have reduced energy costs by 15% and improved sustainability with our AI platform
            </p>
          </div>

          {/* CTA Button */}
          <Button
            text="Explore Now"
            text_font_size="18"
            text_font_family="DM Sans"
            text_font_weight="500"
            text_line_height="24px"
            text_text_transform="capitalize"
            text_color="#ffffff"
            fill_background_color="#1e293c"
            border_border_radius="8px"
            border_border="none"
            padding="8px 34px"
            layout_width="auto"
            position="relative"
            variant="primary"
            size="medium"
            className=""
            onClick={() => window.open('https://concrete-ai.vercel.app/', '_blank', 'noopener,noreferrer')}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;