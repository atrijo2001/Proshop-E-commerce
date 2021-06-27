import Header from "./components/Header"
import Footer from "./components/Footer"
import { Fragment } from "react"

import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <Fragment>
      <Header/>
      <main className='py-3'>
        <Container>
          <h1>Welcome to Proshop</h1>
        </Container>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default App
