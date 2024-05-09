import { useState, useEffect } from "react";
import Card from "./Components/Card";
import "./App.css";

export default function App() {
  const [money, setMoney] = useState([]);

  function getMoney() {
    fetch(
      "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMoney(Object.values(data));
      });
  }

  useEffect(() => {
    getMoney();
    const intervalUpdate = setInterval(() => {
      getMoney();
    }, 30000);

    return () => clearInterval(intervalUpdate);
  }, []);

  return (
    <>
      <h1>Conversor de Moedas (Valores em BRL)</h1>
      <div className="cards">
        {money.map((el, index) => {
          return <Card key={index} props={el} />;
        })}
      </div>
    </>
  );
}
