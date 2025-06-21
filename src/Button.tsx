
type ButtonProps = {
    label: string,
    onClick: () => void
}

export const Button = ({label, onClick}:ButtonProps) => {

  return (
    <div>
        <button onClick = {onClick}>{label}</button>
    </div>
  )
}
