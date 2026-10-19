import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Projects />
        <Reviews />
        <Pricing onEnroll={(course) => setSelectedCourse(course)} />
        <Contact />
      </main>
      <Footer />
      <Modal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
      <BackToTop />
    </div>
  );
}