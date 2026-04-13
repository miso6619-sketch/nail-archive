import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="home-header">
      <div className="home-inner">
        <h1 className="home-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="로고" className="home-logo-image" />
        </h1>

        <nav className="home-nav">
          <button
            className={location.pathname === "/" ? "home-menu active" : "home-menu"}
            onClick={() => navigate("/")}
          >
            홈
          </button>

          <button
            className={location.pathname === "/classes" ? "home-menu active" : "home-menu"}
            onClick={() => navigate("/classes")}
          >
            탐색
          </button>
        </nav>
      </div>
    </header>
  );
}