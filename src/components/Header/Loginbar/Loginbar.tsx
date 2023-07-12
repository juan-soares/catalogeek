import { useState } from "react";
import { Link } from "react-router-dom";
import StyledLoginbar from "./Loginbar.styled";

export function Loginbar() {
  const [user, setUser] = useState("");

  return (
    <StyledLoginbar>
      {!user && (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}

      {user && (
        <>
          <span>Nickname</span>
          <button onClick={() => setUser("")}>Sair</button>
        </>
      )}
    </StyledLoginbar>
  );
}
