import './hero.css';
import { useNavigate } from 'react-router-dom';
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', 
    { eager: true,
      import: 'default'  
    });

        
    function ShopCta (){
        const navigate = useNavigate();
        return(
            <button 
             className='shopCta'
             onClick={() => navigate('/shop')}
            >
                <span id="shopSpan">Shop Now &#x2192;</span>
            </button>
        );
    }


export default function Hero(){


    return(
        <div className="heroContainer">

            <div className='heroImage' >
               <img src={images['../assets/images/testImage.jpg']} alt="" />
            </div>

            <div className="heroImageOverlay">

                <div className="overlayContents">

                    <div className="overlayText">
                        <h3>Beautiful things for a home you love</h3>

                        <p>Thoughtfully chosen pieces for cooking, living, and everyday moments 
                            — designed to bring comfort, character, and a little more joy into your home</p>
                    </div>

                    <ShopCta />


                </div>
 
            </div>

        </div>

    );

}