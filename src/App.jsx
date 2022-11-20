import { useState } from 'react'
import Test from './Components/test-component'
import './App.css'
import HomeComponent from './Components/HomeComponent/home-component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Test /> */}
      <HomeComponent />
    </div>
  )
}

export default App
