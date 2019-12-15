import React from 'react'
import './attention.scss'
import bg from '../../../images/think_guy_background.jpeg'

const Quote = () => {
	return (
		<div className='quote'>
			<div className="quote-line"></div>

			<h3 className='qoute-title'>
				<span className='q-mark q-start'>&bdquo;</span>
					Data science is about using data to create as much impact as
				possible for company
				<span className='q-mark q-end'>&rdquo;</span>
			</h3>
			<h6 className='qoute-author'>JT - Data Scientist from F.A.N.G.</h6>

			<div className="quote-line"></div>

		</div>
	)
}

const Attention = () => {
	return (
		<section
			className='attention'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='container'>
				<div className='row'>
					<div className='col-md-6' />
					<div className='col-md-6'>
						<Quote />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Attention
