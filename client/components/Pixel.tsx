import { useState, useEffect } from 'react'

function Pixel() {
  const getRandomColor = () => "#ffffff";


  const [color, setColor] = useState(getRandomColor())

  const handleClick = () => {
    setColor('green')
  }

  const handleDoubleClick = () => {
    setColor('white')
  }

  const handleMouseDrag = () => {
    setColor('lightblue')
  }

  const handleRightClick = (event) => {
    event.preventDefault()
    setColor('black')
  }


  return (
    <div
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      onDragEnter={handleMouseDrag}
      onContextMenu={handleRightClick}
      style={{
        height: '40px',
        width: '40px',
        backgroundColor: color,
      }}
    ></div>
  )
}

export default Pixel
