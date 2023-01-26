import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "./Modal.css"
export default function SignUpModal({ closeSignUp }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pass, setPass] = useState("")

  const navi = useNavigate();

  function gta () {
    navi("/Admin")
  }
  // const [showSignUp, setShowSignUp] = useState(false);
  // const style = { display: signUp ? "block" : "none" };

  return (
    <div className="modal-background" >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input
                className="form-control"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last name</label>
              <input
                className="form-control"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                className="form-control"
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button  
                onClick={() => gta()}
                className="btn btn-secondary pe-4"
              >
                Sign Up
              </button>
              <button  
                onClick={() => closeSignUp(false)}
                className="btn btn-secondary pe-4"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
