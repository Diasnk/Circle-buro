import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';

export default function Home() {
  return (
   
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectGrid />
      <Statistics />
      
      <div className="w-full bg-white rounded-2xl mt-20 relative overflow-hidden">
         <img src="/cafe.png" alt="Cafe Exterior" className="w-full h-auto" />
      </div>

      <Footer />
    </main>
  );
}