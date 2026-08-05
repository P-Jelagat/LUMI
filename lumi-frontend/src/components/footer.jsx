import './footer.css';


const icons = import.meta.glob( '../assets/icons/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default'
});

export default function Footer(){
    return(
        <footer>
           <div className='socials'>
              <div className='lumiLogo'>
                <img src={icons['../assets/icons/lumi logo.png']} alt="" />
              </div>

              <p>Make room for beautiful living</p>

              <div className="socialIcons">
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
              </div>

           </div>

           <div className="shop">
             <h4>SHOP</h4>
           </div>

            <div className="shop">
             <h4>ACCOUNT</h4>
           </div>

           <div className='contactDetails'>
             <h4>CONTACT</h4>

             <p>
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                Location
            </p>
             <p>
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                Phone
            </p>
             <p>
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                Email
            </p>
             <p>
                <img src={icons['../assets/icons/icon placeholder.png']} alt="" />
                WhatsApp
            </p>
           </div> <hr />

           <div className="copyright"> 
               <p>2026 LUMI. All rights reserved</p>
               <p>Website by <a href="https://portfolio-murex-two-75.vercel.app/">Patience Jelagat</a></p>
           </div>
        </footer>        
    );
}