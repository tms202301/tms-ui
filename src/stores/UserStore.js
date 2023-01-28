
import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";
let page = "";
let actionType = "";

class UserStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getData() {
        return page;
    }
    getActionType() {
        return actionType;
    }
}
const store = new UserStore();
dispatcher.register((action) => {
    switch (action.actionType) {
        case TmsActionTypes.ADD_USER:
            page = action.payLoad;
            actionType = action.actionType;
            store.emitChange();
            break;
        default:
            break;
    }
});
export default store;