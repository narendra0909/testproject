import {Component} from 'react'
import playersvg from '../images/videoplayer.png'
import connectImage from '../images/connectionimage.png'
import counsellerPhoto from '../images/cardimage.png'
import stripImage from '../images/stripimage.png'
import carouselImage from '../images/carouselimage.png'
import './index.css'


class Home extends Component {

    bannerSection = () => (
        <div>
            <div className="banner-container">
            <h1 className="banner-heading">
                Prepare for <br/> India's Leading  educators
            </h1>
            <p className="banner-content">Struggling to find the right mentor ? | Not sure how to make  way to your  desired university ? | Want to gain exposure and <br/>
            make informed choice ? | Desire to connect with exposure and network across the Globe ? | Guidance from the young mentors</p>

        </div>
        <div className="video-container">
            <img className="video-image" src={playersvg} alt="video player"/>

        </div>
        <div className="buttons-play">
            <button type="button" className="get-started">Get Started</button>
            <button type="button" className="download-guide">Download Guide</button>
        </div>
        <div className="university-role">
            <div className="role">
                <p className="role-description">
                    Shortlist Universities and Apply
                </p>

            </div>
            <div className="role">
                <p className="role-description">
                    Write Outstanding SOP and LORs
                </p>

            </div>
            <div className="role">
                <p className="role-description">
                    Financial counselling & Scholarships
                </p>

            </div>
            <div className="role">
                <p className="role-description">
                    Secure Your visa
                </p>

            </div>
        </div>
        </div>
    )

    letsConnectSection =()=>(
        <div className="connect-section">
            <div className="image-one">
                <img src={connectImage} className="connect-section-image" alt="connect-mobile" />
            </div>
            <div className="connect-section-content">
                <h1 className="connect-section-heading">
                    Meet your <br/> Mentor

                </h1>
                <p className="connect-section-description">
                    Are you looking for a mentor who is genuinely interested in <br/>
                    helping you, listening to you without any judgement or <br/>
                     evaluation & empathetic towards your feelings ? <br/>
                    Someone who is forward thinker, visionary & trustable to <br/>
                     Unconfuse you so that you can select the right pathway for a <br/>
                    successfull career. <br/>
                    If your answer is Yes, book your appointment today with <br/>
                    Mr. Asslam Shaikh, a successful entrepreneur, student mentor, <br/>
                    career counselor & a speaker. <br/>
                    You are guaranteed of effective counselling with a breakthrough <br/>
                    results.
                </p>
            </div>
            


        </div>
    )

    counsellingSection = () => (
        <div className="counselling-section-container">
            <div className="counselling-section">
                <h1 className="counselling-section-heading">Meet the counsellers</h1>
                <p className="counselling-section-description">
                    A line to speak about featured destination, programme or university. A line to speak <br/>
                     about featured destination, programme or university
                </p>
            </div>
            <div className="counseller-card-section">
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
            </div>
            <div className="counseller-card-section">
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
                <div className="card-item">
                    <img src={counsellerPhoto} className="card-image" alt="counseller logo" />
                    <h2 className="card-title">Name Surname</h2>
                    <p className="designation">Counseller</p>
                </div>
            </div>
        </div>
    )

    carouselSection=()=>(
        <div className="crousel-container">
            <div className="carousel-item">
                <div className="centre-align">
                <img src={carouselImage} className="carosel-image" alt="carousel"/>
                <h3 className="parent-name"> Mr. Sam Tagore</h3>
                <button type="button" className="parent-button">PARENT</button>
                </div>
                <div className="carosule-content-desc">
                    <p className="carosule-content">
                        Student's testimonial will come here student's <br/>
                        testimonial will come here Student's testimonial will <br/>
                        come here Student's testimonial will come here <br/>
                        Student's testimonial will come here student's <br/>
                        testimonial will come... <span className="extra">Read More</span>
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="centre-align">
                <img src={carouselImage} className="carosel-image" alt="carousel"/>
                <h3 className="parent-name"> Mr. Sam Tagore</h3>
                <button type="button" className="parent-button">PARENT</button>
                </div>
                <div className="carosule-content-desc">
                    <p className="carosule-content">
                        Student's testimonial will come here student's <br/>
                        testimonial will come here Student's testimonial will <br/>
                        come here Student's testimonial will come here <br/>
                        Student's testimonial will come here student's <br/>
                        testimonial will come... <span className="extra">Read More</span>
                    </p>
                </div>
            </div>
            <div className="carousel-item">
                <div className="centre-align">
                <img src={carouselImage} className="carosel-image" alt="carousel"/>
                <h3 className="parent-name"> Mr. Sam Tagore</h3>
                <button type="button" className="parent-button">PARENT</button>
                </div>
                <div className="carosule-content-desc">
                    <p className="carosule-content">
                        Student's testimonial will come here student's <br/>
                        testimonial will come here Student's testimonial  <br/>
                        come here Student's testimonial will come here <br/>
                        Student's testimonial will come here student's <br/>
                        testimonial will come... <span className="extra">Read More</span>
                    </p>
                </div>
            </div>
            
        </div>
        
    )

    strip =()=>(
        <div className="strip-container">
            <div className="strip">
                <h1 className="strip-heading">Our 10 years of <br/> achievements </h1>
                <p className="sub-heading">with our super powers we have reached here</p>
            </div>
            <div className="strip-1">
            <div className="strip-item-section">
                <img src={stripImage} className="strip-image" alt="stats"/>
                <div className="strip-stats">
                    <h1 className="stats-title">8+</h1>
                    <p className="strip-subhead">Years of experience</p>
                </div>

            </div>
            <div className="strip-item-section">
                <img src={stripImage} className="strip-image" alt="stats"/>
                <div className="strip-stats">
                    <h1 className="stats-title">19868</h1>
                    <p className="strip-subhead">students counselled</p>
                </div>

            </div>
            </div>
            <div className="strip-2">
            <div className="strip-item-section">
                <img src={stripImage} className="strip-image" alt="stats"/>
                <div className="strip-stats">
                    <h1 className="stats-title">98%</h1>
                    <p className="strip-subhead">Admissoin rate</p>
                </div>

            </div>
            <div className="strip-item-section">
                <img src={stripImage} className="strip-image" alt="stats"/>
                <div className="strip-stats">
                    <h1 className="stats-title">32</h1>
                    <p className="strip-subhead">Full scholarship Students</p>
                </div>

            </div>
            </div>
        </div>
    )

    courseModule =()=>(
        <div className="course-module-container">
            <div className="course-plan">
                <h1 className="course-title">FULL MODULE</h1>
                <h1 className="course-cost">₹ 1,63,000 </h1>
                <p className="prefered">Preferred Plan </p>
                <ul className="plan-list">
                <li className="plan-list-item">SAT</li>
                <li className="plan-list-item">Time Managanement</li>
                <li className="plan-list-item">Recommendation letter</li>
                <li className="plan-list-item">Sessions that make you winner in life</li>
                
                </ul>
                <button type="submit" className="pay-now-btn">Pay now</button>
                <p className="view">View & Compare Plans</p>
            </div>

            <div className="course-plan">
                <h1 className="course-title">PER MODULE</h1>
                <h1 className="course-cost">₹ 1,63,000 </h1>
                <p className="prefered">Preferred Plan </p>
                <ul className="plan-list">
                <li className="plan-list-item">SAT</li>
                <li className="plan-list-item">Time Managanement</li>
                <li className="plan-list-item">Recommendation letter</li>
                <li className="plan-list-item">Sessions that make you winner in life</li>
                
                </ul>
                <button type="submit" className="pay-now-btn">Pay now</button>
                <p className="view">View & Compare Plans</p>
            </div>

            <div className="course-plan">
                <h1 className="course-title">DESIRED</h1>
                <h1 className="course-cost">₹ 1,63,000 </h1>
                <p className="prefered">Preferred Plan </p>
                <ul className="plan-list">
                <li className="plan-list-item">SAT</li>
                <li className="plan-list-item">Time Managanement</li>
                <li className="plan-list-item">Recommendation letter</li>
                <li className="plan-list-item">Sessions that make you winner in life</li>
                
                </ul>
                <button type="submit" className="pay-now-btn">Pay now</button>
                <p className="view">View & Compare Plans</p>
            </div>

        </div>
    )




    render(){
        
        return (
            <div className="home-container">
                {this.bannerSection()}
                {this.letsConnectSection()}
                <div className="button-class"><button type="button" className="connect-button">Lets connect?</button>
                </div>
                {this.counsellingSection()}
                {this.carouselSection()}
                <div className="carousel-dots">
  
                    <span className="dot"></span>
                    <span className="dot active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    </div>
                {this.strip()}
                <h1 className="counselling-section-heading">Pricing to suit all <br/> sizes of budget</h1>
                <p className="counselling-section-description">
                    A line to speak about featured destination, programme or university. A line to speak <br/>
                     about featured destination, programme or university
                </p>
                {this.courseModule()}
            </div>
        )
    }
}

export default Home