import React, { useState } from "react";
import { news, users } from "./data";

export default function Body() {
  let cat = news.map((a) => a.category);
  let uniqCat = [...new Set(cat)];
  let [nws, setNws] = useState(news) 

  function Sorter(d) {
    let sortedNews = [];
    for (let i = 0; i < news.length; i++) {
      if (d == news[i].category) {
        sortedNews.push(news[i]);
        setNws(sortedNews)
        // console.log(nws);
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
      <div className="col-3 d-flex align-content-start flex-wrap">
        {uniqCat.map((b) => (
          <button onClick={() => Sorter(b)}>{b}</button>
        ))}
      </div>
    </div>
  );
}
