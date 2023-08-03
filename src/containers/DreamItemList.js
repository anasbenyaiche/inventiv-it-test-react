import React from 'react'
import DreamItem from '../components/DreamItem'

const list = [{
    icon: "../logo.svg",
    text: "ipsom lorem",
}, {
    icon: "../logo.svg",
    text: "ipsom lorem",
}, {
    icon: "../logo.svg",
    text: "ipsom lorem",
}, {
    icon: "../logo.svg",
    text: "ipsom lorem",
},]

const DreamItemList = () => {
    return (
        <div>{list.map(({ icon, text }) => <DreamItem icon={icon} text={text} />)}</div>
    )
}

export default DreamItemList