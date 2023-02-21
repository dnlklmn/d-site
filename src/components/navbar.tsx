import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <ul>
        <li className="flex flex-row gap-4 body-2 font-semibold bg-transparent">
          <Link to="/">Home</Link>
          <Link to="/getintouch">Get in touch</Link>
          <Link to="/work/this-site">This Site</Link>
        </li>
      </ul>
    </>
  );
}
