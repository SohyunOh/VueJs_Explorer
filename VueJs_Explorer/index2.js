
//Vue 인스턴스 만들기 , vm(ViewModel의 약자)
//Vue 인스턴스를 생성할 때는 options 객체를 전달해야 합니다. 

// var vm = new Vue({
//     //옵션
// })

//전체 옵션 목록은 API reference 에서 확인 가능 
//https://kr.vuejs.org/v2/api/#propsData


// 데이터 객체
var data = { a:1 }

// Vue 인스터스에 데이터 객체를 추가합니다.
var vm = new Vue({
    // data : data
    
data : {
    newTodoText:'',
    visiCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}

})

//인스턴스에 있는 속성은 
// 원본 데이터에 있는 값을 반환합니다
vm.a === data.a // => true


//인스턴스에 있는 속성 값을 변경하면
//원본 데이터에도 영향을 미칩니다.

vm.a = 2
data.a // =>2

// 반대의 경우도 영향을 미칩니다.

data.a = 3
vm.a // => 3

//data에 있는 속성들은 인스턴스가 생성될 때 존재한 것들만 반응형
//새 속성 추가

vm.b = 'hi'

//Object.freeze () 
// : 기존 속성이 변경되는 것을 막아 
//  반응성 시스템이 추적할 수 없다는 것을 의미합니다.
var obj = {
    foo: 'bar'
  }
  
  Object.freeze(obj)
  
  new Vue({
    el: '#app',
    data: obj
  })






