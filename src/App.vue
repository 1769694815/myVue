<template>
	<div id="app">
		<!-- <router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> -->
		<product-list-one :products="products"></product-list-one>
		<product-list-two :products="products"></product-list-two>
	</div>
</template>

<script>
import productListOne from './views/Home'
import productListTwo from './views/About'
export default {
	name: 'app',
	components: {
		productListOne,
		productListTwo
	},
	data () {
		return {
			products: [
				{name: '鼠标', price: 20},
				{name: '键盘', price: 40},
				{name: '耳机', price: 60},
				{name: '显示器', price: 80}
			]
		}
	}
}
</script>


<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
