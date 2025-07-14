import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react"; // useEffect をインポート
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import About from "./components/About";
import Work from "./components/Work";
import Skill from "./components/Skill";
import Others from "./components/Others";
import Research from "./components/Research";

// ホームページ用のコンポーネントを定義
/*
const HomePage = () => (
  <>
    <Title />
    <About />
    <Work />
    <Skill />
    <Others />
  </>
);
*/
// ホームページ用のコンポーネントを定義
const HomePage = () => {
  const location = useLocation();

  // location（URL）が変わるたびに実行
  useEffect(() => {
    // URLにハッシュ（#）があるかチェック
    if (location.hash) {
      // ハッシュから'#'を取り除いてIDを取得 (例: "#works" -> "works")
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // 見つかった要素へスムーズにスクロール
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]); // locationが変わった時にこのeffectを再実行

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

function App() {
  return (
    <>
      <Header />
      {/* SwitchではなくRoutesを使います */}
      <Routes>
        {/* component={}ではなくelement={}を使います */}
        <Route path="/research" element={<Research />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
