import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/index'
/* import Navbar from './Screens/Home/Navbar';
import About from './Screens/About';
import Menu from './Screens/Menu';
import Contact from './Screens/Contact';
import Blog from './Screens/Blog'
import Reservation from './Screens/Reservation'; */
export default function App() {
  return (
    <div className="w-[100%] h-[100%] p-0 m-0 box-border">
        {/* <Navbar/> */}
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/reservation" element={<Reservation/>} /> */}
        </Routes>
    </Router>
      </div>
  );
}