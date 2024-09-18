import './index.css';
import Home from './components/Home';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import FifthSection from './components/FifthSection';
import SixthSection from './components/SixthSection';
import SeventhSection from './components/SeventhSection';
import EigthSection from './components/EigthSection';
import NinthSection from './components/NinthSection';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className='overflow-hidden'>
      <Home />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinthSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
