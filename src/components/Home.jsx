import Hero from './Hero';
import ImageCarousel from './ImageCarousel'; 
import Services from './Services';
import WhyChoose from './WhyChoose';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <ImageCarousel/>
      <br /><br />
      <Hero />
      <main className="container-fluid mt-4">
        <WhyChoose />
        <Services />
        <Contact/>
      </main>
    </div>     
      
      
    
  );
};

export default Home;
