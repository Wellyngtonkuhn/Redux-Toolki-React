import { useSelector, useDispatch } from "react-redux";
import { toggleLesson } from "../../redux/slices/cursoSlice";

import "./SideBar.css";

export default function SideBar() {
  const { modules } = useSelector((state) => state.curso);
  const dispatch = useDispatch();
  return (
    <>
      <div className="sideBar-culumn">
        {modules.map((module) => {
          return (
            <div key={module.id}>
              <h3>{module.title}</h3>
              <ul>
                {module.lessons.map((lesson) => {
                  return (
                    <>
                      <li key={lesson.id}>
                        <a
                          onClick={() =>
                            dispatch(toggleLesson({ module, lesson }))
                          }
                        >
                          {lesson.title}
                        </a>
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
