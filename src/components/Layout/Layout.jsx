import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        {/* Acá solo se renderizan los componentes que queremos que se muestren en todas las páginas */}
            {/* <Header /> */}
            <div className="custom-margin">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
