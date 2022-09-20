import { useSelector } from "react-redux";

export default function Video() {
  const { activeLesson, activeModule } = useSelector((state) => state.curso);
  return (
    <>
      <h1>Modulo: {activeModule.title}</h1>
      <h3>Aula: {activeLesson.title}</h3>
    </>
  );
}
