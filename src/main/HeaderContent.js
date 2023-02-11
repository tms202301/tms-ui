import { Component } from "react";
import TmsButton from './components/generic/TmsButton';
import Spacer from './components/generic/TmsSpacer';
import LoginCmp from './components/TmsLogin';
import * as ServiceCall from './controller/ServiceCall';
import LoginStore from "../stores/LoginStore";
import AppStore from "../stores/AppStore";
import UserStore from '../stores/UserStore';
import { withRouter } from "react-router-dom";
import * as TmsUtils from "./utils/TmsUtils";
import Signup from "./components/UserSignup";

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginPop:false,
            fullName: "",
            hideLoginBtn: false,
            hideLogoutBtn: true,
            showSignUp: false
        }
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.okAction = this.okAction.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.postLoginAction = this.postLoginAction.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
        this.errorPageHandler = this.errorPageHandler.bind(this);
        this.singUpAction = this.singUpAction.bind(this);
        this.okSignAction = this.okSignAction.bind(this);
        this.cancelSignAction = this.cancelSignAction.bind(this);
        this.closeSignPopup = this.closeSignPopup.bind(this);
        this.userSave = this.userSave.bind(this);
        this.messageCloseAction = this.messageCloseAction.bind(this);
    }
    componentDidMount() {
        LoginStore.addChangeListener(this.postLoginAction);
        AppStore.on("change", this.errorPageHandler);
        UserStore.on("change", this.userSave)
    } 
    componentWillUnmount() {
        LoginStore.removeChangeListener(this.postLoginAction);
        AppStore.removeListener("change", this.errorPageHandler);
        UserStore.removeListener("change", this.userSave);
    }
    errorPageHandler() {
        let errorPage = AppStore.getData();
        TmsUtils.hideMask();
        this.props.history.push('/'+errorPage);
    }
    postLoginAction() {
        let resData = LoginStore.getData();
        this.setState({fullName: resData.firstName+" "+resData.lastName});
    }
    onLoginButtonClick(event) {
        this.setState({showLoginPop: !this.state.showLoginPop});
    }
    onLogoutButtonClick() {
        this.setState({fullName: "", hideLogoutBtn: true, hideLoginBtn: false});
    }
    okAction(data) {
        ServiceCall.loginRequest(data);
        this.setState({hideLogoutBtn: false, hideLoginBtn: true});
        this.closePopup();
    }
    cancelAction() {
        this.closePopup();
    }
    closePopup() {
        this.setState({showLoginPop: !this.state.showLoginPop});
    }
    singUpAction() {
        this.setState({showSignUp: !this.state.showSignUp, showLoginPop: !this.state.showLoginPop});
    }
    okSignAction(data) {
        ServiceCall.loginRequest(data);
        this.setState({hideLogoutBtn: false, hideLoginBtn: true});
        this.closePopup();
    }
    cancelSignAction() {
        this.closeSignPopup();
    }
    closeSignPopup() {
        this.setState({showSignUp: !this.state.showSignUp});
    }
    userSave() {
        this.closeSignPopup();
    }
    messageCloseAction() {
        document.getElementById("message-div-id").style.display = "none";
    }
    render() {
        let displayValue = this.state.showLoginPop ? "block" : "none";
        let signUpDisplay = this.state.showSignUp ? "block" : "none";
        return(
            <div className="contentcls">
                <div className="home-header-cls">
                    <div className="full-name-cls">{this.state.fullName}</div>
                    <TmsButton hidden={this.state.hideLogoutBtn} align="right" label="Logout" onClick={this.onLogoutButtonClick}/>
                    <TmsButton hidden={this.state.hideLoginBtn} align="right" label="Login" onClick={this.onLoginButtonClick}/>
                    <Spacer align="right"/>
                </div>
                <div className="popup_backgroud" style={{display: displayValue}}>
                    <div className="login-popup_content" style={{display: displayValue, width: "400px"}}>
                        <LoginCmp ok={this.okAction} cancel={this.cancelAction} singUpAction={this.singUpAction}/>
                    </div>
                </div>
                <div className="popup_backgroud" style={{display: signUpDisplay}}>
                    <div className="login-popup_content" style={{display: signUpDisplay, width: "530px"}}>
                        <Signup ok={this.okSignAction} cancel={this.cancelSignAction} singUpAction={this.singUpAction}/>
                    </div>
                </div>
                <div className='message-popup_content' id="message-div-id">
                    <div style={{float: "left", display: "none"}} id="message-success-icon-div"><span className="message-success-icon">&#x2714;</span></div>
                    <div style={{float: "left", display: "none"}} id="message-error-icon-div"><span className="message-error-icon">&#x2718;</span></div>
                    <div style={{float: "left", marginLeft: "5px"}} id="message-content-id"></div>
                    <div className="message-close-icon" onClick={this.messageCloseAction}>x</div>
                </div>
            </div>
        )
    }
}
export default withRouter(HeaderContent);