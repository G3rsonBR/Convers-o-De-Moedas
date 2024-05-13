export default function Row({ props }) {
  return (
    <tr>
      <td>{props.code}</td>
      <td>{props.name}</td>
      <td>{props.bid}</td>
    </tr>
  );
}