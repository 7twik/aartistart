import React from 'react'
import Aarti from './Aarti'
import './New.css'
import Nave from './Nave'
const App = () => {
  return (
    <div>
      <Nave />
      <div className="bg">
        <h1 className="c1">Aarti</h1>
        <div>
          <Aarti />
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
          <Aarti />
          <Aarti />
          <Aarti />
        </div>
      </div>
    </div>
  )
}

export default App