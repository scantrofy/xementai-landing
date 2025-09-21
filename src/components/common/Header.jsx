import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Main navigation section */}
      <div className="w-full bg-white border-b border-gray-100">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="/assets/images/concrete-ai-blue-logo.png" 
                alt="ConcreteAI Logo" 
                className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-auto"
              />
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a 
                href="#problem" 
                className="text-base text-[#00000099] hover:text-[#000000] transition-colors"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  lineHeight: '21px'
                }}
              >
                Problem
              </a>
              <a 
                href="#solutions" 
                className="text-base text-[#00000099] hover:text-[#000000] transition-colors"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  lineHeight: '21px'
                }}
              >
                Solutions
              </a>
              <a 
                href="#usp" 
                className="text-base text-[#00000099] hover:text-[#000000] transition-colors"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  lineHeight: '21px'
                }}
              >
                Our USP
              </a>
              <a 
                href="#tools" 
                className="text-base text-[#00000099] hover:text-[#000000] transition-colors"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  lineHeight: '21px'
                }}
              >
                Tools
              </a>
              <a 
                href="#testimonials" 
                className="text-base text-[#00000099] hover:text-[#000000] transition-colors"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: '400',
                  lineHeight: '21px'
                }}
              >
                Testimonials
              </a>
              <Button 
                text="Explore Now"
                className="ml-4"
                border_border=""
                text_text_transform=""
                layout_width=""
                padding=""
                position=""
                variant=""
                size=""
                onClick={() => window.open('https://concrete-ai.vercel.app/', '_blank', 'noopener,noreferrer')}
              />
            </nav>

            {/* Mobile Navigation Menu */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50`}>
              <div className="flex flex-col p-4 space-y-4">
                <a 
                  href="#problem" 
                  className="text-base text-[#00000099] hover:text-[#000000] transition-colors py-2"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Problem
                </a>
                <a 
                  href="#solutions" 
                  className="text-base text-[#00000099] hover:text-[#000000] transition-colors py-2"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Solutions
                </a>
                <a 
                  href="#usp" 
                  className="text-base text-[#00000099] hover:text-[#000000] transition-colors py-2"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Our USP
                </a>
                <a 
                  href="#testimonials" 
                  className="text-base text-[#00000099] hover:text-[#000000] transition-colors py-2"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a 
                  href="#tools" 
                  className="text-base text-[#00000099] hover:text-[#000000] transition-colors py-2"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: '400',
                    lineHeight: '21px'
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Tools
                </a>
                <div className="pt-2">
                  <Button 
                    text="Explore Now"
                    className="w-full"
                    onClick={() => {
                      setMenuOpen(false);
                      window.open('https://concrete-ai.vercel.app/', '_blank', 'noopener,noreferrer');
                    }}
                    border_border=""
                    text_text_transform=""
                    layout_width=""
                    padding=""
                    position=""
                    variant=""
                    size=""
                  />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;