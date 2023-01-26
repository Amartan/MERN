import React, { useState } from "react";
import "./App.css";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { data } from "./components/Data";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  let [comp, setComp] = useState(0);
  let [section, setSection] = useState(data[0]);
  let [opened, setOpened] = useState(false)
  let [selected, setSelected] = useState(0);

  function selector(a) {
    setComp(a);
    setSection(data[a]);
    console.log(comp);
  }
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {data.map((e, _id) => (
            <h4 id="_id" onClick={() => selector(_id)}>
              {e.company}
            </h4>
          ))}
        </div>
        {section && (
        <div className="company-content">
          <h2 className="job-title">{section.title}</h2>
          <p className="company-name">{section.company}</p>
          <p className="date">{section.dates}</p>
          {section?.duties?.map((b, index) => (
             <div className="text">
              {opened && selected == index ? (
                <AiFillCaretRight 
                onClick={() => {
                  setSelected(index)
                  setOpened(false)
                }}
                />
              ) : (
                <AiFillCaretDown
                onClick={() => {
                  setSelected(index)
                  setOpened(true)
                }}
              />
              )}
            <p>
                <h2>Sub title {index}</h2>
                {opened && selected == index && b}
            </p>
          </div>
          ))}
          </div>)}
        </div>
    </section>
  );
}

export default App;
