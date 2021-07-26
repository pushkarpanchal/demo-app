import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  const callData = async () => {
    await fetch("https://api.nationalize.io/?name=nathaniel").then((res) => res.json()).then((res, err) => {
      setData(res);
    });
  };
  useEffect(() => {
    callData();
  }, []);

  const getInputData = (e) => {
    let value = document.getElementById("dataInput").value;
    setInputValue([...value]);
    console.log(inputValue)
  };

  return (
    <div className="App">
      <h1>{data.name}</h1>
      <div className="grid">
        {data.country.map((item, index) => (
          <div key={index} className="child">
            <div>
              <b>country : {item.country_id}</b>
            </div>
            <p>probability : {item.probability}</p>
          </div>
        ))}
      </div>
      <div className="input-container">
      <div className="inputDataCheck">
        <p>Please enter name</p>
        <input type="text" id="dataInput" />
        <button
          onClick={() => {
            getInputData();
          }}
        >
          get
        </button>
      </div>
      <div>
        {inputValue.length > 0 ? (
          <div style={{ marginTop: 20 }}>
            <div className="grid">
              {inputValue.map((item, index) => {
                return <div className="child">
                  <p>{item}</p>
                </div>;
              })}
            </div>
          </div>
        ) : null}
      </div>
      </div>
    </div>
  );
}
