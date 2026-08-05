import './hero.css';
const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', 
    { eager: true,
      import: 'default'  
    });


export default function Hero(){

    return(
        <div className="hero-container">
            <div className='hero-image' >
               <img src={images['../assets/images/testImage.jpg']} alt="" />
            </div>

            <div className="hero-image-overlay"></div>
        </div>

    );

}