import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ClassesPage from "./Pages/ClassesPage";
import DetailPage from "./Pages/DetailPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;