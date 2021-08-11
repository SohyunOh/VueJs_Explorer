<template>
  <div> 
    <h1>Welcome to {{title2}}!</h1>
    <!-- HTML 방식
      <input type="text" value="abc"/> 
      -->
      <!-- vue의 데이터 바인딩 -->
    <input type="text" v-model="input1" />
    
    <!-- HTML 방식 : <button type="button">get</button> -->
    <button type="button" @click="getData">Get</button> 
    <button type="button" @click="setData">Set</button> 

    <select class="form-control" v-model="region" @change="changeRegion">
      <!-- 키 값을 정의 , 배열처리는  v-for 를 사용 ,d:는 배열,i: 인덱스  in 메소드 이름-->
      <!-- html코드 안 접근은 {{}}
          엘리먼드인 접근은 : (콜론)
      -->
      <option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
    </select>

<!-- v-show는 조건이 만족하든 안하든 랜더링 작업을 진행(잦은 반복 화면이면 v-show 추천)
    v-if는 조건에 부합하면 렌더링 작업 안함 -->
    <table class="table table-bordered"  v-show="tableShoew">
      <tr :key="i" v-for="(d,i) in options">
        <!-- 밸류값 -->
        <td>{{d.v}}</td>
        <!-- 텍스트값 -->
        <td>{{d.t}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  // data 메소드 정의 
  data() {
    return{
      title: "개발자의 품격",
      title2: "Seoul",
      input1: "abc",
      options: [
        {v:"S", t:"seoul"},
        {v:"J", t:"Jeju"},
        {v:"B", t:"Busan"},
      ],
      region: "J",
      tableShoew: true,

    };
  },

  //특정데이터의 변화를 알수 있는 메소드
  watch: {
    input1() {
      console.log (this.input1);
    }
  },
  methods: {
    getData(){
      alert(this.input1);
    },
    setData(){
      this.input1 = "12345";
    },
    changeRegion(){
      alert(this.region);
    }
  },

  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
console.log("created_DB데이터를 가져올떄 확인")
  },
  beforeMount(){
console.log("beforeMount_화면에 렌더링 될때")
  },
  mounted(){
console.log("mounted")
  },
  beforeUpdate(){
console.log("beforeUpdate_데이터 변경전")
  },
  updated(){
console.log("updated_데이터 변경 후")
  },
  beforeDestroy(){
console.log("beforeDestroy")
  },
  destroyed(){
console.log("destroyed")
  }
};
</script>
