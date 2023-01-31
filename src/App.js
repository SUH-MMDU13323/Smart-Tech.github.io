import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import About from "./Component.js/About.js";
import Contact from "./Component.js/Contact.js";
import Home from "./Component.js/Home.js";
import Services from "./Component.js/Services.js";
import Navbar from "./Component.js/Navbar.js";
import Lpg from "./Component.js/Lpg.js";
import Cam from "./Component.js/Cam.js";
import Fire from "./Component.js/Fire.js";
import CO2 from "./Component.js/CO2.js";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path= "/" element={<Navbar/>}>
                <Route index element ={<Home />} />
                 <Route path ="About" element ={<About/>} />
                 <Route path ="Contact" element ={<Contact/>} />
                 <Route path = "Services" element ={<Services />} />
                 <Route path = "Lpg" element ={<Lpg />} />
                 <Route path = "Cam" element ={<Cam />} />
                 <Route path = "Fire" element ={<Fire />} />
                 <Route path = "CO2" element ={<CO2 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;