import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e293c]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14">
        <div className="flex flex-col items-center gap-6 py-10">
          {/* Logo Section */}
          <div className="flex justify-center">
            <img 
              src="/assets/images/concrete-ai-white-logo.png" 
              alt="XementAI Logo" 
              className="w-[100px] sm:w-[110px] md:w-[124px] h-auto"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a 
              href="#problem" 
              className="text-sm text-[#bcbcbc] hover:text-white transition-colors text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              Problem
            </a>
            <a 
              href="#solutions" 
              className="text-sm text-[#bcbcbc] hover:text-white transition-colors text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              Solution
            </a>
            <a 
              href="#usp" 
              className="text-sm text-[#bcbcbc] hover:text-white transition-colors text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              Our USP
            </a>
            <a 
              href="#testimonials" 
              className="text-sm text-[#bcbcbc] hover:text-white transition-colors text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              Testimonials
            </a>
            <a 
              href="#tools" 
              className="text-sm text-[#bcbcbc] hover:text-white transition-colors text-center"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              Tools
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-center">
            <p 
              className="text-sm text-[#bcbcbc]"
              style={{
                fontFamily: 'DM Sans',
                fontWeight: '400',
                lineHeight: '19px'
              }}
            >
              © 2025 Cement.AI All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;