import { Link } from "react-router-dom";
import StyledLogo from "./Logo.styled";

export function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <img
          src="https://secure.webtoolhub.com/static/resources/icons/set104/44fb2f04.png"
          alt="logo"
        />
        <b>catalogeek</b>
      </Link>
    </StyledLogo>
  );
}
