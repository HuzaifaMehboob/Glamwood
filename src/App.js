import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Screens/Home/index'
import Shop from './Screens/Shop';
import Contact from './Screens/Contact';
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div className="w-[100%] h-[100%] p-0 m-0 box-border">
        <Navbar/>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop/>} /> 
          {/* <Route path="/menu" element={<Menu />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/reservation" element={<Reservation/>} /> */}
        </Routes>
    </Router>
      </div>
  );
}