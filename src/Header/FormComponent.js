import React, { useRef, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import cities from './cities.json';
import dataTypes from './type.json';

export default function FormComponent(props) {
  // useRef это хук который в основном как способ получить доступ к браузероскому DOM'у
  // что бы назначить на какой элемент будем ссылаться, мы используем атрибут ref={} в html
  // мы получаем всё дерево DOM в объекте current. formElement.current
  const formElement = useRef(null);

  // useEffect по большей степени используется для работы с бр. DOM
  // useEffect запускается после того как рендер компонента закончился.
  // useEffect на сам компонент, он не запускает рендер или ре-рендер
  useEffect(() => {
    if (props.form === null) {
      props.setForm({
        city: props.selectedCity,
        unit: props.unit,
        language: props.language,
      });
    }
  });

  // onInput запускается при введении пользователем данных в input thml teg.
  // только в Form и input teg
  function OnInput() {
    // функция которая берёт ссылку на элемент (Form) DOM и назначает ему новое событие. это новое событие запускает Submit функцию формы
    formElement.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }

  // onInput и onSubmit это события хтмл это вещи которые происходят в элементами хтмл
  // события исходят из браузера и из пользователя
  // у события должен быть обработчик - javascript функция
  // событие передаёт обработчику: DOM структуру элемента на, котором висит прослушка события.
  // event.target 

  // Form форма используется для получения данных от пользователя и отправки их на сервер для обработки
  // Form для этого используется два главных протокола Post и Get
  // POST 
  // GET
  // по 
  // а если
  // в форме используются input тэги для сбора данных

  // в реакте каждый элемент должен быть уникальным. это нужно для отслеживания любых изминений 
  // и тем самым рендерит только то, что необходимо
  return (
    <Container>
      <Form method="GET" ref={formElement} onInput={OnInput} onSubmit={props.handleOnSubmitForm}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>Choose city</Form.Label>
              <Form.Select defaultValue={(props.cookie || {}).city || props.selectedCity} name="city" aria-label="Default select example">
                <option>Open this select menu</option>
                {cities.map((city, i) =>
                  <option value={i} key={city.name}>{city.name}</option>
                )}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="language">
              <Form.Label>Choose language</Form.Label>
              <Form.Select defaultValue={(props.cookie || {}).laguage || props.language} name="language" aria-label="Default select example">
                <option>Choose language</option>
                {['en', 'fi', 'ru'].map(language =>
                  <option key={language}>{language}</option>
                )}
              </Form.Select>
            </Form.Group>

          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="unit">
              <Form.Label>Choose unit</Form.Label>
              {['standard', 'metric', 'imperial'].map(unit => {
                let isChecked = props.unit === unit;
                if ((props.cookie || {}).unit) {
                  isChecked = props.cookie.unit === unit;
                }

                return (<Form.Check
                  key={unit}
                  id={unit}
                  name="unit"
                  type='radio'
                  defaultChecked={props.unit === unit}
                  label={unit}
                  value={unit}
                />)
              }
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="dataType">
              <Form.Label>Choose Data type</Form.Label>
              {dataTypes.map(dtype => {
                let isSelected = props.dataType.value === dtype.value;

                if ((props.cookie || {}).excludeDataType) {
                  let exclude = props.cookie.excludeDataType.find(type => type.value === dtype.value);
                  if (exclude) {
                    isSelected = false;
                  } else {
                    isSelected = true;
                  }
                }

                return (<Form.Check
                  key={dtype.value}
                  id={dtype.value}
                  type="checkbox"
                  name="dataType"
                  defaultChecked={props.dataType.value === dtype.value}
                  label={dtype.label}
                  value={dtype.value}
                />)
              }

              )}
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

FormComponent.defaultProps = {
  selectedCity: 0,
  language: "en",
  dataType: dataTypes.find(type => type.label === 'Daily'),
  unit: "metric",
}