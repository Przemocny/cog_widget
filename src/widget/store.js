import { createSlice } from '@reduxjs/toolkit'

const units = [
	{ name: 'litr', measure: 1000, short: 'l' },
	{ name: 'decylitr', measure: 100, short: 'dcl' },
	{ name: 'kilogram', measure: 1000, short: 'kg' },
	{ name: 'gram', measure: 1, short: 'g' },
	{ name: 'szklanka', measure: 225, short: 'szk' },
	{ name: 'płaska łyżka stołowa', measure: 15, short: 'pls' },
	{ name: 'płaska łyżeczka', measure: 6, short: 'pl' },
	{ name: 'szczypta', measure: 0.5, short: 'szcz' },
]

const products = [
	{ name: 'szynka', unit: 'g', measure: 1000, price: 20.5 },
	{ name: 'ser żółty', unit: 'g', measure: 1000, price: 19.5 },
	{ name: 'oliwki', unit: 'g', measure: 250, price: 7.99 },
	{ name: 'pieczarki', unit: 'g', measure: 1000, price: 11.5 },
	{name:'ciasto do pizzy', measure:1000, unit:'g', price:8 },
	{name:'ananas', measure:400, unit:'g', price:8 },
	{name:'sos pomidorowy', measure:1000, unit:'g', price:24 },
	{name:'wołowina mielona', measure:1000, unit:'g', price:40 },
	{name:'sałata', measure:250, unit:'g', price:5 },
	{name:'pomidor', measure:1000, unit:'g', price:8 },
	{name:'cebula', measure:1000, unit:'g', price:5 },
	{name:'makaron', measure:500, unit:'g', price:8 },
	{name:'zioła', measure:100, unit:'g', price:4, },
	{name:'szynka mielona', measure:1000, unit:'g', price:18 },

]

const pizza = [
	{name:'ciasto do pizzy', measure:1000, unit:'g', price:8, portion:160, cost:1.28},
	{name:'szynka', measure:1000, unit:'g', price:20, portion:70, cost:1.4},
	{name:'ser żółty', measure:1000, unit:'g', price:24, portion:80, cost:1.92},
	{name:'ananas', measure:400, unit:'g', price:8, portion:60, cost:1.2},
	{name:'sos pomidorowy', measure:1000, unit:'g', price:24, portion:90, cost:2.16},
]

const burger = [
	{name:'bułka do burgera', measure:70, unit:'g', price:1.13, portion:70, cost:1.13},
	{name:'wołowina mielona', measure:1000, unit:'g', price:40, portion:100, cost:4},
	{name:'sałata', measure:250, unit:'g', price:5, portion:50, cost:1},
	{name:'sos bbq', measure:1000, unit:'g', price:45, portion:20, cost:0.9},
	{name:'pomidor', measure:1000, unit:'g', price:8, portion:40, cost:0.32},
	{name:'cebula', measure:1000, unit:'g', price:5, portion:40, cost:0.2},
]

const spaghetti = [
	{name:'makaron', measure:500, unit:'g', price:8, portion:150, cost:2.4},
	{name:'sos pomidorowy', measure:1000, unit:'g', price:24, portion:80, cost:1.92},
	{name:'zioła', measure:100, unit:'g', price:4, portion:15, cost:0.6},
	{name:'ser żółty', measure:1000, unit:'g', price:25, portion:60, cost:1.6},
	{name:'mięso mielone', measure:1000, unit:'g', price:18, portion:90, cost:1.62},
]



const calcPortionCost = (product) => {
	return (
		Math.round(product.portion * product.price * 100 / product.measure) /
		100
	)
}

const { actions, reducer } = createSlice({
	name: 'products',
	initialState: {
		dish: '',
		products: products,
		filteredProducts: products,
		units: units,
		productsFilter: '',
		selectedProducts: [],
		isModalShow: false,
		isIngredientModalShow: false,
		activeProductInModal: {
			unit: 'g',
			price: 0,
			name: '',
			portion: 1,
			cost: 0,
		},
		sum: 0,
		weight: 0,
		newIngredient: {
			name: '',
			unit: 'g',
			measure: 1000,
			price: 0,
		}
	},

	reducers: {

		checkExample(state, action){
			const {name} = action.payload

			if (name === 'pizza'){
				state.dish = 'pizza hawajska'
				state.selectedProducts = pizza
			}
			if (name === 'burger'){
				state.dish = 'burger wołowy'
				state.selectedProducts = burger
			}
			if (name === 'spaghetti'){
				state.dish = 'spaghetti bolognese'
				state.selectedProducts = spaghetti
			}


			const selectedProducts = [...state.selectedProducts]

			let sum = 0
			let weight = 0

			selectedProducts.map((el) => {
				sum += { ...el }.cost
				weight += { ...el }.portion
				return el
			})

			state.sum = Math.round(sum * 100) / 100
			state.weight = Math.round(weight)

		},
		changeDishName(state, action) {
			const { dish } = action.payload
			state.dish = dish
		},
		filterProducts(state, action) {
			const { filter } = action.payload
			state.productsFilter = filter

			if (filter.length === 0) {
				state.filteredProducts = state.products
			} else {
				state.filteredProducts = state.products.filter((e) =>
					e.name.toLowerCase().includes(filter.toLowerCase())
				)
			}
		},

		closeModalWithProduct(state, action) {
			state.isModalShow = false
		},
		openModalWithProduct(state, action) {
			const { product } = action.payload

			state.isModalShow = true

			const cost = calcPortionCost({
				...product,
				portion: 1,
			})

			state.activeProductInModal = {
				...product,
				portion: 1,
				cost: cost,
			}
		},

		changeUnit(state, action) {
			const { unit } = action.payload
			const actualProduct = { ...state.activeProductInModal }

			const cost = calcPortionCost({
				...actualProduct,
				portion: unit.measure,
			})

			state.activeProductInModal = {
				...state.activeProductInModal,
				portion: unit.measure,
				cost: cost,
			}
		},

		changePortion(state, action) {
			const { portion } = action.payload
			const actualProduct = { ...state.activeProductInModal }

			const cost = calcPortionCost({
				...actualProduct,
				portion: portion,
			})

			state.activeProductInModal = {
				...actualProduct,
				portion: portion,
				unit: 'g',
				cost: cost,
			}
		},

		changeCostOfSelectedProduct(state, action) {
			const { cost, idx } = action.payload
			state.selectedProducts[idx]['cost'] = cost

			const selectedProducts = [...state.selectedProducts]

			let sum = 0
			let weight = 0

			selectedProducts.map((el) => {
				sum += { ...el }.cost
				weight += { ...el }.portion
				return el
			})

			state.sum = Math.round(sum * 100) / 100
			state.weight = Math.round(weight)
		},

		addSelectedProduct(state, action) {
			const actualProduct = { ...state.activeProductInModal }
			const selectedProducts = [...state.selectedProducts]
			selectedProducts.push(actualProduct)

			state.selectedProducts = selectedProducts
			state.isModalShow = false

			state.activeProductInModal = {
				unit: 'g',
				price: 0,
				name: '',
				portion: 1,
				cost: 0,
			}

			let sum = 0
			let weight = 0

			selectedProducts.map((el) => {
				sum += { ...el }.cost
				weight += { ...el }.portion
				return el
			})

			state.sum = Math.round(sum * 100) / 100
			state.weight = Math.round(weight)

			state.filteredProducts = state.products
			state.productsFilter = ''
		},

		clearSelectedProducts(state, action) {
			state.filteredProducts = state.products
			state.productsFilter = ''
			state.selectedProducts = []
			state.sum = 0

			state.activeProductInModal = {
				unit: 'g',
				price: 0,
				name: '',
				portion: 1,
				cost: 0,
			}
		},

		removeOneSelectedProduct(state, action) {
			const { idx } = action.payload
			let selectedProducts = [...state.selectedProducts]
			selectedProducts = selectedProducts.filter((el, k) => {
				return k !== idx
			})

			let sum = 0
			let weight = 0

			selectedProducts.map((el) => {
				sum += { ...el }.cost
				weight += { ...el }.portion
				return el
			})

			state.sum = Math.round(sum * 100) / 100
			state.weight = Math.round(weight)

			state.selectedProducts = selectedProducts
		},

		openNewIngredientModal(state, action) {
			state.isIngredientModalShow = true
		},
		changeNewIngredientField(state, action) {
			const {name, value} = action.payload
			const newIngredient = { ...state.newIngredient }
			newIngredient[name] = value
			state.newIngredient = newIngredient
		},
		addNewIngredient(state, action){
			const newIngredient = { ...state.newIngredient }
			const ingredients = [...state.products]
			ingredients.push(newIngredient)

			state.products = ingredients
			state.isIngredientModalShow = false

			state.filter = newIngredient.name
			state.filteredProducts = ingredients.filter((e) =>
					e.name.toLowerCase().includes(newIngredient.name.toLowerCase())
				)

			state.newIngredient = {
				name: '',
				unit: 'g',
				measure: 1000,
				price: 0,
			}
		},
		closeNewIngredientModal(state, action) {
			state.isIngredientModalShow = false
			state.newIngredient = {
				name: '',
				unit: 'g',
				measure: 1000,
				price: 0,
			}
		},
	},
})

export const {
	filterProducts,
	openModalWithProduct,
	changeUnit,
	changePortion,
	addSelectedProduct,
	changeCostOfSelectedProduct,
	clearSelectedProducts,
	removeOneSelectedProduct,
	closeModalWithProduct,
	changeDishName,
	openNewIngredientModal,
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,
	checkExample
} = actions

export default reducer
