
<template>
  <div>
    <template v-for="(animal, index) in animals" :key="index">
      <h2 v-if="animal !=='monkey'">{{animal}} 인덱스는 :: {{index}}</h2>
    </template>
  </div> 
</template>

<script>
// {} 사용
export default {
  name : "App",
  data() {
    return {
      age : 10,
      display : false,
      animals : ["monkey","rat","dog", "lion","monkey"],
      users: [
        {name: 'scalper', job : 'dverloper', gender: 'male',skill:["html", "css", "javaScript"] },
        {name: 'john', job : 'desigener', gender: 'male',skill:["html", "css", "javaScript"] },
        {name: '희수', job : 'pm', gender: 'female',skill:["html", "css", "javaScript"] }
      ]
      }
    }
  
  };
</script>

<!-- <div id="content" class="content"> -->
        <!-- 라우터 부분만 재 로딩  -->
        <!-- <router-view></router-view>  -->
    <!-- </div> -->

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
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
.red{
 color: red;
}
.not-good {
  text-decoration: line-through;
}
</style>
