import { useParams, useNavigate } from "react-router-dom";
import "../css/detail.css";
import data from "../Data";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = data.find((c) => c.id === Number(id));

  if (!item) return <div className="detail-empty">상품 정보가 없습니다.</div>;

  return (
    <main className="detail-page">
      <div className="detail-wrap">
        <div className="detail-inner">
          <div className="detail-visual">
            <img
              src={item.detailImg || item.img}
              alt={item.name}
              className="detail-img"
            />
          </div>

          <div className="detail-info">
            <p className="detail-tag">{item.category}</p>

            <h1 className="detail-title">{item.name}</h1>

            <p className="detail-desc">{item.desc}</p>

            <div className="detail-box">
              <div className="detail-row">
                <span className="detail-label">Shape</span>
                <span className="detail-value">{item.shape}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Finish</span>
                <span className="detail-value">{item.finish}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Mood</span>
                <span className="detail-value">{item.mood}</span>
              </div>
            </div>

            <button className="detail-btn" onClick={() => navigate("/classes")}>
              ← 아카이브로 돌아가기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}