import React from 'react';
import '../style/home.css';


const Home = () => {
   
    return (
        <div>
         <div class="welcome">
        <h1>Beauty Expert At Your Fingertips</h1>
     </div>
     <div class="wrapper-main">
        <p>Book your favourate beauty service today!</p>
    </div>
    <div class="home-service">
         <div class="our-services">
            <img src="./images/makeup.jpeg" atl="deliverman" class="gallery"  height="150"/>
            <div class="home-container">
                <h3>MakeUp Artist</h3>
            </div>
         </div>
         <div class="our-services">
            <img src="./images/kit.jpeg" atl="convenient" class="gallery"/>
            <div class="home-container">
                <h3>Nail Artist</h3>
            </div>
         </div>
         <div class="our-services">
            <img src="./images/weave.png" atl="5startserives" class="gallery" />
            <div class="home-container">
                <h3>Hair Stylist</h3>
            </div>
         </div>
</div>
       </div>
       
    );
};

export default Home;