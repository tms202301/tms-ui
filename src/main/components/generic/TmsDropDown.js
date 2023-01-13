import { Component } from "react";
import Dropdown from 'react-dropdown';

class TmsDropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let floatValue = this.props.align !== undefined ? this.props.align : "left";
        let value = this.props.value !== undefined ? this.props.value : "";
        let label = this.props.label !== undefined ? this.props.label : "";
        let width = this.props.width !== undefined ? this.props.width : "250";
        let labelWidth = this.props.labelWidth !== undefined ? this.props.labelWidth : width;
        let placeholder = '-- Select --';
        if(this.props.placeholder !== undefined) {
            placeholder = this.props.placeholder;
        }
        return(
            <div className="cmp-main-cls" style={{float: floatValue}}>
                <div style={{width: labelWidth+"px"}} className="input-label-cls">{label}</div>
                <div className="input-cmp-cls" style={{width: width+"px"}}>
                    <Dropdown id={this.props.id} className="input-drop-down-cls" 
                        options={this.props.options} onChange={this.props.onChange} 
                        value={this.props.value} placeholder={placeholder}
                    />
                </div>
                
            </div>
        )
    }
}
export default TmsDropDown;