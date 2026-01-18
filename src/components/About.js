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
                西田裕一(2001/12/18)
              </p>
              <p>
                LLMの応用研究で、低資源言語向けのLLM開発やVLMをメインに行っています。
              </p>
              <p>
                2024.04 - 現在:岐阜大学大学院　自然科学技術研究科　知能理工学専攻
              </p>
              <p>
                2026.3  - 岐阜大学大学院 自然科学技術研究科 知能理工学専攻 知能情報学領域 卒業(修士)
              </p>
              <p>
                2024.3  - 岐阜大学 工学部　電気電子情報工学科 情報コース 卒業(学士)
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





