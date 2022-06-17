<template>
	<main class="login">
		<section class="forms">
			<form class="login" @submit.prevent="login">
			<h2> MALTEPE ÜNİVERSİTE TOPLANTI TAKİP SİSTEMİ</h2>
			<br>
			<br>
			<br>
			<br>
			
				<input 
					type="email" 
					placeholder="EMAİL"
					v-model="login_form.email" />
				<input 
					type="password" 
					placeholder="ŞİFRE" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Giriş Yap" />
			</form>
		</section>
	</main>
	<div id="emre">
		<img src="../resim/yeni_logo.png">
	</div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
	setup () {
		const login_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}
		return {
			login_form,
			login,
		}
	}
}
</script>

<style scoped>

#emre{
	margin-left:650px;
}
.forms {
	display: flex;
	min-height: 500px;
}

form {
	flex: 1 1 0%;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;

	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}

input:focus:not([type="submit"]) {
	opacity: 1;
}

input::placeholder {
	color: inherit;
}



form.login input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
	background-color: rgb(245, 66, 101);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
	
}


</style>