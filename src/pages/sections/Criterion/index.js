import React from 'react'
import './criterion.scss'
import { ReactComponent as PersonImg } from '../../../images/person_outline-24px.svg'
import { ReactComponent as MoneyImg } from '../../../images/attach_money-24px.svg'
import { ReactComponent as WorkImg } from '../../../images/work-24px.svg'
import bg from '../../../images/database-wallpapers_598786313.jpg'

const icons = {
	money: MoneyImg,
	person: PersonImg,
	work: WorkImg,
}

const criterions = [
	{
		title: 'For whom we are',
		text:
			'(5+ units) Chains of Food&Beverage / Pharmacies / Retail / E-commerce with plans to be local dominant as soon as possible',
	},
	{
		title: 'What we do',
		text:
			'We know how to read purchases-sales data. You have a lot of data that you don’t use and which includes upgrades, ideas, money and we are digging all them out',
	},
	{
		title: 'How we can help you',
		text:
			'Information is a new, important asset for each prominent business. You are losing money every hour because you don’t use data in the correct way',
	},
]

const CriterionElement = ({ title, text, icon = 'money', flip = true }) => {
	const Icon = icons[icon]
	return (
		<div className='criterion-element'>
			<div className='row justify-content-center align-content-center'>
				{!flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
				<div className='col-10'>
					<h3 className='criterion-title'>{title}</h3>
					<h6 className='criterion-text'>{text}</h6>
				</div>

				{flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

const ForWhoWeAre = ({ icon = 'money', flip = true }) => {
	const Icon = icons[icon]
	return (
		<div className='criterion-element'>
			<div className='row justify-content-center align-content-center'>
				{!flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}

				<div className='col-10'>
					<h3 className='criterion-title'>For whom we are</h3>
					<h6 className='criterion-text'>
						(5+ units) Chains of:
					</h6>

					<ul>
						<li>Restaurants</li>
						<li>Pharmacies</li>
						<li>E-commerce</li>
						<li>Retail</li>
					</ul>
					<h6 className='criterion-text'>
						with plans to become <strong>local dominant</strong> in nearest
						future
					</h6>

				</div>

				{flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

const WhatWeDo = ({ icon = 'money', flip = true }) => {
	const Icon = icons[icon]
	return (
		<div className='criterion-element'>
			<div className='row justify-content-center align-content-center'>
				{!flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
				<div className='col-10'>
					<h3 className='criterion-title'>What we do</h3>
					<h6 className='criterion-text'>
						We know how to <strong>read purchases-sales data</strong>. You have a lot
						of data that you don’t use and 
						which hides upgrades,
						ideas, money inside and we are digging all them out
					</h6>
				</div>

				{flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

const WhyShouldHire = ({ icon = 'money', flip = true }) => {
	const Icon = icons[icon]
	return (
		<div className='criterion-element'>
			<div className='row justify-content-center align-content-center'>
				{!flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
				<div className='col-10'>
					<h3 className='criterion-title'>How we can help you</h3>
					<h6 className='criterion-text'>
						Information is a new, important asset for each prominent
						business. <strong>You are losing money every hour, because you
						don’t use data in the correct way</strong>. We can stop this leak quickly, if you trust us
					</h6>
				</div>

				{flip && (
					<div className='col-2 icon '>
						<span>
							<Icon />
						</span>
					</div>
				)}
			</div>
		</div>
	)
}

const Criterion = () => {
	return (
		<section
			className='criterion'
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className='container'>
			<div className='row'>
					<div className='col-md-8 col-sm-12'>
						<WhyShouldHire icon={'money'} flip={false} />
					</div>
				</div>
				<div className='row'>
				<div className='col-md-4' />
				<div className='col-md-8 col-sm-12'>
					<WhatWeDo {...criterions[1]} icon={'work'} />
				</div>
			</div>
				<div className='row'>
					<div className='col-md-2' />
					<div className='col-md-8 col-sm-12'>
						<ForWhoWeAre icon={'person'} flip={false} />
					</div>
				</div>
			

				
			</div>
		</section>
	)
}

export default Criterion
