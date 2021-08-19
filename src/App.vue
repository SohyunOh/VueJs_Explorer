
<template>
  <div id="App">
    <!-- <h1>{{conut}}<h1>
    <button>증가</button> -->
    <!-- <h2 v-for="(animal, index) in animals" :key="index">{{animal}}</h2>
    <hr>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        이름 : {{user.name}} , 직업 : {{user.job}}
        <p v-for="item in user.skill" :key="item"> {{item}}</p>
      </li>
    </ul> -->
    <!-- <h1>{{ count + 3 }}</h1>
    <button v-on:click="addNumber(1)">증가</button>
    <button v-on:click="minusNumber">감소</button><br>
    <button v-on:mouseover="addNumber(10)">마우스오버10증가</button> -->
    <h2>{{message}}</h2>
    <!-- <button @click="greeting">인사하기</button>
    <button @click="sayGoodbay">작별하기</button> -->
    <button @click="addNumber( $event ,10)">10더하기</button>
    <button @click="addNumber( $event ,100)">100더하기</button>
    <br>
    [마우스의 죄표값을 얻기 위해 이벤트가 필요]
    <div @click="getMousPosition" class="box"></div>
    
  </div>
</template>
    
<script>
export default {
  name: "App",
  data() {
    return {
      age: 10,
      display: false,
      animals: ["monkey", "rat", "dog", "lion", "monkey"],
      users: [
        {
          name: "scalper",
          job: "dverloper",
          gender: "male",
          skill: ["html", "css", "javaScript"],
        },
        {
          name: "john",
          job: "desigener",
          gender: "male",
          skill: ["html", "css", "javaScript"],
        },
        {
          name: "희수",
          job: "pm",
          gender: "female",
          skill: ["html", "css", "javaScript"],
        },
      ],
      count: 0,
      message:"",
    };
  },
  methods: {
    getMousPosition(event){
      console.log(event)
      this.message = `마우스의 위치는 ${event.pageX},${event.pageY}입니다.`;
    },
    greeting(){
      this.message = "안녕하세요"
      
    },
    sayGoodbay(){
      this.message = "잘가"
    },
    addNumber(e, value){
      //이벤트 받기 위해 e.pageX값을 maseeage에 넣어봄
      e.pageX
      this.message = `마우스 좌표 ${e.pageX} 와 ${value}는 ${e.pageX+ value}입니다.`;
    },
    minusNumber(){
      console.log(this)
      this.count = this.count-1;
    }
  },
};

</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
#App>button {
  width:100px;
  height:100px;
  font-size:24px;
}

input {
  font-size: 10px;
}
.orange {
  color: orange;
}
.salmon {
  color: salmon;
}
.red {
  color: red;
}
.not-good {
  text-decoration: line-through;
}
.box {
  width: 300px;
  height: 300px;
  background: salmon;
  margin-left: 25%;

}
</style>
