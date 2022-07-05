import React from 'react'

function MyPhoto(props) {
    return (
        <div className="myPhoto">
            <div className="myPhoto-border">
            <img src={props.imgUrl} alt="Ankit Sahu"/>
            </div>
        </div>
    )
}

export default MyPhoto