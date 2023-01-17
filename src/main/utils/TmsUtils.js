const typeOptions = [];
typeOptions.push({value: 1, label: "State"});
typeOptions.push({value: 2, label: "National"});
typeOptions.push({value: 3, label: "International"});
const catOptions = [];
catOptions.push({value: 1, label: "Under 19"});
catOptions.push({value: 2, label: "Under 39"});
catOptions.push({value: 3, label: "Under 45"});
catOptions.push({value: 4, label: "Under 60"});

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