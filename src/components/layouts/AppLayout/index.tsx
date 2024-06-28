import {Outlet} from 'react-router-dom';
import Footer from "../../shared/Footer";
import Header from "../../shared/Header";

const AppLayout = () => {
    return (
        <div>
            <Header />
            <div>
                <Outlet/>
            </div>
            <Footer />
        </div>
    );
};

export default AppLayout;