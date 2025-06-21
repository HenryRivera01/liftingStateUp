import type { Student } from "./StudentLists";

type StudentDetailsProps = {
  student: Student | null;
};

export const StudentDetails = ({ student }: StudentDetailsProps) => {
  if (!student) {
    return <p>Selecciona un estudiante</p>;
  }

  const { id, name, age, rol } = student;

  return (
    <div>
      <p>id: {id}</p>
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Rol: {rol}</p>
    </div>
  );
};
