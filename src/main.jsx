import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>
);
