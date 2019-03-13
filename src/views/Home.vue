<template>
	<div class="home">
		<h2>one</h2>
		<ul>
			<li v-for="(product, i) in products" :key="i">
				<span class="name">{{ product.name }}</span>
				<span class="price">${{ product.price }}</span>
			</li>
			<button @click="minusPrices">减少价格</button>
		</ul>
	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations } from 'vuex'
export default {
	name: 'home',
	data () {
		return {
			products: this.$store.state.products, // state
			// products: this.$store.getters.saleProducts // getters 为store的计算属性
		}
	},
	methods: {
		...mapMutations([
			'minusPrice'
		]),
		minusPrices () {
			this.minusPrice(2)
		}
	},	
	created () {
		console.log(this.$store.getters.saleProducts)
	}

}
</script>

<style lang="stylus" scoped>
.home {
	background #fff8b1
	box-shadow 1px 2px 3px rgba(0, 0, 0, .2)
	margin-bottom 30px
	padding 10px 20px
	ul {
		padding 0
		li {
			display inline-block
			margin-right 10px
			margin-top 10px
			padding 20px
			background rgba(255, 255, 255, .7)
		}
		span.price {
			font-weight bold
			color #e8800c
		}
	}
}
</style>
