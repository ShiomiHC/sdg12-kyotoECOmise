/* 京都エコごはんガイド — フィルター・一覧・詳細モーダルの制御
 * 依存: data/stores.js（STORES を定義）を先に読み込むこと。
 */
"use strict";
/* ===== タグ定義 ===== */
const TAGS = {
  local_organic:   { label: "地産地消・有機食材", icon: "M12 21c0-6 2-11 8-14-1 7-3 12-8 14Zm0 0c0-5-1.5-9-8-11 1 6 3 9 8 11Z" },
  food_loss:       { label: "フードロス削減",     icon: "M4 12a8 8 0 1 1 2.3 5.7M4 12H1.5M4 12l2.5 2.5" },
  plant_based:     { label: "プラントベース",     icon: "M12 22V9m0 0C12 5 9 3 4 3c0 5 3 8 8 8m0-2c0-4 3-6 8-6 0 5-3 8-8 8" },
  my_cup:          { label: "マイカップ割引",     icon: "M5 4h11v8a5 5 0 0 1-10 0V4Zm11 2h2.5a2.5 2.5 0 0 1 0 5H16M5 21h11" },
  less_disposable: { label: "使い捨て削減",       icon: "M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13" }
};

const CATEGORY_LABEL = { restaurant: "レストラン", cafe: "カフェ" };

/* 行政区の並び順（京都市11区の公式順） */
const WARD_ORDER = ["北区", "上京区", "左京区", "中京区", "東山区", "山科区", "下京区", "南区", "右京区", "西京区", "伏見区"];

/* 和紋プレースホルダーのクラス数（css の .washi-0〜5 を循環） */
const WASHI_COUNT = 6;

/* ===== 状態 ===== */
const state = { search: "", category: "all", area: "all", tags: new Set() };

const $ = (sel) => document.querySelector(sel);
const grid = $("#cardGrid");

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function initialFor(store) {
  return [...store.name][0];
}

function placeholderClass(store) {
  return `washi-${STORES.indexOf(store) % WASHI_COUNT}`;
}

function tagIconSvg(tag) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${TAGS[tag].icon}"/></svg>`;
}

/* ===== フィルター UI 構築 ===== */
function buildFilters() {
  const chipsBox = $("#tagChips");
  for (const [key, def] of Object.entries(TAGS)) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chip";
    btn.dataset.tag = key;
    btn.setAttribute("aria-pressed", "false");
    btn.innerHTML = `${tagIconSvg(key)}${escapeHtml(def.label)}`;
    btn.addEventListener("click", () => toggleTag(key));
    chipsBox.appendChild(btn);
  }

  const areas = [...new Set(STORES.map((s) => s.area))]
    .sort((a, b) => WARD_ORDER.indexOf(a) - WARD_ORDER.indexOf(b));
  const select = $("#areaSelect");
  for (const area of areas) {
    const opt = document.createElement("option");
    opt.value = area;
    opt.textContent = area;
    select.appendChild(opt);
  }
  select.addEventListener("change", () => { state.area = select.value; render(); });

  $("#catSeg").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-cat]");
    if (!btn) return;
    state.category = btn.dataset.cat;
    for (const b of $("#catSeg").querySelectorAll("button")) {
      b.setAttribute("aria-pressed", b === btn ? "true" : "false");
    }
    render();
  });

  $("#searchInput").addEventListener("input", (e) => {
    state.search = e.target.value.trim().toLowerCase();
    render();
  });

  $("#clearBtn").addEventListener("click", clearFilters);
  $("#emptyResetBtn").addEventListener("click", clearFilters);
}

/* タグの ON/OFF を切り替え、同じタグを指すボタン
 * （フィルターのチップとヒーローの視点ボタン）をまとめて同期する。 */
function toggleTag(key) {
  const on = !state.tags.has(key);
  if (on) state.tags.add(key);
  else state.tags.delete(key);
  syncTagButtons(key, on);
  render();
  return on;
}

function syncTagButtons(key, on) {
  for (const b of document.querySelectorAll(`button[data-tag="${key}"]`)) {
    b.setAttribute("aria-pressed", on ? "true" : "false");
  }
}

function clearFilters() {
  state.search = "";
  state.category = "all";
  state.area = "all";
  state.tags.clear();
  $("#searchInput").value = "";
  $("#areaSelect").value = "all";
  for (const b of $("#catSeg").querySelectorAll("button")) {
    b.setAttribute("aria-pressed", b.dataset.cat === "all" ? "true" : "false");
  }
  for (const b of document.querySelectorAll("button[data-tag]")) {
    b.setAttribute("aria-pressed", "false");
  }
  render();
}

/* ===== 絞り込み状態と URL の同期 =====
 * state（search / category / area / tags）を URL のクエリ文字列に反映する。
 * デフォルト値（空検索・all・all・タグなし）の項目は書き込まず、
 * すべてデフォルトならクエリ文字列自体を消す。history には残さない。
 */
function syncURL() {
  const params = new URLSearchParams();
  if (state.search) params.set("q", state.search);
  if (state.category !== "all") params.set("cat", state.category);
  if (state.area !== "all") params.set("area", state.area);
  if (state.tags.size > 0) params.set("tags", [...state.tags].join(","));

  const qs = params.toString();
  const url = `${location.pathname}${qs ? `?${qs}` : ""}${location.hash}`;
  try {
    /* file:// で開いた場合、環境によっては replaceState が
     * SecurityError を投げることがあるため、失敗しても無視して続行する。 */
    history.replaceState(null, "", url);
  } catch (e) {
    /* 何もしない：URL 同期は失敗してもフィルター機能自体には影響させない */
  }
}

/* ページ読み込み時に URL のクエリ文字列から state を復元し、UI にも反映する。
 * 未知の値（存在しないタグID・カテゴリー・エリア）は無視する。
 */
function restoreFromURL() {
  let params;
  try {
    params = new URLSearchParams(location.search);
  } catch (e) {
    return;
  }

  const q = params.get("q");
  if (q) {
    state.search = q.trim().toLowerCase();
    $("#searchInput").value = q;
  }

  const cat = params.get("cat");
  if (cat === "restaurant" || cat === "cafe") {
    state.category = cat;
    for (const b of $("#catSeg").querySelectorAll("button")) {
      b.setAttribute("aria-pressed", b.dataset.cat === cat ? "true" : "false");
    }
  }

  const area = params.get("area");
  const areaSelect = $("#areaSelect");
  if (area && [...areaSelect.options].some((o) => o.value === area)) {
    state.area = area;
    areaSelect.value = area;
  }

  const tags = params.get("tags");
  if (tags) {
    for (const t of tags.split(",")) {
      if (!TAGS[t]) continue;
      state.tags.add(t);
      syncTagButtons(t, true);
    }
  }
}

/* ===== 絞り込み ===== */
function filteredStores() {
  return STORES.filter((s) => {
    if (state.category !== "all" && s.category !== state.category) return false;
    if (state.area !== "all" && s.area !== state.area) return false;
    if (state.tags.size > 0) {
      const has = new Set(s.eco_tags.map((t) => t.tag));
      for (const t of state.tags) if (!has.has(t)) return false;
    }
    if (state.search) {
      const haystack = `${s.name} ${s.description} ${s.area}`.toLowerCase();
      if (!haystack.includes(state.search)) return false;
    }
    return true;
  });
}

/* ===== 一覧描画 ===== */
function render() {
  syncURL();
  const list = filteredStores();
  $("#resultCount").innerHTML =
    `<strong>${list.length}</strong>件を表示中（全${STORES.length}件）`;
  $("#emptyState").classList.toggle("show", list.length === 0);

  grid.innerHTML = "";
  list.forEach((store, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.setAttribute("aria-haspopup", "dialog");
    card.setAttribute("aria-label", `${store.name}の詳細を見る`);
    /* 上から順に少しずつ遅らせて立ち上げる（後方はまとめて表示） */
    card.style.animationDelay = `${Math.min(i, 11) * 40}ms`;

    const photo = store.photo
      ? `<img src="${escapeHtml(store.photo)}" alt="${escapeHtml(store.name)}の写真" width="800" height="600" loading="lazy" decoding="async">`
      : `<span class="initial">${escapeHtml(initialFor(store))}</span>`;

    card.innerHTML = `
      <div class="card-photo ${store.photo ? "" : placeholderClass(store)}">
        ${photo}
        <span class="cat-badge">${CATEGORY_LABEL[store.category]}</span>
      </div>
      <div class="card-body">
        <span class="card-name">${escapeHtml(store.name)}</span>
        <span class="card-area">京都市${escapeHtml(store.area)}</span>
        <p class="card-desc">${escapeHtml(store.description)}</p>
        <div class="card-tags">
          ${store.eco_tags.map((t) => `<span class="mini-tag t-${t.tag}">${escapeHtml(TAGS[t.tag].label)}</span>`).join("")}
        </div>
      </div>`;
    card.addEventListener("click", () => openModal(store));
    grid.appendChild(card);
  });
}

/* ===== 詳細モーダル ===== */
const backdrop = $("#modalBackdrop");
let lastFocused = null;

function openModal(store) {
  lastFocused = document.activeElement;

  const banner = $("#modalBanner");
  const bannerPhoto = $("#modalPhoto");
  const bannerInitial = $("#modalInitial");
  if (store.photo) {
    banner.className = "modal-banner has-photo";
    bannerPhoto.src = store.photo;
    bannerPhoto.alt = `${store.name}の写真`;
    bannerPhoto.hidden = false;
    bannerInitial.hidden = true;
  } else {
    banner.className = `modal-banner ${placeholderClass(store)}`;
    bannerPhoto.hidden = true;
    bannerPhoto.removeAttribute("src");
    bannerInitial.hidden = false;
    bannerInitial.textContent = initialFor(store);
  }

  const rows = [
    ["住所", store.address],
    ["アクセス", store.access],
    ["営業時間", store.hours],
    ["定休日", store.holidays],
    ["予算目安", store.budget]
  ].filter(([, v]) => v);

  $("#modalContent").innerHTML = `
    <div class="modal-head">
      <h2 class="modal-name" id="modalName">${escapeHtml(store.name)}</h2>
      <span class="modal-meta">${CATEGORY_LABEL[store.category]} ／ 京都市${escapeHtml(store.area)}</span>
    </div>
    <p class="modal-desc">${escapeHtml(store.description)}</p>
    <dl class="info-grid">
      ${rows.map(([k, v]) => `<dt>${k}</dt><dd>${escapeHtml(v)}</dd>`).join("")}
    </dl>
    <section class="eco-section">
      <h3>環境への取り組み</h3>
      ${store.eco_tags.map((t) => `
        <div class="eco-item">
          <span class="mini-tag t-${t.tag}">${escapeHtml(TAGS[t.tag].label)}</span>
          <p>${escapeHtml(t.detail)}</p>
        </div>`).join("")}
    </section>
    <div class="sources">
      <p class="sources-title">情報の出典</p>
      <ul>
        ${store.sources.map((u) => `<li><a href="${escapeHtml(u)}" target="_blank" rel="noopener noreferrer">${escapeHtml(u)}</a></li>`).join("")}
      </ul>
      <p class="verified">情報確認日：${escapeHtml(store.last_verified)}</p>
    </div>
    ${store.url ? `
    <div class="modal-actions">
      <a href="${escapeHtml(store.url)}" target="_blank" rel="noopener noreferrer">公式サイトを見る</a>
    </div>` : ""}`;

  backdrop.classList.add("open");
  document.body.style.overflow = "hidden";
  $("#modalClose").focus();
}

function closeModal() {
  backdrop.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

/* モーダル内の「フォーカス可能な要素」を都度取得する。
 * modalContent はリンクなど内容が店舗ごとに動的に生成されるため、
 * キャッシュせず Tab キーが押されるたびに再計算する。 */
function focusableEls(container) {
  return [...container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )];
}

/* モーダル表示中は Tab / Shift+Tab をモーダル内でループさせ、
 * 背景ページにフォーカスが漏れないようにする（フォーカストラップ）。 */
function trapFocus(e) {
  const modalBox = $("#modalBox");
  const focusables = focusableEls(modalBox);
  if (focusables.length === 0) return;

  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;

  if (e.shiftKey) {
    if (active === first || !modalBox.contains(active)) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (active === last || !modalBox.contains(active)) {
      e.preventDefault();
      first.focus();
    }
  }
}

$("#modalClose").addEventListener("click", closeModal);
backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (!backdrop.classList.contains("open")) return;
  if (e.key === "Escape") { closeModal(); return; }
  if (e.key === "Tab") trapFocus(e);
});

/* ===== ヒーロー統計 ===== */
function buildHeroStats() {
  const areas = new Set(STORES.map((s) => s.area)).size;
  $("#heroStats").innerHTML = [
    [STORES.length, "掲載店舗"],
    [areas, "エリア（行政区）"]
  ].map(([n, l]) => `
    <div class="hero-stat">
      <span class="num">${n}</span>
      <span class="label">${l}</span>
    </div>`).join("");
}

/* ===== ヒーローの視点ボタン =====
 * 5つのエコの視点をヒーローに並べ、押すとそのタグで絞り込んで
 * 一覧までスクロールする。フィルターのチップと状態を共有する。 */
function buildHeroViews() {
  const box = $("#heroViews");
  for (const [key, def] of Object.entries(TAGS)) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "view-btn";
    btn.dataset.tag = key;
    btn.setAttribute("aria-pressed", "false");
    const count = STORES.filter((s) => s.eco_tags.some((t) => t.tag === key)).length;
    btn.innerHTML = `${tagIconSvg(key)}${escapeHtml(def.label)}<span class="cnt">${count}</span>`;
    btn.addEventListener("click", () => {
      const on = toggleTag(key);
      if (on) {
        const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.querySelector(".results").scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      }
    });
    box.appendChild(btn);
  }
}

buildFilters();
buildHeroStats();
buildHeroViews();
restoreFromURL();
render();
