import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import Dashboard from "./components/EventUser/Dashboard/Dashboard";

const App = () => {
    return (
        <>
            {/* <div className="app-container">
                <h1 className="titulo">Título en Telegraf-UltraBold</h1>
                <p className="texto-light">Este es un texto en Telegraf-UltraLight.</p>
                <div className="font-group">
                    <p className="telegraf-regular">Telegraf Regular</p>
                    <p className="telegraf-ultra-bold">Telegraf UltraBold</p>
                    <p className="telegraf-ultra-light">Telegraf UltraLight</p>
                    <p className="nocturne-extra-light">Nocturne ExtraLight</p>
                    <p className="nocturne-bold">Nocturne Bold</p>
                    <p className="nocturne-extra-thin">Nocturne ExtraThin</p>
                    <p className="nocturne-light">Nocturne Light</p>
                    <p className="nocturne-medium">Nocturne Medium</p>
                    <p className="nocturne-regular">Nocturne Regular</p>
                    <p className="nocturne-semi-bold">Risky People</p>
                    <p className="nocturne-thin">Bienvenidos a Marina de Empresa</p>
                </div>
                <div className="colores-container">
                    <div className="color-box cream-bg">Cream</div>
                    <div className="color-box blue-bg">Blue</div>
                    <div className="color-box gray-bg">Gray</div>
                    <div className="color-box orange-bg">Orange</div>
                    <div className="color-box cream-bg60">Cream</div>
                    <div className="color-box blue-bg60">Blue</div>
                    <div className="color-box gray-bg60">Gray</div>
                    <div className="color-box orange-bg60">Orange</div>
                    <div className="color-box cream-bg40">Cream</div>
                    <div className="color-box blue-bg40">Blue</div>
                    <div className="color-box gray-bg40">Gray</div>
                    <div className="color-box orange4-bg40">Orange</div>
                    <div className="color-box cream-bg20">Cream</div>
                    <div className="color-box blue-bg20">Blue</div>
                    <div className="color-box gray-bg20">Gray</div>
                    <div className="color-box orange-bg20">Orange</div>
                </div>
            </div> */}
            <RouterProvider router={routes} />
        </>
    );
};

export default App;
