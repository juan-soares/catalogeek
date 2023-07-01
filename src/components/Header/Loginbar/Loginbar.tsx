import { Link } from "react-router-dom";

export function Loginbar() {
  return (
    <div>
      <Link to="/login">
        <button>Login</button>
      </Link>

      <span>Nickname</span>
      <button>Sair</button>
    </div>
  );
}
