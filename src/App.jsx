import { useState } from 'react'
import Test from './Components/test-component'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Test />
    </div>
  )
}

export default App
