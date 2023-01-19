import { Component } from "react";
import TextField from './generic/TmsInput';
import TextArea from './generic/TmsTextAread';
import DateField from './generic/TmsDate';
import DropDownField from "./generic/TmsDropDown"
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';
import TournamentStore from '../../stores/TournamentStore';
import * as ServiceCall from '../controller/ServiceCall';
import ActionTypes from '../../actions/TmsActionTypes';
import * as UiPaths from '../controller/UiPaths';
import * as TmsUtils from '../utils/TmsUtils';

const tnName = 'name';
const tnVenu = 'venue';
const tnGame = 'game';
const tnPromoter = 'promoter';
const tnOrganizer = 'organizer';
const tnDescription = 'desc';
const tnFromDate = 'tnFrom';
const tntoDate = 'tnTo';
const tnAdFromDate = 'tnAdFrom';
const tnAdtoDate = 'tnAdTo';
const tnType = "tnType";
const tnCategory = "tnCatg";

class TournamentCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournamentName: "",
            venue: "",
            tnGameName: "",
            tnPromoter: "",
            tnOrg: "",
            tnDesc: "",
            tnFromDate: "",
            tnToDate: "",
            tnAdFromDate: "",
            tnAdToDate: "",
            tnTypeObj: {},
            tnCategoryObj: {},
            tnLogoName: "",
            tournamentNameError: "",
            venueError: "",
            tnGameNameError: "",
            tnPromoterError: "",
            tnOrgError: "",
            tnDescError: "",
            tnFromDateError: "",
            tnToDateError: "",
            tnAdFromDateError: "",
            tnAdToDateError: "",
            tnTypeObjError: "",
            tnCategoryObjError: ""
        }
        this.changeTextField = this.changeTextField.bind(this);
        this.changeDateField = this.changeDateField.bind(this);
        this.changeDropDownField = this.changeDropDownField.bind(this);
        this.onSaveAction = this.onSaveAction.bind(this);
        this.onCancelAction = this.onCancelAction.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.validateFormFields = this.validateFormFields.bind(this);
        this.resetErrorMessages = this.resetErrorMessages.bind(this);
    }
    componentDidMount() {
        let recordId = sessionStorage.getItem("tnRecordId");
        TournamentStore.on("change", this.fetchData);
        if(recordId !== null && recordId !== undefined && Number(recordId) !== 0) {
            ServiceCall.findTournament(Number(recordId));
        }
    } 
    componentWillUnmount() {
        let recordId = sessionStorage.getItem("tnRecordId");
        TournamentStore.removeListener("change", this.fetchData);
    }
    fetchData() {
        let resData = TournamentStore.getTournamentDetails();
        if(resData !== undefined && TournamentStore.getActionType() === ActionTypes.TOURNAMENT_FIND) {
            let tnCategoryObj = TmsUtils.getCategoryObject(resData.category);
            let tnTypeObj = TmsUtils.getTypeObject(resData.type);
            this.setState({tournamentName: resData.name,
                venue: resData.venue,
                tnGameName: resData.gameName,
                tnPromoter: resData.promoters,
                tnOrg: resData.organizer,
                tnDesc: resData.description,
                tnFromDate: new Date(resData.fromDate),
                tnToDate: new Date(resData.fromDate),
                tnAdFromDate: new Date(resData.admisionStart),
                tnAdToDate: new Date(resData.admisionEnd),
                tnCategoryObj: tnCategoryObj,
                tnTypeObj: tnTypeObj
            });
            
        }
        if(TournamentStore.isTnSaved() === true) {
            this.props.history.push(UiPaths.TOURNAMENT_PATH);
        }
    }
    changeTextField(event, type) {
        let value = event.target.value;
        if(type === tnName) {
            this.setState({tournamentName: value});
        } else if(type === tnVenu) {
            this.setState({venue: value});
        } else if(type === tnGame) {
            this.setState({tnGameName: value});
        } else if(type === tnPromoter) {
            this.setState({tnPromoter: value});
        } else if(type === tnOrganizer) {
            this.setState({tnOrg: value});
        } else if(type === tnDescription) {
            this.setState({tnDesc: value});
        }
    }
    changeDateField(value, type) {
        if(type === tnFromDate) {
            this.setState({tnFromDate: value});
        } else if(type === tntoDate) {
            this.setState({tnToDate: value});
        } else if(type === tnAdFromDate) {
            this.setState({tnAdFromDate: value});
        } else if(type === tnAdtoDate) {
            this.setState({tnAdToDate: value});
        }
    }
    changeDropDownField(value, type) {
        if(type === tnType) {
            this.setState({tnTypeObj: value});
        } else if(type === tnCategory) {
            this.setState({tnCategoryObj: value});
        }
    }
    onSaveAction() {
        let stateData = this.state;
        let request = {
            name: stateData.tournamentName ,
            venue: stateData.venue,
            gameName: stateData.tnGameName,
            promoters: stateData.tnPromoter,
            organizer: stateData.tnOrg,
            description: stateData.tnDesc,
            fromDate: new Date(stateData.tnFromDate).getTime(),
            toDate: new Date(stateData.tnToDate).getTime(),
            admisionStart: new Date(stateData.tnAdFromDate).getTime(),
            admisionEnd: new Date(stateData.tnAdToDate).getTime(),
            category: stateData.tnCategoryObj.value,
            type: stateData.tnTypeObj.value
        }
        let validate = this.validateFormFields(request);
        if(!validate) {
            TmsUtils.showMask();
            ServiceCall.addTournamet(request);
        }
    }
    onCancelAction() {
        TmsUtils.hideMask();
        this.props.history.push(UiPaths.TOURNAMENT_PATH);
    }
    resetErrorMessages() {
        this.setState({ 
            tournamentNameError: "",
            venueError: "",
            tnGameNameError: "",
            tnPromoterError: "",
            tnOrgError: "",
            tnDescError: "",
            tnFromDateError: "",
            tnToDateError: "",
            tnAdFromDateError: "",
            tnAdToDateError: "",
            tnTypeObjError: "",
            tnCategoryObjError: ""
        });
    }
    validateFormFields(request) {
        this.resetErrorMessages();
        let res = false;
        if(request.name === undefined || request.name === "") {
            this.setState({tournamentNameError: "Value should not be empty"});
            res = true;
        } else if(request.name.length > 50) {
            this.setState({tournamentNameError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.venue === undefined || request.venue === "") {
            this.setState({venueError: "Value should not be empty"});
            res = true;
        } else if(request.venue.length > 50) {
            this.setState({venueError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.gameName === undefined || request.gameName === "") {
            this.setState({tnGameNameError: "Game name should not be empty"});
            res = true;
        } else if(request.gameName.length > 50) {
            this.setState({tnGameNameError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.promoters === undefined || request.promoters === "") {
            this.setState({tnPromoterError: "Promoters should not be empty"});
            res = true;
        } else if(request.promoters.length > 50) {
            this.setState({tnPromoterError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.organizer === undefined || request.organizer === "") {
            this.setState({tnOrgError: "Organizer should not be empty"});
            res = true;
        } else if(request.organizer.length > 50) {
            this.setState({tnOrgError: "Value should not be more than 50 charecters"});
            res = true;
        }
        if(request.description === undefined || request.description === "") {
            this.setState({tnDescError: "Description should not be empty"});
            res = true;
        } else if(request.description.length > 2000) {
            this.setState({tnDescError: "Value should not be more than 2000 charecters"});
            res = true;
        }
        if(request.fromDate === undefined || request.fromDate === "" || isNaN(request.fromDate)) {
            this.setState({tnFromDateError: "From date should not be empty"});
            res = true;
        }
        if(request.toDate === undefined || request.toDate === ""  || isNaN(request.toDate)) {
            this.setState({tnToDateError: "To date should not be empty"});
            res = true;
        }
        if(request.admisionStart === undefined || request.admisionStart === "" || isNaN(request.admisionStart)) {
            this.setState({tnAdFromDateError: "Admision start date should not be empty"});
            res = true;
        }
        if(request.admisionEnd === undefined || request.admisionEnd === "" || isNaN(request.admisionEnd)) {
            this.setState({tnAdToDateError: "Adminsion end date should not be empty"});
            res = true;
        }
        if(request.type === undefined || request.type === "") {
            this.setState({tnTypeObjError: "Type should not be empty"});
            res = true;
        }
        if(request.category === undefined || request.category === "") {
            this.setState({tnCategoryObjError: "Category should not be empty"});
            res = true;
        }
        return res;
    }
    render() {
        return(
            <div className="tn-main-cls">
                <div className="form-title-cls">Tournament Form</div>
                <div style={{width: "100%", float: "left"}}>
                    <TextField label="Name" id="tn-name-txt-id" value={this.state.tournamentName}
                        onChange={event=>this.changeTextField(event, tnName)}
                        required={true} error={this.state.tournamentNameError}/>
                    <TextField label="Venu" id="tn-venu-txt-id" value={this.state.venue}
                        onChange={event=>this.changeTextField(event, tnVenu)} 
                        required={true} error={this.state.venueError}/>
                    <DropDownField label="Type" id="tn-game-txt-id" value={this.state.tnTypeObj}
                        onChange={event=>this.changeDropDownField(event, tnType)} 
                        options={TmsUtils.getTypeOptions()} 
                        required={true} error={this.state.tnTypeObjError}/>
                    <DropDownField label="Category" id="tn-catg-txt-id" value={this.state.tnCategoryObj}
                        onChange={event=>this.changeDropDownField(event, tnCategory)} 
                        options={TmsUtils.getCategoryOptions()} 
                        required={true} error={this.state.tnCategoryObjError} />
                    <TextField label="Game Name" id="tn-game-txt-id" value={this.state.tnGameName}
                        onChange={event=>this.changeTextField(event, tnGame)} 
                        required={true} error={this.state.tnGameNameError} />
                    <DateField label="From" id="tn-from-date-id" value={this.state.tnFromDate}
                        onChange={event=>this.changeDateField(event, tnFromDate)} 
                        required={true} error={this.state.tnFromDateError} />
                    <DateField label="To" id="tn-tod-date-id" value={this.state.tnToDate}
                        onChange={event=>this.changeDateField(event, tntoDate)} 
                        required={true} error={this.state.tnToDateError} />
                    <TextField label="Promoters" id="tn-promoter-txt-id" value={this.state.tnPromoter}
                        onChange={event=>this.changeTextField(event, tnPromoter)} 
                        required={true} error={this.state.tnPromoterError} />
                    <TextField label="Organization" id="tn-org-txt-id" value={this.state.tnOrg}
                        onChange={event=>this.changeTextField(event, tnOrganizer)} 
                        required={true} error={this.state.tnOrgError} />
                    <DateField label="Admision Start" id="tn-adn-from-date-id" value={this.state.tnAdFromDate}
                        onChange={event=>this.changeDateField(event, tnAdFromDate)} 
                        required={true} error={this.state.tnAdFromDateError} />
                    <DateField label="Admision End" id="tn-adn-to-date-id" value={this.state.tnAdToDate}
                        onChange={event=>this.changeDateField(event, tnAdtoDate)} 
                        required={true} error={this.state.tnAdToDateError} />
                    <TextArea label="Description" id="tn-desc-txt-id" value={this.state.tnDesc}
                        onChange={event=>this.changeTextField(event, tnDescription)} 
                        required={true} error={this.state.tnDescError} />
                </div>
                <div style={{width: "48%", float: "left"}}>
                    <Button id="tn-submit-id" label="Save" align="right" type="primary" onClick={this.onSaveAction}/>
                    <Spacer align="right"/>
                    <Button id="tn-cancel-id" label="Cancel" align="right" type="secondary" onClick={this.onCancelAction}/>
                </div>
            </div>
        )
    }
}
export default TournamentCreate;