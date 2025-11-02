import React from 'react';

const DashboardSection = () => {
  return (
    <section className="w-full bg-white relative scroll-animate" style={{
      backgroundImage: "url('/assets/images/background-vector.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex justify-center pb-8 sm:pb-12 md:pb-16">
            <div className="w-full max-w-[1094px]">
              <img 
                src="/assets/images/overview-screen.png"
                alt="XementAI Dashboard Interface - Real-time concrete production monitoring and KPIs" 
                className="w-full h-auto rounded-[30px] shadow-lg pt-3 px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;