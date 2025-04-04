import ReactDOM from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./index.scss";
import Error from "./Components/UI/Error";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App />
            <Error />
        </BrowserRouter>
    </QueryClientProvider>
);
