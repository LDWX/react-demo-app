import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// 组件
import Header from '../components/Header'
import Navigate from '../components/Navigate'


// 样式
import '../assets/scss/layout.css'


function Home() {
  return (
    <div>
      <Header />
      <Navigate />
      <Router>
        <div>
          helloworld
        </div>
      </Router>

    </div>
  )
}

export default Home