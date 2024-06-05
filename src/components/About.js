import profimage from "./img/profiile.png";
import insta from "./img/insta.png";
import gtihub from "./img/github.png";
import mail from "./img/mail.png";

const About = () =>{
    return (
        <section class="about section" id="about">
        <div class="container">
          <h2 class="title">ABOUT</h2>
          <div class="profile">
            <p class="profile-img">
                <img src={profimage}></img>
            </p>
            <div class="profile-body">
              <p>
                情報学専攻の西田裕一です。
              </p>
              <p>
                LLMを応用した研究 VLMや数学的表現の埋め込み空間の獲得などの研究に取り組んでいます。
              </p>
              <p>
                2024.04 - 現在:岐阜大学大学院　自然科学技術研究科　知能理工学専攻
              </p>
              <p>
                2022.10 - 現在:田村研究室　所属
              </p>
              <p>
                2020.04 - 2024.3: 岐阜大学　工学部 電気電子・情報工学科 情報コース
              </p>
            </div>
          </div>
        </div>
      </section>
      );
};

export default About;





