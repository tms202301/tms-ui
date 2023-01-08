import { Component } from "react";

class TmsSpacer extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        let floatValue = this.props.align != undefined ? this.props.align : "left";
        return(
            <div style={{float: floatValue, padding: "4px"}}>

            </div>
        )
    }
}
export default TmsSpacer;