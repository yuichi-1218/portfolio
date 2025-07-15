import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react"; // useEffect をインポート
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Others from "./components/Others";
import Research from "./components/Research";

// HomePageコンポーネント
const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // URLにハッシュ（#）があれば、その場所へスクロール
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // ハッシュがなければ、ページのトップへ移動
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Title />
      <About />
      <Work />
      <Skill />
      <Others />
    </>
  );
};

// Appコンポーネント
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </>
  );
}

export default App;
