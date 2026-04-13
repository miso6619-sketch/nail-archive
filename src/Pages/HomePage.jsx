import { useNavigate } from "react-router-dom";
import main1 from "../assets/images/main1.png";
import "../css/home.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-visual">
          <img src={main1} alt="네일 팁 메인 이미지" className="home-image" />
        </div>

        <div className="home-copy">
          <p className="home-sub">Soft Mood Nail archive</p>
          <h2 className="home-title">
            네일도 작품이 <br /> 되는 순간
          </h2>

          <p className="home-text">
            다양한 아티스트의 디자인을 탐색하고
            <br />
            나만의 무드를 찾아보세요
          </p>

          <button
            className="home-btn"
            onClick={() => navigate("/classes")}
          >
            디자인 둘러보기
          </button>
        </div>
      </section>
    </main>
  );
}