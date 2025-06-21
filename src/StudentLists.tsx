export type Student = {
  id: number;
  name: string;
  age: number;
  rol: string;
};

type changeStudentProps = {
  students: Student[];
  onClick: (student: Student) => void;
};

export const StudentLists = ({ students, onClick }: changeStudentProps) => {
  return (
    <div>
      {students.map((student) => {
        const { id, name } = student;
        return <button key={id} onClick={() => onClick(student)}>{`${id}.  ${name}`}</button>;
      })}
    </div>
  );
};
