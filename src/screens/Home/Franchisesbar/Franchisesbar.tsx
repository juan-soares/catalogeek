import { useState } from "react";
import { Link } from "react-router-dom";
import StyledFranchisebar from "./Franchisebar.styled";

export function Franchisesbar() {
  const [franchiseList, setFranchiseList] = useState([
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "https://logopng.com.br/logos/google-37.png",
    },
    {
      originalTitle: "teste",
      logo: "",
    },
  ]);
  const [pixel, setPixel] = useState(0);

  return (
    <StyledFranchisebar pixel={pixel}>
      <button className="add-button">+</button>
      <button
        className="nav-button"
        onClick={() => {
          if (pixel > 0) {
            setPixel(pixel - 140);
          }
        }}
      >
        L
      </button>
      <nav>
        <ul>
          {franchiseList.map(({ originalTitle, logo }) => (
            <li>
              <Link to={`${originalTitle}`}>
                <img src={logo} alt={`logo ${originalTitle}`} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="nav-button" onClick={() => setPixel(pixel + 140)}>
        R
      </button>
    </StyledFranchisebar>
  );
}
