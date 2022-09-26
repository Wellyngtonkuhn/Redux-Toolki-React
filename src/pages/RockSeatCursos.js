import SideBar from "../components/cursos/SideBar";
import Video from "../components/cursos/Video";

import '../styles/RockSeatCursos.css'

export default function RockSeatCursos() {
  return (
    <>
      <div className="rockSeatCursos-section">
        <Video />
        <SideBar />
      </div>
    </>
  );
}
