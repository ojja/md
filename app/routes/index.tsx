import HeroSection from '~/components/HeroSection';
import AboutSection from '~/components/AboutSection';
import HeroTitle from '~/components/HeroTitle';
import Testimonials from '~/components/Testimonials';
import Blog from '~/components/Blog';


export default function Index() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HeroTitle />
      <Testimonials />
      <Blog />
    </div>
  )
}
