import { Component } from "react";
import TextField from "./generic/TmsInput";
import DateField from './generic/TmsDate';
import Password from './generic/TmsPassword';
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';
import UserStore from '../../stores/UserStore';
import * as SericeCall from '../controller/ServiceCall';

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
            panNumberError:""
        }
        this.changeTextField = this.changeTextField.bind(this);
        this.changeDateField = this.changeDateField.bind(this);
        this.onSaveAction = this.onSaveAction.bind(this);
        this.onCancelAction = this.onCancelAction.bind(this);
        this.resetErrorMessages = this.resetErrorMessages.bind(this);
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
            panNumber: this.state.panNumber
        }
        if(!this.validateFormFields(request)) {
            SericeCall.addUser(request);
        }
    }
    onCancelAction() {
        this.props.cancel();
    }
    validateFormFields(request) {
        this.resetErrorMessages();
        let res = false;
        if(request.firstName === undefined || request.firstName === "") {
            this.setState({firstNameError: "Value should not be empty"});
            res = true;
        } else if(request.firstName.length > 50) {
            this.setState({firstNameError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.lastName === undefined || request.lastName === "") {
            this.setState({lastNameError: "Value should not be empty"});
            res = true;
        } else if(request.lastName.length > 50) {
            this.setState({lastNameError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.email === undefined || request.email === "") {
            this.setState({lastNameError: "Value should not be empty"});
            res = true;
        } else if(request.email.length > 50) {
            this.setState({emailError: "Value should not be more than 50 charecters"});
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