<template>

  <h1>Güncellenecek Toplantı = {{id}}</h1>
<div id="formStyle">
  <form @submit.prevent="handleSubmit">
    <label>Başlık : </label>
    <input v-model="baslik" type="text" required/>
    <label>Konu : </label>
    <input v-model="konu" type="text" required/>
    <label>Tarih : </label>
    <input v-model="tarih" type="date" required/>
    <label>Kişiler: </label>
    <input v-model="kisiler" type="text" required/>
    <label>Toplantı Saati: </label>
    <input v-model="saat" type="time" required/>
    <label>Toplantı Linki: </label>
    <input v-model="link" type="url" pattern = "https://.*" placeholder ="https://example.com" required/>
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
            konu:'',
            tarih:'',
            kisiler:'',
            saat:'',
            link:'',
            uri:'http://localhost:3000/toplantilar/'+this.id
        }
    },
   mounted(){
    fetch('http://localhost:3000/toplantilar/'+this.id)
      .then((res)=>res.json())
      .then(data=>{
                this.baslik=data.baslik;
                this.konu=data.konu;
                this.tarih=data.tarih;
                this.kisiler=data.kisiler;
                this.saat=data.saat;
                this.link=data.link;

      })
   },
   methods:{
    handleSubmit(){
      fetch('http://localhost:3000/toplantilar/'+this.id,{
        method:'PATCH',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({baslik:this.baslik,konu:this.konu,tarih:this.tarih,kisiler:this.kisiler,saat:this.saat,link:this.link})

      }).then(()=>{
        this.$router.push('/')
      }).catch((err)=>console.log(err))
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