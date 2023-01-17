import { Component } from "react";
import Button from '../generic/TmsButton';
import Spacer from '../generic/TmsSpacer';

class TmsWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        let msg = this.props.messsage !== undefined ? this.props.messsage : "Do you want to continue ?";
        return(
            <div>
                <div className="popup-header">
                    Confirmation
                </div>
                <div className="popup-content">
                    {msg}
                </div>
                <Button id="warning-ok-id" label="OK" align="right" type="primary" onClick={this.props.okAction}/>
                <Spacer align="right"/>
                <Button id="warning-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.props.cancelAction}/>
            </div>
        )
    }
}
export default TmsWarning;