var callOneService = function(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isNaN(num)){
                reject(num);
            }
            else{
                resolve(num);
            }
        },0);
    });
};
var callTwoService = function(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isNaN(num)){
                reject(num);
            }
            else{
                resolve(num);
            }
        },0);
    });
};

var promisesArray = [];
var x,y;
var finalFunction = function (x,y) {
    debugger;
    promisesArray.push(callOneService(x));
    promisesArray.push(callTwoService(y));
    var handleAllPromises = Promise.all(promisesArray);
    handleAllPromises.then(function(values) {
        var one = values[0];
        var two = values[1];
        var answer = one + two;
        if(answer !== 3){
            console.log("wrong answer",answer);
        }else{
            console.log("correct");
        }
    });
    handleAllPromises.catch(function(err) {
        console.log("error ",err);
    });
    return(console.log);
};

finalFunction(1,2);

