import React from 'react'
import '../styles/about.style.scss'
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const AboutMe = () => {
    return (
        <div className='about' >
            <p>My Introduction</p>
            <h1>About Me</h1>
            <div className='__content'>
                <img src='/image/about.png' />
                <div className='__left' >
                    <div className='__aboutBoxes'>
                        <div className='__aBox'>
                            <LocalPoliceOutlinedIcon />
                            <p>Experience</p>
                            <small>3 Years Working</small>
                        </div>
                        <div className='__aBox'>
                            <DoneOutlineOutlinedIcon />
                            <p>Completed</p>
                            <small>12 projects</small>
                        </div>
                        <div className='__aBox'>
                            <HeadsetMicOutlinedIcon />
                            <p>Support</p>
                            <small>Online 24/7</small>
                        </div>
                    </div>
                    <p>
                        As a fullstack developer,<br />
                        I have years of experiences relating to Web 3.0, RTC, ERP.<br />
                        Many clients are happy with projects perfectly completed.<br />
                    </p>
                    <button id='btnContactMe' >Contact Me</button>
                </div>
            </div>
        </div>
    )
}

export default AboutMe