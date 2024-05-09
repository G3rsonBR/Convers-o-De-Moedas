import styles from './styles.module.css'

export default function Card({ props }) {
  return (
    <div className={styles.card}>
      <p>Código da Moeda: {props.code}</p>
      <p>Nome da Moeda: {props.name}</p>
      <p>Valor de compra: {props.bid}</p>
    </div>
  );
}