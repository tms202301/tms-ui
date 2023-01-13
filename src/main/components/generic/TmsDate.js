import { Component } from "react";
import DatePicker from "react-datepicker";

class TmsDate extends Component {
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
        return(
            <div className="cmp-main-cls" style={{float: floatValue}}>
                <div style={{width: labelWidth+"px"}} className="input-label-cls">{label}</div>
                <div className="input-cmp-cls" style={{width: width+"px"}}>
                    <DatePicker id={this.props.id} className="input-date-cls" 
                        selected={value} onChange={(date) => this.props.onChange(date)} 
                    />
                </div>
                
            </div>
        )
    }
}
export default TmsDate;