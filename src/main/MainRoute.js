import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

class MainRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                    <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}
export default MainRoute;