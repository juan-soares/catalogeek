import { Link } from "react-router-dom";

interface IProps {
  title: string;
}

export function Section({ title }: IProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        <li>
          <Link to="">
            <span>T</span>
            <h3>Titulo</h3>
            <span>(2000)</span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
