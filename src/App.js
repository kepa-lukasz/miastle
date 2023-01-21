
import './App.css';
import Game from './components/game';
import {Container} from 'react-bootstrap';
import Navbar from './components/nav';

function App() {

  return (
    <Container  className='m-0 p-0 bg-dark' style={{maxWidth : "100%", minHeight : "100vh"}}>
      <Navbar/>
    <Container  className='p-0 pt-5 bg-dark'>
     
      
      <Game />
    </Container>
    </Container>
  );
}

export default App;
