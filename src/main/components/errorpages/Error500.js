import { Component } from "react";

class Error500 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                <div className="error-page-cls">
                    Internal server error 500
                </div>
            </div>
        )
    }
}
export default Error500;