<template>
 <div id="resim">
 <img src="../resim/yeni_logo.png" />
  </div> <h2 id="nt">Not Gönderme Platformu</h2>
  <div class="home1 container">
   
    <div v-if="uyeMi">
      <Login @login="chatBasla" />
      <p id="uye">Üye olmak için <span @click="uyeMi=false">Üye Ol</span> sayfasına gidiniz</p>
    </div>
    <div v-else>
      <Register @register="anaSayfa" />
      <p id="grs">Giriş yapmak için <span @click="uyeMi=true">Giriş</span> sayfasına gidiniz</p>
    </div>
  </div>
<div id="admin">
  <router-link :to="{name: 'adminPanel'}"><button id="btn1"><span class="material-icons">admin_panel_settings</span></button></router-link>
  </div>
</template>

<script>
import Register from '../components/Register';
import Login from '../components/Login';
import {ref} from 'vue'
import {useRouter} from 'vue-router';

export default {
  name: 'Home',
  components:{
    Login,
    Register
  },
  setup(){
    const uyeMi=ref(true)
    const router=useRouter();

    const chatBasla=()=>{
      router.push({name:'anaSayfa'})
    }

    return {uyeMi,chatBasla}
  }
}
</script>

<style scoped>
#admin{
  margin:auto;
  width:200px;
  height:50px;
  text-decoration: none;
}
button{
  width:200px;
  height:50px;
  text-decoration: none;
}
#nt{
 text-align: center;
 font-size: 30px;
 margin-top: 100px;

}
#uye{
  text-align: center;
}
#grs{
  text-align: center;
}
body{
  background-color: cadetblue;
}
#resim{
 margin-left: 650px;
}
.home1{
  text-align: left;
    box-shadow: 10px 10px 10px rgb(220, 204, 204);
  background: rgb(241, 237, 237);


}
span {
  font-weight: bold;
  text-decoration: underline;
  color: #b33939;
  cursor: pointer;
}
h2{
  text-align: center;
}
</style>
