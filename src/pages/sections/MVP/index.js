import React from 'react'
import './mvp.scss'

// - DSLab - we'll help you to grow faster with your data

// - Passion (dlaczego to robie)- Our passion is to help business to better understand their numbers
// - Mission (co robie) - Our mission is to be trusted business partner and help you to grow your business to world-wide size
// - Vision (po co to robie)- Our vision is to make from a medium-size business an unicorn thanks to our analytic support

// const Mission = () => {
// 	return (
// 		<div className='container mvp-container'>
// 			<div className='row'>
// 				<div className='col'>
// 					<h3 className='mvp-title'>Our Mission</h3>
// 				</div>
// 			</div>
// 			<div className='row'>
// 				<div className='col'>
// 					<h5 className='mvp-text'>
// 						To be <strong>trusted business partner</strong> and help in deciding how to grow
// 						your business to world-wide size efficiently
// 					</h5>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// const Vision = () => {
// 	return (
// 		<div className='container mvp-container'>
// 			<div className='row'>
// 				<div className='col'>
// 					<h3 className='mvp-title delay-1'>
// 					Our Vision
// 					</h3>
// 				</div>
// 			</div>
// 			<div className='row'>
// 				<div className='col'>
// 					<h5 className='mvp-text'>
// 					To make a medium-size business <strong>the unicorn</strong> thanks to
// 					our analytic support
// 					</h5>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

const Passion = () => {
	return (
        <div className='container mvp-container'>
        <div className='row'>
				<div className='col'>
					<div className='mvp-line' />
				</div>
			</div>
			<div className='row'>
				<div className='col'>
					<h2 className='mvp-text text-center'>
						<strong>Our passion</strong> is to show business <strong>the incredible power</strong> of
						their data
					</h2>
				</div>
            </div>
            <div className='row'>
				<div className='col'>
					<div className='mvp-line' />
				</div>
			</div>
		</div>
	)
}

const MissionVisionPassion = () => {
	return (
		<section className='mvp'>
			<div className='container'>
			<div className='row'>
				<div className='col-md-12'>
					<Passion />
				</div>
			</div>
			{/*
			<div className='row'>
				<div className='col-md-6'>
					<Mission />
				</div>

				<div className='col-md-6'>
					<Vision />
				</div>
			</div>
			*/}
			
			</div>
		</section>
	)
}

export default MissionVisionPassion
