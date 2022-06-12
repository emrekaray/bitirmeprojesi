<template>
     <div id="girisyap">
<br>
      <h3> Giriş Yap</h3>
      <br>
      <v-form ref="form" v-model="valid" lazy-validation>

        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

        <v-text-field v-model="password" :rules="passwordRules" label="Şifre" required type="password"></v-text-field>
       <div class="button"> <v-btn>Giriş Yap</v-btn> </div>
      </v-form>
      <br>
      <br>
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

<style scoped>
h3 {
  text-align: center;
}

#girisyap {
  width: 400px;
  margin:auto;
}

</style>