let employeeSalaries = [20005, 40000, 32000, 14500, 344000];
function addSalaries(salary,addOn){
    return salary+addOn;
};

function processArray(callbackOperation,arr,number){
    let result=[];
    for (i=0;i<arr.length;i++){
        result.push(callbackOperation(arr[i],number));
    }
    return result;
}

let newSalaries = processArray(addSalaries,employeeSalaries,5000);
console.log(newSalaries);

