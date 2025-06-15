import './menu.css';
import {useRef} from 'react';
import combo from "./assets/combo+1.png";
import woffleicecream from "./assets/woffleicecream.png";
import icecream2 from "./assets/icecream2.png";
import cupicecream from "./assets/cupicecream.png";
import coneicecream from "./assets/coneicecream.png";
import icecreamcake from "./assets/icecreamcake.png";
import desert from "./assets/desert.png";
import choco from "./assets/choco.png"
import choco1 from "./assets/choco1.png"
import Contact from "./contact"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vector from './assets/vector.png';
import ImageSlider from './imageslideshow.jsx'
import desert1 from "./assets/desert1.png"
import desert2 from "./assets/desert2.png"
import desert3 from "./assets/desert3.png"
import desert4 from "./assets/desert4.png"
import desert5 from "./assets/desert5.png"
import desert6 from "./assets/desert6.png"
import desert7 from "./assets/desert7.png"







export default function Menu(){
const scrollRef = useRef(null);

const scrollLeft = () => {

    if(scrollRef.current){
        scrollRef.current.scrollBy({
            left:300,
            behavior:"smooth",
        })
    }
  
  };


   const scrollRight = () => {

    if(scrollRef.current){
        scrollRef.current.scrollBy({
            left:-300,
            behavior:"smooth",
        })
    }
  
  };

// useeffect




    return(
        <>

        {/* menu start */}

         <div className="menu">
            <div className='topMenu'>

          <input placeholder='Search'/>
          <FontAwesomeIcon icon={faSearch} className="search-icon-svg"/>
          <img src={vector} alt="vector" />
            </div>

           <div className='bottomMenu'>
<ImageSlider/>

           </div>

        </div> 


{/* menu end */}


{/* combo offers start */}
        <div className='compo-offers'>

        <h1>Compo offers!</h1>
            <div className='compo-offers1' ref={scrollRef}>
              <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>




               <div className='compo-offers11'>
              <div className='combotop'>
                <img src={choco} alt="woffleicecream"/>
               <span>+</span>
                <img src={icecream2} alt="combo"/>
              </div>
              <p>choco And Vannila</p>
              <div className='combobottom'>
                   <p>$350</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>





               <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={choco1} alt="combo"/>
              </div>
              <p>Waffe And oreo shake</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>





               <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>



               <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>


               <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>


   <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>

            

   <div className='compo-offers11'>
              <div className='combotop'>
                <img src={woffleicecream} alt="woffleicecream"/>
               <span>+</span>
                <img src={combo} alt="combo"/>
              </div>
              <p>Waffe And Vannila</p>
              <div className='combobottom'>
                   <p>$300</p><span>$550</span><br />
                   <button>Add to card</button>
              </div>
              </div>
            </div>
            <button onClick={scrollLeft} className='scroll-btn-left'><FaChevronLeft/></button>
            <button onClick={scrollRight} className='scroll-btn-right'><FaChevronRight/></button>
             
      </div>  
{/* combo offers end */}


{/* ice cream categories start */}


  <div className='categories'>

    <h1>Ice Cream Categories</h1>

    <div className='categories1'>

      <div className='categories11'>
           <img src={desert} alt="desert"/>
           <h4>deserts</h4>
      </div>


       <div className='categories11'>
           <img src={cupicecream} alt="cupicecream"/>
           <h4>Cup ice Cream</h4>
      </div>


       <div className='categories11'>
           <img src={coneicecream} alt="coneicecream" className='cone'/>
           <h4>Cone ice Cream</h4>
      </div>


       <div className='categories11'>
           <img src={woffleicecream} alt=" woffleicecream"/>
           <h4>woffle ice Cream</h4>
      </div>


       <div className='categories11'>
           <img src={icecreamcake} alt="icecreamcake"/>
           <h4>ice Cream Cake</h4>
      </div>


      

    </div>

</div>  



{/* ice cream categories end*/}

 <div className='dessert'> 
    <h1>Dessert</h1>

    <div className='dessert1'>

      <div className='dessert11'>
        <img src={desert} alt="choco"/>
        <p>Multi Flavour Dessert</p>
          <p>$100</p>
          <button>Add to Card</button>
      </div>


  <div className='dessert11'>
        <img src={desert1} alt="choco"/>
        <p>manogo iceCream Dessert</p>
          <p>$150</p>
          <button>Add to Card</button>
      </div>




        <div className='dessert11'>
        <img src={desert2} alt="choco"/>
        <p>CobblersDeserts Dessert</p>
          <p>$400</p>
          <button>Add to Card</button>
      </div>




        <div className='dessert11'>
        <img src={desert3} alt="choco"/>
        <p>Crumbles  Dessert</p>
          <p>$199</p>
          <button>Add to Card</button>
      </div>



        <div className='dessert11'>
        <img src={desert4} alt="choco"/>
        <p>Cheese Dessert</p>
          <p>$300</p>
          <button>Add to Card</button>
      </div>



        <div className='dessert11'>
        <img src={desert5} alt="choco"/>
        <p>chocoRole  Dessert</p>
          <p>$80</p>
          <button>Add to Card</button>
      </div>




     
     
        <div className='dessert11'>
        <img src={desert6} alt="choco"/>
        <p>Multi chocobar Dessert</p>
          <p>$220</p>
          <button>Add to Card</button>
      </div>




         <div className='dessert11'>
        <img src={desert7} alt="choco"/>
        <p>choco and chocobar Dessert</p>
          <p>$100</p>
          <button>Add to Card</button>
      </div>



         <div className='dessert11'>
        <img src={desert} alt="choco"/>
        <p>vanilla iceCream Dessert</p>
          <p>$180</p>
          <button>Add to Card</button>
      </div>




         <div className='dessert11'>
        <img src={desert1} alt="choco"/>
        <p>mango iceCream Dessert</p>
          <p>$190</p>
          <button>Add to Card</button>
      </div>



         <div className='dessert11'>
        <img src={desert2} alt="choco"/>
        <p>mango ice cream Dessert</p>
          <p>$260</p>
          <button>Add to Card</button>
      </div>



         <div className='dessert11'>
        <img src={desert3} alt="choco"/>
        <p>penut iceCream Dessert</p>
          <p>$360</p>
          <button>Add to Card</button>
      </div>



      <div className='dessert11'>
        <img src={desert4} alt="choco"/>
        <p>banana Dessert</p>
          <p>$390</p>
          <button>Add to Card</button>
      </div>



            <div className='dessert11'>
        <img src={desert5} alt="choco"/>
        <p>strawberry and iceCream  Dessert</p>
          <p>$360</p>
          <button>Add to Card</button>
      </div>


            <div className='dessert11'>
        <img src={desert6} alt="choco"/>
        <p>choco  Dessert</p>
          <p>$310</p>
          <button>Add to Card</button>
      </div>



            <div className='dessert11'>
        <img src={desert7} alt="choco"/>
        <p>special iceCream Dessert</p>
          <p>$220</p>
          <button>Add to Card</button>
      </div>

    </div>
</div> 




{/* contact section start*/}

<Contact/>

{/* contact section end */}



        </>
    )
}