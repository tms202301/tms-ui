import { Component } from "react";
import HomeIcon from './images/Home-Icon.png';
import TournamentIcon from './images/Tournament-Icon.png';
import PlayersIcon from './images/Players-Icon.png';
import ContactIcon from './images/Contact-Icon.png';
import LogoIcon from './images/logo-black.png';
import { Outlet, Link } from "react-router-dom";

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <nav className="menucls">
                    <ul className="logoCls">
                        <li>
                            <span><img src={LogoIcon} /></span>
                        </li>
                    </ul>
                    <ul className="primary-menu">
                        <li>
                            <span className="menu-icon-cls"><img src={HomeIcon} /></span>
                            <span><Link to="/">Home</Link></span>
                        </li>
                        <li>
                            <span className="menu-icon-cls"><img src={TournamentIcon} /></span>
                            <span><Link to="/tournament">Tournament</Link></span>
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
                </nav>
                <Outlet />
            </div>
        )
    }
       
}
export default LeftMenu;