import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Service } from './components/Service';
import { OnboardingSteps } from './components/OnboardingSteps';
import { AIToolsGrid } from './components/AIToolsGrid';
import { FAQ } from './components/FAQ';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Trust, Footer } from './components/Trust';
import { FloatingCTA } from './components/FloatingCTA';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Service />
      <OnboardingSteps />
      <AIToolsGrid />
      <FAQ />
      <CaseStudies />
      <Contact />
      <Trust />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
