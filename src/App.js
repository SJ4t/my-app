import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderComponent from './Header/HeaderComponent';
import dataTypes from './Header/type.json';
import MapComponent from './Body/MapComponent';
import { useCookies } from 'react-cookie';

function App() {//главный компонент реакта, который рендерится в наш главный <div id=root>

  const [ form, setForm ] = useState(null);
  //это хук который отвечает за состояниия компонента.
  //Все хуки в реакте начинаются со словом 'use"
  //useState возвращает массив с двумя элементами: первое - текущее значение...
  //при обновлении состояния у нас происходит рендер Componets
  //useState как многие хуки принимайут праоаметры - значение начальго состояния 
  const [cookies, setCookie, removeCookie] = useCookies(['weather']);
//ето хук с дополнительного пакета npm react-cookie
//useСoockie massiwe c y


  console.log(cookies.weather);
  
  function handleOnSubmit(event) {
    event.preventDefault();
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];
    
    for (const dtype of event.target.dataType) {
      if (dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    let excludeDataType = dataTypes.filter(dtype => !selectedTypes.includes(dtype.value));
    const language = event.target.language.value;
    const updateData = {
      city,
      unit,
      language,
      excludeDataType,
    };
    setForm(updateData);
    setCookie('weather', updateData);
  }

//Component долежн всегда возвращать реакт елемент JSX
//JSX: Javascript с хтмл - который нам помогает совместить их вместе
//Script который совмещает их вместе
//JSX требует root element. у него должен бытьь один главный елемент. хтмл
//
  return (
    <Container>
      <Row>
        <Col>
          <HeaderComponent 
            firstName="Rasim" 
            handleOnSubmitForm={handleOnSubmit} 
            setForm={setForm}
            form={form}
            cookie={cookies.weather}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MapComponent form={form} cookie={cookies.weather}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
