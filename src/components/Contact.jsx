import {useState} from 'react'
import {Button} from '@material-ui/core'
import {AiFillGithub, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import { useSnackbar } from 'react-simple-snackbar'
import MessageDataService from '../services/message.services'

function Contact() {
    const [openSnackbar] = useSnackbar()
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setloading] = useState(false)

    const sendMessage = () => {
        setloading(true)
        
        if(name === "" || email === "" || message === ""){
            openSnackbar("Please fill all the fields")
            setloading(false)
            return
        }
        const newMessage = {
            name,
            email,
            message
        }
        MessageDataService.addMessage(newMessage).then(() => {

            openSnackbar('Message sent!')
            setname("")
            setEmail("")
            setMessage("")
            setloading(false)
        }).catch(() => {
            openSnackbar("Couldn't send the message")
            setloading(false)
        })
    }

    return (
        <div className="contact" id='contact'>
            <h2 className='topic'>Contact Me</h2>
            <div className="contact-container">
                <input type="text" placeholder='Name' value={name} onChange = {
                    (e) => setname(e.target.value)
                } />
                <input type="email" placeholder='Email' value={email} onChange = {
                    (e) => setEmail(e.target.value)
                } />
                <textarea cols="30" rows="10" placeholder='Type your message here' value={message} onChange={
                    (e) => {
                        setMessage(e.target.value)
                    }
                }></textarea>
            </div>
            {
                !loading ? <Button className='send-btn' onClick={sendMessage}>Send</Button> : <div className="loader"></div>
            }

            <div className="social-links">
                <a href="https://www.github.com/ankitsawho" target="_blank" rel="noopener noreferrer"><AiFillGithub/></a>
                <a href="https://www.twitter.com/ankitsawho" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter/></a>
                <a href="https://www.linkedin.com/in/ankit-kumar-sahu-8817681a4/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
            </div>
        </div>
    )
}

export default Contact