import { Component } from "react";
import TournamentStore from '../../stores/TournamentStore';
import * as ServiceCall from '../controller/ServiceCall';
import TmsButton from './generic/TmsButton';
import FileComp from './generic/TmsUpload';
import Spacer from './generic/TmsSpacer';
import UploadLogo from '../../main/images/Upload_Logo.png';
import TrashIcon from '../../main/images/Trash.png';
import * as UiPaths from '../controller/UiPaths';
import * as TmsUtils from '../utils/TmsUtils';

class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
           tournamentList: undefined,
           showLogoUpload: false,
           editedRecord: 0,
           selectedLogo: undefined
        }
        this.fetchData = this.fetchData.bind(this);
        this.onClickCreateBtn = this.onClickCreateBtn.bind(this);
        this.showLogoPop = this.showLogoPop.bind(this);
        this.onLogoSelect = this.onLogoSelect.bind(this);
        this.onLogoSave = this.onLogoSave.bind(this);
        this.deleteTnAction = this.deleteTnAction.bind(this);
    }
    componentDidMount() {
        TournamentStore.on("change", this.fetchData);
        let request = {};
        ServiceCall.findTournametList(request);
    } 
    componentWillUnmount() {
        TournamentStore.removeListener("change", this.fetchData);
    }

    fetchData() {
        let resData = TournamentStore.getData();
        this.setState({tournamentList: resData});
    }
    onClickCreateBtn() {
        sessionStorage.setItem('tnRecordId', '0');
        this.props.history.push(UiPaths.TOURNAMENT_CREATE_PATH);
    }
    showLogoPop(event, recordId) {
        this.setState({showLoginPop: !this.state.showLoginPop, editedRecord: recordId});
    }
    onLogoSelect(event) {
        this.setState({selectedLogo: event.target.files[0]});
    }
    onLogoSave() {
        this.setState({showLoginPop: !this.state.showLoginPop});
        const formData = new FormData();
        formData.append('file', this.state.selectedLogo);
        console.log(this.state.selectedLogo);
        ServiceCall.uploadTournamentLogo(formData, this.state.editedRecord);
    }
    deleteTnAction(event, recordId) {
        ServiceCall.deleteTournamet(recordId);
    }
    render() {
        let data = this.state.tournamentList;
        let displayValue = this.state.showLoginPop ? "block" : "none";
        return(
            <div className="tn-main-cls">
                    <div className="title-header-cls">List of Tournaments
                        <TmsButton label="Create" align="right" onClick={this.onClickCreateBtn} />
                    </div>
                    {data !== undefined && data.map((v, i) =>{
                       return <div id={'tm-div-'+i} className="tm-div-cls"> 
                                <div id={'tm-div-header-'+i}>
                                    <table style={{width: "100%"}}>
                                        <tbody>
                                            <tr>
                                                {v.logoData === null &&(
                                                    <td style={{width: "5%"}}>
                                                        <span id={'tn-span-logo-'+i} className="tn-logo-cls"><img id={'tn-img-logo-'+i} 
                                                            style={{border: "1px solid #ccc", padding: "1px", cursor: "pointer", borderRadius: "6px"}}
                                                            onClick={event=>this.showLogoPop(event, v.recordId)} src={UploadLogo} />
                                                        </span>
                                                    </td>
                                                )}
                                                {v.logoData !== null &&(
                                                    <td style={{width: "5%"}}>
                                                        <span id={'tn-span-logo-'+i} className="tn-logo-cls"><img id={'tn-img-logo-'+i} src={"data:image/png;base64,"+v.logoData} /></span> 
                                                    </td>
                                                )}
                                                <td style={{width: "90%"}}>
                                                    <span className="tn-label-cls" id={'tn-name-'+i}><a href="">{v.name}</a></span>
                                                </td>
                                                <td style={{width: "5%"}}>
                                                    <img src={TrashIcon} style={{height: "25px", cursor: "pointer"}} 
                                                        onClick={event=>this.deleteTnAction(event, v.recordId)}
                                                    />
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div id={'tm-div-content-gen-'+i}>
                                    <span className="tn-label-cls" id={'tn-period-label'+i}>Period: </span>
                                    <span className="value-span-cls">{(new Date(v.fromDate)).toDateString()+' - '}</span>
                                    <span className="value-span-cls">{(new Date(v.toDate)).toDateString()}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Venu: </span>
                                    <span className="value-span-cls">{v.venue}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Game: </span>
                                    <span className="value-span-cls">{v.gameName}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Type: </span>
                                    <span className="value-span-cls">{TmsUtils.getTypeObject(v.type).label}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Category: </span>
                                    <span className="value-span-cls">{TmsUtils.getCategoryObject(v.category).label}</span>
                                </div>
                                <div id={'tm-div-content-pro-'+i}>
                                    <span className="tn-label-cls">Promotors: </span>
                                    <span className="value-span-cls">{v.venue}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Organizer: </span>
                                    <span className="value-span-cls">{v.organizer}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls" id={'tn-period-label'+i}>Admision: </span>
                                    <span className="value-span-cls">{(new Date(v.admisionStart)).toDateString()+' - '}</span>
                                    <span className="value-span-cls">{(new Date(v.admisionEnd)).toDateString()}</span>
                                </div>
                                <div id={'tm-div-content-pro-'+i}>
                                    <span className="tn-label-cls">Description: </span>
                                    <span className="value-span-cls">{v.description}</span>
                                </div>
                            </div>
                    })
                    }
                    <div className="login-popup_content" style={{display: displayValue, width: "377px"}}>
                        <FileComp id="logo-file-upload-id" onChange={this.onLogoSelect}/>
                        <TmsButton id="logo-submit-id" label="Save" align="right" type="primary" onClick={this.onLogoSave}/>
                        <Spacer align="right"/>
                        <TmsButton id="logo-close-id" label="Cancel" align="right" type="secondary" onClick={event=>this.setState({showLoginPop: !this.state.showLoginPop})}/>
                    </div>
            </div>
        )
    }
}
export default Tournament;