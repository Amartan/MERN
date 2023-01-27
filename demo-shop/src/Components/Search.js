import React, { useState } from "react";
import data from "./Data";

export default function Search() {
  let [dt, setDt] = useState(data);
  let cat = dt.map((a) => a.category);
  let uniqCat = [...new Set(cat)];

  function haih(p) {
    let res = [];
    // if (){}
    setDt(data);

    if (p.length > 0) {
      for (let i = 0; i < dt.length; i++) {
        console.log(p);
        if (dt[i].name.toLowerCase().includes(p.toLowerCase())) {
          res.push(dt[i]);
          // console.log(res);
        }
        console.log(p);
        setDt(res);
      }
    }
  }

  function swch() {
    let inStock = [];
    for (let i = 0; i < dt.length; i++) {
      if (dt[i].quantity > 0) {
        inStock.push(dt[i]);
      }
      setDt(inStock);
    }
  }

  return (
    <div>
      <div>
        <form>
          <input
            name="Search"
            type="text"
            onChange={(e) => haih(e.target.value)}
          />
        </form>
      </div>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          // onChange={() => swch()}
        />
        <label class="form-check-label" for="flexSwitchCheckDefault">
          Search for only products in stock
        </label>
      </div>
      <div>
        <div>
          {uniqCat.map((e) => {
            return (
              <div>
                <h2>{e}</h2>
                {dt.map((c) => {
                  if (c.category == e) {
                    return (
                      <div className="d-flex row">
                        <p className="col-3">{c.name}</p>
                        {c.quantity > 0 ? (
                          <p className="col-3">In stock</p>
                        ) : (
                          <p className="col-3">Out of stock</p>
                        )}
                        <p className="col-3">{c.price}</p>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
