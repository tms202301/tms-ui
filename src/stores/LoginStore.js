import { EventEmitter } from "events";
import dispatcher from '../Dispatcher';
import TmsActionTypes from "../actions/TmsActionTypes";
const CHANGE_EVENT = "change";
let loginResponse = {};

class LoginStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
    emitChange() {
        this.emit(CHANGE_EVENT);
    }
    getData() {
        return loginResponse;
    }
}
const store = new LoginStore();
dispatcher.register((action) => {
    switch (action.actionType) {
        case TmsActionTypes.LOGIN_ACTION:
            loginResponse = action.payLoad;
            store.emitChange();
            break;
        default:
    }
});
export default store;