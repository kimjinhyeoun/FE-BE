//오브젝트

let family = {
    'address' : 'Seoul',
    members : {},
    addFamily : function(age, name, role){
        this.members[role] = {
        age : age,
        name : name
        };
    },
getHeadcount:function(){
    return Object.keys(this.members).length;
    }
};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');

let printMembers = function(){
    let members = family.members;
    for(role in members){
        console.log('role => ' + role + ', name => ' + members[role].name 
        + ', age => ' + members[role].age);
    }
};
printMembers();
console.log('--------------------------------------------')
let members = family.members;
members['nephew'] = {age: 3, name: 'hyun'}; //삽입
members.niece = {age : 5, name : 'lyn'}; //수정
delete members.aunt; //삭제
delete members['dog']; //삭제
printMembers();
