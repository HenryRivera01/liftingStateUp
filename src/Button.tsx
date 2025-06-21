
type ButtonProps = {
    aumentar: () => void; //No recibe ningun parametro
}

export const Button = ({aumentar}:ButtonProps) => {

  return (
    <div>
        <button onClick = {aumentar}>Increase</button>
    </div>
  )
}
