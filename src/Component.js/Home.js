import React from "react"; 
import { Outlet, Link } from "react-router-dom";


function Home(){
  return(
    <div >
     
     <h1 className="head">WELCOME</h1>
       <p  className="head">Smart Tech Form</p>
       <p  className="head">- A Smart Security ,Safety and Surviellence</p>
     <div className="boxes">
      <div className="box1"> 
      <h1 className="text">LPG</h1>
      <img className="p1" src ="https://media.istockphoto.com/id/1296713138/photo/production-delivery-and-filling-with-natural-gas-of-lpg-gas-bottle-or-tank.jpg?s=612x612&w=is&k=20&c=1G-keVXzn4WC6P1amv7O5yQRAj2OmdMrHzpz6bRAhYI=" alt ="lpg"></img>
      <Link className="inbox" to="/Services"><button className="btn">Click me</button></Link>
      </div>
   
     <div className="box2">
      <h1 className="text">FIRE</h1>
      <img className="p2" src ="https://media.istockphoto.com/id/1327086620/photo/using-a-fire-extinguisher.jpg?s=612x612&w=is&k=20&c=pUOJWSHkCDi5Rxq-iGraOnTkNhkeYznnObf_vact8o8=" alt="fire"></img>
      <Link className="inbox" to="/Services"><button className="btn">Click me</button></Link>
     </div>
     
     <div className="box3">
      <h1 className="text">CAM</h1>
      <img  className="p3" src ="https://media.istockphoto.com/id/1214093147/photo/close-up-of-cctv-camera-over-defocused-urban-background.jpg?s=612x612&w=0&k=20&c=cV7BxTLQqNuopQMSk4zGf2O11PwPp7YSrgDpborrcpI=" alt= "camera"></img>
            <Link className="inbox" to="/Services"><button className="btn">Click me</button></Link>

     </div>
     
     <div className="box4">
     <h1 className="text">CO2</h1>
     <img className="p3" src = "https://cdn.images.express.co.uk/img/dynamic/24/590x/1579967_1.jpg" alt ="co2"></img>
      <Link className="inbox" to="/Services"><button className="btn">Click me</button></Link>
     </div>
    </div>
    
    </div>
   
  )
}
export default Home;