const Work = () =>{
    return(
        <section class="works section" id="works">
        <div class="container">
          <h2 class="title">WORKS</h2>
          <div class="works-list">
            <a class="works-item" href="works-template.html">
              <div class="works-img"><img src="img/works-sample-thumb.jpg" alt="" /></div>
              <p class="works-name">VQAにおける精度向上のための生成AIによる追加学習</p>
              <p class="works-info">学部の卒業研究です</p>
            </a>
            <a class="works-item" href="works-template.html">
              <div class="works-img"><img src="img/works-dummy-thumb.jpg" alt="" /></div>
              <p class="works-name">Mailing-Bot</p>
              <p class="works-info">Gmailの内容をChat GPTに要約させ、LINEに通知するBotです</p>
            </a>
            <a class="works-item" href="works-template.html">
              <div class="works-img"><img src="img/works-dummy-thumb.jpg" alt="" /></div>
              <p class="works-name">人体バラバラゲーム</p>
              <p class="works-info">バラバラになった体を集めるVRゲームです</p>
            </a>
            <a class="works-item" href="works-template.html">
              <div class="works-img"><img src="img/works-dummy-thumb.jpg" alt="" /></div>
              <p class="works-name">ポートフォリオサイト</p>
              <p class="works-info">経歴や制作物、スキルを紹介するサイトです</p>
            </a>
          </div>
        </div>
      </section>
    );
}

export default Work;