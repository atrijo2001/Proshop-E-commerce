import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"

import React, {Fragment} from "react"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <Router>
      <Fragment>
            <Header/>
            <main className='py-3'>
              <Container>
                <Route exact path='/' component={HomeScreen}/>
                <Route path='/product/:id' component={ProductScreen}/>
              </Container>
            </main>
            <Footer/>
      </Fragment>
    </Router>
    
  )
}

export default App
