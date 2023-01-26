import { Component } from "react";
import HomeIcon from './images/Home-Icon.png';
import TournamentIcon from './images/Tournament-Icon.png';
import PlayersIcon from './images/Players-Icon.png';
import ContactIcon from './images/Contact-Icon.png';
import LogoIcon from './images/logo-black.png';
import {  Link, withRouter } from "react-router-dom";
import * as UiPaths from './controller/UiPaths';

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
                            <span><img alt="" src={LogoIcon} /></span>
                        </li>
                    </ul>
                    <ul className="primary-menu">
                        <li>
                            <span className="menu-icon-cls"><img alt="" src={HomeIcon} /></span>
                            <span><Link to="/">Home</Link></span>
                        </li>
                        <li>
                            <span className="menu-icon-cls"><img alt="" src={TournamentIcon} /></span>
                            <span><Link to={UiPaths.TOURNAMENT_PATH}>Tournament</Link></span>
                        </li>
                        <li>
                            <span className="menu-icon-cls"><img alt="" src={PlayersIcon} /></span>
                            <span><Link to={UiPaths.PLAYERS_PATH}>Players</Link></span>
                        </li>
                        <li>
                            <span className="menu-icon-cls"><img alt="" src={TournamentIcon} /></span>
                            <span>Leagues</span>
                        </li>
                        <li>
                            <span className="menu-icon-cls"><img alt="" src={ContactIcon} /></span>
                            <span>Contact</span>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
       
}
export default withRouter(LeftMenu);