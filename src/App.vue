<template>
<div id="nav">
    <div id="nav2">
    
        </div>
    
    <v-btn-toggle
        v-model="text"
        tilecolor="deep-purple accent-3"
        group
      >
        <v-btn value="left">
          <router-link to="/login"> Menü </router-link>
        </v-btn>
        <v-btn value="center">
         <router-link to="/register"> Menü </router-link>
        </v-btn>
        <v-btn value="right">
          <router-link to="/login"> Menü </router-link>
        </v-btn>
        <v-btn value="justify">
          <router-link to="/login"> Menü </router-link>
        </v-btn>
      </v-btn-toggle>
</div>    
   
<div id="router">
<router-view/>
</div>



</template>

<script>


export default {
  
  components:{

     
  }
 
}
</script>
<style>
#nav2{
    float:right;
    width:100px;
    height:50px;
    margin: 10px;
}
v-btn{
    text-decoration: none;
}
#nav{
    width: 100%;
    height:50px;
    background-color: white;
    border: 1px black solid;
    border-radius: 10px;
    float:left;
    
}

.menu{
    float:left;
    margin-left: 50px;
    text-decoration: none;
    margin-top: 5px;
}
router-link{
    text-decoration: none;
}


</style>
