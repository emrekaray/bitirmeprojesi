<template>
<div class="Aktiftoplanti" :class="{yapildi:toplanti1.yapildi}">
    <div class="baslik">
        <h3  @click="detayGoster=!detayGoster">{{toplanti1.baslik}}</h3>

        <div class="icon">
           <router-link :to="{name:'ToplantiGuncelle',params:{id:toplanti1.id}}">
           <span class="material-icons">edit</span>
            </router-link>
            <span class="material-icons" @click="toplantiSil">delete</span>
            <span class="material-icons" @click="toggle" tick>done</span>

        </div>
    </div>
    <div v-if="detayGoster" class="detay">
        <p>{{toplanti1.konu}}</p>
        <p>{{toplanti1.tarih}}</p>
        <p>{{toplanti1.kisiler}}</p>
        <p>{{toplanti1.konu}}</p>
    </div>

</div>
</template>

<script>
export default {

    props:['toplanti1'],
    data(){
        return{
            detayGoster:false,
            uri:'http://localhost:3000/toplantilar/'+this.toplanti1.id
        }
    },
    methods:{
            toplantiSil(){
                fetch(this.uri,{method:'DELETE'})
                .then(()=>this.$emit('sil', this.toplanti1.id))
                .catch((err)=>console.log(err))
            },
            toggle(){
                fetch(this.uri,{
                    method:'PATCH',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({yapildi:!this.toplanti1.yapildi})
                }).then(()=>{
                    this.$emit('yapildi',this.toplanti1.id)
                }).catch((err)=>console.log(err))
            }

    }

}
</script>

<style>
p{
    text-align: center;
}
.Aktiftoplanti{
    margin:20px auto;
    background-color:#4b4b4b;
    padding:10px 20px;
    border-radius:15px;
    border:3px solid #b33939;
    color:#f7f1e3;
}
.Aktiftoplanti:hover{
    box-shadow: 8px 10px 10px rgba(2,2,2,0.3);
}
h3{
    cursor:pointer;
    text-align: center;
}

.baslik{
    display:flex;
    justify-content: space-between;
    align-content: center;
}

.material-icons{
    font-size:24px;
    margin-left:10px;
    color:#bbb;
    cursor:pointer;
}

.material-icons:hover{
    color:#2f3543;
}

.Aktiftoplanti.yapildi{
    border:3px solid #218c74;
}




.Aktiftoplanti.yapildi .tick{
    color: #218c74;
}

</style>