import { Component } from "react";
import * as TmsUtils from '../utils/TmsUtils';

class TenantsGrid extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        let data = this.props.data;
        return(
            <div style={{padding: "5px"}}>
                {data !== undefined && data.map((v, i) =>{
                       return <div id={'tm-div-'+i} className="tm-div-cls"> 
                                <div id={'tm-div-header-'+i}>
                                    <table style={{width: "100%"}}>
                                        <tbody>
                                            <tr>
                                                {v.logoData !== null &&(
                                                    <td style={{width: "5%"}}>
                                                        <span id={'tn-span-logo-'+i} className="tn-logo-cls"><img alt="" id={'tn-img-logo-'+i} src={"data:image/png;base64,"+v.logoData} /></span> 
                                                    </td>
                                                )}
                                                <td style={{width: "90%"}}>
                                                    <span className="tn-label-cls" id={'tn-name-'+i}><a href="#">{v.name}</a></span>
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
export default TenantsGrid;