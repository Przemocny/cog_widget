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
	closeModalWithProduct,
	changeDishName,
	openNewIngredientModal,
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,
	checkExample,
	openOfferModal,
	closeOfferModal,
	changePriceOfSelectedProduct,
} from './store'
import { CheckboxArray, Header, Summary, Examples, Intro, Dish, ActionButtons } from './common'
import { NewEntryModal, NewIngredientModal, OfferModal } from './modals'
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
	closeModalWithProduct,
	changeDishName,
	openNewIngredientModal,
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,
	checkExample,
	openOfferModal,
	closeOfferModal,
	changePriceOfSelectedProduct,
}

const Brand = () => {
	return (
		<div className='logo'>
			<a href='https://localhost-group.com/' target='_blank'>
				<strong>wersja 1.01</strong>
				<strong>Twórcy narzędzia:</strong> <img src={logo} />{' '}
				<strong>Zapraszamy do współpracy!</strong>{' '}
			</a>
		</div>
	)
}

class Grid extends React.Component {
	render() {
		const {
			selectedProducts,
			products,
			changeCostOfSelectedProduct,
			removeOneSelectedProduct,
		} = this.props
		return (
			<React.Fragment>
				<div className='grid'>
					<NewIngredientModal {...this.props} />
					<NewEntryModal {...this.props} />
					<OfferModal {...this.props} />
					<Intro {...this.props} />
					<Examples {...this.props} />

					<Dish {...this.props} />

					<div className='row'>
						<div className='col-md-6'>
							<div className="products-wrapper">
								<Header {...this.props} />
							</div>
						</div>
						<div className='col-md-6'>
							<div className='receipt'>
							<ActionButtons {...this.props}/>
								{selectedProducts.length === 0 && (
									<div className='placeholder'>
										<strong>
											tutaj pojawi się lista składników
										</strong>
									</div>
								)}
								{selectedProducts.map((el, k) => {
									return (
										<CheckboxArray
											removeOneSelectedProduct={
												removeOneSelectedProduct
											}
											changeCostOfSelectedProduct={
												changeCostOfSelectedProduct
											}
											product={el}
											idx={k}
											products={products}
											key={k}
										/>
									)
								})}
								<Summary {...this.props} />
							</div>
						</div>
					</div>

					<Brand />
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
