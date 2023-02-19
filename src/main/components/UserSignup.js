import { Component } from "react";
import TextField from "./generic/TmsInput";
import DateField from './generic/TmsDate';
import Password from './generic/TmsPassword';
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';
import UserStore from '../../stores/UserStore';
import * as SericeCall from '../controller/ServiceCall';
import * as TmsUtils from '../utils/TmsUtils';

const fName = "fName";
const lName = "lName";
const emailCont = "email";
const dobConst = "dob";
const mobConst = "mob";
const panConst = "pan";
const unConst = "user";
const upConst = "pass";
const ucpConst = "confpass";

class UserSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            mobileNumber: "",
            panNumber:"",
            userNameError: "",
            passwordError: "",
            confirmPasswordError: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            dateOfBirthError: "",
            mobileNumberError: "",
            panNumberError:"",
            recordId: -1
        }
        this.changeTextField = this.changeTextField.bind(this);
        this.changeDateField = this.changeDateField.bind(this);
        this.onSaveAction = this.onSaveAction.bind(this);
        this.onCancelAction = this.onCancelAction.bind(this);
        this.resetErrorMessages = this.resetErrorMessages.bind(this);
        this.resetFormData = this.resetFormData.bind(this);
    }
    changeTextField(event, type) {
        let val = event.target.value;
        if(type === fName) {
            this.setState({firstName: val});
        } else if(type === lName) {
            this.setState({lastName: val});
        } else if(type === emailCont) {
            this.setState({email: val});
        } else if(type === mobConst) {
            this.setState({mobileNumber: val});
        } else if(type === panConst) {
            this.setState({panNumber: val});
        } else if(type === unConst) {
            this.setState({userName: val});
        } else if(type === upConst) {
            this.setState({password: val});
        } else if(type === ucpConst) {
            this.setState({confirmPassword: val});
        }
    }
    changeDateField(value, type) {
        let val = value;
        if(type === dobConst) {
            this.setState({dateOfBirth: val});
        }
    }
    onSaveAction() {
        let request = {
            userName: this.state.userName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            dateOfBirth: new Date(this.state.dateOfBirth).getTime(),
            mobileNumber: this.state.mobileNumber,
            panNumber: this.state.panNumber,
            recordId: this.state.recordId
        }
        if(!this.validateFormFields(request)) {
            SericeCall.addUser(request);
            this.resetErrorMessages();
        }
    }
    onCancelAction() {
        this.resetFormData();
        this.props.cancel();
    }
    resetFormData() {
        this.setState({ userName: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            email: "",
            dateOfBirth: "",
            mobileNumber: "",
            panNumber:"",
            userNameError: "",
            passwordError: "",
            confirmPasswordError: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            dateOfBirthError: "",
            mobileNumberError: "",
            panNumberError:""});
    }
    validateFormFields(request) {
        this.resetErrorMessages();
        let res = false;
        let charector50 = "Value should not be more than 50 charecters";
        let charector15 = "Value should not be more than 15 charecters";
        let emptyStr = "Value should not be empty";
        if(request.firstName === undefined || request.firstName === "") {
            this.setState({firstNameError: emptyStr});
            res = true;
        } else if(request.firstName.length > 50) {
            this.setState({firstNameError: charector50});
            res = true;
        }
        if(request.lastName === undefined || request.lastName === "") {
            this.setState({lastNameError: emptyStr});
            res = true;
        } else if(request.lastName.length > 50) {
            this.setState({lastNameError: charector50});
            res = true;
        }
        if(request.email === undefined || request.email === "") {
            this.setState({emailError: emptyStr});
            res = true;
        } else if(request.email.length > 50) {
            this.setState({emailError: charector50});
            res = true;
        } else if(!TmsUtils.validateEmail(request.email)) {
            this.setState({emailError: "Invalid email id"});
            res = true;
        }
        if(request.mobileNumber === undefined || request.mobileNumber === "") {
            this.setState({mobileNumberError: emptyStr});
            res = true;
        } else if(request.mobileNumber.length > 50) {
            this.setState({mobileNumberError: charector50});
            res = true;
        }
        if(request.panNumber === undefined || request.panNumber === "") {
            this.setState({panNumberError: emptyStr});
            res = true;
        } else if(request.panNumber.length > 15) {
            this.setState({panNumberError: charector15});
            res = true;
        }
        if(request.dateOfBirth === undefined || request.dateOfBirth === "" || isNaN(request.dateOfBirth)) {
            this.setState({dateOfBirthError: emptyStr});
            res = true;
        }
        if(request.userName === undefined || request.userName === "") {
            this.setState({userNameError: emptyStr});
            res = true;
        } else if(request.userName.length > 50) {
            this.setState({userNameError: charector50});
            res = true;
        }
        if(request.password === undefined || request.password === "") {
            this.setState({passwordError: emptyStr});
            res = true;
        } else if(request.password.length > 50) {
            this.setState({passwordError: charector50});
            res = true;
        }
        if(request.confirmPassword === undefined || request.confirmPassword === "") {
            this.setState({confirmPasswordError: emptyStr});
            res = true;
        } else if(request.confirmPassword.length > 50) {
            this.setState({confirmPasswordError: charector50});
            res = true;
        }
        return res;
    }
    resetErrorMessages() {
        this.setState({ 
            userNameError: "",
            passwordError: "",
            confirmPasswordError: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            dateOfBirthError: "",
            mobileNumberError: "",
            panNumberError:""
        });
    }
    render() {
        return(
            <div>
                <div className="title-header-cls">
                    Sign Up
                </div>
                <div>
                    <TextField label="Fist Name" id="tn-fname-txt-id" value={this.state.firstName}
                        onChange={event=>this.changeTextField(event, fName)}
                        required={true} error={this.state.firstNameError}/>
                    <TextField label="Last Name" id="tn-lname-txt-id" value={this.state.lastName}
                        onChange={event=>this.changeTextField(event, lName)}
                        required={true} error={this.state.lastNameError}/>
                    <TextField label="Email" id="tn-email-txt-id" value={this.state.email}
                        onChange={event=>this.changeTextField(event, emailCont)}
                        required={true} error={this.state.emailError}/>
                    <DateField label="Date Of Birth" id="tn-dob-date-id" value={this.state.dateOfBirth}
                            onChange={event=>this.changeDateField(event, dobConst)} 
                            required={true} error={this.state.dateOfBirthError} />
                    <TextField label="Phone Nmber" id="tn-phone-txt-id" value={this.state.mobileNumber}
                        onChange={event=>this.changeTextField(event, mobConst)}
                        required={true} error={this.state.mobileNumberError}/>
                    <TextField label="PAN Number" id="tn-pan-txt-id" value={this.state.panNumber}
                        onChange={event=>this.changeTextField(event, panConst)} 
                        error={this.state.panNumberError}/>
                    <TextField label="Username" id="tn-username-txt-id" value={this.state.userName}
                        onChange={event=>this.changeTextField(event, unConst)}
                        required={true} error={this.state.userNameError}/>
                    <Password label="Password" id="tn-pass-txt-id" value={this.state.password}
                        onChange={event=>this.changeTextField(event, upConst)}
                        required={true} error={this.state.passwordError}/>
                    <Password label="Confirm Password" id="tn-confirmpass-txt-id" value={this.state.confirmPassword}
                        onChange={event=>this.changeTextField(event, ucpConst)}
                        required={true} error={this.state.confirmPasswordError}/>
                </div>
                <div style={{width: "48%", float: "right"}}>
                    <Button id="tn-signup-save-id" label="Save" align="right" type="primary" onClick={this.onSaveAction}/>
                    <Spacer align="right"/>
                    <Button id="tn-signup-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.onCancelAction}/>
                </div>
            </div>
        )
    }
}
export default UserSignup;