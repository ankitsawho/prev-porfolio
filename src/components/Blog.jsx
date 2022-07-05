import {useEffect, useState} from 'react'
import BlogDataService from '../services/blog.services'

function Blog() {
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        getBlogs()
    }, [])
    
    const getBlogs = () => {
        BlogDataService.getBlogs().then(response => {
            setblogs(response.docs.map(doc => ({...doc.data(), id: doc.id}))) 
        }).catch(() => {
            console.log('Error')
        })
    }

    return (
        <div className="blog" id='blog'>
            <h2 className='topic'>Blog</h2>
            <div className="blog-container">

            {
                blogs.length===0 ? 
                <div className="loader"></div> :
                    blogs.map((blog,index) => {
                        return (
                            <div key={index} className="box-container blog-card-container">
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="box blog-card">
                                    <div className="blog-head">
                                        <h2>{blog.title}</h2>
                                        <span>{blog.date}</span>
                                    </div>
                                    <p>{blog.content}</p>
                                </a>
                            </div>
                        )
                    })
            }

            </div>
        </div>
    )
}

export default Blog