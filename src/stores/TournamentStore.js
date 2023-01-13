import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";
let tournaMentList = {};
let actionType = "";
let tournametDetails = {};

class TournamentStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getData() {
        return tournaMentList;
    }
    getActionType() {
        return actionType;
    }
    getTournamentDetails() {
        return tournametDetails;
    }
}
const store = new TournamentStore();
dispatcher.register((action) => {
    switch (action.actionType) {
        case TmsActionTypes.TOURNAMENT_LIST:
            tournaMentList = action.payLoad;
            actionType = action.actionType;
            store.emitChange();
            break;
        case TmsActionTypes.TOURNAMENT_FIND:
            tournametDetails = action.payLoad;
            actionType = action.actionType;
            store.emitChange();
            break;
        default:
    }
});
export default store;