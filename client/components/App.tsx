import Pixel from './Pixel'
import Sidebar from './Sidebar'

function App() {
  const pixelArr = Array.from({ length: 10000 })

  return (
    <>
      <Sidebar />
      {pixelArr.map((pixel, i) => (
        <Pixel key={i} />
      ))}
    </>
  )
}

export default App
