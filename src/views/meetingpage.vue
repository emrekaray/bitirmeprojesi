<template>
  <v-app>
   
    <v-navigation-drawer app v-model="drawer" clipper> 
    <br>
    <div class="avatar1">
       <v-avatar
     color="grey"
     size="100"
    ></v-avatar>
      </div>
      <br>
      
      <div class="T">
        <v-toolbar-title class="align-center">
      <span class="title"><h3>{{title}}</h3></span> <br>
      <span class="title"><h5>{{email}}</h5></span>
     </v-toolbar-title> 
                </div>
                <br>
                
        <div id="button"> <v-btn color="red">Çıkış Yap</v-btn> </div>      
    </v-navigation-drawer>
    <v-app-bar app >
        <v-app-bar-nav-icon @click="drawer=!drawer"/>
      <div class="üst">
      <v-spacer/>
      
  <v-dialog 

      v-model="dialog"
      persistent
    >
      <template v-slot:activator="{ props }">
        <v-btn class=""
          color="primary"
          v-bind="props"
        >
          Toplantı Oluştur
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="Atext ">Toplantı Oluştur</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              
              <v-col
                cols="12" 
                >
                <v-text-field class="Ad"
                label="Toplantı Konusu"
                  
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                
              >
                
              </v-col>
              <v-col cols="12">
                <v-text-field class="icerik"
                 label="Toplantı İçeriği"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field class="Tarih"
                  label="Toplantı Tarihi"
                  
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
      </div>
     </v-app-bar>
     <v-contend>
       <v-conteiner>
         <br>
         <br>
         <br>
         <div id="aktifToplanti">
         <h2>Aktif Toplantılar</h2>
        <hr>
<br>
<Meeting></Meeting>
</div>


<div id="yaklasanToplanti">
  <h2>Yaklaşan Toplantılar</h2>
  <hr>
  <br>
  <UpcomingMeetings/>


</div>
<div id="gecmisToplanti">
<h2>Geçmiş Toplantılar</h2>
<hr>
<br>
<PastMeetings/>

</div>
 </v-conteiner>
 </v-contend>
 </v-app>
 <v-footer>
    <v-card
      elevation="0"
      rounded="0"
      width="100%"
      class="bg-grey text-center"
    >
      <v-card-text>
        <v-btn
          class="mx-4"
          icon="mdi-home"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-email"
          variant="plain"
        ></v-btn>
        <v-btn
          class="mx-4"
          icon="mdi-calendar"
          variant="plain"
        ></v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="text-white">
        {{ new Date().getFullYear() }} — <strong>Maltepe Üniversitesi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import pastMeeting from '../components/pastMeetings.vue'
import upcomingMeeting from '../components/upcomingMeetings.vue'
import UpcomingMeetings from '../components/upcomingMeetings.vue'
import PastMeetings from '../components/pastMeetings.vue'
import Meeting from '../components/meeting.vue'

  export default {
    data: () => ({
        components: {
            Meeting,
            pastMeeting,
            upcomingMeeting
        },
        drawer: false,
        email: "emrekaray666@gmail.com",
        title: "Emre Karay",
        konu1: "Konu",
        konu2: "Konu",
        konu3: "konu",
        konu4: "konu",
        konu5: "konu",
        konu6: "konu",
        konu7: "konu",
        items: [
            {
                text: "Aktif Toplantılar",
                disabled: false,
                href: "#",
            },
            {
                text: "Yaklaşan Toplantılar",
                disabled: false,
                href: "#",
            },
            {
                text: "Geçmiş Toplantılar",
                disabled: false,
                href: "#",
            },
        ],
        dialog: false,
        kisiler: ["Batuhan", "Emre", "Emirhan", "sıla", "melike",],
    }),
    components: { UpcomingMeetings, PastMeetings, Meeting }
}
</script>


<style scoped>
.T{
  text-align: center;
}
.avatar1{ 
  margin-left: 30%;
}
#aktifToplanti{
  width:33%;
  float:left;
  height:20cm;
  margin-left:5px;
  margin-top:3px;

}
#yaklasanToplanti{
  width:33%;
  float:left;
  height:100%;
  margin-left:5px;
  margin-top:3px;

}
#gecmisToplanti{
  width:33%;
  float:left;
  height:100%;
  margin-top:3px;
  margin-left:5px;
}

.buton5{
  float:right;
}
#mailb{ 
  margin-left: 7px;
}
h2{
  text-align: center;
}
#button{
  margin-left:75px;
}

</style>
