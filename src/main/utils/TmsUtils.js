import * as ServiceCall from '../controller/ServiceCall';
import TmsActionTypes from '../../actions/TmsActionTypes';
const typeOptions = [];
typeOptions.push({value: 1, label: "State"});
typeOptions.push({value: 2, label: "National"});
typeOptions.push({value: 3, label: "International"});
const catOptions = [];
catOptions.push({value: 1, label: "Under 19"});
catOptions.push({value: 2, label: "Under 39"});
catOptions.push({value: 3, label: "Under 45"});
catOptions.push({value: 4, label: "Under 60"});
const statesDetails=[];
export function getTypeOptions() {
    return typeOptions;
}

export function getCategoryOptions() {
    return catOptions;
}

export function getTypeObject(value) {
    let returnObj = {};
    typeOptions.map((obj, index) => {
        if(Number(value) === Number(obj.value)) {
            returnObj = obj;
        }
        return "";
    });  
    return returnObj;
}

export function getCategoryObject(value) {
    let returnObj = {};
    catOptions.map((obj, index) => {
        if(Number(value) === Number(obj.value)) {
            returnObj = obj;
        }
        return "";
    });  
    return returnObj;
}

export function validateEmpty(event, value, mandatory) {
    let heighlightColor = "#1b1b1b";
    if(mandatory === true && value === undefined || value === "" ) {
        heighlightColor = "red";
    }
    event.currentTarget.style.border = '1px solid '+heighlightColor;
}

export function showMask() {
    document.getElementById("load-mask-id").style.display = "block";
}

export function hideMask() {
    document.getElementById("load-mask-id").style.display = "none";
}
export function getStates(){
    let returnObj = ServiceCall.getStates();
}