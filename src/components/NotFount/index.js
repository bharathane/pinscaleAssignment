import { Link } from "react-router-dom";

import "./index.css";

const NotFound = () => (
  <div className="notfound-con">
    <h1>404</h1>
    <p>Page Not Found</p>
    <Link to="/">
      <button className="notfound-btn" type="button">
        Go To Home
      </button>
    </Link>
  </div>
);

export default NotFound;
