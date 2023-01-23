import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpModal({ signUp }) {
  // showModlal, setShowModal, onLogin
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  // const [userImg, setUserImg] = useState("");
  // const [userOrg, setUserOrg] = useState("");
  // const navigate = useNavigate();
  const style = { display: signUp ? "block" : "none" };

  return (
    <div className="modal" style={style} onClick={setShowSignUp}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
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
              <button
                className="btn btn-secondary pe-4"
                onClick={setShowSignUp}
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
