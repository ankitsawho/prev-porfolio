import {useEffect, useState} from 'react'
import ProjectDataService from '../services/project.services'

function Projects() {
    const [projects, setprojects] = useState([])

    useEffect(() => {
        getProjects()
    }, [])

    const getProjects = () => {
        ProjectDataService.getProjects().then(response => {
            setprojects(response.docs.map(doc => ({...doc.data(), id: doc.id})))
        }).catch(() => {
            console.log('Error')
        })
    }

    return (
        <div className="projects" id='projects'>
            <h2 className='topic'>Projects</h2>
            <div className="project-grid">
                
                {
                    projects.length===0 ?
                    <div className="loader"></div> :
                    projects.map((project, index) => {
                        return (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" key={index} className="project-card-container">
                                <div className="project-card">
                                    <img src={project.imageUrl} alt="project" />
                                </div>
                            </a>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects