/* 京都エコごはんガイド — 内容ページ用の小スクリプト
 * 依存: data/stores.js（STORES を定義）を先に読み込むこと。
 * ページ内のプレースホルダーに店舗データの件数を埋める:
 *   [data-store-count]        … 総掲載店舗数
 *   [data-tag-count="タグID"] … そのタグを持つ店舗数
 */
"use strict";
(function () {
  if (typeof STORES === "undefined") return;

  for (const el of document.querySelectorAll("[data-store-count]")) {
    el.textContent = STORES.length;
  }

  for (const el of document.querySelectorAll("[data-tag-count]")) {
    const tag = el.dataset.tagCount;
    el.textContent = STORES.filter((s) => s.eco_tags.some((t) => t.tag === tag)).length;
  }
})();
