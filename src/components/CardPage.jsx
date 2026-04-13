import { useNavigate } from "react-router-dom";

export default function CardPage({ item }) {
  const navigate = useNavigate();

  if (!item) return null;

  return (
    <article className="class-card">
      <img src={item.img} alt={item.name} className="class-card-img" />

      <div className="class-card-body">
        <p className="class-card-category">{item.category}</p>
        <h3 className="class-card-title">{item.name}</h3>
        <p className="class-card-desc">{item.desc}</p>
        <p className="class-card-mood">{item.mood}</p>

        <button
          className="detail-btn"
          onClick={() => navigate(`/detail/${item.id}`)}
        >
          상세보기
        </button>
      </div>
    </article>
  );
}