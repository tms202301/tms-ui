import { Component } from "react";
import HomeIcon from './images/Home-Icon.png';
import TournamentIcon from './images/Tournament-Icon.png';
import PlayersIcon from './images/Players-Icon.png';
import ContactIcon from './images/Contact-Icon.png';
import LogoIcon from './images/logo-black.png';

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
                    <li>
                        <span><img src={LogoIcon} /></span>
                    </li>
                </ul>
                <ul className="primary-menu">
                    <li>
                        <span className="menu-icon-cls"><img src={HomeIcon} /></span>
                        <span>Home</span>
                    </li>
                    <li>
                        <span className="menu-icon-cls"><img src={TournamentIcon} /></span>
                        <span>Tournaments</span>
                    </li>
                    <li>
                        <span className="menu-icon-cls"><img src={PlayersIcon} /></span>
                        <span>Players</span>
                    </li>
                    <li>
                        <span className="menu-icon-cls"><img src={TournamentIcon} /></span>
                        <span>Leagues</span>
                    </li>
                    <li>
                        <span className="menu-icon-cls"><img src={ContactIcon} /></span>
                        <span>Contact</span>
                    </li>
                </ul>
            </div>
        )
    }
       
}
export default LeftMenu;