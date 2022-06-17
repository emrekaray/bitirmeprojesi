<template>

  <h1>Güncellenecek Toplantı = {{id}}</h1>
<div id="formStyle">
  <form>
    <label>Başlık : </label>
    <input type="text" v-model="baslik"/>
    <label>Konu: </label>
    <input type="text" v-model="konu"/>
    <button>Toplantı Güncelle</button>
  </form>
</div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            baslik:'',
            konu:''
        }
    }

}
</script>

<style>
#formStyle{
    width:500px;
    height:100%;
    margin:auto;
}
h1{
    text-align: center;
}

</style>