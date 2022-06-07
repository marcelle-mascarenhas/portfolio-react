import React, { useEffect } from "react";
import List from "../components/zustand-state/skills/List/List";
import Add from "../components/zustand-state/skills/Add/Add";
import useStore from "../store";



const Skills = () => {
    const setTodos = useStore((state) => state.setTodos);
    useEffect(setTodos);
    return (
        <>
        <div className="title-main">
        <p>Skills<span className="pointer-title"> .</span></p>
    </div>
        <div><Add /></div>
        <div><List /></div>
      </>
    );
  };
export default Skills;