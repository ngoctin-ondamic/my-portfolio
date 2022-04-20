import React from 'react'
import '../styles/introduction.style.scss'

const Introducion = () => {
  return (
    <div className='introduction' >
      <p>Hello, I'm</p>
      <h1>Nguyen Ngoc Tin</h1>
      <p>Fullstack developer</p>
      <div className='introduction__button' >
          <button id='btnDownloadCV'>Download CV</button>
          <button id='btnLetsTalk' > Let's talk</button>
      </div>
    </div>
  )
}

export default Introducion