import React from 'react'

const DreamItem = ({ icon, text }) => {
    return (
        <div><img src={icon} alt="dream-icon" /><h3>{text}</h3></div>
    )
}

export default DreamItem