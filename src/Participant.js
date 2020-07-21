import React from 'react'

function Participant(props) {

    const style = {
        fontSize: 50,
        color: null,
    }

    if(props.inSession) {
        style.color = 'green'
    } else {
        style.color = 'lightgrey'
    }

    return (
        <div>
            <img src={props.avatar} alt='avatar'/>
            <h3>{props.name}</h3>
            <span style={style}>&#8226;</span>
            <span>{props.onStage ? 'on stage' : 'observing'}</span>
        </div>
    )
}

export default Participant