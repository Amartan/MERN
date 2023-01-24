import React from "react";
import { news, users } from "./data";

export default function TrendingCard() {
  //   console.log(news);
  let trnd = [];
  news.map((e) => {
    if (e.isTrending == true && trnd.length < 6) {
      trnd.push(e);
    }
  });
  let trndNum = 1;
  return (
    <div className="trending-card d-flex align-items-center justify-content-center flex-wrap">
      {trnd.map((e) => (
        <div className="col-md-4">
          <div className="d-flex flex-row">
            <div
              className="trndNum"
              style={{ fontSize: "40px", color: "#E6E6E6" }}
            >
              0{trndNum}
            </div>
            <div className="d-flex flex-column align-items-start">
              <div className="d-flex flex-row">
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
              <p>
                {e.date} - {e.read}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
