
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
    <h1>{{ count + 3 }}</h1>
    <button v-on:click="addNumber(1)">증가</button>
    <button v-on:click="minusNumber">감소</button><br>
    <button v-on:mouseover="addNumber(10)">마우스오버10증가</button>
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
    };
  },
  methods: {
    addNumber(value){
 console.log(value)
      this.count = this.count+ value;
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
</style>
