import {Routes,Route} from "react-router-dom";


import Navbar from './Navbar'
import Home from './Home'
import Contact from "./Contact";
import Footer from "./Footer";
import Software from "./compontents/Software"
import Cloud from "./compontents/Cloud";
import Digital from "./compontents/Digital";
import Embedded from "./compontents/Embedded";
import Iot from "./compontents/Iot";
import Maintance from "./compontents/Maintance";
import Softwaretst from "./compontents/Sofwaretst";
import Uiux from "./compontents/Uiux";
import Service_Data from "./compontents/service_Data";
import Careers from "./Careers";
import CareerGuidance from "./CareerGuidance";



function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Software" element={<Software/>}/>
      <Route path="/Cloud" element={<Cloud/>}/>
      <Route path="/Dataservice"element={<Service_Data/>}/>
      <Route path="/Digital" element={<Digital/>}/>
      <Route path="/Embedded" element={<Embedded/>}/>
      <Route path="/Iot" element={<Iot/>}/>
      <Route path="/Maintance" element={<Maintance/>}/>
      <Route path="/Softwaretst" element={<Softwaretst/>}/>
      <Route path="/Uiux" element={<Uiux/>}/>
      <Route path="/Careers" element={<Careers />} />
      <Route path="/CareerGuidance" element={<CareerGuidance />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
