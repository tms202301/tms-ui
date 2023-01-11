import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";
let responseData = {};

class TournamentStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getData() {
        return responseData;
    }
}
const store = new TournamentStore();
dispatcher.register((action) => {
    switch (action.actionType) {
        case TmsActionTypes.TOURNAMENT_LIST:
            responseData = action.payLoad;
            store.emitChange();
            break;
        default:
    }
});
export default store;