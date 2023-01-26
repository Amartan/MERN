import React, { useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import { data } from "./components/Data";

function App() {
  const url = "https://course-api.com/react-tabs-project";
  let [comp, setComp] = useState(0);

  function selector(a) {
    setComp(a);
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
        <div className="company-content">
          <h2 className="job-title">Full Stack Web Developer</h2>
          <p className="company-name">John</p>
          <p className="date">December 2015 - Present</p>
          <div className="text">
            <AiFillCaretRight />
            <p>
              Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
              leggings offal cold-pressed brunch neutra. Hammock photo booth
              live-edge disrupt.
            </p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>
              Post-ironic selvage chambray sartorial freegan meditation.
              Chambray chartreuse kombucha meditation, man bun four dollar toast
              street art cloud bread live-edge heirloom.
            </p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>
              Butcher drinking vinegar franzen authentic messenger bag copper
              mug food truck taxidermy. Mumblecore lomo echo park readymade
              iPhone migas single-origin coffee franzen cloud bread tilde vegan
              flexitarian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
