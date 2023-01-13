import { Component } from "react";

class TmsUpload extends Component {
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
        let options = { multi: false};
        if(this.props.multi !== undefined && this.props.multi === true) {
            options = { multi: true};
        }
        let fileLabel = "Upload";
        if(this.props.fileLabel !== undefined) {
            fileLabel = this.props.label;
        }
        return(
            <div className="cmp-main-cls" style={{float: floatValue}}>
                <div style={{width: labelWidth+"px"}} className="input-label-cls">{label}</div>
                <div className="file-cmp-cls">
                    <input type="file" id={this.props.id} name={this.props.id} onChange={this.props.onChange} />
                </div>
            </div>
        )
    }
}
export default TmsUpload;