type TrafficLightProps = {
  label: string;
  onClick: (color: string) => void;
};



export const LightButton = ({ label, onClick }: TrafficLightProps) => {
  return <button onClick = { () => onClick(label)}>{label}</button>;
};
