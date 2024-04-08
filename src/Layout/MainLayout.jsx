import {Outlet} from 'react-router-dom'
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer';
const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-337px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;