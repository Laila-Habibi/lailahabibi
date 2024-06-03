import Image from "next/image";
import Hero from "@/components/Hero";
import AboutMe from "@/components/About";
import ProjectsPage from "@/components/ProjectsPage";
import Testimonials from "@/components/TestimonialPage";
import Contact from "@/components/Contact";


export default function Home() {
  return (
  <div>
    <Hero/>
    <AboutMe/>
    <ProjectsPage />
    
    <Contact/>
    <div>
  
    </div>
  </div>
  );
}
