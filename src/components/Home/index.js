import { Link } from 'react-router-dom';
import LogoTitle from'../../assets/images/logo-s.png'
import './index.scss'; 
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const name = 'yomide'
    const title = 'Software Developer'
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [...name]
    const jobArray = [...title]

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 5000);
    })

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Software Developer / Expert 1/ Expert 2 etc</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home