import React, { useRef } from 'react'
import Slider from 'react-slick'
import { ReactComponent as NextIcon } from '../../../images/keyboard_arrow_right-24px.svg'

import { Chat1, Chat2, Chat3} from './Chats'

var settings = {
	dots: false,
	infinite: true,
	speed: 500,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
}


const NextSlideButton = ({slider, chat})=>{
	return (
		<div className="next-slick-button">
				<a
					onClick={() => {
						slider.current.slickNext()
						window.scrollTo({
							left:0, 
							top:chat.current.offsetTop - 60,
							behavior:'smooth'})   
					}}
				>
					Next example
					<span className="icon next">
						<NextIcon/>
					</span>
				</a>
			</div>
	)
}

const SimpleSlide = ({ children, slider, chat }) => {
	return (
		<div className='chat-cell-wrapper'>
			<div>{children}</div>
			<NextSlideButton slider={slider} chat={chat}/>
		</div>
	)
}
const Sliders = () => {
	const slider = useRef(null)
	const chat = useRef(null)
	return (
		<div className='chat' ref={chat}>
			<Slider ref={slider} {...settings}>
				<SimpleSlide slider={slider} chat={chat}>
					<Chat1 />
				</SimpleSlide>
				<SimpleSlide slider={slider} chat={chat}>
					<Chat2 />
				</SimpleSlide>
				<SimpleSlide slider={slider} chat={chat}>
					<Chat3 />
				</SimpleSlide>
			</Slider>
		</div>
	)
}
export default Sliders
