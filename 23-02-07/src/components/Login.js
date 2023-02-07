import React from "react";

export default function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setUser("Bold")}>
        Login
      </button>
    </div>
  );
}
