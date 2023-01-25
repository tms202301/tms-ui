import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";
let tournaMentList = {};
let actionType = "";
let tournametDetails = {};
let upcomingtournaments = {};
let tnSaved = false;

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
    isTnSaved() {
        return tnSaved;
    }
    getUpcomingTournaments() {
        return upcomingtournaments;
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
        case TmsActionTypes.TOURNAMENT_ADD:
            tournametDetails = action.payLoad;
            actionType = action.actionType;
            tnSaved = true;
            store.emitChange();
            break;
        case TmsActionTypes.TOURNAMENT_LIST_UPCOMING:
            upcomingtournaments = action.payLoad;
            actionType = action.actionType;
            tnSaved = true;
            store.emitChange();
            break;
        case TmsActionTypes.TOURNAMENT_LIST_OLDER:
            upcomingtournaments = action.payLoad;
            actionType = action.actionType;
            tnSaved = true;
            store.emitChange();
            break;
        default:
    }
});
export default store;