import { Component } from "react";

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="menucls">
                <ul className="logoCls">
                    <li>TMS</li>
                </ul>
                <ul className="primary-menu">
                    <li>Home</li>
                    <li>Tournaments</li>
                    <li>Players</li>
                    <li>Leagues</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
       
}
export default LeftMenu;