import { Link } from "react-router-dom";
import StyledNavbar from "./Navbar.styled";

export function Navbar() {
  const paths = [
    "animes",
    "desenhos animados",
    "filmes animados",
    "filmes",
    "séries",
    "jogos eletrônicos",
    "jogos de mesa",
    "livros",
  ];
  return (
    <StyledNavbar>
      <ul>
        {paths.sort().map((path) => (
          <li key={path}>
            <Link to={path.replaceAll(" ", "-")}>{path}</Link>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
}
