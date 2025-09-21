import React from 'react';

const DashboardSection = () => {
  return (
    <section className="w-full bg-white relative min-h-screen" style={{
      backgroundImage: "url('/assets/images/background-vector.svg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
    <div>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[100px]">
          <div className="flex justify-center py-8 sm:py-12 md:py-16">
            <div className="w-full max-w-[1094px]">
              <img 
                src="/assets/images/overview-screen.jpeg" 
                alt="Concrete.AI Dashboard Interface - Real-time concrete production monitoring and KPIs" 
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