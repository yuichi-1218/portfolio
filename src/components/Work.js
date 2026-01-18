import Bot from "./img/MailingBot.png";
import portfolio from "./img/portfolio.png";
import bachelor from "./img/allll.drawio.png";
import qiita from "./img/qiita.png";
import timorleste from "./img/timorleste.png";
import Lafeak_samne from "./img/Lafek-samne.png";
import zulmira from "./img/zulmira.png";
import ococosda from "./img/ococosda.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section class="works section" id="works">
      <div class="container">
        <h2 class="title">WORKS</h2>
        <div class="works-list">
          <a
            class="works-item"
            href="https://github.com/yuuichi-exjsb/bachelor_research"
            target="_blank"
          >
            <div class="works-img">
              <img src={bachelor} alt="" />
            </div>
            <p class="works-name">
              VQAにおける精度向上のための生成AIによる追加学習
            </p>
            <p class="works-info">学部の卒業研究です</p>
          </a>
          <a
            class="works-item"
            href="https://github.com/yuuichi-exjsb/mailing_bot"
            target="_blank"
          >
            <div class="works-img">
              <img src={Bot} alt="" />
            </div>
            <p class="works-name">Mailing-Bot</p>
            <p class="works-info">
              Gmailの内容をChat GPTに要約させ、LINEに通知するBotです
            </p>
          </a>
          <a
            class="works-item"
            href="https://yuichi-1218.github.io/portfolio/"
            target="_blank"
          >
            <div class="works-img">
              <img src={portfolio} alt="" />
            </div>
            <p class="works-name">ポートフォリオサイト</p>
            <p class="works-info">経歴や制作物、スキルを紹介するサイトです</p>
          </a>
          <a
            class="works-item"
            href="https://qiita.com/yuichi-ML/items/cfc213f0e99c72ad3b6e"
            target="_blank"
          >
            <div class="works-img">
              <img src={qiita} alt="" />
            </div>
            <p class="works-name">Qiita記事</p>
            <p class="works-info">
              研究や就活に関する記事をぼちぼち投稿してます。
            </p>
          </a>
          <a
            class="works-item"
            href="https://ieeexplore.ieee.org/document/10763135"
            target="_blank"
          >
            <div class="works-img">
              <img src={timorleste} alt="" />
            </div>
            <p class="works-name">共著(ICICTA 2024)</p>
            <p class="works-info">Classification of Water Quality Index Using Machine Learning Algorithm for Well Assessment: A Case Study in Dili, Timor-Leste</p>
          </a>
          <a class="works-item" href="https://ieeexplore.ieee.org/document/11335115" target="_blank">
            <div class="works-img">
              <img src={zulmira} alt="" />
            </div>
            <p class="works-name">共著(ICICTA2025)</p>
            <p class="works-info">A Transformer Encoder-Based Approach for Cross-Regional Water Quality Prediction with Fine-Tuning</p>
          </a>
          <a class="works-item" href="https://drive.google.com/file/d/1gRU8Mv1NKjyLDzKfEvqefV45BvI_C4Y6/view?usp=sharing" target="_blank">
            <div class="works-img">
              <img src={ococosda} alt="" />
            </div>
            <p class="works-name">主著(O-COCOSDA 2025)</p>
            <p class="works-info">LAFAEK-CORPUS-1M+: A LARGE-SCALE TETUN CORPUS TO BUILD A LOW-RESOURCED LLM FOR SPEECH AND TEXT PROCESSING</p>
          </a>

          <Link to="/research" className="works-item">
            <div class="works-img">
              <img src={Lafeak_samne} alt="" />
            </div>
            <p class="works-name">修士学生研究</p>
            <p class="works-info">修士論文の研究です</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
