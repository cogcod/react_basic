import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./movieApp/routes/Home";
import Detail from "./movieApp/routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
