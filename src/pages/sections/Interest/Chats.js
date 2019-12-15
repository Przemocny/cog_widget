import React from 'react'
import { ChatTitle, Star, Add, Remove, Effects, ChatBubble } from './common'

const Chat1 = () => {
	return (
		<div className='row'>
			<div className='col'>
				<ChatTitle
					title={"Story 1: Don't Loose Money"}
					subtitle={"Alex working on John's database"}
				/>
                <ul className='chat-conversation'>
                    <ChatBubble person={'Alex'} text={'Hey John, you have 64 kinds of pizza in your menu.'}/>
                    <ChatBubble person={'John'} text={'Yes, and so?'} side={'r'} delay={'1s'}/>
                    <ChatBubble person={'Alex'} text={'Do you know that 5 types of pizza in 3 pizzerias and 6 types of pizza in 2 pizzerias generated you 87% of your monthly sales and 73% of your monthly profit?'} delay={'2s'}/>
                    <ChatBubble person={'John'} text={'So what can i do?'} side={'r'} delay={'3s'}/>
                    <ChatBubble person={'Alex'} text={'Let me rebuild your offer to suit to your customers.'} delay={'4s'}/>
				</ul>
				<Effects>
					<div><Add/><span>Monthly food losses decreased with 32%</span></div>
					<div><Add/><span>Monthly sales from pizzas increased with 11%</span></div>
					<div><Add/><span>Monthly profit increased with 18%</span></div>
				</Effects>
				<ul className='chat-conversation'>
					<ChatBubble person={'Alex'} text={'What do you think of the results, John?'}/>
					<ChatBubble person={'John'} text={"Good job, Alex. I’m looking forward to getting another recommendation"} side={'r'} delay={'1s'}/>
				</ul>
			</div>
		</div>
	)
}


const Chat2 = () => {
	return (
		<div className='row'>
			<div className='col'>
				<ChatTitle
					title={"Story 2: Ask and you will have it"}
					subtitle={"John has a business idea"}
				/>
				<ul className='chat-conversation'>
					<ChatBubble hidden={true} person={'Alex'} text={""}/>
					<ChatBubble person={'John'} text={'I think we should sell more coffee in pizzerias, I know that I make a big profit from selling it'} side={'r'} delay={'1s'}/>
                    <ChatBubble person={'Alex'} text={"OK, John, you're right. You have 10 types of coffee with 8 different prices. You sell only 6 types of coffee. Let's reduce 8 prices to 3 and match 6 types to these prices"}/>
                    <ChatBubble person={'John'} text={"OK, your previous recommendations worked well, so let's try"} side={'r'} delay={'3s'}/>
                    <ChatBubble person={'Alex'} text={'OK, let me change the coffee menu'} delay={'4s'}/>
				</ul>
				<Effects>
					<div><Add/><span>Monthly sales of coffee increased with 17%</span></div>
					<div><Add/><span>Monthly profit increased with 8%</span></div>
				</Effects>
				<ul className='chat-conversation'>
					<ChatBubble person={'Alex'} text={'That was a clever move, John!'}/>
				</ul>
			</div>
		</div>
	)
}






const Chat3 = () => {
	return (
		<div className='row'>
			<div className='col'>
				<ChatTitle
					title={"Story 3: Test your customers"}
					subtitle={"Alex working on John's database"}
				/>
                <ul className='chat-conversation'>
                    <ChatBubble person={'Alex'} text={'Hey John, I noticed that there a pizzas for $20, $21 and $22. I think they can cost $22 each'}/>
                    <ChatBubble person={'John'} text={'How do you know that?'} side={'r'} delay={'1s'}/>
                    <ChatBubble person={'Alex'} text={'There are some signs in the database that your customer can pay for pizza even $24'} delay={'2s'}/>
                    <ChatBubble person={'John'} text={'OK, we can try that, but only for a month, to check'} side={'r'} delay={'3s'}/>
                    <ChatBubble person={'Alex'} text={'OK, let me change your offer'} delay={'4s'}/>
				</ul>
				<Effects>
					<div><Remove/><span>Monthly sales decreased with 9%</span></div>
					<div><Add/><span>Monthly profit increased with 13%</span></div>
				</Effects>
				<ul className='chat-conversation'>
					<ChatBubble person={'Alex'} text={'Alright, John, this recommendation works. Now, I would like to focus on another thing.'}/>
					<ChatBubble person={'John'} text={'Yes, it does! Excellent job Alex. If you need anything, feel free to ask!'} side={'r'} delay={'1s'}/>
				</ul>
			</div>
		</div>
	)
}


export { Chat1, Chat2, Chat3}

 