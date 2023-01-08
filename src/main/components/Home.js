import { Component } from "react";
import SearchInput from './generic/TmsSearch';
import TmsButton from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';
import LoginCmp from './TmsLogin';
import { Button,Modal} from 'react-bootstrap';  

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoginPop:false
        }
        this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
        this.okAction = this.okAction.bind(this);
        this.cancelAction = this.cancelAction.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    onLoginButtonClick(event) {
        this.setState({showLoginPop: !this.state.showLoginPop});
    }
    okAction() {
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
            <div className="cmp-main-cls">
                <div className="home-header-cls">
                    <TmsButton align="right" label="Login" onClick={this.onLoginButtonClick}/>
                    <Spacer align="right"/>
                    <SearchInput align="right"/>
                </div>
                <div className="login-popup_content" style={{display: displayValue, width: "377px"}}>
                    <LoginCmp ok={this.okAction} cancel={this.cancelAction}/>
                </div>
            </div>
        )
    }
}
export default Home;