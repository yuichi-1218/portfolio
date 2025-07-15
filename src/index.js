import React from "react";
// 'react-dom'ではなく'react-dom/client'からインポートします
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// package.jsonの"homepage"の値を基準パスとして取得します
const basename = process.env.PUBLIC_URL;

// 1. ルート要素を取得します
const rootElement = document.getElementById("root");

// 2. 新しいAPIを使ってルートを作成します
const root = ReactDOM.createRoot(rootElement);

// 3. 新しく作成したルートにアプリケーションをレンダリングします
root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
