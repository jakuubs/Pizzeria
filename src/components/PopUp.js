import React from 'react'
import "../styles/PopUp.css"

const PopUp = ({ message }) => {
    return (
        <div className="popup">
            {message === "success" ? <p>You've succesfuly ordered your food!</p> : <p>Oh no! Something went wrong and we couldn't palce your order :(</p>}
        </div>
    )
}

export default PopUp
