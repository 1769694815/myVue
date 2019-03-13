import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		products: [
			{name: '鼠标', price: 20},
			{name: '键盘', price: 40},
			{name: '耳机', price: 60},
			{name: '显示器', price: 80}
		]
	},
	mutations: {
		minusPrice (state, payload) {
			console.log(payload)
			let newPrice = state.products.forEach(product => {
				product.price -= payload
			})
		}
	},
	actions: {
		minusPriceSync (context, payload) {
			setTimeout(() => {
				context.commit('minusPrice', payload) // context提交
			}, 1000);
		}
	},
	getters: {
		saleProducts: (state) => {
			let saleProducts = state.products.map( product => {
				return {
					name: product.name,
					price: product.price / 2
				}
			})
			return saleProducts
		}
	}
})
