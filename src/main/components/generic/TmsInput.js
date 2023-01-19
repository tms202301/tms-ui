import { Component } from "react";
import * as TmsUtils from '../../utils/TmsUtils';

class TmsInput extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        let mandatory = this.props.required !== undefined ? this.props.required : false;
        TmsUtils.validateEmpty(event, event.target.value, mandatory);
        this.props.onChange(event);
    }
    render() {
        let floatValue = this.props.align !== undefined ? this.props.align : "left";
        let value = this.props.value !== undefined ? this.props.value : "";
        let label = this.props.label !== undefined ? this.props.label : "";
        let width = this.props.width !== undefined ? this.props.width : "250";
        let labelWidth = this.props.labelWidth !== undefined ? this.props.labelWidth : width;
        let mandatory = this.props.required !== undefined ? this.props.required : false;
        let error = this.props.error !== undefined ? this.props.error : "";
        return(
            <div className="cmp-main-cls" style={{float: floatValue}}>
                <div style={{width: labelWidth+"px"}} className="input-label-cls">{label}
                    {mandatory === true &&(<span className="label-mandate">*</span>)}
                </div>
                <div className="input-cmp-cls" style={{width: width+"px"}}>
                    <input style={{width: width+"px"}} id={this.props.id} className="input-tms" type="text" 
                        value={value} onChange={this.onChange} 
                    />
                    <div className="form-error-cls" style={{width: "100%"}}>
                        {error}
                    </div>
                </div>
            </div>
        )
    }
}
export default TmsInput;