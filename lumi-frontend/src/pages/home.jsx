import "./home.css";
import HomeNav from "../components/homeNav";
import Hero from "../components/hero";
import { Link } from "react-router-dom";

const images = import.meta.glob('../assets/images/*{png,jpg,jpeg}', {
   eager: true,
   import: 'default'
});


// const bestSellerProducts = [{
//    id: 1,

// }];


function ProductCard(){
   return(
      <div className="productCard">

         <div className="productImage">
            <img src={images['../assets/images/testImage.jpg']} alt="" />
         </div>

         <div className="productInfo">

            <div className="options">
               <button className="colorDot blue active"></button>
               <button className="colorDot green"></button>
               <button className="colorDot grey"></button>
               <button className="colorDot black"></button>
            </div>

            <p className="description">resable drinkware for a greener lifestyle</p>
         

            <div className="productFooter">

               <p>&#36;43.85</p>

               <button className="addToCartBtn">&#43; Cart</button>

            </div>
         </div>
      </div>
   );
}



export default function Home(){
    return(
       <div>
        
          <HomeNav />
          <Hero />

          <div className="homePageContent">

            <div className="bestSellers">

               <div className="bestSellerIntro">
                  <p>Shop the Favorites
                  Discover our &#x2727; <span>Bestselling Products</span> &#x2727;</p>

                  <Link to='/shop'>More products &#x2192; </Link>
               </div>

               <div className="bestSellerProducts">

                  <ProductCard />

               </div>

            </div>

          </div>

       </div>
    );
}