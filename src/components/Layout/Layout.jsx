import { Outlet } from "react-router-dom";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <HeaderRender />
            <div className="custom-margin">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
