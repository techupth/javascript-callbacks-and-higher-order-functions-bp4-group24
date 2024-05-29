let studentScoresRoom1 = [12, 40, 67, 80, 100, 15, 40, 78, 75, 80];
let studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
let studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkScore(score,criteria){
    let count=0;
    if (score>=criteria){
        count = 1;
    }
    return count;
};

function processArray(callbackOperation,arr,number,roomNumber){
    let result=[];
    let sum=0;
    for (i=0;i<arr.length;i++){
        result.push(callbackOperation(arr[i],number));
    }
    for(let i=0;i<result.length;i++){
        sum=sum+result[i];
    }

    if(sum >=5){
        return `นักเรียนห้องที่ ${roomNumber} ผ่านเกณฑ์`;
    } else {
        return `นักเรียนห้องที่ ${roomNumber} ไม่ผ่านเกณฑ์`; 
    }
};

console.log(processArray(checkScore,studentScoresRoom1,70,1))
console.log(processArray(checkScore,studentScoresRoom2,70,2))
console.log(processArray(checkScore,studentScoresRoom3,70,3))