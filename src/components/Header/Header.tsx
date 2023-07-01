import { Logo, ExternalLinks, Searchbar, Loginbar } from "../Header";
import StyledHeader from "./Header.styled";

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <ExternalLinks />
      <Searchbar />
      <Loginbar />
    </StyledHeader>
  );
}
