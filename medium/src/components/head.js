import React, {useState} from "react";
import LoginModal from "./LoginModal";
import TrendingCard from "./trendingCard";
import Body from "./body";

export default function Head() {

  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div>
        <nav className="navbar"> 
          <div className="container-fluid head">
            <a className="navbar-brand" href="#">
              <img
                src={require("../pic/2.png")}
                alt="Logo"
                width="161.47"
                height="25"
                className="d-inline-block align-text-top"
              />
            </a>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#" />
                Our story
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" />
                Membership
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" />
                Write
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => setOpenModal(true)}>
                Sign in</button>
              </li>
              <li className="nav-item">
                <button className="get-started">Get started</button>
              </li>
            </ul>
          </div>
        </nav>
        {openModal && <LoginModal closeModal={()=> setOpenModal()}/>}
      </div>
      <div className=" banner">
        <img
          src={require("../pic/1.png")}
          alt="Logo"
          width="100%"
          // 1512
          height="531"
        />
      </div>
      <TrendingCard/>
      <Body/>
    </>
  );
}
