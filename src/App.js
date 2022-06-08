import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Header/NavComponent';
import { Container, Row, Col } from 'react-bootstrap';
import dataTypes from './Header/type.json';
import HeaderComponent from './Header/HeaderComponent';
import { useCookies } from 'react-cookie';

function App() {

  const [form, setForm] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(['weather']);

  console.log(cookies.weather)

  function handleOnSubmit(event) {
    event.preventDeaful();
    const city = event.target.city.value
    const unit = event.target.unit.value
    let selectedTypes = [];

    for (const dtype of event.targert.dataType) {
      if (dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    let excludedataTypes.filter(dtype => selectedTypes.includes(dtype.values) === false);
    const language = event.target.language.value;
    const updateData = {
      setForm({
        city,
        unit,
        language,
        excludedataTypes,
      });
    setCookie('weather', updateData)
    }

    return (
      <Container>
        <Row>
          <Col>
            <HeaderComponent firstName="Rasim"
              handleOnSubmitForm={handleOnSubmit}
              setForm={setForm} />
            form=(form)
          </Col>
        </Row>
        <Row>
          <Col>
            <MapComponent firstName="Rasim" handleOnSubmitForm={handleOnSubmit} />
          </Col>
        </Row>
      </Container>
    );

  }

  export default App;
