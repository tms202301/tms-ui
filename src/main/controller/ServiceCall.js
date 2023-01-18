
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

async function getAction(endpoint) {
    let headersObj = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    const requestOptions = {
        method: 'GET',
        headers: headersObj,
        mode: 'cors'
    };
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    return data;
}

async function postMultipartAction(endpoint, formData) {
    let headersObj = {
        'Access-Control-Allow-Origin': '*'
    }
    console.log(formData);
    const requestOptions = {
        method: 'POST',
        headers: headersObj,
        mode: 'cors',
        body: formData
    };
    const response = await fetch(endpoint, requestOptions);
    const data = await response.json();
    return data;
}

async function deleteAction(endpoint) {
    let headersObj = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
    const requestOptions = {
        method: 'DELETE',
        headers: headersObj,
        mode: 'cors'
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

export async function findTournament(recordId) {
    let endpoint = EndPoints.TOURNAMENT_FIND;
    endpoint += '?recordId='+recordId;
    let response = await getAction(endpoint);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_FIND, response);
}

export async function uploadTournamentLogo(file, recordId) {
    let endpoint = EndPoints.TOURNAMENT_UPLOAD_LOG;
    endpoint += '?recordId='+recordId;
    let response = await postMultipartAction(endpoint, file);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_LIST, response);
}

export async function addTournamet(req) {
    let endpoint = EndPoints.TOURNAMENT_ADD;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_ADD, response);
}

export async function deleteTournamet(recordId) {
    let endpoint = EndPoints.TOURNAMENT_DELETE;
    endpoint += '?recordId='+recordId;
    let response = await deleteAction(endpoint);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_LIST, response);
}
