/* 京都エコごはんガイド — 共通ヘッダー・フッターの注入
 * 各ページで body の閉じタグ直前に最初に読み込む（依存なし・file:// でも動作）。
 * <body data-page="home|sdg12|kyoto|about"> を読み、現在ページのナビを強調する。
 */
"use strict";
(function () {
  const page = document.body.dataset.page || "";

  const NAV = [
    { key: "home",  href: "index.html", label: "お店をさがす" },
    { key: "sdg12", href: "sdg12.html", label: "5つのエコの視点" },
    { key: "kyoto", href: "kyoto.html", label: "京都の取り組み" },
    { key: "about", href: "about.html", label: "このサイトについて" }
  ];

  const links = NAV.map((n) =>
    `<a href="${n.href}"${n.key === page ? ' aria-current="page"' : ""}>${n.label}</a>`
  ).join("");

  document.body.insertAdjacentHTML("afterbegin", `
<header class="site-header">
  <div class="site-header-inner">
    <a class="brand" href="index.html">
      <span class="hanko" aria-hidden="true">京</span>
      <span class="site-title">京都エコごはんガイド</span>
    </a>
    <span class="site-tag">つくる責任 つかう責任 — SDGs 12</span>
  </div>
  <nav class="site-nav" aria-label="サイト内ナビゲーション">
    <div class="site-nav-inner">${links}</div>
  </nav>
</header>`);

  document.body.insertAdjacentHTML("beforeend", `
<footer class="site-footer">
  <div class="site-footer-inner">
    <p class="foot-title">京都エコごはんガイド</p>
    <p>
      京都市内の環境に配慮した飲食店・カフェを調査する学生プロジェクト（6名）の成果デモです。
      掲載内容は公開情報をもとに作成しています。営業時間・取り組み内容は変更される場合があるため、
      お出かけの際は各店舗の最新情報をご確認ください。
    </p>
    <p class="foot-links">${NAV.map((n) => `<a href="${n.href}">${n.label}</a>`).join("")}</p>
  </div>
</footer>`);
})();
