const creatures = {
  jiuweihu: {
    name: "九尾狐",
    source: "《山海经·南山经》",
    image: "assets/images/jiuweihu.png",
    alt: "青丘山中白色九尾狐立于山石之上",
    caption: "依据“其状如狐而九尾”生成：狐形、九尾、婴儿般啼声所带来的幽异感。",
    summary:
      "青丘山的九尾狐是《山海经》中最具传播力的异兽之一。原文强调它“狐形九尾”“其音如婴儿”，既带有祥异色彩，也保留了食人的危险性。",
    original:
      "又东三百里，曰青丘之山，其阳多玉，其阴多青雘。有兽焉，其状如狐而九尾，其音如婴儿，能食人；食者不蛊。",
    interpretation:
      "再向东三百里，有一座青丘山。山南多玉，山北多青雘。山中有一种兽，形状像狐狸，却有九条尾巴，叫声像婴儿，会吃人；吃了它的肉，据说可以使人不受妖邪迷惑。",
    facts: [
      ["出没地", "青丘之山"],
      ["核心形貌", "狐形九尾"],
      ["声音", "如婴儿"],
      ["异能与危险", "能食人，食者不蛊"],
    ],
    features: [
      "主体采用狐形轮廓，保留灵敏长吻、竖耳与轻捷四肢。",
      "尾部明确展开为九条，作为识别九尾狐的最主要依据。",
      "画面气质偏幽静而危险，回应“其音如婴儿，能食人”的矛盾感。",
    ],
    model: {
      type: "fox",
      main: 0xf1ede0,
      accent: 0xb44a32,
      dark: 0x2e3833,
      tails: 9,
      horn: false,
      humanFace: false,
    },
  },
  zheng: {
    name: "狰",
    source: "《山海经·西山经》",
    image: "assets/images/zheng.png",
    alt: "赤豹形异兽狰有五条尾巴和一只角",
    caption: "依据“其状如赤豹，五尾一角”生成：赤豹身、五尾、单角，山石间有击石般的锐利气势。",
    summary:
      "狰出自章莪山，原文的视觉信息非常明确：赤豹一样的身体、五条尾、一只角。它的叫声如击石，形象因此带着坚硬、尖锐、山岩般的攻击性。",
    original:
      "又西二百六十里，曰章莪之山，无草木，多瑶碧。所为甚怪。有兽焉，其状如赤豹，五尾一角，其音如击石，其名曰狰。",
    interpretation:
      "再向西二百六十里，有一座章莪山，山上不长草木，却有许多美玉和碧玉，怪异之事很多。山中有一种兽，形状像红色豹子，长着五条尾巴和一只角，叫声像敲击石头，名叫狰。",
    facts: [
      ["出没地", "章莪之山"],
      ["核心形貌", "赤豹、五尾、一角"],
      ["声音", "如击石"],
      ["气质", "山岩猛兽，锐利凶悍"],
    ],
    features: [
      "以赤豹为身体基础，加入豹斑、低伏捕猎姿态与强壮肩背。",
      "尾部设为五条，避免与九尾狐等多尾异兽混淆。",
      "头部仅保留一只角，强调“一角”而非龙角或双角造型。",
    ],
    model: {
      type: "leopard",
      main: 0x9f2f22,
      accent: 0x201b16,
      dark: 0xe1c98a,
      tails: 5,
      horn: true,
      humanFace: false,
    },
  },
  paoxiao: {
    name: "狍鸮",
    source: "《山海经·北山经》",
    image: "assets/images/paoxiao.png",
    alt: "羊身人面异兽狍鸮有腋下之目虎齿人爪",
    caption: "依据“羊身人面，其目在腋下，虎齿人爪”生成：羊身、人面、腋目、虎齿、人爪，突出其诡异食人性。",
    summary:
      "狍鸮是《山海经》中最具不安感的异兽之一。它把羊身、人面、腋下之目、虎齿与人爪组合在一起，几乎每个部位都在打破常规动物的秩序。",
    original:
      "又北三百五十里，曰钩吾之山，其上多玉，其下多铜。有兽焉，其状如羊身人面，其目在腋下，虎齿人爪，其音如婴儿，名曰狍鸮，是食人。",
    interpretation:
      "再向北三百五十里，有一座钩吾山。山上多玉，山下多铜。山中有一种兽，身体像羊，却长着人的面孔，眼睛在腋下，有老虎一样的牙齿和人一样的爪子，叫声像婴儿，名叫狍鸮，会吃人。",
    facts: [
      ["出没地", "钩吾之山"],
      ["核心形貌", "羊身人面，目在腋下"],
      ["牙爪", "虎齿人爪"],
      ["危险", "其音如婴儿，是食人"],
    ],
    features: [
      "身体以羊为基底，保留厚重毛发与羊类躯干。",
      "面部处理为人面而非兽面，制造古籍描述中的错位感。",
      "腋下之目、虎齿、人爪都作为可见特征呈现，服务于原文辨识。",
    ],
    model: {
      type: "goat",
      main: 0xd8c9ad,
      accent: 0x8a7258,
      dark: 0x1c1713,
      tails: 1,
      horn: true,
      humanFace: true,
    },
  },
};

const state = {
  current: "jiuweihu",
};

const els = {
  source: document.querySelector("#creature-source"),
  name: document.querySelector("#creature-name"),
  summary: document.querySelector("#creature-summary"),
  image: document.querySelector("#creature-image"),
  caption: document.querySelector("#creature-caption"),
  original: document.querySelector("#original-text"),
  interpretation: document.querySelector("#interpretation"),
  facts: document.querySelector("#quick-facts"),
  features: document.querySelector("#feature-list"),
  menuItems: [...document.querySelectorAll(".menu-item")],
};

function renderCreature(key) {
  if (!creatures[key]) return;
  const creature = creatures[key];
  state.current = key;
  document.body.dataset.creature = key;
  updateMenuState(key);
  document.title = `${creature.name} | 山海异兽录`;
  els.source.textContent = creature.source;
  els.name.textContent = creature.name;
  els.summary.textContent = creature.summary;
  els.image.src = creature.image;
  els.image.alt = creature.alt;
  els.caption.textContent = creature.caption;
  els.original.textContent = creature.original;
  els.interpretation.textContent = creature.interpretation;

  els.facts.innerHTML = creature.facts
    .map(([term, desc]) => `<div><dt>${term}</dt><dd>${desc}</dd></div>`)
    .join("");
  els.features.innerHTML = creature.features.map((item) => `<li>${item}</li>`).join("");
}

function initMenu() {
  els.menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      const key = item.dataset.creature;
      history.replaceState(null, "", `#${key}`);
      renderCreature(key);
    });
  });
}

function updateMenuState(key) {
  document.querySelectorAll(".menu-item").forEach((item) => {
    const isActive = item.getAttribute("data-creature") === key;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-current", isActive ? "page" : "false");
    item.style.setProperty("background", isActive ? "#161411" : "rgba(255, 250, 236, 0.52)");
    item.style.setProperty("border-color", isActive ? "#161411" : "rgba(35, 29, 22, 0.22)");
    item.style.setProperty("color", isActive ? "#e8dfcb" : "#343028");
  });
}

initMenu();
const initialKey = location.hash.replace("#", "");
renderCreature(creatures[initialKey] ? initialKey : state.current);

