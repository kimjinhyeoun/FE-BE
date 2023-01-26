let family = {
    'address' : 'Seoul',
    member : {},
    addFamily : function(age, name, role){
        this.member[role] = {
        age : age,
        name : name
        };
    },
getHeadcount:function(){
    return Object.keys(this.member).length;
    }
};

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'lyn', 'niece');
family.addFamily(10, 'dangdangi', 'dog');
console.log(family.getHeadcount());