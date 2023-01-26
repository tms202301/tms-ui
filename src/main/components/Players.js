import { Component } from "react";
import TextField from './generic/TmsInput';
import DateField from './generic/TmsDate';
import DropDownField from "./generic/TmsDropDown"
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';
import * as TmsUtils from '../utils/TmsUtils';
import * as UiPaths from '../controller/UiPaths';
import UploadLogo from '../../main/images/Upload_Logo.png';
import FileComp from './generic/TmsUpload';
import TmsButton from './generic/TmsButton';
const pName = 'name';
const pState = 'pstate';
const PGender = 'gender';
const pGuardian = 'guardian';
const pAddress = 'address';
const pCurrentBeltGrade = 'belt';
const pTFID = 'tfiid';
const pBeltCertNo = 'certNo';
const pAcadamicQualification = 'AcadamicQualification';
const pSchoolName = 'school';
const pcoachName = "CoachName";
const ptrems = "I, the undersigned do hereby solemnly affirm, declare and confirm for myself, my heirs,"+
                "executors & administrators that I indemnify the Promoters/ Organizers / Sponsors & its "+
                "Members, Officials, Participants etc., holding myself personally responsible for all "+
                "damages, injuries of accidents, claims, demands etc., waiving all prerogative rights, "+
                "whatsoever related to the above set forth event.";
let playerName="";
const pDateOfBirth = 'pDateOfBirth';
class Players extends Component{

constructor(props){
 super(props);
 this.state={
    playerName:"",
    playerNameError: "",
    guardian:"",
    guardianError:"",
    address:"",
    addressError:"",
    dateOfBirthError:"",
    dateOfBirth:"",
    tFIIDError:"",
    tFIID:"",
    currentBeltGradeError:"",
    currentBeltGrade:"",
    coachNameError:"",
    coachName:"",
    schoolNameError:"",
    schoolName:"",
    academicQualificationError:"",
    academicQualification:""

 };
 this.changeTextField = this.changeTextField.bind(this);
 this.validateFormFields = this.validateFormFields.bind(this);
 this.resetErrorMessages = this.resetErrorMessages.bind(this);
 this.onSaveAction = this.onSaveAction.bind(this);
 this.onCancelAction = this.onCancelAction.bind(this);
 this.showLogoPop = this.showLogoPop.bind(this);
}
resetErrorMessages() {
    this.setState({ 
        playerNameError: "",
        guardianError: "", 
        addressError: "",
        dateOfBirthError: "", 
        tFIIDError: "",
        currentBeltGradeError: "", 
        academicQualificationError: "",
        beltCertificateNoError: "",
        schoolNameError: "",
        coachNameError: ""   
    });
}
onCancelAction() {
    this.resetErrorMessages();
    TmsUtils.hideMask();
    this.props.history.push(UiPaths.PLAYERS_PATH);
}
validateFormFields(request) {
    this.resetErrorMessages();
    let res = false;
    if(request.name === undefined || request.name === "") {
        this.setState({playerNameError: "Value should not be empty"});
        res = true;
    }else if(request.name.length > 50) {
        this.setState({playerNameError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.guardian === undefined || request.guardian === "") {
        this.setState({guardianError: "Value should not be empty"});
        res = true;
    } else if(request.guardian.length > 50) {
        this.setState({guardianError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.address === undefined || request.address === "") {
        this.setState({addressError: "Value should not be empty"});
        res = true;
    } else if(request.address.length > 150) {
        this.setState({addressError: "Value should not be more than 150 charecters"});
        res = true;
    }
    if(request.dateOfBirth === undefined || request.dateOfBirth === "" || isNaN(request.dateOfBirth)) {
        this.setState({dateOfBirthError: "From date should not be empty"});
        res = true;
    }
    if(request.TFIID === undefined || request.TFIID === "") {
        this.setState({tFIIDError: "Value should not be empty"});
        res = true;
    }else if(request.TFIID.length > 50) {
        this.setState({tFIIDError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.currentBeltGrade === undefined || request.currentBeltGrade === "") {
        this.setState({currentBeltGradeError: "Value should not be empty"});
        res = true;
    } else if(request.currentBeltGrade.length > 50) {
        this.setState({currentBeltGradeError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.academicQualification === undefined || request.academicQualification === "") {
        this.setState({academicQualificationError: "Value should not be empty"});
        res = true;
    } else if(request.academicQualification.length > 50) {
        this.setState({academicQualificationError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.beltCertificateNo === undefined || request.beltCertificateNo === "") {
        this.setState({beltCertificateNoError: "Value should not be empty"});
        res = true;
    } else if(request.beltCertificateNo.length > 50) {
        this.setState({beltCertificateNoError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.schoolName === undefined || request.schoolName === "") {
        this.setState({schoolNameError: "Value should not be empty"});
        res = true;
    } else if(request.schoolName.length > 50) {
        this.setState({schoolNameError: "Value should not be more than 50 charecters"});
        res = true;
    }
    if(request.coachName === undefined || request.coachName === "") {
        this.setState({coachNameError: "Value should not be empty"});
        res = true;
    } else if(request.coachName.length > 50) {
        this.setState({coachNameError: "Value should not be more than 50 charecters"});
        res = true;
    }
    

}
changeTextField(event, type) {
    let value = event.target.value;
    if(type === pName) {
        this.setState({playerName: value});
    }
    if(type === pGuardian) {
        this.setState({guardian: value});
    }
    if(type === pAddress) {
        this.setState({address: value});
    } 
    if(type === pCurrentBeltGrade) {
        this.setState({currentBeltGrade: value});
    } 
    if(type === pAcadamicQualification) {
        this.setState({pCurrentBeltGrade: value});
    } 
    if(type === pSchoolName) {
        this.setState({schoolName: value});
    }if(type === pAcadamicQualification) {
        this.setState({academicQualification: value});
    } 
    if(type === pcoachName) {
        this.setState({coachName: value});
    }if(type === pBeltCertNo ) {
        this.setState({beltCertificateNo: value});
    }    

    
}
onSaveAction() {
    let stateData = this.state;
    let request = {
        name: stateData.playerName ,      
        guardian: stateData.guardian,
        address: stateData.address,
        currentBeltGrade: stateData.currentBeltGrade,
        tFIID: stateData.tFIID,
        dateOfBirth: new Date(stateData.dateOfBirth).getTime(), 
        beltCertificateNo: stateData.beltCertificateNo,
        academicQualification: stateData.academicQualification,  
        schoolName: stateData.schoolName,       
    }
    let validate = this.validateFormFields(request);
  //  if(!validate) {
    //    TmsUtils.showMask();
       // ServiceCall.addTournamet(request);
   // }
}
showLogoPop(event, recordId) {
    this.setState({showLoginPop: !this.state.showLoginPop, editedRecord: recordId});
}
render(){
    let displayValue = this.state.showLoginPop ? "block" : "none";
    return (
    <div className="tn-main-cls">
        <div className="form-title-cls">Player</div>
        <div style={{width: "100%", float: "left"}}>
        <TextField label="Name" id="p-name-txt-id" value={this.state.playerName}
                        onChange={event=>this.changeTextField(event, pName)}
                        required={true} error={this.state.playerNameError}/>
        <span id={'tn-span-logo'} className="tn-logo-cls"><img alt="" id={'tn-img-logo'} 
                    style={{border: "1px solid #ccc", padding: "1px", cursor: "pointer", borderRadius: "6px"}}
                    onClick={event=>this.showLogoPop(event, null)} src={UploadLogo} />
        </span>
        <DateField label="DateOfBirth" id="p-date-of-birth-id" value={this.state.dateOfBirth}
                        onChange={event=>this.changeDateField(event, pDateOfBirth)} 
                        required={true} error={this.state.dateOfBirthError} />
       <TextField label="Guardian" id="p-guardian-txt-id" value={this.state.guardian}
                        onChange={event=>this.changeTextField(event, pGuardian)} 
                        required={true} error={this.state.guardianError}/>
        <TextField label="Address" id="p-venu-txt-id" value={this.state.address}
                        onChange={event=>this.changeTextField(event, pAddress)} 
                        required={true} error={this.state.addressError}/>
        <TextField label="CurrentBeltGrade" id="p-beltGrade-txt-id" value={this.state.currentBeltGrade}
                        onChange={event=>this.changeTextField(event, pCurrentBeltGrade)} 
                        required={true} error={this.state.currentBeltGradeError}/>
        <TextField label="TFIID" id="p-tfiid-txt-id" value={this.state.tFIID}
                        onChange={event=>this.changeTextField(event, pTFID)} 
                        required={true} error={this.state.tFIIDError}/>
        <TextField label="BeltCertificateNo" id="p-beltCertificateNo-txt-id" value={this.state.beltCertificateNo}
                        onChange={event=>this.changeTextField(event, pBeltCertNo)} 
                        required={true} error={this.state.beltCertificateNoError}/>
        <TextField label="AcademicQualification" id="tn-AQualification-txt-id" value={this.state.academicQualification}
                        onChange={event=>this.changeTextField(event, pAcadamicQualification)} 
                        required={true} error={this.state.academicQualificationError}/>
        <TextField label="SchoolName" id="p-schoolName-txt-id" value={this.state.schoolName}
                        onChange={event=>this.changeTextField(event, pSchoolName)} 
                        required={true} error={this.state.schoolNameError}/>
        <TextField label="CoachName" id="tn-AQualification-txt-id" value={this.state.coachName}
                        onChange={event=>this.changeTextField(event, pcoachName)} 
                        required={true} error={this.state.coachNameError}/>
        
        </div>
                <div style={{width: "48%", float: "left"}}>
                    <Button id="p-submit-id" label="Save" align="right" type="primary" onClick={this.onSaveAction}/>
                    <Spacer align="right"/>
                    <Button id="p-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.onCancelAction}/>
                </div>
                <div className="popup_overlay" style={{display: displayValue}}>
                        <div className="login-popup_content" style={{display: displayValue, width: "377px"}}>
                            <FileComp id="logo-file-upload-id" onChange={this.onLogoSelect}/>
                            <TmsButton id="logo-submit-id" label="Save" align="right" type="primary" onClick={this.onLogoSave}/>
                            <Spacer align="right"/>
                            <TmsButton id="logo-close-id" label="Cancel" align="right" type="secondary" onClick={event=>this.setState({showLoginPop: !this.state.showLoginPop})}/>
                        </div>
                    </div>
    </div>
    
    );
}
}
export default Players