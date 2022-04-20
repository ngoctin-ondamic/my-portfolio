import React from 'react'
import '../styles/personal.style.scss'
const Personal = () => {
    return (
        <div className='personal'>
            <div className='__social-container' >
                <ul className="__social-icons">
                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                </ul>
            </div>
            <img src='/image/ava.jpg' />
            <button className="scrolldown">
                <div className="chevrons">
                    <div className="chevrondown" />
                    <div className="chevrondown" />
                </div>
            </button>
        </div>
    )
}

export default Personal