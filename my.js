let getRE = function(a,b,callback){
    console.log("GetRE called.");
    callback(a,b);
}

let getAdd = function(a,b){
    console.log('GetAdd called = '+(a+b));
    return a+b;
}
let getMulti = function(a,b){
    console.log("GetMulti called = "+a*b);
    return a*b;
}

getRE(3,5,getMulti);