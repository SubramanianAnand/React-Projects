import './App.css'
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import All from './All';
import Fsd from './Fsd';
import Ds from './Ds';
import Cs from './Cs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <Router>
        <div>
          <Nav variant='underline' className='nav'>
            <Nav.Item>
              <Nav.Link href='/'>All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/fullstackdevelopment'>Full Stack Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/datascience'>Data Science</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/cybersecurity'>Cyber Security</Nav.Link>
            </Nav.Item>
          </Nav>
          <Routes>
            <Route path='/' exact Component={All}/>
            <Route path='/fullstackdevelopment' Component={Fsd}/>
            <Route path='/datascience' Component={Ds}/>
            <Route path='/cybersecurity' Component={Cs}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
