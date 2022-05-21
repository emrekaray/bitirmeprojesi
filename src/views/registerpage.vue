<template>
  <br>
  <br>
  <br>
  <br>
  <h2> MALTEPE ÜNİVERSİTESİ TOPLANTI TAKİP SİSTEMİ</h2>
  <br>
<div id="kapsayici">
   <div id="kayitol">
       <br>
      <h3> Kayıt Ol</h3>
      <br>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Ad" required></v-text-field>

        <v-text-field v-model="Soyad" :rules="nameRules" label="Soyad" required></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        <v-text-field v-model="password" :rules="passwordRules" label="Şifre" required></v-text-field>
        <v-text-field v-model="password1" :rules="passwordRules" label="Şifre Tekrar" required></v-text-field>


        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']" label="Do you agree?"
          required></v-checkbox>
          <div class="button">
        <v-btn>Kayıt Ol</v-btn>
        </div>
      </v-form>
    </div>
</div>
 <div id="logo">

  </div>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: '',
    email: undefined,
    password: undefined,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => !!(v || '').match(/@/) || 'Please enter a valid email',

    ],

    password: '',
    passwordRules: [v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
      'Password must contain an upper case letter, a numeric character, and a special character',],

    checkbox: false

  })
}


</script>


<style>
.button{
    margin-left:150px;
    background-color:white;
    width:100px;
}
#logo {
  width: 591px;
  height: 128px;
  margin: auto;
  background-image: url(../../images/yeni_logo.png);

}
#kapsayici{
    width:591px;
    height:720px;
    margin:auto;
    
}
#girisyap{
    margin-left:95px;
    margin:auto
}

</style>