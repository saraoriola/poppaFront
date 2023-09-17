import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            {/* <Header /> */}
            <div className="custom-margin">
                <Outlet />
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Layout;
