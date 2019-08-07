import React from 'react'
import {
  BrowserRouter as Router, Route, Link
} from 'react-router-dom'

// components
import About from '../views/About'
import Intro from '../App'

function Navigate() {
  return (
    <div className='navigate'>
      <Router>
        <ul>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/intro'>Intro</Link>
          </li>
        </ul>

        <Route path='/about' component={About}></Route>
        <Route path='/intro' component={Intro}></Route>
      </Router>
    </div>
  )
}

export default Navigate