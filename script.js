// 秘密のアクセスキー
const SECRET_KEY = "XYZ123";

// URLパラメータを取得
const params = new URLSearchParams(window.location.search);
const access = params.get("access");

// キーが一致しなければアクセス拒否
if (access !== SECRET_KEY) {
  document.body.innerHTML = `
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background: #111;
        color: #fff;
        font-family: sans-serif;
        text-align: center;
      }
      h1 { font-size: 1.5rem; }
    </style>
    <h1>アクセス権がありません。</h1>
  `;
}