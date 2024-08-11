import { Link } from 'react-router-dom'
import Profile from '../../assets/profile.png'
import './index.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero-text'>
                    <div className='text-container'>
                        <h1>Hi, I'm Meg!</h1>
                        <h4>Welcome to my website. 🌙</h4>
                        <h3>I am a <span className='underline'>CS Major</span> at Cornell University & an aspiring <span className='underline'>software engineer</span>.</h3>
                        <div className='button-container'>
                            <Link to='about'>
                                <button>✨ MORE ABOUT ME ✨</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={Profile} alt='photo of me' />
                </div>
            </div>
            <hr />
            <div className='experience'>
                <h2 className='section-title'>Experience</h2>
                <div className='card-container'>
                    <div className='card'>
                        <div className='details'>
                            <p>JUL 2024 - Present</p>
                            <p>Ithaca, NY</p>
                        </div>
                        <div className='desciption'>
                            <h5>Cornell Bowers CIS</h5>
                            <p className='small-details'>JUL 2024 - PRESENT | Ithaca, NY</p>
                            <p className='role'>CS 1110 Course Consultant</p>
                            <div>
                                <ul>
                                    <li>Facilitate office hours and weekly labs, grade homework and exams, provide online assistance, and attend staff meetings to improve student understanding in Python and program design and development.</li>
                                    <li>Position offered based on course performance, Python proficiency, and demonstrated passion for computer science.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='details'>
                            <p>JAN 2024 - Present</p>
                            <p>Ithaca, NY</p>
                        </div>
                        <div className='desciption'>
                            <h5>Women in Computing at Cornell</h5>
                            <p className='small-details'>JAN 2024 - PRESENT | Ithaca, NY</p>
                            <p className='role'>Corporate Relations Director</p>
                            <div>
                                <ul>
                                    <li>Network with corporate recruiters, establishing and maintaining positive relationships with companies.</li>
                                    <li>Collaborate with tech companies to organize networking events which promote inclusivity in computing.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='details'>
                            <p>OCT 2023 - Present</p>
                            <p>Ithaca, NY</p>
                        </div>
                        <div className='desciption'>
                            <h5>Cornell University Unmanned Air Systems</h5>
                            <p className='small-details'>OCT 2023 - PRESENT | Ithaca, NY</p>
                            <p className='role'>Autopilot Software Engineer</p>
                            <div>
                                <ul>
                                    <li>Collaboratively develop a full-stack ground control station to operate an aircraft in the SUAS competition.</li>
                                    <li>Make adjustments to the frontend design of the application to make it more user friendly.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to='experience'>
                    <button>✨ VIEW ALL EXPERIENCE ✨</button>
                </Link>
            </div>
            <hr />
            <div className='portfolio'>
                <h2>Portfolio</h2>
                <div className='project-container'>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                    <div className='project'>
                        <img className='project-thumbnail' />
                        <div className='project-text'>
                            <h5>Title</h5>
                            <p>Description</p>
                        </div>
                    </div>
                </div>
                <Link to='portfolio'>
                    <button>✨ VIEW FULL PORTFOLIO ✨</button>
                </Link>
            </div>
        </div>
    )
}

export default Home