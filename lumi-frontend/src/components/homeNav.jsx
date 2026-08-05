import './homeNav.css';
import { Link } from 'react-router-dom';

const icons = import.meta.glob(
    '../assets/icons/*.{png,jpg,jpeg,svg}',
    {
        eager: true,
        import: 'default'
    }
);

export default function HomeNav() {
    return (
        <nav className="homeNav">

            {/* Left navigation */}
            <div className="navLinks">
                <Link to="/shop">Shop</Link>
                <a href=''>Bestsellers</a>
                <a href=''>About</a>
            </div>

            {/* Center logo */}
            <Link to="/" className="logo">
                <img
                    src={icons['../assets/icons/lumi logo.png']}
                    alt="LUMI"
                />
            </Link>

            {/* Right navigation */}
            <div className="homeNav-cta">

                <div className="contact">
                    <Link to="/shop">Contact Us</Link>
                </div>

                <button className="iconBtn">
                    <img
                        id='accountCta'
                        src={icons['../assets/icons/icon placeholder.png']}
                        alt="Wishlist"
                    />
                </button>

                <button className="iconBtn">
                    <img
                        id='whatsappCta'
                        src={icons['../assets/icons/icon placeholder.png']}
                        alt="Account"
                    />
                </button>

            </div>

        </nav>
    );
}