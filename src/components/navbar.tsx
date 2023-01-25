import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/getintouch">Get in touch</Link>
        </li>
      </ul>
    </>
  );
}
