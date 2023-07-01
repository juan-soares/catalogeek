import IExternalLink from "./ExternalLinks.interface";
import { Link } from "react-router-dom";

export function ExternalLinks() {
  const externalLinks: IExternalLink[] = [
    {
      title: "ElAmigos",
      logo: "",
      url: "https://www.elamigos-games.com/",
    },
  ];

  return (
    <nav>
      <ul>
        {externalLinks.map(({ title, logo, url }) => (
          <li key={title}>
            <Link to={url}>
              <img src={logo} alt={`logo ${title}`} />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
