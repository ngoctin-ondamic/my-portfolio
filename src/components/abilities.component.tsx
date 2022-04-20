import React from 'react'
import '../styles/abilities.style.scss'
import VerifiedIcon from '@mui/icons-material/Verified';

const Abilities = () => {
    return (
        <div className='abilities'>
            <p>My abilities</p>
            <h1>My Experience</h1>
            <div className='__boxes'>
                <div className='__singleAbility'>
                    <p>Frontend Developer</p>
                    <div className='__skills'>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>HTML</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>CSS</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Javascript</p>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Typescript</p>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>UI Libraries</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>React</p>
                            </div>
                            <small>Intermediate</small>
                        </div>
                    </div>
                </div>
                <div className='__singleAbility'>
                    <p>Backend Developer</p>
                    <div className='__skills'>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Java</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>PHP</p>
                            </div>
                            <small>Basic</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Nodejs</p>
                            </div>
                            <small>Basic</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>MSSQL</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>MongoDB</p>
                            </div>
                            <small>Basic</small>
                        </div>
                    </div>
                </div>
                <div className='__singleAbility'>
                    <p>Others</p>
                    <div className='__skills'>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Git</p>
                            </div>
                            <small>Advanced</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>SVN</p>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className='__skill'>
                            <div className='__top'>
                                <VerifiedIcon />
                                <p>Office</p>
                            </div>
                            <small>Intermediate</small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Abilities