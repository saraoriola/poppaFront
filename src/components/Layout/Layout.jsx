import { Outlet } from "react-router-dom";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
        {/* Acá solo se renderizan los componentes que queremos que se muestren en todas las páginas */}
           {/*  <HeaderRender/>  NO LO TRAE :s */}
            <div className="custom-margin">
                <Outlet />
            </div>
            <div>
                <Footer/>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
