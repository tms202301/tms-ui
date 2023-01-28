import { Component } from "react";
import TournamentStore from '../../stores/TournamentStore';
import * as TmsUtils from '../utils/TmsUtils';
import * as ServiceCall from '../controller/ServiceCall';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TenantsGrid from "./TenantsGrid";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tournamentList : undefined
        }
        this.fetchData = this.fetchData.bind(this);
        this.onTabeClick = this.onTabeClick.bind(this);
    }
    componentDidMount() {
        TournamentStore.on("change", this.fetchData);
        let request = {};
        TmsUtils.showMask();
        ServiceCall.findUpcomingTournametList(request);
    } 
    componentWillUnmount() {
        TournamentStore.removeListener("change", this.fetchData);
    }

    fetchData() {
        let resData = TournamentStore.getUpcomingTournaments();
        TmsUtils.hideMask();
        this.setState({tournamentList: resData});
    }
    onTabeClick(selectedIndex) {
        let request = {};
        if(selectedIndex === 0) {
            ServiceCall.findOlderTournametList(request);
        } else {
            ServiceCall.findUpcomingTournametList(request);
        }
        TmsUtils.showMask();
    }
    render() {
        let data = this.state.tournamentList;
        return(
            <div className="tn-main-cls">
                <div className="title-header-cls">Tournaments</div>
                <Tabs defaultIndex={1} onSelect={(index) => this.onTabeClick(index)}>
                    <TabList>
                        <Tab>Older</Tab>
                        <Tab>Upcoming</Tab>
                    </TabList>
                    <TabPanel>
                        <TenantsGrid data={data} />
                    </TabPanel>
                    <TabPanel>
                        <TenantsGrid data={data} joinAction={true}/>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default Home;