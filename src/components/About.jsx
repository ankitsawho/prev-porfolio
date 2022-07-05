import {useEffect, useState} from 'react'
import MyPhoto from './MyPhoto'
import {Button} from '@material-ui/core'
import {ImLinkedin2} from 'react-icons/im'
import {BiNetworkChart} from 'react-icons/bi'
import {FaReact} from 'react-icons/fa'
import {RiFlutterFill} from 'react-icons/ri'
import {SiSolidity, SiDjango} from 'react-icons/si'
import AboutDataServices from '../services/about.services'

function About() {
    const [about, setAbout] = useState(null)
    const [skills, setSkills] = useState(null)

    useEffect(() => {
        getData()
    }, [])
    
    const getData = () => {
        AboutDataServices.getData().then(response => {
            setAbout(response.docs[0].data())
            setSkills(response.docs[1].data())
        }).catch(() => {
            console.log('Error')
        })
    }

    return (
        about ? 
        <div>
            <div className="about-container">
            <div className="about-top-container">
                <div className="about">
                    <h1>{about.title}</h1>
                    <h3>{about.subtitle}</h3>
                </div>
            <MyPhoto imgUrl={about.profilePhotoUrl} />
            </div>
            <p>{about.content}</p>
            <div className="about-btn">
                <Button className='resume-btn' onClick={
                    () => {
                        window.open(about.resumeUrl, "_blank")
                    }
                }>Resume</Button>
                <a href="https://www.linkedin.com/in/ankit-kumar-sahu-8817681a4/" className='linkedin-btn' rel="noreferrer" target="_blank"><ImLinkedin2 /></a>
            </div>
        </div>

        <div className="skills">
            <h2 className='topic'>My Skills</h2>
            <div className="skills-container">
                <div className="skill-container skill-item">
                    <div className="skill-head">
                        <BiNetworkChart className="skill-icon"/>
                        <h3>AI and ML</h3>
                    </div>
                    <div className="box skill-detail">
                        {skills.ai}
                    </div>
                </div>
            
                <div className="skill-container skill-item">
                    <div className="skill-head">
                        <FaReact className="skill-icon"/>
                        <h3>React Js</h3>
                    </div>
                    <div className="box skill-detail">
                        {skills.react}
                    </div>
                </div>
            
                <div className="skill-container skill-item">
                    <div className="skill-head">
                        <RiFlutterFill className="skill-icon"/>
                        <h3>Flutter</h3>
                    </div>
                    <div className="box skill-detail">
                        {skills.flutter}
                    </div>
                </div>

                <div className="skill-container skill-item">
                    <div className="skill-head">
                        <SiSolidity className="skill-icon"/>
                        <h3>Solidity</h3>
                    </div>
                    <div className="box skill-detail">
                        {skills.solidity}
                    </div>
                </div>
            
                <div className="skill-container skill-item">
                    <div className="skill-head">
                        <SiDjango className="skill-icon"/>
                        <h3>Django</h3>
                    </div>
                    <div className="box skill-detail">
                        {skills.django}
                    </div>
                </div>
            </div>
        </div>
        </div>
        : 
        <div className="loader"></div>
    )
}

export default About