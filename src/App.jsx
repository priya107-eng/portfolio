import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Signup from "./pages/Signup";
import Education from "./pages/Education";
import Profile from "./pages/profile"
function App() {
  return (
    <Router>
        <div>
      <Navbar />
      <Routes>
        
            <Route path="/" element={<About />} />
            <Route path="/pages/Education" element={<Education />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
                </Routes>
        
        
        </div>
    </Router>
  );
}

export default App;
