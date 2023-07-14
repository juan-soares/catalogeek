import { Link } from "react-router-dom";
import { Franchisesbar } from "./Franchisesbar";
import { Section } from "./Section/Section";

export function ScreenHome() {
  return (
    <div>
      <Franchisesbar />

      <Section title="animes"/>
    </div>
  );
}
