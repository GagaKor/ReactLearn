import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Boards from "./views/Boards";
import Detail from "./views/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="boards" element={<Boards />} />
                <Route path="boards/:detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
