import React, { useState } from 'react'
import './services.scss'

const prices = [
	{
		sub: '£1 400',
		development: '£1 850',
	},
	{
		sub: '£300',
		development: '£10 000',
	},
]

const PricesBlock = ({ type = 'sub' }) => {
	const selectedIndex = type === 'sub' ? 0 : 1
	const initFeeType = type !== 'sub' ? 'Training cost' : 'Intergration fee'
	const monthlyCostType =
		type !== 'sub'
			? 'Software monthly subscribion'
			: 'Analitycal monthly subscribion'
	return (
		<div className='prices'>
			<h6>
				<strong>
					{initFeeType} <small>(once)</small>
				</strong>{' '}
				<span>{prices[selectedIndex].development}</span>
			</h6>
			<h6>
				<strong>
					{monthlyCostType} <small>(for each unit)</small>
				</strong>{' '}
				<span>{prices[selectedIndex].sub}</span>
			</h6>
		</div>
	)
}

const ServicePresentation = () => {
	return (
		<div className='row'>
			<div className='col services-header'>
				<h2 className='services-title'>
					Our <strong>service</strong>
				</h2>
			</div>
		</div>
	)
}

const pros = (
	<h6>
		<small>Pros</small>
	</h6>
)

const RealExample = ({
	text,
	link,
	withExclamation = false,
	delay = false,
}) => {
	return (
		<div className='real-example'>
			<a
			href={'https://docs.google.com/spreadsheets/d/1tB6QuixgeUuWNIqI7krtuSWT7PtLx3bnUIWNmccKJjw'}
			target="_blank"
			rel="noopener noreferrer"
				className={[
					'animated bounce infinite slower',
					delay ? 'delay-1s' : '',
				].join(' ')}
			>
				{withExclamation && <span>!!!</span>}
				{text}
				{withExclamation && <span>!!!</span>}
			</a>
		</div>
	)
}

const SoftwareSub = () => {
	return (
		<React.Fragment>
			<div className='col-md-3' />
			<div className='col-md-6 mb-4'>
				<div className='service-block'>
					<h3>Software subscribtion</h3>
					<h6 className='service-description'>
						My szkolimy i wyposażamy Twoich pracowników w nasz
						warsztat analityczny
					</h6>
					{pros}
					<ul>
						<li>
							Masz własnego przeszkolonego w analizach pracownika,
							z którym możesz analizować dane
						</li>
						<li>
							Warsztat, na którym pracuje Twój przeszkolony
							pracownik otrzymuje ciągłe aktualizacje oraz
							automatyzację
						</li>
					</ul>
					<RealExample text={'Watch video presentation (5min)'} />
					<PricesBlock type={'train'} />
				</div>
			</div>
			<div className='col-md-3' />
		</React.Fragment>
	)
}

const AnalitycalSub = () => {
	return (
		<React.Fragment>
			<div className='col-md-3' />
			<div className='col-md-6 mb-4'>
				<div className='service-block wanted'>
					<h3>Analitycal subscribtion</h3>
					<ul>
						<li><strong>You give us data</strong> - <strong>we give you tips</strong> how to improve your
						business</li>
						<li>
							You will learn
							<ul>
								<li>
									<strong>
									the type of product to buy, appropriate quantities and how much to sell it for
									</strong>
								</li>
								<li>
									<strong>how to present the offer to your clients</strong>
								</li>
								<li>
									<strong>
									how to improve the employees’ performance 
									</strong>
								</li>
							</ul>
						</li>
						<li>
							You gain <strong>supervision</strong> over your business <strong>at a level you have never had before</strong>.
						</li>
					</ul>
					<RealExample
						text={'Click to see the detailed report'}
						delay={true}
						withExclamation={true}
					/>
					<PricesBlock />
				</div>
			</div>
			<div className='col-md-3' />
		</React.Fragment>
	)
}

const ServiceBlocks = () => {
	return (
		<div className='row'>
			<AnalitycalSub />
			<div className='col-md-12'>
				<div className='col services-header to-contact'>
					<h6 className='services-subtitle '>
						<a>Contact to get more details</a>
					</h6>
				</div>
			</div>
		</div>
	)
}

const Services = () => {
	return (
		<section className='services'>
			<div className='container'>
				<ServicePresentation />
				<ServiceBlocks />
			</div>
		</section>
	)
}

export default Services
