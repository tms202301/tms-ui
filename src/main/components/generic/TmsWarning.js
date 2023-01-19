import { Component } from "react";
import Button from '../generic/TmsButton';
import Spacer from '../generic/TmsSpacer';

class TmsWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let displayValue = "none";
        if(this.props.showPop !== undefined && this.props.showPop === true) {
            displayValue = "block";
        }
        let msg = this.props.messsage !== undefined ? this.props.messsage : "Do you want to continue ?";
        return(
            <div className="popup_overlay" style={{display: displayValue}}>
                <div className="warn-popup_content" style={{display: displayValue, width: "377px"}}>
                    <div className="popup-header">
                        Confirmation
                    </div>
                    <div className="popup-content">
                        {msg}
                    </div>
                    <Spacer align="right"/>
                    <Button id="warning-ok-id" label="OK" align="right" type="primary" onClick={this.props.okAction}/>
                    <Spacer align="right"/>
                    <Button id="warning-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.props.cancelAction}/>
                    <div style={{paddingBottom: "5px"}}></div>
                </div>
            </div>
            
        )
    }
}
export default TmsWarning;