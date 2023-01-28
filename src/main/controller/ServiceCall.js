
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
    let data = undefined;
    await fetch(endpoint, requestOptions).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       data = returnedResponse.json();
    }).catch((error) => {
        Dispatch.dispatch(TmsActionTypes.ERROR_500, "error500");
    });
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
    let data = undefined;
    await fetch(endpoint, requestOptions).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       data = returnedResponse.json();
    }).catch((error) => {
        Dispatch.dispatch(TmsActionTypes.ERROR_500, "error500");
    });
    return data;
}

async function postMultipartAction(endpoint, formData) {
    let headersObj = {
        'Access-Control-Allow-Origin': '*'
    }
     const requestOptions = {
        method: 'POST',
        headers: headersObj,
        mode: 'cors',
        body: formData
    };
    let data = undefined;
    await fetch(endpoint, requestOptions).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       data = returnedResponse.json();
    }).catch((error) => {
        Dispatch.dispatch(TmsActionTypes.ERROR_500, "error500");
    });
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
    let data = undefined;
    await fetch(endpoint, requestOptions).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       data = returnedResponse.json();
    }).catch((error) => {
        Dispatch.dispatch(TmsActionTypes.ERROR_500, "error500");
    });
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

export async function findUpcomingTournametList(req) {
    let endpoint = EndPoints.TOURNAMENT_LIST_UPCOMING;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_LIST_UPCOMING, response);
}

export async function findOlderTournametList(req) {
    let endpoint = EndPoints.TOURNAMENT_LIST_OLDER;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_LIST_OLDER, response);
}
export async function addPlayer(req) {
    let endpoint = EndPoints.PLAYER_ADD;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.TOURNAMENT_ADD, response);
}

export async function addUser(req) {
    let endpoint = EndPoints.ADD_USER;
    let request = req;
    let response = await postAction(endpoint, request);
    Dispatch.dispatch(TmsActionTypes.ADD_USER, response);
}
