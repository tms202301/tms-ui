import { Component } from "react";

class TmsRadioButton extends Component {
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
        let mandatory = this.props.required !== undefined ? this.props.required : false;
        let error = this.props.error !== undefined ? this.props.error : "";
        return(
            <span className="cmp-main-cls" style={{float: floatValue}}>
                 <input style={{width: width+"px"}} id={this.props.id} className="input-tms" type="radio" 
                        value={value} onChange={this.props.onChange} 
                    /><label >{this.props.label}</label>
                    <div className="form-error-cls" style={{width: "100%"}}>
                        {error}
                    </div>
            </span>
        )
    }
}
export default TmsRadioButton;