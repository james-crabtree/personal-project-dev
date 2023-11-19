import Pixel from './Pixel'
import Sidebar from './Sidebar'
import ColorPicker from './ColorPicker'

function App() {
  const pixelArr = Array.from({ length: 10000 })

  return (
    <>
      <Sidebar />
      <ColorPicker />
      {pixelArr.map((pixel, i) => (
        <Pixel key={i} />
      ))}
    </>
  )
}

export default App
