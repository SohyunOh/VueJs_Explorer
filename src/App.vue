<template>
  <div id="app">
    <header/>
    <div id="content" class="content">
        <router-view></router-view> 
        <!-- 라우터 부분만 재 로딩  -->
    </div>
  </div>
</template>

<script>
// "" 로 경로 지정
import header from "./components/layout/header.vue";

// {} 사용
export default {
  // components: { header },
  name : "App",
  component : {
    header,
  },
};
</script>



<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
