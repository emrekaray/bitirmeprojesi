<template>
  <main class="home">
    <div id="toplantilar">
      <div id="gelecekToplanti">
        <div id="baslik">
          <h3>Gelecek Toplantılar</h3>
        </div>
        <hr>
        <div v-if="toplantilar.length">

          <div v-for="top in toplantilar" :key="top.id">
            <toplanti1 :toplanti1="top" @sil="silHandle" @yapildi="yapildiHandle" />
          </div>
        </div>
        <div v-else>
          <p>Toplantılar Yükleniyor...</p>
        </div>
      </div>
      <div id="gecmisToplanti">
        <div id="baslik">
          <h3>Geçmiş Toplantılar</h3>
        </div>
        <hr>
         
      </div>
      </div>
    


    

  </main>
</template>

<script>
import toplanti1 from '../components/toplanti.vue'
export default {
  components: {
    toplanti1,
    
  },
  data() {
    return {
      toplantilar: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/toplantilar')
      .then((res) => res.json())
      .then((data) => this.toplantilar = data)
      .catch((err) => console.log(err))
  },
  methods: {
    silHandle(id) {
      this.toplantilar = this.toplantilar.filter(top => {
        return top.id !== id
      })
    },
    yapildiHandle(id) {

      let top = this.toplantilar.find(toplanti1 => {
        return toplanti1.id == id
      });
      top.yapildi = !top.yapildi;
    },
  }

}
</script>

<style scoped>
#baslik {
  width: 33%;
  height: 20px;
  margin: auto;
  margin-top: 20px;

}

#toplantilar {
  width: 100%;
  height: 800px;
}

#gelecekToplanti {
  width:50%;
  height: 800px;

  float: left;
  margin-left: 5px;
}

#gecmisToplanti {
  width: 49%;
  height: 800px;

  float: left;
  margin-left: 5px;
}
</style>