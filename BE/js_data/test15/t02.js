//ES6에서 추가된 let
if(true){
    var functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
console.log(functionScopeValue); //global
console.log(blockScopeValue);  //local
