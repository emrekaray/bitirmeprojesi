<template>
  <div id="kapsayici2">
      <div id="baslik">
        <h2 id="Tyazi"><b>Toplantılar</b></h2>
        <div id="button1"> <v-row justify="center">
          <div id="account">
            <v-avatar
  color="teal"
  size="40"
  
></v-avatar>
Emre Karay
          </div>
    <v-dialog
      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Toplantı Oluştur
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h4 ">Toplantı Oluştur</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col
                cols="12" 
                >
                <v-text-field class="Ad"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                
              >
                
              </v-col>
              <v-col cols="12">
                <v-text-field class="Soyad"
                 
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="Konu"
                  
                ></v-text-field>

              </v-col>
              
              <v-col
               
              ><v-autocomplete
                  :items="kisiler"
                  multiple
                ></v-autocomplete>
               
              </v-col>
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            İptal et
          </v-btn>
          <v-btn
            color="blue-darken-1"
            text
            @click="dialog = false"
          >
            Gönder
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row></div>        
  </div>
  </div>
<hr>
<div id="aktifToplanti">
<h2>Aktif Toplantılar</h2>
<hr>
<br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      İÇERİK
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Batuhan</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      <v-btn variant="outlined" class="buton5">
        Katıl
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</div>
<div id="yaklasanToplanti">
  <h2>Yaklaşan Toplantılar</h2>
  <hr>
  <br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      İÇERİK
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title>Batuhan</v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      <v-btn variant="outlined" class="buton5">
        Katıl
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</div>
<div id="gecmisToplanti">
<h2>Geçmiş Toplantılar</h2>
<hr>
<br>
<div class="duyuru">
   <v-card
    class="mx-auto"
    color="#26c6da"
    theme="dark"
    max-width="600"
  >
    <v-card-title>
      <span class="text-h6 font-weight-light"><b>Başlık</b></span>
    </v-card-title>
    <v-card-text class="text-h5">
      İÇERİK
    </v-card-text>
    <v-card-actions>
      <v-list-item class="w-200">
        <v-list-item-avatar right>
          <v-avatar
            color="grey-darken-3"
          ></v-avatar>
        </v-list-item-avatar>
        <v-list-item-header>
          <v-list-item-title> Batuhan </v-list-item-title>

        </v-list-item-header>
      </v-list-item>
      <v-btn variant="outlined" class="buton5">
        Katıl
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Aktif Toplantılar',
          disabled: false,
          href: '#',
        },
        {
          text: 'Yaklaşan Toplantılar',
          disabled: false,
          href: '#',
        },
        {
          text: 'Geçmiş Toplantılar',
          disabled: false,
          href: '#',
        },
        
        
      ],
      dialog: false,
      kisiler:['Batuhan', 'Emre', 'Emirhan', 'sıla', 'melike', ],
      
    }),
  }
</script>


<style>
#kapsayici2{
    height:50px;
    width: 100%;
}
#Tyazi{
    float:left;
    margin-left:15px;
    margin-top:10px;
}
#button1{
float:right;
margin-right:15px;
margin-top:20px;
}
#aktifToplanti{
  width:33%;
  background-color: rgb(120, 251, 111);
  float:left;
  height:850px;
  margin-left:5px;
  margin-top:3px;

}
#yaklasanToplanti{
  width:33%;
  background-color: rgb(238, 247, 103);
  float:left;
  height:850px;
  margin-left:5px;
  margin-top:3px;

}
#gecmisToplanti{
  width:33%;
  background-color: rgb(242, 83, 83);
  float:left;
  height:850px;
  margin-top:3px;
  margin-left:5px;
}
#account{
  margin-right: 40px;
}
.buton5{
  float:right;
}
</style>
