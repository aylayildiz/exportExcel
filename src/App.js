import logo from './logo.svg';
import './App.css';
import ExportExcel from './ExportExcel';
import React from 'react';

function App() {

  const ExcelExportData= [
    { "id": "5001", "type": "None" },
    { "id": "5002", "type": "Glazed" },
    { "id": "5005", "type": "Sugar" },
    { "id": "5007", "type": "Powdered Sugar" },
    { "id": "5006", "type": "Chocolate with Sprinkles" },
    { "id": "5003", "type": "Chocolate" },
    { "id": "5004", "type": "Maple" }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ExportExcel excelData= {ExcelExportData} fileName={"ExcelExport"}
        {...console.log( "excelExportData:", ExcelExportData)} />
      </header>
    </div>
  );
}

export default App;
