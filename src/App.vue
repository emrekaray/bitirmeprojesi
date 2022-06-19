<template>
<div id="menu">
  <div id="main-nav" v-if="$store.state.user">
  
    <button @click="$store.dispatch('logout')">Çıkış Yap</button>
    <router-link :to="{name:'ToplantiEkle'}"><button>Toplantı Oluştur</button></router-link>
    <h4>Hoşgeldin</h4>
    <h4>{{email}}</h4>
    
  </div>
</div>
  <router-view/>
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

export default {
  data(){
    return{
      kullanicilar:[],

    }
  },

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
   mounted() {
    fetch('http://localhost:3000/kullanicilar')
      .then((res) => res.json())
      .then((data) => this.kullanicilar = data)
      .catch((err) => console.log(err))
  },
}
</script>

<style scoped>
h4{
  float:right;
  margin-right:20px;
  margin-top:15px;
}
button{
  width:100px;
  height:50px;
  float:right;
  border-radius: 10px;
  margin-right: 20px;
  }
#menu{
  width:100%;
  height:50px;

  margin-bottom: 10px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-nav {
  text-align: center;

}

#main nav a{
  font-weight: bold;
  color: #2c3e50;
  display: inline-block;
  text-decoration: none;
  color: #999;
  font-size:18px;
}
a.router-link-active{
  border-bottom:2px solid #00ce89;
  padding-bottom:4px;
}

#main-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
