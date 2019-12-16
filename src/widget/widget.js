import React from 'react'
import { connect } from 'react-redux'
import {
	filterProducts,
	openModalWithProduct,
	changeUnit,
	changePortion,
	addSelectedProduct,
	changeCostOfSelectedProduct,
	clearSelectedProducts,
	removeOneSelectedProduct,
	closeModalWithProduct,changeDishName,
	openNewIngredientModal,
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,checkExample
} from './store'
import { CheckboxArray, Header, Summary,Examples} from './common'
import { NewEntryModal, NewIngredientModal } from './modals'
import logo from '../images/localhost_sam.png'

const actions = {
	filterProducts,
	openModalWithProduct,
	changeUnit,
	changePortion,
	addSelectedProduct,
	changeCostOfSelectedProduct,
	clearSelectedProducts,
	removeOneSelectedProduct,
	closeModalWithProduct,changeDishName,
	openNewIngredientModal,
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,checkExample
}
 

const Brand = ()=>{
	return (
		<div className="logo">
		<a href="https://localhost-group.com/" target="_blank">
			<strong>Twórcy narzędzia:</strong>{' '}<img src={logo}/>{' '}<strong>Zapraszamy do współpracy!</strong>{' '}
			</a>
		</div>
	)
}

class Grid extends React.Component {
	render() {
		const {selectedProducts, products, changeCostOfSelectedProduct, removeOneSelectedProduct} = this.props
		return (
			<React.Fragment>
				<div className='grid'>
					<NewIngredientModal {...this.props} />
					<NewEntryModal {...this.props} />
					<Examples {...this.props}/>
					<Header {...this.props} />
					{selectedProducts.map((el, k) => {
						return <CheckboxArray 
						removeOneSelectedProduct={removeOneSelectedProduct}
						changeCostOfSelectedProduct={changeCostOfSelectedProduct} 
						product={el} idx={k} products={products} key={k} />
					})}
					<Summary {...this.props}/>
					<Brand/>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		...state.products,
	}
}

// jakie akcje z danego stora mają być przekazane do propsów, "oraz mają działać"
const mapDispatchToActions = {
	...actions,
}

// connect - funkcja która łączy komponent ze storem reduxa wg zakodowanego schematu

export default connect(mapStateToProps, mapDispatchToActions)(Grid)
