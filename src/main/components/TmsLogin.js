import { Component } from "react";
import InputField from './generic/TmsInput';
import PasswordField from './generic/TmsPassword';
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';

class TmsLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        }
        this.userOnchangeFn = this.userOnchangeFn.bind(this);
        this.paswordOnchangeFn = this.paswordOnchangeFn.bind(this);
        this.okAction = this.okAction.bind(this);
        this.singUpAction = this.singUpAction.bind(this);
    }
    userOnchangeFn(event) {
        this.setState({userName: event.target.value});
    }
    paswordOnchangeFn(event) {
        this.setState({password: event.target.value});
    }
    okAction() {
        this.props.ok(this.state);
    }
    singUpAction() {
        this.props.singUpAction();
    }
    render() {
        return(
            <div className="cmp-main-cls">
                <InputField labelWidth="115" id="login-username-id" label="User Name" value={this.state.userName} onChange={this.userOnchangeFn} />
                <PasswordField labelWidth="115" id="login-password-id" label="Password" value={this.state.password} onChange={this.paswordOnchangeFn} />
                <Button id="signup-btn-id" label="Sign Up" align="right" type="primary" onClick={this.singUpAction}/>
                <Spacer align="right"/>
                <Button id="login-submit-id" label="Login" align="right" type="primary" onClick={this.okAction}/>
                <Spacer align="right"/>
                <Button id="login-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.props.cancel}/>
            </div>
        )
    }
}
export default TmsLogin;