import './homeNav.css';
import { Link } from 'react-router-dom';

// const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', 
//     { eager: true});

const icons = import.meta.glob('../assets/icons/*.{png,jpg,jpeg,svg}', 
    { eager: true,
      import: 'default'
    });

export default function HomeNav (){
    return(
        <>
           <nav>
               <div className="navLinks">
                    <Link to="/shop">Shop</Link>
                    <Link to="/contact">Contact Us</Link>
               </div>

               <div className="logo">
                  <img src={icons['../assets/icons/lumi logo.png']} alt="" />
               </div>

               <div className="homeNav-cta">
                  <button className='accountBtn'><img src={icons['../assets/icons/icon placeholder.png']} alt="" /></button>
                  <button className='whatsappBtn'>Chat with Us</button>

               </div>
           </nav>

        </>
    );
}