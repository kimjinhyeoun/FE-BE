//배열하면 또 생각나는게 그냥 넘어가면 안될거같은데
//배열 - 정렬

const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    {id : 2, name : 'Leo'},
    {id : 0, name : 'Daniel'},
    {id : 3, name : 'Asher'},
    {id : 4, name : 'Chloe'},
    {id : 1, name : 'Chloe'}
];
// sort 정렬
numArr1.sort(function(a, b){return a - b;});
numArr2.sort(function(a, b){return b - a;});
objArr.sort(function(a, b){
    if(a.name > b.name) return 1;
    else if(b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순으로 정렬 : ${numArr1}`);
console.log(`내림차순으로 정렬 : ${numArr2}`);
console.log(objArr);