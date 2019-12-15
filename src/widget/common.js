import React from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'


const Examples = ({checkExample})=>{
	return (
		<React.Fragment>
			<div className='cell-row cell-list cell-row-center'>
				<div className='cell cell-elem'>Przykłady:</div>
				<div className='cell cell-elem'>
					<Button
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({name:'pizza'})
						}}
					>
						Pizza hawajska
					</Button>
				</div>
				<div className='cell cell-elem'>
					<Button
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({name:'burger'})

						}}
					>
						Burger wołowy
					</Button>
				</div>
				<div className='cell cell-elem'>
					<Button
						variant='contained'
						color='primary'
						onClick={() => {
							checkExample({name:'spaghetti'})

						}}
					>
						Spaghetti bolognese
					</Button>
				</div>
			</div>
		</React.Fragment>
	)

}

const NewIngredientModal = ({
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,units,
	newIngredient,isIngredientModalShow
}) => {
	const {name, price, unit, measure } = newIngredient
	return (
		<Modal
			open={isIngredientModalShow}
			onClose={closeNewIngredientModal}
			className='modal-wrapper'
		>
			<div className='modal-inner'>
				<h3 className='text-center mb-5'>Stwórz swój składnik</h3>
				<div className='row mb-5'>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Nazwa składnika'
								variant='outlined'
								value={name}
								onChange={(ev) => {
									changeNewIngredientField({ name:'name', value:ev.target.value })
								}}
							/>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Porcja w gramach'
								variant='outlined'
								type='number'
								onChange={(ev) => {

									changeNewIngredientField({ name:'measure', value:Number(ev.target.value) })

								}}
								value={measure}
								min={0}
								step={0.5}
							/>

							<FormHelperText>
								Wpisz gramaturę lub wybierz jedną z gotowych
							</FormHelperText>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl variant='outlined'>
							<InputLabel  >Przykładowe miary</InputLabel>
							<Select
								defaulValue={'g'}
								onChange={(ev) => {
									const [selected] = units.filter(
										(el) => el.short == ev.target.value
									)
									changeNewIngredientField({ name:'measure', value:selected.measure })
								}}
							>
								{units.map((el, k) => {
									return (
										<MenuItem key={k} value={el.short}>
											{el.name} ~{el.measure}g
										</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					</div>
				</div>
				<div className='row justify-content-center align-items-center'>
				<div className="col"></div>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Cena netto za porcję (PLN)'
								variant='outlined'
								type='number'
								value={price}
								step={0.01}
								min={0}
								onChange={(ev) => {
									changeNewIngredientField({ name:'price', value:Number(ev.target.value) })
								}}
							/>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl>
							<Button
								centerRipple={true}
								onClick={() => {
									addNewIngredient()
								}}
								variant='contained'
								color='secondary'
							>
								Dodaj
							</Button>
						</FormControl>
					</div>
				</div>
			</div>
		</Modal>
	)
}

const Header = ({
	filteredProducts,
	filterProducts,
	productsFilter,
	openModalWithProduct,
	changeDishName,
	dish,
	openNewIngredientModal,

}) => {
	return (
		<React.Fragment>
			{dish === '' && (
				<div className='cell-row cell-head text-center mt-5 mb-2'>
					<div className='cell'>
						<h5>
							Prosty i intuicyjny kalkulator kosztów wytworzenia
							dania
						</h5>
						<h6>
							bo lepiej jest mieć jakiekolwiek policzone koszty
							portaw w restauracji niż żadne :)
						</h6>

						<h6 className='text-danger'>
							Wymagane jest posiadanie <strong>potrawy</strong>,
							którą chcemy policzyć oraz <strong>wagi</strong>
						</h6>
					</div>
				</div>
			)}

			<div className='cell-row cell-head'>
				<div className='cell'>
					<strong>Dla jakiej potrawy liczysz koszt?</strong>
				</div>
				<div className='cell'>
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

			<div className='cell-row cell-header'>
				<div className='cell'>
					<FormControl variant='outlined'>
						<TextField
							type='text'
							variant='outlined'
							value={productsFilter}
							placeholder='Wyszukaj składnik (550+)'
							onChange={(ev) => {
								const { value } = ev.target
								filterProducts({ filter: value })
							}}
						/>
					</FormControl>
				</div>
				{filteredProducts.map((el, k) => {
					return (
						<div className='cell' key={k}>
							<div>
								<Button
									variant='contained'
									color='primary'
									onClick={() => {
										openModalWithProduct({ product: el })
									}}
								>
									+ {el.name}
								</Button>
							</div>
							<div className='cell cell-metrics'>
								<small>
									{el.measure}
									{el.unit}
								</small>
							</div>
						</div>
					)
				})}

				<div className='cell'>
					<Button
						variant='contained'
						color='secondary'
						onClick={() => {
							openNewIngredientModal()
						}}
					>
						stwórz swój składnik
					</Button>
				</div>
			</div>
		</React.Fragment>
	)
}

const Summary = ({ sum, weight, clearSelectedProducts, dish, selectedProducts }) => {
	if (sum !== 0) {
		return (
			<React.Fragment>
				<div className='cell-row cell-list cell-row-center'>
					<div className='cell cell-elem'>Łącznie dla</div>
					<div className='cell cell-elem'>
						<h4>{dish}</h4>
					</div>
					<div className='cell cell-elem'>
						<h4>{weight + 'g'}</h4>
					</div>
					<div className='cell cell-elem'>
						<h4>{sum + 'PLN'}</h4>
					</div>
				</div>
				<div className='cell-row cell-list cell-row-center'>
					<div className='cell cell-elem'>
						<Button
							variant='contained'
							color='secondary'
							onClick={clearSelectedProducts}
						>
							od nowa
						</Button>
					</div>
					<div className='cell cell-elem'>
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								// generate({
								// 	sum, weight, dish, selectedProducts
								// })
							}}
						>
							ściągnij raport pdf
						</Button>
					</div>
				</div>
			</React.Fragment>
		)
	}
	return null
}
const NewEntryModal = ({
	isModalShow,
	units,
	activeProductInModal,
	changeUnit,
	changePortion,
	addSelectedProduct,
	closeModalWithProduct,
}) => {
	const { price, name, portion, measure, cost, unit } = activeProductInModal
	return (
		<Modal
			open={isModalShow}
			onClose={closeModalWithProduct}
			className='modal-wrapper'
		>
			<div className='modal-inner'>
				<h3 className='text-center mb-5'>Dodaj składnik</h3>
				<div className='row  mb-5'>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Koszt netto (PLN)'
								variant='outlined'
								value={name}
								step={0.01}
								min={0}
							/>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Porcja w gramach'
								variant='outlined'
								type='number'
								onChange={(ev) => {
									changePortion({
										portion: Number(ev.target.value),
									})
								}}
								value={portion}
								min={0}
								step={0.5}
							/>

							<FormHelperText>
								Wpisz gramaturę lub wybierz jedną z gotowych
							</FormHelperText>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl variant='outlined'>
							<InputLabel id='1'>Przykładowe miary</InputLabel>
							<Select
								labelId='1'
								id='1'
								defaulValue={unit}
								onChange={(ev) => {
									const [selected] = units.filter(
										(el) => el.short == ev.target.value
									)
									changeUnit({ unit: selected })
								}}
							>
								{units.map((el, k) => {
									return (
										<MenuItem key={k} value={el.short}>
											{el.name} ~{el.measure}g
										</MenuItem>
									)
								})}
							</Select>
						</FormControl>
					</div>
				</div>
				<div className='row mb-2'>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Cena netto (PLN)'
								variant='outlined'
								type='number'
								value={price}
								step={0.01}
								min={0}
							/>
							<FormHelperText
							>{`za ${measure}${unit}`}</FormHelperText>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl variant='outlined'>
							<TextField
								id='2'
								label='Koszt netto (PLN)'
								variant='outlined'
								type='number'
								value={cost}
								step={0.01}
								min={0}
							/>
							<FormHelperText
							>{`za ${portion}${unit}`}</FormHelperText>
						</FormControl>
					</div>
					<div className='col'>
						<FormControl>
							<Button
								centerRipple={true}
								onClick={() => {
									addSelectedProduct()
								}}
								variant='contained'
								color='secondary'
							>
								Dodaj
							</Button>
						</FormControl>
					</div>
				</div>
			</div>
		</Modal>
	)
}

const CheckboxArray = ({
	products,
	product,
	changeCostOfSelectedProduct,
	idx,
	removeOneSelectedProduct,
}) => {
	return (
		<div className='cell-row cell-list'>
			<div className='cell cell-elem' />
			<div className='cell cell-elem'>
				<small>
					{product.portion}
					{product.unit}
				</small>
			</div>
			<div className='cell cell-elem cell-name'>
				<strong>{product.name}</strong>
			</div>

			<div className='cell cell-elem'>
				<FormControl>
					<TextField
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
			<div className='cell cell-elem'>
				<Button
					variant='outlined'
					color='secondary'
					onClick={() => {
						removeOneSelectedProduct({ idx: idx })
					}}
				>
					Usuń
				</Button>
			</div>
		</div>
	)
}

export { NewEntryModal, CheckboxArray, NewIngredientModal, Header, Summary, Examples }
