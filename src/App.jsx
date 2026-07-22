import { Routes, Route } from "react-router-dom"
import { Header, Footer, ScrollToTop, StickyWhatsApp } from "./ui.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Legal from "./pages/Legal.jsx"
import TeamMember from "./pages/TeamMember.jsx"

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
          <Route path="/terms" element={<Legal title="Terms" />} />
          <Route path="/cookies" element={<Legal title="Cookie Policy" />} />
        </Routes>
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  )
}
