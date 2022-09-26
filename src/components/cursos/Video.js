import { useSelector } from "react-redux";
import Youtube from 'react-youtube'

import './Video.css'


export default function Video() {
  const { activeLesson, activeModule } = useSelector((state) => state.curso);

  const videoOpts = {
    height: '100%',
    width: '100%',
  }
  
  return (
    <>
      <div className="video-column">
        <div className="video-title">
          <h2>Modulo: {activeModule.title}</h2>
          <h4>Aula: {activeLesson.title}</h4>
        </div>
        <div className="video-section">
          {activeLesson.link && (
            <Youtube videoId={activeLesson.link} opts={videoOpts}/>
          )}
        </div>
      </div>
    </>
  );
}
