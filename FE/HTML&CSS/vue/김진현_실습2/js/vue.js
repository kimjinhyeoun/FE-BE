//num1
new Vue({
    el : '.num1',
    data : {
        count : 100,
    },
    methods : {         
        plus(){ 
            this.count += 2
        },
        minus(){
            this.count -= 2
        },
    }
})

//num2
new Vue({
    el : '#num2',
    data : {
        text : '겨울',
    },
    methods : {
        mousedown(){
            this.text = '겨울(winter)'
        },
        mouseup(){
            this.text = '겨울'
        }
    }
})

//num3
new Vue({
    el : '#num3',
    data : {
        txt : '손꽁꽁!발꽁꽁!'
    }
})

//num4
new Vue({
    el : '.num4',
    data : {
        link : 'http://www.nate.com',
        target: '_blank',
        title:' 네이트이동 '
    }
})

//num5
new Vue({
    el : '#num5',
    data : {
        msg : 'vue.js'
    },
    computed : {
        r_msg(){
            return this.msg.toUpperCase()
        }
    }
})

//num6
new Vue({
    el : '.num6',
    data : {
        msg : 'Font end'
    },
    computed : {
        r_msg(){
            return this.msg.substring(3,4)
        }
    }
})

//num7
new Vue({
    el : '.num7',
    data : {
        msg : '프론트엔드 첫걸음'
    },
    computed : {
        r_msg(){
            return this.msg.length 
        }
    }
})