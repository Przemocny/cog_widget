import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'

const Examples = ({checkExample})=>{
	return (
		<React.Fragment>
			<div className='cell-row cell-list cell-row-center cell-bordered'>
				<div className='cell cell-elem'>Przykłady:</div>
				<div className='cell cell-elem'>
					<Button
					size="small"
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
					size="small"
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
					size="small"
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
				<div className='cell-row cell-head text-center mt-5'>
					<div className='cell'>
					<h2>COG Calc</h2>
						<h5>
							Prosty i intuicyjny kalkulator kosztów wytworzenia
							dania
						</h5>
						<h6>
						<strong>
							Lepiej jest mieć policzone koszty
							portaw w restauracji niż żadne!
							</strong>
						</h6>
						<h6 className='text-danger'>			<small>
							Wymagane jest posiadanie <strong>potrawy</strong>,
							którą chcemy policzyć oraz <strong>wagi</strong></small>
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
							helperText="napisz do nas, aby mieć swoje, zawsze aktualne ceny zakupu"
						/>
					</FormControl>
				</div>
				<div className="cell-horizontal-scroll">
				{filteredProducts.filter((e, k)=> k <= 10).map((el, k) => {
					return (
						<div className='cell' key={k}>
							<div>
								<Button
								size="small"
									variant='contained'
									color='primary'
									onClick={() => {
										openModalWithProduct({ product: el })
									}}
								>
									<strong>+</strong>{'  '}{el.name}
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

			
				</div>
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
				<div className='cell-row cell-list cell-spaced'>
					<div className='cell cell-elem'>
						<Button
						size='small'

							variant='contained'
							color='secondary'
							onClick={clearSelectedProducts}
						>
							od nowa
						</Button>
					</div>
					<div className='cell cell-elem'>
						<Button
						size='large'

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

const CheckboxArray = ({
	products,
	product,
	changeCostOfSelectedProduct,
	idx,
	removeOneSelectedProduct,
}) => {
	return (
		<div className='cell-row cell-list cell-bordered'>
			<div className='cell cell-elem' >
			<small>
			#{idx+1}
		</small>
	</div>
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
					size="small"

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
				size="small"

					variant='outlined'
					color='secondary'
					onClick={() => {
						removeOneSelectedProduct({ idx: idx })
					}}
				>
					-
				</Button>
			</div>
		</div>
	)
}

export { CheckboxArray, Header, Summary, Examples }