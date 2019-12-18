import React from 'react'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'

const NewIngredientModal = ({
	changeNewIngredientField,
	addNewIngredient,
	closeNewIngredientModal,
	units,
	newIngredient,
	isIngredientModalShow,
}) => {
	const { name, price, unit, measure } = newIngredient
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
									changeNewIngredientField({
										name: 'name',
										value: ev.target.value,
									})
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
									changeNewIngredientField({
										name: 'measure',
										value: Number(ev.target.value),
									})
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
							<InputLabel>Przykładowe miary</InputLabel>
							<Select
								defaulValue={'g'}
								onChange={(ev) => {
									const [selected] = units.filter(
										(el) => el.short == ev.target.value
									)
									changeNewIngredientField({
										name: 'measure',
										value: selected.measure,
									})
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
					<div className='col' />
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
									changeNewIngredientField({
										name: 'price',
										value: Number(ev.target.value),
									})
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

const OfferModal = ({ isOfferModalShow, closeOfferModal }) => {
	return (
		<Modal open={isOfferModalShow} onClose={closeOfferModal} className='modal-wrapper'>
			<div className='modal-inner'>
			
		
				<h2 className='text-center'>
					Stań się świadomym restauratorem
				</h2>
				<h3 className='text-center mb-5'>
					Zyskaj przewagę w regionie, dzięki wsparciu analityków
				</h3>
				<div className='row mb-5'>
					<div className='col'>
						<h3 className="mb-4">Zyskasz:</h3>
						<ul>
							<li>
								<h5>Pełen nadzór właścicielski</h5>
								<h6  className="mb-4">
									Kontroluj wszystkie aspekty swojej oferty,
									sprzedaży oraz zakupów.
								</h6>
							</li>
							<li>
								<h5>Ofertę szytą na miarę Twojego klienta</h5>
								<h6  className="mb-4">
									Zmieniaj ofertę dynamicznie na podstawie
									przyzwyczajeń swoich klientów zarabiając przy tym jak najwięcej
								</h6>
							</li>

							<li>
								<h5>Aktywną redukcję strat</h5>
								<h6  className="mb-4">
									Dzięki podejściu opartemu o dane zmniejszysz
									straty żywności nawet o 40%. Kupuj tylko to co wiesz, że się sprzeda
								</h6>
							</li>
						</ul>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col'>
						<FormControl>
							<Button
								centerRipple={true}
								href="mailto:restaurant@localhost-group.com"
								variant='contained'
								color='primary'
							>
								Zamów audyt swojej restauracji
							</Button>
						</FormControl>
					</div>

					<div className='col text-right'>
						<FormControl>
							<Button
							size='large'
								centerRipple={true}
								href="mailto:restaurant@localhost-group.com"
								variant='contained'
								color='secondary'
							>
								Jestem zainteresowany tym narzędziem
							</Button>
						</FormControl>
					</div>
				</div>

				<div className="row">
				<div className='col'>
				
				<div className='error-msg'>
			<h5 className='text-center'>
			Darmowa wersja demonstracyjna - aby uzyskać dostęp do pełnych możliwości narzędzia skontaktuj się z nami
		</h5>

			</div></div>
				</div>
			</div>
		</Modal>
	)
}

const NewEntryModal = ({
	isModalShow,
	units,
	activeProductInModal,
	changeUnit,
	changePortion,
	addSelectedProduct,
	closeModalWithProduct,
	changePriceOfSelectedProduct
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
								onChange={(ev) => {
									changePriceOfSelectedProduct({
										price: Number(ev.target.value),
									})
								}}
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

export { NewEntryModal, NewIngredientModal, OfferModal }
