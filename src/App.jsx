import { Routes, Route } from "react-router-dom"
import { Header, Footer, ScrollToTop } from "./ui.jsx"
import Home from "./pages/Home.jsx"
import Services from "./pages/Services.jsx"
import About from "./pages/About.jsx"
import Pricing from "./pages/Pricing.jsx"
import Contact from "./pages/Contact.jsx"

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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
