import { Route, Routes } from 'react-router-dom';
import Navbar from './1-Navbar/Navbar';
import './App.css';
import { Company1, Company2, Company3, Company4, Contact, Data, Home } from './Pages';
import Footer from './2-Footer/Footer';
import ScrollToTop from './scrollToTop/scrollToTop'; 

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <div style={{ overflowX: 'hidden' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company1" element={<Company1 />} />
          <Route path="/company2" element={<Company2 />} />
          <Route path="/company3" element={<Company3 />} />
          <Route path="/company4" element={<Company4 />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
