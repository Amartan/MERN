import React, {useState} from "react";
import "./Modal.css"
import SignUpModal from "./SignUpModal"

export default function LoginModal ({closeModal}) {
    let [signUp, setSignUp] = useState(false);

    return (
        <>
            <div className="modal-background">
                <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => closeModal(false)}>X</button>
                    <div className="modal-title"> 
                        <h1>Welcome back.</h1>
                    </div>
                    <div className="modal-body">
                        <div className="modal-sign">
                            <img className = "modal-sing-img" src={require("./icons/google.png")} alt="."/>
                            <button>Sign in with Google</button>
                        </div>
                        <div className="modal-sign">
                            <img className = "modal-sing-img" src={require("./icons/facebook.png")} alt="."/>
                            <button>Sign in with Facebook</button>
                        </div>
                        <div>
                            <p>No account? <button onClick={() => setSignUp(true)}>Create one</button></p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button>Continue</button>
                        <button onClick={() => closeModal(false)}>Close</button>
                    </div>
                </div>
            </div>
            <div>
                {signUp && <SignUpModal closeSignUp={() => setSignUp()}/>}
            </div>
        </>
    )
}