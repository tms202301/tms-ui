import { Component } from "react";

class TmsSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let floatValue = this.props.align != undefined ? this.props.align : "left";
        let placeHolder = this.props.placeHolder != undefined ? this.props.placeHolder : "Search..";
        return(
            <div style={{float: floatValue}}>
                <input className="search-tms" type="text" placeHolder={placeHolder} />
            </div>
        )
    }
}
export default TmsSearch;