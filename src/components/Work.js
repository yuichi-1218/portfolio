import Bot from "./img/MailingBot.png";
import portfolio from "./img/portfolio.png";
import bachelor from "./img/allll.drawio.png";
import qiita from "./img/qiita.png";

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
            href="https://yuuichi-exjsb.github.io/portfolio/"
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
        </div>
      </div>
    </section>
  );
};

export default Work;
