import { Link } from "react-router-dom";

export function ScreenFranchise() {
  return (
    <div>
      <Link to="/franchises/new">
        <button>Adicionar</button>
      </Link>
    </div>
  );
}
