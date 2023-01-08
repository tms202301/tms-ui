import { Component } from "react";
import Home from './components/Home';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="contentcls">
                <Home />
            </div>
        )
    }
}
export default MainContent;