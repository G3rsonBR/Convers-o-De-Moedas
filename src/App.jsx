import { useState, useEffect } from "react";
import Row from "./Components/Row";
import style from "./style.module.css";

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
        const money = Object.values(data);
        console.table(money)
        money.forEach((el) => {
          el.name = el.name.replace("/Real Brasileiro", "");
          el.bid = parseFloat(el.bid).toFixed(2);
        })
        setMoney(money);
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
      <h1 className={style.title}>Conversor de Moedas (Valores em BRL)</h1>
      <table className={style.money_table}>
        <tr>
          <td><strong>Código</strong></td>
          <td><strong>Moeda</strong></td>
          <td><strong>Valor</strong></td>
        </tr>
        {money.map((el, index) => {
          return <Row key={index} props={el} />;
        })}
      </table>
    </>
  );
}
