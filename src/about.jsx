import './about.css';
import Contact from "./contact.jsx"
import hotel from './assets/hotel.png';
import reception from './assets/reception.png';
import baby from './assets/baby.png';
import aboutice1 from './assets/about-ice1.png';
import aboutice2 from './assets/about-ice2.png';
import aboutice3 from './assets/about-ice3.png';
import infrastuture from './assets/infrastucture.png';





export default function About(){
    return(
        <>

        {/* about page start */}
        <div className='About'>
            <img src={baby} alt="baby" />
           <div className='aboutright'>
             
               <h2>The Best Ice Cream in the World- Yours to Enjoy!</h2>
               <p>welcome to icecream where every scoop is a masterpiece one
                creamy dreamy bite at time
               </p>
               <p>A burst of real strawberries and  cream 
                velretty chocolate with a goody fudge swirl,mango,passion fruit 
                and a hint of cocon Creamy Vannila loaded with chumky cookies
               </p>
           </div>
        </div>
{/* about page end */}


{/* hotel page start */}

 <div className='hotel'>
    <div className='hotel11'>
    <span>Infrastructure</span>
    <img src={infrastuture} alt="Infrastructure"/>
     </div>



<div className='hotel-info'>

     <div className='hotel111'>

          <div className="outer-layer">
      <div className="middle-layer">
        <div className="inner-layer">
          <img src={hotel}alt="Ice Cream Shop" className="main-image"/>
        </div>
      </div>
    </div>

     </div>



<div className='hotel-para'>
    <h4>"Ice Cream That's Made with love & excellence"</h4>
     <p>thats great A strong infrastucture ensure quality production
        efficient distribution and a great customer experience, do you want content 
        hightlighting your ice cream company's infrastucture,
        such us your production facilities, storage, or supply chain? 
        i can craft something engaging for your website or marketing 
        materials.
     </p>

     <p>thats great A strong infrastucture ensure quality production
        efficient distribution and a great customer experience, do you want content 
        hightlighting your ice cream company's infrastucture,
        such us your production facilities, storage, or supply chain? 
        i can craft something engaging for your website or marketing 
        materials.
     </p>
</div>

      <div className='hotel111'>

          <div className="outer-layer">
      <div className="middle-layer">
        <div className="inner-layer">
          <img src={reception} alt="Ice Cream Shop"className="main-image"/>
        </div>
      </div>
    </div>

     </div>
     </div>
</div> 

{/* hotel apge end */}




{/* explore page start */}


 <div className='Explore'>
        <h3>Explore our best categories</h3>
        <div className='Explore1'>
            <div className='Explore11'>
               <span>Chocolate Cones</span>
               <img src={aboutice3} alt="aboutice1"/>
               <div className='smallcircle'></div>
            </div>



             <div className='Explore111'>
               <span>Vannila Bean</span>
               <img src={aboutice2} alt="aboutice1"/>
               <div className='smallcircle'></div>
            </div>


             <div className='Explore1111'>
               <span>Butter Pecan</span>
               <img src={aboutice1} alt="aboutice1"/>
               <div className='smallcircle'></div>
            </div>

        </div>
</div> 


{/* explore page end */}



{/* contact page */}

<Contact/>

        </>
    )
}