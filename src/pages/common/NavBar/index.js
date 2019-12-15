import React, {useState} from 'react'
import './navbar.scss'
import logo from '../../../images/localhost_sam.png'
import { ReactComponent as Menu } from '../../../images/menu-24px.svg'

const NavBar = () => {
	const [isMenuToggled, toggle] = useState(false)
	return (
		<React.Fragment>
			<nav className='app-navbar'>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<a className='app-navbar-logo'>
								<img src={logo} />
							</a>
						</div>
					</div>
				</div>
			</nav>
			<div
			onClick={(ev) => {
				toggle(false)
			}}
			className={['app-side-menu',isMenuToggled ? 'show' : ''].join(' ')}>
				<ul className='app-nav-menu'>
					<li className='app-nav-item active'>
						<a onClick={(ev) => {
							ev.stopPropagation()
							ev.preventDefault()
							console.log('click')
						}}>Home</a>
					</li>
					<li className='app-nav-item'>
						<a onClick={(ev) => {
							ev.stopPropagation()
							ev.preventDefault()
							console.log('click')
						}}>Link1</a>
					</li>
					<li className='app-nav-item'>
						<a onClick={(ev) => {
							ev.stopPropagation()
							ev.preventDefault()
							console.log('click')
						}}>Link2</a>
					</li>
				</ul>
			</div>
		</React.Fragment>
	)
}

export default NavBar
