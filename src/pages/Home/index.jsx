import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import MadeForBadge from '../../components/common/MadeForBadge';
import HeroSection from './HeroSection';
import DashboardSection from './DashboardSection';
import ProblemsSection from './ProblemsSection';
import SolutionsSection from './SolutionsSection';
import ToolsSection from './ToolsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Concrete.AI - Smart Cement Operations</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered platform for cement manufacturing optimization. Reduce energy consumption by 15%, improve quality consistency, and accelerate sustainability with Google's advanced AI technologies. Trusted by leading cement manufacturers across India." 
        />
        <meta property="og:title" content="Concrete.AI - Smart Cement Operations" />
        <meta property="og:description" content="Revolutionary AI-powered platform for cement manufacturing optimization. Reduce energy consumption by 15%, improve quality consistency, and accelerate sustainability with Google's advanced AI technologies. Trusted by leading cement manufacturers across India." />
      </Helmet>

      <main>
        <Header />
        <HeroSection />
        <DashboardSection />
        <ProblemsSection />
        <SolutionsSection />
        <ToolsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
        <MadeForBadge />
      </main>
    </>
  );
};

export default Home;