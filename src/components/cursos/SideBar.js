import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLesson } from "../../redux/slices/cursoSlice";

import "./SideBar.css";

export default function SideBar() {
  const { modules } = useSelector((state) => state.curso);
  const dispatch = useDispatch();

  const handleLesson = (module, lesson) => {
    dispatch(toggleLesson({ module, lesson }));
  };

  return (
    <>
      <aside className="sideBar-culumn">
        {modules.map((module) => {
          return (
            <div key={module.id}>
              <h3>{module.title}</h3>
              <ul>
                {module.lessons.map((lesson) => {
                  return (
                    <>
                      <li key={lesson.id}>
                        <a onClick={() => handleLesson(module, lesson)}>
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
      </aside>
    </>
  );
}
