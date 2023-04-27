import HeroSection from '~/components/HeroSection';
import AboutSection from '~/components/AboutSection';
import HeroTitle from '~/components/HeroTitle';
import Testimonials from '~/components/Testimonials';
import BlogList from '~/components/BlogList';


export default function Index() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HeroTitle />
      <Testimonials />
      <BlogList />
    </div>
  )
}