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
                LLMの応用研究で、低資源言語向けのLLM開発やVLMをメインに行っています。
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
              <p>
                contact: yuichi@asr.info.gifu-u.ac.jp
              </p>
            </div>
          </div>
        </div>
      </section>
      );
};

export default About;





