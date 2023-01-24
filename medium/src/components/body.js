import React, { useState } from "react";
import { news, users } from "./data";

export default function Body() {
  let cat = news.map((a) => a.category);
  // console.log(cat);
  let uniqCat = [...new Set(cat)];
  // console.log(uniqCat);
  let nws = [...news];
  // nws = [filter, setFilter] = useState([...news]);

  function Sorter(d) {
    // nws = [];
    // console.log(nws);
    let sortedNews = [];
    // console.log(d);
    for (let i = 0; i < news.length; i++) {
      if (d == news[i].category) {
        sortedNews.push(news[i]);

        console.log(sortedNews);
      }
    }
    // nws = sortedNews;
  }

  return (
    <div className="row">
      <div className="col-9">
        <div className="">
          {/* trending-card d-flex align-items-center justify-content-center flex-wrap */}
          {nws.map((e) => (
            <div className="d-flex row">
              <div className="col-6">
                <div className="d-flex flex-row">
                  <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-start align-items-start">
                      <img
                        className="userImg"
                        src={e.createdUser.userImg}
                        alt=""
                        style={{ width: "20px" }}
                      />
                      <p>
                        {e.createdUser.firstName} {e.createdUser.lastName}
                      </p>
                    </div>
                    <h6>{e.title}</h6>
                    <h5>{e.body}</h5>
                    <p>
                      {e.date} - {e.read}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <img src={e.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-3 d-flex flex-wrap justify-content-center align-items-center">
        {uniqCat.map((b) => (
          <button onClick={() => Sorter(b)}>{b}</button>
          // <div> s </div>
        ))}
      </div>
    </div>
  );
}
