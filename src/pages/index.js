import Hero from "@/components/home/Hero";
import AboutMe from "@/components/home/AboutMe";
import Skills from "@/components/home/Skills";
import Resume from "@/components/home/Resume";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Feedback from "@/components/home/Feedback";
import Blog from "@/components/home/Blog";
import ContactMe from "@/components/home/ContactMe";
import Layout from "@/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Skills />
      <Resume />
      {/* <Services />
      <Portfolio /> */}
      {/* <Feedback /> */}
      <Blog />
      <ContactMe />
    </Layout>
  );
}
