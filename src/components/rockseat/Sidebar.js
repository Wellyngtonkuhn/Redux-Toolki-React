import { useSelector, useDispatch } from "react-redux";
import { toggleLesson } from "../../redux/slices/cursoSlice";

export default function Sidebar() {
  const { modules } = useSelector((state) => state.curso);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {modules.map((module) => {
          return (
            <div key={module.id}>
              <strong>{module.title}</strong>
              <ul>
                {module.lessons.map((lesson) => {
                  return (
                    <>
                      <li key={lesson.id}>
                        {lesson.title}
                        <button
                          onClick={() =>
                            dispatch(toggleLesson({ module, lesson }))
                          } >
                          Selecionar
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}
