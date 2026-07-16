/*
 * 店舗データ（京都エコごはん帖）
 * 追加・修正はこのファイルの STORES 配列を編集する。
 * フォーマットの詳細はリポジトリの DATA_COLLECTION.md を参照。
 */
"use strict";
/* ===== 店舗データ（stores.json より） ===== */
const STORES = [
  {
    "id": "walden-woods-kyoto",
    "name": "WALDEN WOODS KYOTO",
    "category": "cafe",
    "area": "下京区",
    "address": "〒600-8194 京都市下京区栄町508-1（花屋町通り富小路西入る）",
    "access": "地下鉄五条駅から徒歩6分、京阪清水五条駅から徒歩10分、JR京都駅から徒歩15分",
    "hours": "8:00～18:00",
    "holidays": "不定休（年末年始などは都度告知）",
    "url": "https://www.walden-woods.com/",
    "description": "五条エリアの白を基調としたコーヒースタンドです。マイボトルを持参して利用でき、店頭での洗浄にも対応しています。",
    "eco_tags": [
      { "tag": "my_cup", "detail": "マイボトル持参で50円引き、マイボトルの洗浄にも対応。" }
    ],
    "sources": [
      "https://www.walden-woods.com/",
      "https://kyoto-kogomi.net/mybottle/",
      "https://kyoto-kogomi.net/wp-content/themes/main/mybottle/mybottle_shop.pdf"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "ran-hotei",
    "name": "らん布袋",
    "category": "cafe",
    "area": "中京区",
    "address": "〒604-8374 京都市中京区上瓦町64 京都三条会商店街内",
    "access": "地下鉄二条城前駅から徒歩5分、阪急大宮駅から徒歩5分、JR二条駅から徒歩15分",
    "hours": "11:30～20:00（金曜日のみ23:00まで）",
    "holidays": "木曜日",
    "budget": "480～1,100円程度",
    "url": "https://ranhotei.com/",
    "description": "京都三条会商店街にある抹茶と和紅茶のカフェです。京都産茶葉を使った抹茶とマイボトル利用のサービスを通じて、地域の食材と繰り返し使える容器を取り入れています。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "京都産茶葉100％のオリジナル抹茶を使用。" },
      { "tag": "my_cup", "detail": "マイボトル持参で50円引き、マイボトルの洗浄にも対応。" }
    ],
    "sources": [
      "https://ranhotei.com/access/",
      "https://ranhotei.com/menu/",
      "https://kyoto-kogomi.net/mybottle/",
      "https://kyoto-kogomi.net/wp-content/themes/main/mybottle/mybottle_shop.pdf"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "cafe-uzura",
    "name": "喫茶うずら",
    "category": "cafe",
    "area": "伏見区",
    "address": "京都市伏見区深草西浦町六丁目31番地 ぷらっつ・うずら一階",
    "hours": "9:00～19:00",
    "holidays": "日曜日・祝祭日",
    "url": "https://www.cafe-uzura.info/",
    "description": "深草の地域に根ざした喫茶店で、コーヒーや紅茶、軽食を提供しています。無農薬有機栽培やフェアトレードの食材を取り入れ、テイクアウトではマイボトルにも対応しています。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "コーヒー豆に無農薬有機栽培・フェアトレード品、紅茶やカカオに無農薬栽培品を使用。" },
      { "tag": "my_cup", "detail": "テイクアウトでマイボトル持参時は50円引き、マイボトルの洗浄にも対応。" }
    ],
    "sources": [
      "https://www.cafe-uzura.info/",
      "https://www.cafe-uzura.info/menu.html",
      "https://www.cafe-uzura.info/access.html",
      "https://kyoto-kogomi.net/mybottle/",
      "https://kyoto-kogomi.net/wp-content/themes/main/mybottle/mybottle_shop.pdf"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "mumokuteki-cafe-kyoto",
    "name": "mumokuteki cafe KYOTO",
    "category": "cafe",
    "area": "中京区",
    "address": "〒604-8061 京都市中京区式部町261 ヒューマンフォーラムビル2F",
    "access": "京都市営地下鉄「京都市役所前」駅から徒歩5分、阪急「京都河原町」駅から徒歩5分",
    "hours": "11:30～20:00（L.O.19:00）",
    "holidays": "水曜日",
    "url": "https://mumokuteki.com/cafe/restaurant/",
    "description": "寺町御幸町エリアのヴィーガンカフェで、動物性食材を使わない料理・スイーツ・ドリンクを提供します。野菜、穀物、豆類を中心にしたメニューを楽しめます。",
    "eco_tags": [
      { "tag": "plant_based", "detail": "料理・スイーツ・ドリンクを動物性食材不使用で提供。" }
    ],
    "sources": [
      "https://mumokuteki.com/cafe/restaurant/",
      "https://mumokuteki.com/cafe/takeout/",
      "https://mumokuteki.com/cafe/news/"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "veg-out",
    "name": "Veg Out（ベグアウト）",
    "category": "cafe",
    "area": "下京区",
    "address": "〒600-8133 京都市下京区七条通加茂川筋西入ル稲荷町448 鴨川ビル1F",
    "access": "京阪「七条」駅から徒歩2分、JR「京都」駅から徒歩10分",
    "url": "https://tamisa-yoga.com/cafe/veg-out/index.html",
    "description": "鴨川七条大橋のたもとにあるヴィーガンカフェです。動物性食品を使わず、自然農・有機栽培の野菜や穀物、京都近郊の旬の野菜を使った料理を提供しています。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "自然農・有機栽培の野菜や穀物を中心に使用し、京都近郊で採れた旬の有機野菜も提供。" },
      { "tag": "plant_based", "detail": "魚・肉・卵・乳製品などの動物性食品を一切使わず、ヴィーガン料理を提供。" }
    ],
    "sources": [
      "https://tamisa-yoga.com/cafe/veg-out/index.html",
      "https://tamisa-yoga.com/cafe/",
      "https://kyo-kenko.city.kyoto.lg.jp/support/38557/",
      "https://tabelog.com/kyoto/A2601/A260304/26026227/"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "choice-kyoto",
    "name": "CHOICE-チョイス-",
    "category": "cafe",
    "area": "東山区",
    "address": "〒605-0009 京都府京都市東山区大橋町89-1 鈴木形成外科ビル1F",
    "hours": "9:30～21:00（朝食9:30～11:00、ランチ11:00～15:00、カフェ15:00～17:00、ディナー17:00～20:00）",
    "holidays": "水曜日",
    "url": "https://hs-choice.com/",
    "description": "グルテンフリー・ヴィーガンのカフェで、料理はすべて植物性です。発芽玄米、豆・雑穀のハンバーグ、ヴィーガンチーズなどを使い、朝食からディナーまで提供します。",
    "eco_tags": [
      { "tag": "plant_based", "detail": "料理はすべてグルテンフリー・ヴィーガンで、動物性食材を使用しない。" }
    ],
    "sources": [
      "https://hs-choice.com/",
      "https://hs-choice.com/meal/",
      "https://hs-choice.com/store"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "tourbillon-kyoto",
    "name": "珈琲専門店トゥールビヨン",
    "category": "cafe",
    "area": "右京区",
    "address": "〒615-0003 京都府京都市右京区西院西今田町12-18",
    "hours": "6:30～18:00",
    "holidays": "不定休",
    "url": "https://tourbillon-kyoto.com/",
    "description": "西院の早朝から営業する珈琲専門店です。仕入れの無駄を抑え、使用済みコーヒーかすの再利用やマイボトル利用の推奨にも取り組んでいます。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "食品の無駄が出ないよう仕入れ、使用済みコーヒーかすを消臭剤として再利用。" },
      { "tag": "less_disposable", "detail": "マイボトル利用を推奨し、使い捨て容器を使わない工夫を行っている。" }
    ],
    "sources": [
      "https://tourbillon-kyoto.com/",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/4596.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "saemon-cafe",
    "name": "佐右衛門カフェ",
    "category": "cafe",
    "area": "北区",
    "address": "京都市北区上賀茂柊谷町12",
    "hours": "11:00～17:00",
    "holidays": "月曜日・火曜日・第2日曜日",
    "budget": "1,000～1,500円程度",
    "url": "https://saemon-kyoto.com/cafe",
    "description": "上賀茂の農家が営む、畑に近いカフェです。朝採れの京野菜や季節の野菜を使った料理を提供し、生産地との距離が近い食事を楽しめます。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "農家カフェとして、畑から採った朝採れ野菜や京野菜を使ったメニューを提供。" }
    ],
    "sources": [
      "https://saemon-kyoto.com/cafe",
      "https://tabelog.com/kyoto/A2601/A260503/26030427/"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "ain-soph-journey-kyoto",
    "name": "AIN SOPH. JOURNEY 京都店",
    "category": "restaurant",
    "area": "中京区",
    "address": "〒604-8042 京都府京都市中京区新京極通四条上ル中之町538-6",
    "access": "阪急「京都河原町」駅9番出口から徒歩約2分、京阪「祇園四条」駅4番出口から徒歩約10分",
    "hours": "通常11:30～16:00（L.O.15:00）、ディナー17:00～21:00（L.O.20:00・不定期）",
    "holidays": "不定休",
    "url": "https://www.ain-soph.jp/journey-kyoto",
    "description": "京都河原町の完全菜食カフェレストランで、100％植物性のバーガー、プレートランチ、パンケーキなどを提供します。通常営業に加えて不定期のディナーもあります。",
    "eco_tags": [
      { "tag": "plant_based", "detail": "完全菜食（ヴィーガン）のカフェレストランで、100％植物性のメニューを提供。" }
    ],
    "sources": [
      "https://www.ain-soph.jp/journey-kyoto",
      "https://en.ain-soph.jp/journey-kyoto",
      "https://www.ain-soph.jp/"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "botaniq-kajiya",
    "name": "BOTANIQ KAJIYA",
    "category": "restaurant",
    "area": "下京区",
    "address": "京都府京都市下京区歓喜寺町56-3 梅小路公園 緑の館内",
    "access": "JR梅小路京都西駅から徒歩約2分",
    "hours": "9:00～22:00（平日）、8:00～22:00（土日祝）",
    "holidays": "12月31日・1月1日",
    "url": "https://www.kyoto-ga.jp/umekouji/shop/",
    "description": "梅小路公園の緑の館にある、朝食からディナーまで利用できるレストランです。四季折々の京都産ブランド野菜を使った料理を提供しています。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "四季折々の京都産ブランド野菜を使用。" }
    ],
    "sources": [
      "https://www.kyoto-ga.jp/umekouji/shop/",
      "https://prtimes.jp/main/html/rd/p/000000005.000145255.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "udon-tenyu",
    "name": "うどんの天邑",
    "category": "restaurant",
    "area": "山科区",
    "address": "京都市山科区北花山大林町15-3",
    "access": "京阪バス「上花山」停留所から徒歩10秒（「上花山久保町」から徒歩2分）",
    "hours": "11:30～14:30（L.O.14:00）、17:30～21:00（L.O.20:40）",
    "holidays": "月曜日",
    "budget": "～2,000円",
    "url": "https://yawaragi.hannnari.com/tenyu.html",
    "description": "京都の老舗割烹で修行した職人が営む、山科のうどん・和食店です。だしや野菜の再利用、山科地域からの仕入れ、テイクアウト時の使い捨て削減を公式に明示しています。",
    "eco_tags": [
      { "tag": "local_organic", "detail": "可能な範囲で山科地域の商店や生産者から食材を仕入れている。" },
      { "tag": "food_loss", "detail": "だし昆布を塩昆布として提供・販売し、削り節を魚粉としてまかないなどに再利用している。TABETEで賞味期限の近い商品を値引き販売している。" },
      { "tag": "less_disposable", "detail": "テイクアウト時の容器・袋の持参を呼びかけ、バイオマスビニール袋と竹箸を使用している。" }
    ],
    "sources": [
      "https://yawaragi.hannnari.com/tenyu.html",
      "https://yawaragi.hannnari.com/tenyu-access.html",
      "https://yawaragi.hannnari.com/food-menu.html",
      "https://yawaragi.hannnari.com/tenyu-ethical.html",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/6190.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "tsukinokurabito",
    "name": "京の台所 月の蔵人",
    "category": "restaurant",
    "area": "伏見区",
    "address": "京都市伏見区上油掛町185-1",
    "access": "京阪本線「伏見桃山駅」から徒歩6分、近鉄京都線「桃山御陵前駅」から徒歩9分",
    "hours": "11:00～15:00（L.O.14:30）、17:00～22:00（フードL.O.21:00、ドリンクL.O.21:30）",
    "holidays": "元旦・大晦日",
    "url": "https://www.tsukinokurabito.jp/",
    "description": "月桂冠の酒蔵を改装した、伏見の和食・日本酒レストランです。食材を使い切る工夫や、紙製・プラスチック製の使い捨て容器を使わない取組が確認できます。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "無駄の少ない仕入れ、魚のあら・骨や野菜の皮の活用、余った食材のまかない利用、食べ残しの持ち帰りを行っている。" },
      { "tag": "less_disposable", "detail": "紙製・プラスチック製の使い捨て容器などを使わない工夫をしている。" }
    ],
    "sources": [
      "https://www.tsukinokurabito.jp/",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/6110.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "kitchen-karinya",
    "name": "キッチンかりんや",
    "category": "restaurant",
    "area": "伏見区",
    "address": "〒601-1353 京都府京都市伏見区醍醐御園尾町38-1",
    "url": "https://x.com/karinyakarin",
    "description": "醍醐の洋食店で、家庭的な料理を提供しています。食材の使い切り、注文時の分量相談、食べ残しの持ち帰り、繰り返し使える箸や使い捨て容器を使わない工夫を実施しています。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "食品の無駄が出ないよう仕入れ、魚のあら・骨や野菜の皮の活用、余った食材のまかない利用、分量相談、要望時の持ち帰りを実施。" },
      { "tag": "less_disposable", "detail": "間伐材使用の割り箸または繰り返し洗って使える箸を使用し、使い捨て容器を使わない工夫をしている。" }
    ],
    "sources": [
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/3221.html",
      "https://x.com/karinyakarin"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "washoku-sato-oishibashi",
    "name": "和食さと 大石橋店",
    "category": "restaurant",
    "area": "南区",
    "address": "〒601-8015 京都府京都市南区東九条上御霊町1",
    "hours": "10:00～24:00（店内L.O.23:30）",
    "holidays": "年中無休",
    "url": "https://store.srsholdings.com/sato/detail/0756911557/",
    "description": "家族利用にも対応する和食レストランです。食材使用量の理論値と実績を見える化し、少量多頻度の仕込みやサイズ調整、持ち帰りで食品ロスを抑えています。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "食材使用量の理論値と実績を見える化し、少量多頻度の仕込み、小盛り・S/M/L・ハーフサイズ、分量相談、持ち帰り用容器などを実施。" },
      { "tag": "less_disposable", "detail": "間伐材使用の割り箸または繰り返し洗って使える箸を使用している。" }
    ],
    "sources": [
      "https://store.srsholdings.com/sato/detail/0756911557/",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/210.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "kyoto-spice-curry-kaaya",
    "name": "京都スパイスカレーKAAYA",
    "category": "restaurant",
    "area": "伏見区",
    "address": "京都市伏見区桃山町日向13-5",
    "access": "地下鉄東西線・JR奈良線・京阪宇治線「六地蔵駅」",
    "hours": "金曜日11:30～14:00（L.O.13:30）、18:00～20:30（L.O.20:00）／土・日・月曜日11:30～15:00（L.O.14:30）",
    "holidays": "火・水・木曜日（臨時休業あり）",
    "url": "https://kaaya.jp/",
    "description": "六地蔵エリアでスパイスカレーを提供する小規模な飲食店です。ご飯の量を表示して小盛りを勧め、食べ残しの持ち帰りにも対応しています。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "ご飯の量をグラム表示し、小盛りを勧めるほか、食べ残しの持ち帰りにも対応している。" }
    ],
    "sources": [
      "https://kaaya.jp/",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/6132.html"
    ],
    "last_verified": "2026-07-16"
  },
  {
    "id": "jinento-shokudo",
    "name": "じねんと食堂",
    "category": "restaurant",
    "area": "伏見区",
    "address": "〒612-8426 京都府京都市伏見区竹田青池町130",
    "hours": "平日11:00～15:00（L.O.14:00）、土日祝11:00～15:00・17:00～22:00（L.O.21:00）",
    "url": "https://jinento.com/",
    "description": "竹田にある、地元の農家や野菜を身近に感じられる食堂です。食材を無駄なく使う仕込みと、繰り返し使える箸や使い捨て容器を減らす取組が確認できます。",
    "eco_tags": [
      { "tag": "food_loss", "detail": "食品の無駄が出ないよう仕入れ、魚のあら・骨や野菜の皮の活用、余った食材のまかない利用などを実施。" },
      { "tag": "less_disposable", "detail": "繰り返し洗って使える箸を使用し、紙製・プラスチック製の使い捨て容器を使わない工夫をしている。" }
    ],
    "sources": [
      "https://jinento.com/",
      "https://food-zeroproject.city.kyoto.lg.jp/shoplist/2841.html"
    ],
    "last_verified": "2026-07-16"
  }
];
