import { Logo, ExternalLinks, Searchbar, Loginbar } from "../Header";
import StyledHeader, { ContainerTop } from "./Header.styled";
import { Navbar } from "./Navbar/Navbar";

export function Header() {
  return (
    <StyledHeader>
      <ContainerTop>
        <Logo />
        <ExternalLinks />
        <Searchbar />
        <Loginbar />
      </ContainerTop>
      <Navbar />
    </StyledHeader>
  );
}
