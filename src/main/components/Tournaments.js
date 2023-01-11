import { Component } from "react";
import TournamentStore from '../../stores/TournamentStore';
import * as ServiceCall from '../controller/ServiceCall';
import TmsButton from './generic/TmsButton';
import * as UiPaths from '../controller/UiPaths';

class Tournament extends Component {
    constructor(props) {
        super(props);
        this.state = {
           tournamentList: undefined
        }
        this.fetchData = this.fetchData.bind(this);
        this.onClickCreateBtn = this.onClickCreateBtn.bind(this);
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
        window.location.href = UiPaths.TOURNAMENT_CREATE_PATH;
    }

    render() {
        let data = this.state.tournamentList;
        return(
            <div className="tn-main-cls">
                    <div className="title-header-cls">List of Tournaments
                        <TmsButton label="Create" align="right" onClick={this.onClickCreateBtn} />
                    </div>
                    {data !== undefined && data.map((v, i) =>{
                       return <div id={'tm-div-'+i} className="tm-div-cls"> 
                                <div id={'tm-div-header-'+i}>
                                    <span id={'tn-span-logo-'+i} className="tn-logo-cls"><img id={'tn-img-logo-'+i} src="/123.png" /></span> 
                                    <span className="tn-label-cls" id={'tn-name-'+i}><a href="">{v.name}</a></span>
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
                                    <span className="value-span-cls">{v.type}</span>
                                    <span className="span-speraton-cls"></span>
                                    <span className="tn-label-cls">Category: </span>
                                    <span className="value-span-cls">{v.category}</span>
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
            </div>
        )
    }
}
export default Tournament;