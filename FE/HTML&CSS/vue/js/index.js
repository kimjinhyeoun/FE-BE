
//ex1
new Vue({
    el: "#ex1",
    data : {
        t_message :'안녕하세여'
    }
})

//ex2
new Vue({
    el: ".ex2",
    data : {
        t_message :'방가'
    }
})


//ex3
new Vue({
    el : '#ex3',
    data : {
        message : '방가방가',
        name : 'vue',
        age : 20,
    }
})

//ex4
new Vue({
    el : '#ex4',
    data : {
        message : '방가방가',
        person : {
            name: 'vue',
            age : 20
        }
    }
})

//ex5
new Vue({
    el : '#ex5',
    data : {
        message : '<strong>Hello</strong>',

    }
})

//ex6
new Vue({
    el : '#ex6',
    data : {
        price : 1000,
        name : 'ABC'

    }
})


//ex7
new Vue({
    el : '#ex7',
    data : {
        web:['HTML',"CSS","JAVASCRIPT","VUE"],
        object:{name:'tree', price1:500, price2:1000},
    }
})

//ex8
new Vue({
    el : '#ex8',
    data : {
        // txt : 'Vue입니다. 오늘 날짜 :' + new Date()
        txt : 'Vue입니다. 오늘 날짜 :' + new Date().toLocaleString()
    }
})

//ex9
new Vue({
    el : '#ex9',
    data : {
        link : 'http://www.naver.com',
        target: '_blank',
        title:' 네이버로 연결합니다 '
    }
})

//ex10
new Vue({
    el : '#ex10',
    data : {
        v_data : 'Hello world!',
    }
})

//ex11
new Vue({
    el : '#ex11',
    data : {
        data : '졸려요!',
        type1 : 'password',
        type2 : 'button',
    }
})

//ex12
new Vue({
    el : '#ex12',
    data : {
        msg : '안녕하세요',
    }
})

//ex13
new Vue({
    el : '#ex13',
    data : {
        year : 2022,
    },
    methods : {      //function      
        plus(){ 
            this.year += 2
        },
        minus(){
            this.year -= 2
        },
    }
})

//ex14
new Vue({
    el : '#ex14',
    data : {
        text : '',
    },
    methods :{
        oneclick(){
            this.text = 'click'
        },
    }
})


//ex15
new Vue({
    el : '#ex15',
    data : {
        count : 0,
    },
    methods:{
        plus(num){
            this.count += 1
        }
    }
})

//ex16
new Vue({
    el : '#ex16',
    data : {
    },
    methods : {
        alert(){
            alert('이벤트를 실행합니다.')
        }
    }
})

//ex17
new Vue({
    el : '#ex17',
    data : {
        txt : true
    },
    methods : {
        toggle(){
            this.txt = !this.txt
        }
    }
})

//ex18
new Vue({
    el : '#ex18',
    data : {
        code1 : [
            { txt : 'html' },
            { txt : 'css' },
            { txt : 'javascript' },
            { txt : 'jquery' }
        ]
    }
})




//ex19
new Vue({
    el : '#ex19',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.toLowerCase() //소문자
        }
    }
})

//ex20
new Vue({
    el : '#ex20',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.indexOf("S") // s가 index 몇번에 있는지 찾아줌  = 4
        }
    }
})

//ex21
new Vue({
    el : '#ex21',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.indexOf("a") // a가 index 몇번에 있는지 찾아줌 근데 없음 그래서 -1로 나옴
        }
    }
})

//ex22
new Vue({
    el : '#ex22',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.charAt(4) // index 번호 4번에 있는걸 찾는거 = S
        }
    }
})

//ex23
new Vue({
    el : '#ex23',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.substring(2,4) // index 번호 2번부터 3번까지 있는 걸 찾아줌 = VA
        }
    }
})

//ex24
new Vue({
    el : '#ex24',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.length //개수 찾아줌 = 10
        }
    }
})

//ex25
new Vue({
    el : '#ex25',
    data : {
        msg : 'JAVASCRIPT'
    },
    computed : {
        r_msg(){
            return this.msg.replace("PT","aaaa") // PT를 aaaa로 바꿔라 = JAVASCRIaaaa
        }
    }
})