import { Link } from "react-router-dom";

export const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <nav className="container mx-auto mt-5">
      <ol className="flex text-sm">
        <li>
          <Link
            to="/"
            className="text-gray-medium transition duration-150 ease-in-out hover:text-gray-dark motion-reduce:transition-none"
          >
            Inicio
          </Link>
        </li>
        <li>
          <span className="mx-1 text-black-quaternary">/</span>
        </li>
        <li className="text-black-quaternary font-semibold">{title}</li>
      </ol>
    </nav>
  );
};
