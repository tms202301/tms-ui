import { Component } from "react";

class TmsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let floatValue = this.props.align != undefined ? this.props.align : "left";
        let label = this.props.label != undefined ? this.props.label : "Button";
        return(
            <div style={{float: floatValue}}>
                <input className="button-tms" type="button" value={label} />
            </div>
        )
    }
}
export default TmsButton;