import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { SocialContext } from './components/SocialContext';
import { AIEmployeeConcept } from './components/AIEmployeeConcept';
import { AISBenefits } from './components/AISBenefits';

import { Service } from './components/Service';
import { Trust, Footer } from './components/Trust';
import { OnboardingSteps } from './components/OnboardingSteps';
import { AIToolsGrid } from './components/AIToolsGrid';

import { Contact } from './components/Contact';
import { FloatingCTA } from './components/FloatingCTA';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <SocialContext />
      <AIEmployeeConcept />
      <AISBenefits />


      <Service />
      <Trust />
      <OnboardingSteps />
      <AIToolsGrid />

      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
