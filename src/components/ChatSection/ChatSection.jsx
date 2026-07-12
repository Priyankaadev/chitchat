import React from 'react'
import './ChatSection.css'
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from 'react-icons/lu'

const ChatSection = () => {
  return (
    <div className='chatsection'>
      <div className='topsection'>
        <div className='headings'>
          <span>Hello Priya</span>
          <span>I'm Your Own Assistant </span>
          <span>How can I help you....?</span>
        </div>

      </div>
      <div className='bottomsection'>
        <input type='text' placeholder='Enter a prompt' />
        <button className='sentBtn'><LuSendHorizontal  size={25} /></button>
     <Darkmode />   
     </div>

    </div>
  )
}

export default ChatSection
