import { Component } from "react";
import MainRoute from './MainRoute';
import SearchInput from './components/generic/TmsSearch';
import TmsButton from './components/generic/TmsButton';
import Spacer from './components/generic/TmsSpacer';
import LoginCmp from './components/TmsLogin';
import * as ServiceCall from './controller/ServiceCall';
import LoginStore from "../stores/LoginStore";

class HeaderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginPop:false,
            fullName: "",
            hideLoginBtn: false,
            hideLogoutBtn: true
        }
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.okAction = this.okAction.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.postLoginAction = this.postLoginAction.bind(this);
        this.onLogoutButtonClick = this.onLogoutButtonClick.bind(this);
    }
    componentDidMount() {
        LoginStore.addChangeListener(this.postLoginAction);
    } 
    componentWillUnmount() {
        LoginStore.removeChangeListener(this.postLoginAction);
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
    render() {
        let displayValue = this.state.showLoginPop ? "block" : "none";
        return(
            <div className="contentcls">
                <div className="home-header-cls">
                    <div className="full-name-cls">{this.state.fullName}</div>
                    <TmsButton hidden={this.state.hideLogoutBtn} align="right" label="Logout" onClick={this.onLogoutButtonClick}/>
                    <TmsButton hidden={this.state.hideLoginBtn} align="right" label="Login" onClick={this.onLoginButtonClick}/>
                    <Spacer align="right"/>
                </div>
                <div className="login-popup_content" style={{display: displayValue, width: "377px"}}>
                    <LoginCmp ok={this.okAction} cancel={this.cancelAction}/>
                </div>
            </div>
        )
    }
}
export default HeaderContent;