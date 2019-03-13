<template>
	<div class="about">
		<h2>two</h2>
		<ul>
			<li v-for="(product, i) in products" :key="i">
				<span class="name">{{ product.name }}</span>
				<span class="price">${{ product.price }}</span>
				<button @click="minusPriceSync">异步减少价格</button>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: "about",
	/* props: {
		products: Array
	} */
	data () {
		return {
			products: this.$store.state.products
		}
	},
	methods: {
		minusPriceSync () {
			this.$store.dispatch('minusPriceSync', 5)
		}
	}
}
</script>

<style lang="stylus" scoped>
	div.about {
		background #d1e4ff
		box-shadow 1px 2px 3px rgba(0, 0, 0, .2)
		margin-bottom 30px
		padding 10px 20px
		ul {
			padding 0
			list-style-type none
			li {
				margin-right 10px
				margin-top 10px
				padding 20px
				background rgba(255, 255, 255, .7)
				span.price {
					font-weight bold
					color #860ce8
					display block
				}
			}
		}
	}
</style>
