import React from 'react'
import './interest.scss'
import Slider from './Slider'

const StoryPresentation = () => {
	return (
		<div className='row'>
			<div className='col story-header'>
				<h2 className='story-title'>
					3 Stories about <strong>John</strong> <small>(Owner)</small> and <strong>Alex</strong> <small>(Data Scientist)</small>
				</h2>
				<h6 className='story-subtitle'>
					Examples of how we help our client
				</h6>
			</div>
		</div>
	)
}

const JohnAndDS = () => {
	return (
		<div className='row'>
            <div className='col-md-6 mb-4'>
            <div className="story-cell">
            <h3>John</h3>
                <ul>
                    <li>has 5 semi-premium pizzerias in 2 cities</li>
                    <li>$174.000 - $211.000 monthly turnover</li>
                    <li>$14.500 monthly profit</li>
                </ul>
				<h6 className="story-target">He wants to own a chain of 10 pizzerias in next 3 years</h6>
                <h6 className="story-target">He wants to double his profit</h6>
            </div>
                
            </div>
            <div className='col-md-6 mb-4'>
            <div className="story-cell">
                <h3>Alex</h3>
                <ul>
					<li>has a software for "reading" the data</li>
					<li>has a Math and Economics degree</li>
					<li>can find pieces of useful information in databases</li>
                </ul>
                <h6 className="story-target">He wants to help John with his expansion plans</h6>
                </div>

			</div>
		</div>
	)
}

const Story = () => {
	return (
        <div className='story'>
        <div className="container">
			<StoryPresentation />
			<JohnAndDS />
        </div>
		</div>
	)
}


const Interest = () => {
	return (
        <section className='interest'>
				<Story />
			<div className='container'>
				<Slider />
			</div>
		</section>
	)
}

export default Interest
