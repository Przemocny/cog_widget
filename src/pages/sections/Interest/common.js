import React from 'react'
import { ReactComponent as StarImage } from '../../../images/star-24px.svg'
import { ReactComponent as AddImg } from '../../../images/add-24px.svg'
import { ReactComponent as RemoveImg } from '../../../images/remove-24px.svg'

const ChatTitle = ({ title, subtitle }) => {
	return (
		<div>
			<h2 className='chat-title'>
				<span className='q-mark q-start'>&bdquo;</span>
				{title}
				<span className='q-mark q-end'>&rdquo;</span>
			</h2>
			<h6 className='chat-subtitle'>({subtitle})</h6>
		</div>
	)
}

const addClassToChildren = (children, classArr)=>{
	return React.Children.map(children, 
		child => React.cloneElement(child, 
			{ className: classArr.join(' ')}))
 }

const Star = ()=>{
	return (<span className="icon star"><StarImage/></span>)
}

const Add = ()=>{
	return (<span className="icon add"><AddImg/></span>)
}

const Remove = ()=>{
	return (<span className="icon remove"><RemoveImg/></span>)
}

const Effects = ({ children }) => {
	return (
		<div className='chat-effects'>
			<strong>
				Effects measured one month later
			</strong>
			<div className="chat-effect-list">
            	{addClassToChildren(children, ['chat-effect-list-elem'])}
			</div>
		</div>
	)
}

const ChatBubble = ({ text, person, side='left', delay=false,hidden=false }) => {
	const classes = ['chat-bubble-wrapper',
	 'animated',`fadeIn${side === 'left' ? 'Left' : 'Right'}`].join(' ')
	return (
        <li className={classes}>
            <div className={["chat-bubble", hidden ? 'd-none' : ''].join(' ')}>
                <strong>{person[0]}</strong>: {text}
            </div>
        </li>
	)
}


export {
    ChatTitle, addClassToChildren, Star, Add, Remove, Effects, ChatBubble

}