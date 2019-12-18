import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider';


const Examples = ({ checkExample }) => {
	return (
		<div className='examples'>
			<div className='cell-row cell-list cell-row-center cell-bordered'>
				<div className='cell cell-elem'>Przykłady:</div>
				<div className='cell cell-elem'>
					<Button
						size='small'
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({ name: 'pizza' })
						}}
					>
						Pizza hawajska
					</Button>
				</div>
				<div className='cell cell-elem'>
					<Button
						size='small'
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({ name: 'burger' })
						}}
					>
						Burger wołowy
					</Button>
				</div>
				<div className='cell cell-elem'>
					<Button
						size='small'
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({ name: 'spaghetti' })
						}}
					>
						Spaghetti bolognese
					</Button>
				</div>
			</div>
		</div>
	)
}

const Intro = ({ dish }) => {
	return (
		<React.Fragment>
			{dish === '' && (
				<div className='row align-items-center justify-content-center pt-5'>
					<div className='col text-right'>
						<h2>COG Calc</h2>
					</div>
					<div className='col'>
					<h5>
							Prosty i intuicyjny kalkulator kosztów wytworzenia
							dania
						</h5>
					<h6>
					<strong>
						Lepiej jest mieć policzone koszty portaw w
						restauracji niż żadne!
					</strong>
				</h6>
				<h6 className='text-danger'>
					{' '}
					<small>
						Wymagane jest posiadanie{' '}
						<strong>potrawy</strong>, którą chcemy policzyć
						oraz <strong>wagi</strong>
					</small>
				</h6>

					</div>

				</div>
			)}
		</React.Fragment>
	)
}

const Dish = ({ dish, changeDishName }) => {
	return (
		<div className='dish'>
			<div className='row align-items-center'>
				<div className='col text-right'>
					<strong>Dla jakiej potrawy liczysz koszt?</strong>
				</div>
				<div className='col'>
					<FormControl variant='outlined'>
						<TextField
							type='text'
							variant='outlined'
							value={dish}
							placeholder='Wpisz nazwę potrawy'
							onChange={(ev) => {
								changeDishName({ dish: ev.target.value })
							}}
						/>
					</FormControl>
				</div>
			</div>
		</div>
	)
}

const Header = ({
	products,
	filteredProducts,
	filterProducts,
	productsFilter,
	openModalWithProduct,
	openNewIngredientModal,
	openOfferModal
}) => {
	return (
		<React.Fragment>
			<div className='products'>
				<div className='product-filter'>
					<FormControl variant='outlined'>
						<TextField
							type='text'
							variant='outlined'
							value={productsFilter}
							placeholder={`Wyszukaj składniki (${products.length})`}
							onChange={(ev) => {
								const { value } = ev.target
								filterProducts({ filter: value })
							}}
						/>
					</FormControl>
				</div>
				<div className='products-new'>
					<div className='row'>
						<div className='col'>
							<Button
								variant='contained'
								color='secondary'
								onClick={() => {
									openNewIngredientModal()
								}}
							>
								+ stwórz swój składnik
							</Button>
						</div>
						<div className='col'>
							{' '}
							<Button
								size='small'
								variant='contained'
								color='primary'
								onClick={() => {
									openOfferModal()
								}}
							>
								Wgraj swoje aktualne ceny (plik excel)
							</Button>
						</div>
					</div>
				</div>
				<div className='products-list'>
					{filteredProducts.map((el, k) => {
						return (
							<div className='products-list-item' key={k}>
								<div className='products-filter-letter'>
									<strong>{el[0]}</strong>
								</div>
								{el[1].map((_el, k) => {
									return (
										<div
											key={k}
											className='products-list-item-button'
										>
											<Button
												size='small'
												variant='contained'
												color='primary'
												onClick={() => {
													openModalWithProduct({
														product: _el,
													})
												}}
											>
												{' + ' + _el.name}
											</Button>
											<div className='products-metrics'>
												<small>
													{_el.measure}
													{_el.unit}
												</small>
											</div>
										</div>
									)
								})}
							</div>
						)
					})}
				</div>
			</div>
		</React.Fragment>
	)
}


const ActionButtons = ({
	sum,
	weight,
	clearSelectedProducts,
	dish,
	openOfferModal,
}) => {
	if (sum !== 0) {
		return (
			<div className='action-buttons'>
				<div className='row'>
					<div className='col'>
						<Button
							size='small'
							variant='contained'
							color='secondary'
							onClick={clearSelectedProducts}
						>
							od nowa
						</Button>
					</div>
					<div className='col'>
						<Button
							size='small'
							variant='contained'
							color='primary'
							onClick={() => {
								openOfferModal()
							}}
						>
							zapisz przepis
						</Button>
					</div>
					<div className='col'>
						{' '}
						<Button
							size='large'
							variant='contained'
							color='primary'
							onClick={() => {
								openOfferModal()
							}}
						>
							ściągnij raport pdf
						</Button>
					</div>
				</div>
			</div>
		)
	}
	return null
}

  const marks = [
	{
	  value: 0,
	  label: '0%',
	},
	{
	  value: 15,
	  label: '15%',
	},
	{
		value: 25,
		label: '25%',
	  },
  ];

const Summary = ({
	sum,
	weight,
}) => {
	if (sum !== 0) {
		return (
			<div className='summary'>
				<div className='row'>
					<div className='col-2'>Łącznie</div>
					<div className='col-5'>
					{/*
					<Slider
					defaultValue={0}
					step={0.25}
					marks={marks}
					valueLabelDisplay="on"
					min={0}
					max={25}
				  />
					*/}
					
					</div>
					<div className='col-2'>
					<h4>{weight + 'g'}</h4>
					</div>
					<div className='col-3'>
						<h4>{sum + 'PLN'}</h4>
					</div>
				</div>
			</div>
		)
	}
	return null
}

const CheckboxArray = ({
	product,
	changeCostOfSelectedProduct,
	idx,
	removeOneSelectedProduct,
}) => {
	return (
		<div className="receipt-item">
		<div className='row'>
			<div className='col-2'>
			<a className="deleter" onClick={() => {
				removeOneSelectedProduct({ idx: idx })
			}}>-</a>
				<small>#{idx + 1}</small>
				
			</div>
		
			<div className='col-5'>
				<strong>{product.name}</strong>
			</div>
			<div className='col-2'>
			<small>
				{product.portion}
				{product.unit}
			</small>
		</div>
			<div className='col-3'>
				<FormControl>
					<TextField
						size='small'
						type='number'
						value={product.cost}
						variant='outlined'
						min={0}
						step={0.01}
						onChange={(ev) => {
							changeCostOfSelectedProduct({
								idx: idx,
								cost: Number(ev.target.value),
							})
						}}
					/>
				</FormControl>
			</div>
		 
		</div>
		</div>
	)
}

export { CheckboxArray, Header, Summary, Examples, Intro, Dish, ActionButtons }
