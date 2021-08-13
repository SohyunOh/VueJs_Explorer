const { component } = require("vue/types/umd")

var app = new Vue({
    el: '#app',
    data: {
        msg: '"msg_data"'
    }
})

// computed 예제

var vm = new Vue({
    el: '#example',
    data: {
        message: '안녕하세요'
    },
    computed
        //methods 
        : {
        reverseMessage: function () {
            return this.message.split('').reverse().join('') + ':' + Date.now()
        }
    }
})

console.log(vm.reverseMessage)
vm.message = 'Goodbye'
console.log(vm.reverseMessage)


// computed 속성 대신 methods 함수로 정의 가능
// computed 속성은 종속 대상을 따라 저장(캐싱)된다는 것
// message가 변경되지 않는 한, computed 속성인 reversedMessage를 여러 번 요청해도 계산을 다시 하지 않고 계산되어 있던 결과를 즉시 반환합니다.

var vm = new Vue({
    el: '#demo',
    data: {
        firstName: 'Foo',
        last: 'Bar',
        fullName: 'foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + '' + this.lastName
        },
        lastName: function (val) {
            this.fullName = this.firstName + '' + val
        }
    }
})

var vm = new Vue({
    el: '#demo2',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})

console.log(vm.fullName)

var vm = new Vue({
    el: '#demo3',
    data: {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            // getter
            get: function () {
                return this.firstName + '' + this.lastName
            },
            // setter
            set: function (newValue) {
                var names = newValue.split('')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
})


console.log(vm.fullName)
vm.fullName = 'John Doe'
console.log(vm.fullName)