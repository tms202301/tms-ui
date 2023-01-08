import { Component } from "react";
import SearchInput from './generic/TmsSearch';
import Button from './generic/TmsButton';
import Spacer from './generic/TmsSpacer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="cmp-main-cls">
                <div className="home-header-cls">
                    <Button align="right" label="Login"/>
                    <Spacer align="right"/>
                    <SearchInput align="right"/>
                </div>
            </div>
        )
    }
}
export default Home;