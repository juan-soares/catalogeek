import IExternalLink from "./ExternalLinks.interface";
import { Link } from "react-router-dom";
import StyledExternalLinks from "./ExternalLinks.styled";

export function ExternalLinks() {
  const externalLinks: IExternalLink[] = [
    {
      title: "ElAmigos",
      logo: "https://images.zeno.fm/KZM4OfUXDff5gXWdLQDL2cTZyJyI6qnyUeD32v3F7do/rs:fit:500:500/g:ce:0:0/aHR0cHM6Ly9zdHJlYW0tdG9vbHMuemVub21lZGlhLmNvbS9jb250ZW50L3N0YXRpb25zL2FneHpmbnBsYm04dGMzUmhkSE55TWdzU0NrRjFkR2hEYkdsbGJuUVlnSUN3cGRxVHJRa01DeElPVTNSaGRHbHZibEJ5YjJacGJHVVlnSUN3MVp1RXZBc01vZ0VFZW1WdWJ3L2ltYWdlLz91cGRhdGVkPTE2NTM1NjM5ODkwMDA.webp",
      url: "https://www.elamigos-games.com/",
    },
    {
      title: "Animes Totais",
      logo: "https://3.bp.blogspot.com/-5PZ542-vFtg/VA-BFQbGqLI/AAAAAAAAABo/tE6i397wzR8/s1600/iZkbUAkPeUysO.png",
      url: "https://www.animestotais.xyz/",
    },
    {
      title: "Jogos Torrents",
      logo: "https://jogostorrents.site/wp-content/uploads/2019/11/jogsotorrents.png",
      url: "https://jogostorrents.site/",
    },
  ];

  return (
    <StyledExternalLinks>
      <ul>
        {externalLinks.sort().map(({ title, logo, url }) => (
          <li key={title}>
            <Link to={url} target="_blank">
              <abbr title={title}>
                <img src={logo} alt={`logo ${title}`} />
              </abbr>
            </Link>
          </li>
        ))}
      </ul>
    </StyledExternalLinks>
  );
}
