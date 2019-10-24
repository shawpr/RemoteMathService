exports.CallTwoService = CallTwoService;
function CallTwoService(num) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(isNaN(num)){
                reject(num);
            }
            else{
                resolve(num);
            }
        },1000);
    });
};