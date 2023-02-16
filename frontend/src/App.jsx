import { useState } from 'react'
import './App.css'
import ReadAll from './components/ReadAll/ReadAll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReadAll />
    </div>
  )
}

export default App
