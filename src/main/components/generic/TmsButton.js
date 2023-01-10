import { Component, useDebugValue } from "react";

class TmsButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let floatValue = this.props.align !== undefined ? this.props.align : "left";
        let label = this.props.label !== undefined ? this.props.label : "Button";
        let buttonType = this.props.type !== undefined ? this.props.type : "primary";
        let displayValue = "block";
        if(this.props.hidden != undefined && this.props.hidden) {
            displayValue = "none";
        }
        let clsName = "button-tms-primary";
        if(buttonType === "secondary") {
            clsName = "button-tms-secondary";
        }
        return(
            <div style={{float: floatValue, marginTop: "4px", display: displayValue}}>
                <input id={this.props.id} className={clsName} type="button" value={label} onClick={this.props.onClick}/>
            </div>
        )
    }
}
export default TmsButton;