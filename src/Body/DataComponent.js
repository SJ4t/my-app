import React from 'react';
import { Table } from 'react-bootstrap';
import { sentenceCase } from 'change-case';

export default function DataComponent(props) {

  // мы может передать реакт элементу функцию, которая вернёт массив и реакт уже сам её обработает
  function generateRows() {
    if(props.weather) {
      const tr = [];
      // for loot которая берёт данные из props weather. = ответом с сервера
      // Object entries = предварительно определённая функция яваскрипт, которая работает с объектами
      // она нам возвращает массив в котором лежат данные объекта в виде массива с двумя элементами: 
      // 1. это ключ или название элемента. key
      // 2. его значение. value
      // { key1: 'value1', key2: 'value2', key2: 'value3' } = [ [ key1: 'value1'], [ key2: 'value2' ], [ key2: 'value3' ] ]
      // .push функция для того что-бы.... 
      for (const [ key, value ] of Object.entries(props.weather.main)) {
        tr.push(<tr key={key}>
            <td>{sentenceCase(key)}</td>
            <td>{value}</td>
          </tr>);
      }
      tr.push(<tr key="description">
        <td>Description</td>
        <td>{props.weather.weather[0].description}</td>
      </tr>);

      return tr;
    }
  }

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Data</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {generateRows()}

      </tbody>
    </Table>
  )
}