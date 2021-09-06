import { useEffect, useState } from "react";
import './App.css';

export default function App() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Namste");
  }, []);


  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
