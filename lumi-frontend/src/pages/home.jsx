import "./home.css";
import HomeNav from "../components/homeNav";
import Hero from "../components/hero";
import { Link } from "react-router-dom";

const images = import.meta.glob('../assets/images/*{png,jpg,jpeg}', {
   eager: true,
   import: 'default'
});


const bestSellerProducts = [{
   id: 1,
   image: images['../assets/images/testImage.jpg'],
   description: 'resable drinkware for a greener lifestyle',
   price: 43.85
}];




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

                  {/* <ProductCard /> */}

                 { bestSellerProducts.map(product =>{
                   return(
                        <div className="productCard">

                           <div className="productImage">
                              <img src={product.image} alt="" />
                           </div>

                           <div className="productInfo">

                              <div className="options">
                                 <button className="colorDot blue active"></button>
                                 <button className="colorDot green"></button>
                                 <button className="colorDot grey"></button>
                                 <button className="colorDot black"></button>
                              </div>

                              <p className="description">{product.description}</p>
                           

                              <div className="productFooter">

                                 <p>&#36;{product.price}</p>

                                 <button className="addToCartBtn">&#43; Cart</button>

                              </div>
                           </div>
                        </div>
                   );
                 })}

               </div>

            </div>

          </div>

       </div>
    );
}