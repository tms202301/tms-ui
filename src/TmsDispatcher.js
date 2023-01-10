import dispatcher from "./Dispatcher";

export function dispatch(actionType, payLoad) {
    dispatcher.dispatch({
        actionType: actionType,
        payLoad: payLoad,
    });
}