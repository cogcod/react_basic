import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./movieApp/routes/Home";
import Detail from "./movieApp/routes/Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Detail />} />
                {/*  React Router에게 :id 에 오는 값이 뭔지 알고 싶다고 요청   */}
            </Routes>
        </BrowserRouter>
    )
}

export default App;
