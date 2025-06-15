import './index.css'
import icecream2 from './assets/icecream2.png'
import icecream3 from './assets/icecream3.png'
import icecream4 from './assets/icecream-4.png'
import icecream5 from './assets/icecream-5.png'
import man1 from './assets/man1.webp'
import man2 from './assets/man2.jpg'
import man3 from './assets/man3.jpg'
import Contact from './contact.jsx'
import review1 from './assets/review-1.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import strawberry from './assets/strawberry.png'
import { useRef } from 'react'

export default function Index(){
const scrollRef=useRef(null);


const handleRightClick=()=>{
    if(scrollRef.current){
        scrollRef.current.scrollLeft+=200
    }

}

const handleLeftClick=()=>{
    if(scrollRef.current){
        scrollRef.current.scrollLeft-=200 ;
    

    }

}


    return(
        <>

        {/* home start */}

        <div className='home'>
            <div className='leftside'>
        <h1>Enjoy Your Day  <br/> With<span>Ice Cream</span></h1>

        <p>Nothing beats the creamy dreamy taste of homemade iceicream made
            with love whether you crave classic vanila rich chocolate
            ,or adventures flaver like saltedcaramel and blueberry chesecake
            we've got a scoop  
        </p>
        <button className='follow-us'>Follow Us</button>
        </div>
   <div className='rightside'>
         <img src={icecream2} alt="icecream2" />
        </div>
        </div>

{/* home end */}


{/* about start */}


    <h2 className='about-text'>About</h2>
<div className='about-icecream'>
    <div className='leftside1'>

        <img src={icecream3} alt="icecream3" />
     
    </div>


    <div className='rightside1'>
        <h1><span>I</span>ce Cream</h1>
        <p>At Ice Cream believe that every scoop tells a story 
            , Founded with a passion for crafting that creamiest 
            ,most batch goodness made from the finest ingredients
            .
        </p>

        <p>At icecream, we believe that every scoop tells story! Founded with a passion 
            for crafting the creamist, most flaverful iceCream, we bring you handcrafted,
            small-batch goodness made from the finest incredients 
        </p>
        

        <button className='explore'>Explore</button>
</div>
    </div>


{/* about end */}





{/* choco start */}


<h1 className='sign'>Signature Ice Cream</h1>
<div className='choco'>
<div className='sign-left'>
    <div className='sign-top'>
<h1>Choco Logo</h1>
<p>chocolate contains compounds like serotonin and 
    thebromine, which  help improve mood and reduce stress 
    the naturals sugar and chocoa in chocolate provide a quick 
    energy lift, making it a good treat for pick-me-up
</p>
<button>Shop Now</button>


<div className='sign-bottom' ref={scrollRef}>
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />
      <img src={strawberry} alt="strawberry" />

       
</div>
    </div>
</div>

<div className='sign-right'>
      <img src={strawberry} alt="strawberry" />
</div>
<div className='sign-icon'>
<FontAwesomeIcon onClick={handleRightClick} icon={faArrowLeft} className='left-icon'/>
<FontAwesomeIcon onClick={handleLeftClick} icon={faArrowRight} className='rightt-icon'/>
</div>
</div>

{/* choco end */}


{/* input start */}


 <div className='input-box'>
<img src={icecream4} alt="icecream-4"/>

<img src={icecream5} alt="icecream-5"/>

<div className='input-box-1'>
   <h1>Find astore Near you</h1>
   <p>Looking your Favorite ice cream</p>
   <div className='search-icon'>
              <FontAwesomeIcon icon={faSearch} className="search-icon-svg"/>
<input type="text"  placeholder='Search'/>
     <button>Search</button>
</div>
</div>
</div> 


{/* input end */}



{/* customer review start */}

 <div className='customer-review'>
<h1>Customer Review</h1>
<div className='customer1'>

<div className='customer-review-1'>

<div className='customer-review-11'>
<img src={review1} alt="review"/>
<div className='review11'>
<h3>jenifer</h3>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos doloremque ex voluptatem maiores cumque dolorum. Excepturi optio recusandae  veritatis ab id.</p>

</div>



<div className='customer-review-1'>

<div className='customer-review-11'>
<img src={man3} alt="review"/>
<div className='review11'>
<h3>james</h3>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos doloremque ex voluptatem maiores cumque dolorum. Excepturi optio recusandae  veritatis ab id.</p>

</div>



<div className='customer-review-1'>

<div className='customer-review-11'>
<img src={man2} alt="review"/>
<div className='review11'>
<h3>lawrence</h3>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos doloremque ex voluptatem maiores cumque dolorum. Excepturi optio recusandae  veritatis ab id.</p>

</div>


<div className='customer-review-1'>

<div className='customer-review-11'>
<img src={man1} alt="review"/>
<div className='review11'>
<h3>luyis</h3>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
<i className="fa-solid fa-star"></i>
</div>
</div>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos doloremque ex voluptatem maiores cumque dolorum. Excepturi optio recusandae  veritatis ab id.</p>

</div>
</div>
</div> 


{/* customer review end */}



<Contact/>


        </>
    )
}