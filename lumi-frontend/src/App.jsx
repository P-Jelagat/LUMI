import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';

export default function App (){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Footer />
        </>
        
    );
}
