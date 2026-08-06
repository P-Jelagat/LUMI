import "./home.css";
import HomeNav from "../components/homeNav";
import Hero from "../components/hero";
import { Link } from "react-router-dom";

const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg}', {
   eager: true,
   import: 'default'
});


// temporary storage for products till the backend is complete
const bestSellerProducts = [{
         id: 1,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id: 2,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id:3,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id: 4,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id: 5,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id: 6,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
      },{
         id: 7,
         image: images['../assets/images/testImage.jpg'],
         description: 'resable drinkware for a greener lifestyle',
         price: 43.85
}];


// temporary storage for the collection categories
const collections = [{
         id:1,
         image:images['../assets/images/testImage.jpg'],
         category: 'All things Cookware'
      },{
         id:2,
         image:images['../assets/images/testImage.jpg'],
         category: 'Kitchen & Dining '
      },{
         id:3,
         image:images['../assets/images/testImage.jpg'],
         category: 'Home & Living'
      },{  
         id:4,
         image:images['../assets/images/testImage.jpg'],
         category: 'Appliances'
      },{
         id:5,
         image:images['../assets/images/testImage.jpg'],
         category: 'Bathroom Essentials'   
}];




export default function Home(){
    return(
       <div>
        
          <HomeNav />
          <Hero />

          <div className="homePageContent">


       {/* BEST SELLERS SECTION */}

            <div className="bestSellers">

               <div className="bestSellerIntro">
                  <p>Shop the Favorites, 
                  Discover our <strong>&#x2727; Bestselling Products  &#x2727;</strong></p>

                  <Link to='/shop'>More products &#x2192; </Link>
               </div>

                  <div className="bestSellerProducts">

                     
                     {/* DISPLAYING THE PRODUCT CARDS */}

                     { bestSellerProducts.map(product =>{
                        return(
                              <div className="productCard" key={product.id}>

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


                  {/* COLLECTIONS SECTION */}

                  <div className="collections">
                     <div className="homePageVideo">

                        <div className="video">

                        </div>

                        <div className="videoOverlay">

                        </div>

                     </div>

                     <div className="collectionsIntro">
                        <p>Curated for every Space &#8212;
                            Tailored Pieces from <strong>&#x2727; Our Collections &#x2727;</strong>  </p>
                     </div>

                     <div className="collectionsDisplay">

                        {collections.map(collection => (
                           <div className="collectionInfo">

                              <div className="collectionImage">
                                 <img src={collection.image} alt="" />
                              </div>

                              <div className="collectionOverlay">

                                 <p>{collection.category}</p>

                                 <button className="Explore CookwarePage">Explore &#x2192;</button>

                              </div>

                           </div>
                        ))}      
                     </div>


                  </div>

            </div>

          </div>

       </div>
    );
}