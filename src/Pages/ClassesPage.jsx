import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Data";
import CardPage from "../components/CardPage";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";
import "../css/class.css";

export default function ClassesPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("전체");
  const [current, setCurrent] = useState(0);

  const bannerImages = [banner1, banner2, banner3];

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  const categories = ["전체", "키치", "시럽", "오로라", "데일리", "아트", "프렌치"];

  const filtered =
    category === "전체"
      ? data
      : data.filter((item) => item.category === category);

  return (
    <div className="classes-page">
      <div className="classes-banner">
        <img
          src={bannerImages[current]}
          alt="네일 팁 배너"
          className="classes-banner-img"
        />

        <button className="slide-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="slide-btn next" onClick={nextSlide}>
          ›
        </button>

        <div className="classes-banner-overlay">
          <p className="classes-banner-sub">soft mood nail archive</p>
          <h2>지금의 무드를 탐색해보세요</h2>
          <p className="classes-banner-text">
            다양한 네일 디자인을 살펴보고
            <br />
            당신만의 스타일을 발견해보세요
          </p>
          <button className="back-btn" onClick={() => navigate("/")}>
          ← 메인으로 돌아가기
        </button>
        </div>

        <div className="dots">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>

      <div className="classes-inner">
        

        <h1 className="classes-title">네일 디자인 아카이브</h1>

        <div className="category-menu">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "category-btn active" : "category-btn"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="class-grid">
          {filtered.map((item) => (
            <CardPage key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}