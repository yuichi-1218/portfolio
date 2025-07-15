import React from "react";

// CSSを文字列として定義し、コンポーネント内に埋め込みます
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');

  /* --- 色の定義 --- */
  :root {
    --primary-color: #3B5998; /* 知的な印象のブルー */
    --secondary-color: #8B9DC3; /* やや明るいブルー */
    --text-color-dark: #2c3e50; /* 濃いテキスト色 */
    --text-color-light: #495057; /* やや薄いテキスト色 */
    --background-light: #f8f9fa; /* 薄いグレーの背景 */
    --background-white: #ffffff;
    --border-color: #dfe3ee; /* ボーダー色 */
  }

  .research-page-section {
    font-family: 'Inter', 'Noto Sans JP', sans-serif;
    background-color: var(--background-light);
    padding-top: 10rem;
    padding-bottom: 5rem;
  }

  .research-page-container {
    background-color: var(--background-white);
    padding: 4rem;
    border-radius: 16px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  }

  .research-page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .research-page-header-text {
    flex: 1;
  }
  
  .research-page-header-image img {
    width: 220px;
    height: 220px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  
  @media (max-width: 768px) {
    .research-page-container {
      padding: 2rem;
    }
    .research-page-section {
        padding-top: 8rem;
        padding-bottom: 3rem;
    }
    .research-page-header {
      flex-direction: column;
      text-align: center;
    }
    .scenery-gallery {
      flex-direction: column;
    }
    .scenery-item img {
      height: auto;
    }
    .dataset-layout, .construction-layout {
        flex-direction: column;
        gap: 2rem;
    }
  }

  .research-page-lead {
    font-size: 1.15rem;
    color: #6c757d;
  }

  .research-page-title {
    font-weight: 700;
    font-size: 2.8rem;
    color: var(--text-color-dark);
    letter-spacing: -0.5px;
    margin-bottom: 1rem;
  }

  .research-page-section-item {
    margin-bottom: 3rem;
  }

  .research-page-subtitle {
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--text-color-dark);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--primary-color);
  }
  
  .research-page-sub-subtitle {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-color-dark);
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  .research-page-section-item p, .research-page-section-item li {
    font-size: 1rem;
    line-height: 1.8;
    color: var(--text-color-light);
  }
  
  .research-page-section-item li::marker {
    color: var(--primary-color);
  }
  
  .research-page-section-item strong {
    color: var(--primary-color);
  }

  .research-page-section-item ul {
    padding-left: 20px;
    margin-top: 1rem;
  }

  .research-page-section-item li {
    margin-bottom: 0.5rem;
  }

  .example-box {
    background-color: #f0f3f8;
    border-left: 4px solid var(--primary-color);
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 4px;
  }
  .example-box strong {
    display: block;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-color-dark);
  }
  .example-pair {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }
  .example-pair p {
    margin-bottom: 0;
    flex: 1;
    font-size: 0.95rem;
  }
  .example-pair p:first-child {
    font-style: italic;
    color: #555;
  }
  .example-pair p:last-child {
    font-style: normal;
    color: #222;
  }
  
  .scenery-gallery {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;
  }
  .scenery-item {
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
  }
  .scenery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  .scenery-item img:hover {
    transform: scale(1.05);
  }

  .research-page-table {
      font-size: 0.9rem;
      border-color: var(--border-color);
  }

  .research-page-table th {
      background-color: #f0f3f8;
      color: var(--text-color-dark);
      font-weight: 600;
  }
  
  .dataset-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }
  .dataset-text {
    flex: 2;
  }
  .dataset-image {
    flex: 1;
    min-width: 200px;
  }
  .dataset-image img {
    border-radius: 12px;
    width: 100%;
  }
  .preprocessing-list {
    background-color: #f0f3f8;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1.5rem;
    border: 1px solid var(--border-color);
  }
  .preprocessing-list strong {
     display: block;
     margin-bottom: 0.75rem;
  }
  
  .contributors-section {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: var(--background-light);
    border-radius: 8px;
    border: 1px solid var(--border-color);
  }
  .contributors-section h5 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-color-dark);
    margin-bottom: 1rem;
  }
  .contributors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.5rem;
    padding-left: 0;
    list-style: none;
    margin-bottom: 0;
  }
  .contributors-list a {
    font-size: 0.9rem;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;
  }
  .contributors-list a:hover {
    text-decoration: underline;
  }
  
  /* --- 構築方法セクションのスタイルを修正・追加 --- */
  .benchmark-construction-box {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden; /* to contain child border-radius */
  }
  .benchmark-construction-title {
    padding: 1rem 1.5rem;
    background-color: #f0f3f8;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color-dark);
  }
  .construction-layout {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    padding: 1.5rem;
  }
  .construction-text {
    flex: 1.5;
  }
  .construction-figure {
    flex: 1;
    min-width: 250px;
    text-align: center;
  }
  .construction-figure img {
    border-radius: 12px;
    width: 100%;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  }
  .construction-figure p {
    font-size: 0.85rem;
    color: #6c757d;
    margin-top: 0.5rem;
  }
  .construction-layout .contributors-section {
    margin-top: 1.5rem;
    padding: 0;
    background-color: transparent;
    border: none;
  }
  
  .btn-outline-primary {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
  .btn-outline-primary:hover {
    background-color: var(--primary-color);
    color: var(--background-white);
  }
`;

// Feather Iconsをコンポーネントとして利用
function FeatherIcon({ icon, size = 16, ...props }) {
  const icons = {
    "file-text": (
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    ),
    huggingface: (
      <g>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
        <line x1="9" y1="9" x2="9.01" y2="9"></line>
        <line x1="15" y1="9" x2="15.01" y2="9"></line>
      </g>
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {icons[icon]}
    </svg>
  );
}

// コントリビューターのデータを定義
const contributors = [
  { name: "Taro Yamada", url: "#" },
  { name: "Hanako Tanaka", url: "#" },
  { name: "Jiro Suzuki", url: "#" },
  { name: "Sachiko Sato", url: "#" },
];

export default function Research() {
  return (
    <>
      <style>{styles}</style>
      <section className="research-page-section" id="research">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="research-page-container">
                <div className="research-page-header mb-5">
                  <div className="research-page-header-text">
                    <h1 className="research-page-title">Lafeak Project</h1>
                    <p className="research-page-lead">
                      -ページ工事中です!!-低資源言語
                      テトゥン語に対応したLLM・ASRモデルの開発
                    </p>
                    <div className="mt-3">
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-primary rounded-pill me-2"
                      >
                        <FeatherIcon icon="file-text" className="me-1" />
                        ポスターPDF
                      </a>
                      <a
                        href="#"
                        className="btn btn-sm btn-outline-secondary rounded-pill"
                      >
                        <FeatherIcon icon="huggingface" className="me-1" />
                        Hugging Face
                      </a>
                    </div>
                  </div>
                  <div className="research-page-header-image">
                    <img
                      src="https://placehold.co/220x220/E2E8F0/4A5568?text=Project"
                      alt="Lafeakプロジェクトのロゴ"
                    ></img>
                  </div>
                </div>

                <article>
                  <section
                    className="research-page-section-item"
                    id="background"
                  >
                    <h2 className="research-page-subtitle">1. 研究背景</h2>
                    <p>
                      大規模言語モデル（LLM）の発展は目覚ましい一方で、その恩恵は英語などの高資源言語に集中しており、
                      世界の多くの言語は「デジタルの谷」に取り残されています。このような状況は、情報アクセスや教育、経済活動における格差を拡大させる要因となり得ます。
                    </p>
                    <p>
                      本研究では、この課題に取り組むため、低資源言語の一つである東ティモールの公用語「テトゥン語」に焦点を当てました。
                      テトゥン語話者がAI技術の恩恵を享受できる社会を目指し、高品質なテトゥン語LLMの開発に着手しました。
                    </p>
                  </section>

                  <section className="research-page-section-item" id="tetum">
                    <h2 className="research-page-subtitle">
                      2. テトゥン語について
                    </h2>
                    <p>
                      本研究で対象とするテトゥン語は、以下のような言語的特徴を持っています。
                    </p>
                    <ul>
                      <li>
                        <strong>公用語:</strong>{" "}
                        東ティモールの第2公用語です（第1公用語はポルトガル語）。
                      </li>
                      <li>
                        <strong>借用語:</strong>{" "}
                        ポルトガル語やインドネシア語からの借用語を多く含みます。
                      </li>
                      <li>
                        <strong>表記:</strong>{" "}
                        ラテンアルファベットを用いて記述されます。
                      </li>
                      <li>
                        <strong>文法（形態論）:</strong>{" "}
                        時制や複数形を表すための動詞の活用や名詞の変化がありません。
                      </li>
                      <li>
                        <strong>文法（統語論）:</strong>{" "}
                        文構造は英語と同様のSVO（主語-動詞-目的語）が基本となります。
                      </li>
                    </ul>
                    <div className="example-box">
                      <strong>例文:</strong>
                      <div className="example-pair">
                        <p>I eat rice.</p>
                        <p>Hau han etu.</p>
                      </div>
                      <div className="example-pair">
                        <p>They read a book.</p>
                        <p>Sira lee livru.</p>
                      </div>
                    </div>
                    <div className="scenery-gallery">
                      <div className="scenery-item">
                        <img
                          src="https://images.unsplash.com/photo-1599494254445-5567b7556877?q=80&w=1974&auto=format&fit=crop"
                          className="img-fluid"
                          alt="東ティモールの風景1"
                        />
                      </div>
                      <div className="scenery-item">
                        <img
                          src="https://images.unsplash.com/photo-1605639933582-8a356a5a3a24?q=80&w=2070&auto=format&fit=crop"
                          className="img-fluid"
                          alt="東ティモールの風景2"
                        />
                      </div>
                      <div className="scenery-item">
                        <img
                          src="https://images.unsplash.com/photo-1588622146942-c5a749bec919?q=80&w=1931&auto=format&fit=crop"
                          className="img-fluid"
                          alt="東ティモールの風景3"
                        />
                      </div>
                    </div>
                  </section>

                  <section className="research-page-section-item" id="overview">
                    <h2 className="research-page-subtitle">3. 開発概要</h2>
                    <p>
                      本プロジェクトでは、既存の多言語モデルをベースに、収集したテトゥン語データを用いて継続的事前学習（Continual
                      Pre-training）を行うアプローチを採用しました。開発のフローは以下の通りです。
                    </p>
                    <ul>
                      <li>
                        <strong>データ収集:</strong>{" "}
                        ウェブスクレイピング、公的文書、書籍などから、可能な限りのテトゥン語テキストを収集・精査。
                      </li>
                      <li>
                        <strong>データ前処理:</strong>{" "}
                        収集したテキストのノイズ除去、正規化、トークナイザの語彙拡張を実施。
                      </li>
                      <li>
                        <strong>モデル学習:</strong>{" "}
                        高性能な多言語対応モデル（例: Llama 3,
                        Gemma）をベースとし、作成したデータセットで継続的事前学習を実行。
                      </li>
                      <li>
                        <strong>評価:</strong>{" "}
                        翻訳、要約、質疑応答などの下流タスクを想定した評価セットを独自に構築し、モデルの性能を多角的に測定。
                      </li>
                    </ul>
                  </section>

                  <section className="research-page-section-item" id="dataset">
                    <h2 className="research-page-subtitle">
                      4. データセット (Lafeak Corpus)
                    </h2>
                    <p>
                      本研究では、テトゥン語の言語モデルを構築するために、3つの異なるソースから構成される独自のコーパス「Lafeak
                      Corpus」を作成しました。
                    </p>

                    <h4 className="research-page-sub-subtitle">
                      4.1 Lafeak-WebCrawl
                    </h4>
                    <div className="dataset-layout">
                      <div className="dataset-text">
                        <p>
                          CommonCrawlなどのWebクロールデータから、テトゥン語のテキストを大規模に収集しました。多様なドメインのテキストが含まれており、モデルの汎化性能向上に寄与します。
                        </p>
                        <div className="preprocessing-list">
                          <strong>前処理方法:</strong>
                          <ul>
                            <li>
                              言語判定モデルによるテトゥン語テキストの抽出
                            </li>
                            <li>HTMLタグや特殊文字の除去</li>
                            <li>重複文の削除</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dataset-image">
                        <img
                          src="https://images.unsplash.com/photo-1585776245991-a6905418b57b?q=80&w=2070&auto=format&fit=crop"
                          alt="Web Crawlのイメージ"
                        />
                      </div>
                    </div>
                    <table className="table research-page-table mt-4">
                      <thead>
                        <tr>
                          <th>データソース</th>
                          <th>トークン数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>CommonCrawl (CC-100)</td>
                          <td>約 50M</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="research-page-sub-subtitle">
                      4.2 Lafeak-Primer
                    </h4>
                    <div className="dataset-layout">
                      <div className="dataset-text">
                        <p>
                          東ティモールの政府、NGO、宗教団体が公開しているPDF文書からテキストを抽出しました。公的な文書や報告書が中心であり、よりフォーマルな文体の学習に役立ちます。
                        </p>
                        <div className="preprocessing-list">
                          <strong>前処理方法:</strong>
                          <ul>
                            <li>OCR（光学文字認識）によるテキスト抽出</li>
                            <li>誤認識された単語の修正</li>
                            <li>レイアウト情報の除去</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dataset-image">
                        <img
                          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop"
                          alt="Primerのイメージ"
                        />
                      </div>
                    </div>
                    <table className="table research-page-table mt-4">
                      <thead>
                        <tr>
                          <th>データソース</th>
                          <th>トークン数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>政府・NGO文書</td>
                          <td>約 15M</td>
                        </tr>
                        <tr>
                          <td>宗教関連テキスト</td>
                          <td>約 10M</td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="research-page-sub-subtitle">
                      4.3 Lafeak-Translate
                    </h4>
                    <div className="dataset-layout">
                      <div className="dataset-text">
                        <p>
                          翻訳タスクの性能向上を目的として、テトゥン語と英語・ポルトガル語の対訳データを収集しました。これにより、モデルは言語間の対応関係を学習できます。
                        </p>
                        <div className="preprocessing-list">
                          <strong>前処理方法:</strong>
                          <ul>
                            <li>文アライメントツールによる対訳ペアの作成</li>
                            <li>機械翻訳を用いた擬似的な対訳データの生成</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dataset-image">
                        <img
                          src="https://images.unsplash.com/photo-1543168256-41881f52d534?q=80&w=2070&auto=format&fit=crop"
                          alt="Translateのイメージ"
                        />
                      </div>
                    </div>
                    <table className="table research-page-table mt-4">
                      <thead>
                        <tr>
                          <th>データソース</th>
                          <th>トークン数</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>対訳コーパス</td>
                          <td>約 5M</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  <section className="research-page-section-item" id="learning">
                    <h2 className="research-page-subtitle">
                      5. 学習とChatVector
                    </h2>
                    <p>
                      （ここに、モデルの学習方法やChatVectorに関する詳細な説明を記述します。）
                    </p>
                  </section>

                  <section
                    className="research-page-section-item"
                    id="evaluation"
                  >
                    <h2 className="research-page-subtitle">6. 評価</h2>
                    <p>
                      開発したモデルの性能を多角的に評価するため、「翻訳タスク」「常識推論タスク」「パープレキシティ」の3つの指標を用いました。
                    </p>

                    <h4 className="research-page-sub-subtitle">
                      6.1 翻訳タスク (BLEU, BERTScore)
                    </h4>
                    <p>
                      テトゥン語から英語への翻訳精度を評価します。BLEUはn-gramの一致率に基づき、訳文の流暢さと正確さを評価する指標です。BERTScoreは、文脈を考慮した単語埋め込み表現の類似度に基づき、意味的な妥当性をより精緻に評価します。
                    </p>
                    <table className="table research-page-table mt-3">
                      <thead>
                        <tr>
                          <th>モデル</th>
                          <th>BLEU</th>
                          <th>BERTScore (F1)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Baseline (mBERT)</td>
                          <td>12.5</td>
                          <td>0.821</td>
                        </tr>
                        <tr>
                          <td>Baseline (XLM-R)</td>
                          <td>18.9</td>
                          <td>0.855</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>本モデル (Ours)</strong>
                          </td>
                          <td>
                            <strong>25.2</strong>
                          </td>
                          <td>
                            <strong>0.893</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="research-page-sub-subtitle">
                      6.2 常識推論タスク (TLScommonsenseQA)
                    </h4>
                    <p>
                      テトゥン語の常識推論能力を測定するために、独自に構築した多肢選択式の質問応答データセット「TLScommonsenseQA」を使用しました。
                    </p>

                    {/* --- 構築方法セクションを修正 --- */}
                    <div className="benchmark-construction-box">
                      <h5 className="benchmark-construction-title">
                        TLScommonsenseQA ベンチマーク構築方法
                      </h5>
                      <div className="construction-layout">
                        <div className="construction-text">
                          <p>
                            既存の英語の常識推論データセットをベースに、専門知識を持つ複数の翻訳者と協力し、テトゥン語へ翻訳・文化的な調整を行いました。
                            その後、ネイティブスピーカーによるクロスチェックを経て、品質を担保しました。
                          </p>
                          <div className="contributors-section">
                            <h5>Contributors</h5>
                            <ul className="contributors-list">
                              {contributors.map((contributor) => (
                                <li key={contributor.name}>
                                  <a
                                    href={contributor.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {contributor.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="construction-figure">
                          <img
                            src="https://placehold.co/400x300/E2E8F0/4A5568?text=構築フロー図"
                            alt="ベンチマーク構築のフロー図"
                          />
                          <p>図1: TLScommonsenseQAの構築フロー</p>
                        </div>
                      </div>
                    </div>

                    <table className="table research-page-table mt-3">
                      <thead>
                        <tr>
                          <th>モデル</th>
                          <th>Accuracy (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Baseline (mBERT)</td>
                          <td>35.8</td>
                        </tr>
                        <tr>
                          <td>Baseline (XLM-R)</td>
                          <td>42.1</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>本モデル (Ours)</strong>
                          </td>
                          <td>
                            <strong>65.7</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <h4 className="research-page-sub-subtitle">
                      6.3 パープレキシティ (Perplexity)
                    </h4>
                    <p>
                      パープレキシティは、言語モデルがテスト文に対してどれだけ自然な確率を割り当てられるかを示す指標で、値が低いほど高性能であることを意味します。モデルの基本的な言語理解能力を評価します。
                    </p>
                    <table className="table research-page-table mt-3">
                      <thead>
                        <tr>
                          <th>モデル</th>
                          <th>Perplexity</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Baseline (mBERT)</td>
                          <td>35.4</td>
                        </tr>
                        <tr>
                          <td>Baseline (XLM-R)</td>
                          <td>28.2</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>本モデル (Ours)</strong>
                          </td>
                          <td>
                            <strong>15.1</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </section>

                  <section
                    className="research-page-section-item"
                    id="references"
                  >
                    <h2 className="research-page-subtitle">
                      7. 参考資料・出展
                    </h2>
                    <p>
                      （ここに、研究で参考にした論文や資料、データセットの出展などを記述します。）
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
