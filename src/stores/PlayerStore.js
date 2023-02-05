import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";

let actionType = "";
let statesDetails = {};
let distictDetails = {};
class PlayerStore extends EventEmitter {
    getStatesDetails() {
        return statesDetails;
    }
    getDistictDetails() {
        return distictDetails;
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getActionType() {
        return actionType;
    }
}
const store = new PlayerStore();
dispatcher.register((action) => {
    switch (action.actionType) {
        case TmsActionTypes.STATES_LIST:
            statesDetails = action.payLoad;
            actionType = action.actionType;
            store.emitChange();
            break;
        case TmsActionTypes.DISTICTS_LIST:
                distictDetails = action.payLoad;
                actionType = action.actionType;
                store.emitChange();
                break;
            
        default:
    }
});
export default store;