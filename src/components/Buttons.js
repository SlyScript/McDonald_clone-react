import React from 'react'

function Buttons(props) {
    const text = props.text
  return (
    <div>
        <button>{text}</button>
    </div>
  )
}

export default Buttons;