import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Mock routes for demonstration */}
          <Route path="/courses" element={<div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Courses Page Coming Soon</div>} />
          <Route path="/events" element={<div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>Events Page Coming Soon</div>} />
          <Route path="/about" element={<div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>About Page Coming Soon</div>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
