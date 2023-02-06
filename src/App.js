
import './App.css';
import Game from './components/game';
import {Container} from 'react-bootstrap';
import Navbar from './components/nav';

function App() {

  return (
    <Container fluid className='m-0 p-0 bg-dark bg'>
      <Navbar/>
    <Container  className='p-0 pt-5 '>
     
      
      <Game />
    </Container>
    </Container>
  );
}

export default App;
