import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop.jsx";
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import TermsOfService from './components/TermsOfServices.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import NotFound from './pages/NotFound.jsx'
import ContactUs from './pages/ContactUs.jsx'
import News from './pages/News.jsx'
import Resources from './pages/Resources.jsx'
import Services from './pages/Services.jsx'
import DisplayService from "./components/DisplayService.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      < Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/display-service/:id" element={<DisplayService />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact-us" element={<ContactUs />} />

          {/* Legal pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      < Footer />
    </BrowserRouter>
  )
}

export default App