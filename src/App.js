import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Header/NavComponent';
import { Container, Row, Col} from 'react-bootstrap';
import from 'module';

function App() {

  function handleOnSubmit (event) {
    event.preventDeaful();
    const city = event.target.city.value
    const city = event.target.city.value

    const city = event.target.city.value
    const city = event.target.city.value
  }

  return (
    <Container>
     <Row>
       <Col>
         <NavComponent />
        </Col>
     </Row>
</Container>
  );
}

export default App;
