
import * as EndPoints from './EndPoints';
import * as Dispatch from '../../TmsDispatcher';
import TmsActionTypes from '../../actions/TmsActionTypes';

async function postAction(endpoint, request) {
    // POST request using fetch with async/await
    let headersObj = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    //headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    const requestOptions = {
        method: 'POST',
        headers: headersObj,
        mode: 'cors',
        body: JSON.stringify(request)
    };
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    return data;
}

export async function loginRequest(req) {
    let endpoint = EndPoints.TMS_LOGIN;
    let request = { userName: 'sreeni', userSec: "passwordf" };
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.LOGIN_ACTION, response);
}

export async function findTournametList(req) {
    let endpoint = EndPoints.TOURNAMENT_LIST;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_LIST, response);
}