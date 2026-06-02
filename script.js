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
  lushu: {
    name: "鹿蜀",
    source: "《山海经·南山经》",
    image: "assets/images/lushu.png",
    alt: "马形白首虎纹赤尾的异兽鹿蜀立于山间",
    caption: "依据“其状如马而白首，其文如虎而赤尾”生成：马身、白首、虎纹与赤尾都作为主要识别特征。",
    summary:
      "鹿蜀出自杻阳之山，是一类兼具祥瑞意味和强烈视觉辨识度的异兽。它的形貌以马为基底，却有白色头部、虎纹身体和赤色尾巴，原文还说佩戴其皮毛有宜子孙之意。",
    original:
      "又东三百七十里，曰杻阳之山，其阳多赤金，其阴多白金。有兽焉，其状如马而白首，其文如虎而赤尾，其音如谣，其名曰鹿蜀，佩之宜子孙。",
    interpretation:
      "再向东三百七十里，有一座杻阳山。山南多赤金，山北多白金。山中有一种兽，形状像马，头是白色，身上有虎一样的纹理，尾巴是红色，叫声像歌谣，名叫鹿蜀，佩戴它的皮毛据说有利于子孙。",
    facts: [
      ["出没地", "杻阳之山"],
      ["核心形貌", "马形白首，虎文赤尾"],
      ["声音", "其音如谣"],
      ["祥异", "佩之宜子孙"],
    ],
    features: [
      "身体以马为骨架，保留修长四肢和高颈轮廓。",
      "白首、虎纹、赤尾三处特征同时呈现，避免被误读为普通马或虎。",
      "场景加入金石山色，回应杻阳山“赤金”“白金”的矿物气质。",
    ],
  },
  xuangui: {
    name: "旋龟",
    source: "《山海经·南山经》",
    image: "assets/images/xuangui.png",
    alt: "黑色龟身鸟首虺尾的旋龟伏在水边岩石上",
    caption: "依据“其状如龟而鸟首虺尾”生成：龟身、鸟首、蛇尾三者组合成水边异兽。",
    summary:
      "旋龟出现在怪水之中，形体把龟、鸟、蛇三种动物拼合在一起。它不像陆地猛兽那样张扬，而是带着水石之间的幽冷感，原文还赋予它避聋、治足疾的功能。",
    original:
      "怪水出焉，而东流注于宪翼之水。其中多玄龟，其状如龟而鸟首虺尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。",
    interpretation:
      "怪水从山中流出，向东注入宪翼水。水中有许多旋龟，形状像龟，却长着鸟的头和蛇一样的尾巴，叫声像劈木头。佩戴它据说可以不耳聋，也可以治疗足底疾病。",
    facts: [
      ["出没地", "怪水"],
      ["核心形貌", "龟身鸟首，虺尾"],
      ["声音", "如判木"],
      ["异能", "佩之不聋，可以为底"],
    ],
    features: [
      "主体保留沉重龟壳和低伏姿态，形成水生异兽的稳定轮廓。",
      "头部明确处理为鸟首，尾部处理为蛇形，突出跨物种拼合感。",
      "画面以冷水、湿石和雾气强调它来自水中的幽秘气质。",
    ],
  },
  bifang: {
    name: "毕方",
    source: "《山海经·西山经》",
    image: "assets/images/bifang.png",
    alt: "青质赤文白喙一足的鹤形异鸟毕方立于烟火山间",
    caption: "依据“其状如鹤，一足，赤文青质而白喙”生成：鹤形、独足、青质赤文与白喙。",
    summary:
      "毕方是《山海经》中极具象征性的异鸟。它形如鹤，却只有一只脚，青色身体上带赤色纹理，白喙醒目，后来常被视作火灾或火兆相关的异象。",
    original:
      "有鸟焉，其状如鹤，一足，赤文青质而白喙，名曰毕方，其鸣自叫也，见则其邑有讹火。",
    interpretation:
      "山中有一种鸟，形状像鹤，只有一只脚，青色身体上有红色纹理，喙是白色，名叫毕方。它的叫声像在呼唤自己的名字，出现时据说当地会有怪火。",
    facts: [
      ["出没地", "章莪之山"],
      ["核心形貌", "鹤形一足，赤文青质"],
      ["喙色", "白喙"],
      ["灾异", "见则其邑有讹火"],
    ],
    features: [
      "以鹤为基础，但只保留一足，形成最关键的异鸟特征。",
      "羽色采用青质与赤文的组合，白喙作为明亮识别点。",
      "背景加入烟火与荒山，不把毕方画成普通祥鸟，而保留火兆的不安感。",
    ],
  },
  dijiang: {
    name: "帝江",
    source: "《山海经·西山经》",
    image: "assets/images/dijiang.png",
    alt: "赤如丹火黄囊形六足四翼无面目的神鸟帝江",
    caption: "依据“状如黄囊，赤如丹火，六足四翼，浑敦无面目”生成：囊形、赤色、六足四翼、无面。",
    summary:
      "帝江的形象非常反常：它像黄色的囊袋，又红得像丹火，有六只脚和四只翅膀，却没有面目。这种无面而能歌舞的形象，使它更像一种混沌神灵而非普通动物。",
    original:
      "有神焉，其状如黄囊，赤如丹火，六足四翼，浑敦无面目，是识歌舞，实惟帝江也。",
    interpretation:
      "山中有一位神，形状像黄色的囊袋，颜色红得像丹火，有六只脚和四只翅膀，浑圆混沌，没有面目，却懂得歌舞，这就是帝江。",
    facts: [
      ["出没地", "天山"],
      ["核心形貌", "黄囊赤火，六足四翼"],
      ["面目", "浑敦无面目"],
      ["能力", "识歌舞"],
    ],
    features: [
      "整体不画成常规鸟兽，而采用囊形神体，保留混沌感。",
      "六足和四翼必须清楚可见，作为帝江最重要的结构特征。",
      "无面设计避免添加眼口，强调原文“浑敦无面目”的神异性。",
    ],
  },
  dangkang: {
    name: "当康",
    source: "《山海经·东山经》",
    image: "assets/images/dangkang.png",
    alt: "形如豚而有牙的丰穰异兽当康站在谷物山野间",
    caption: "依据“其状如豚而有牙”生成：豚形、长牙，并以谷物环境回应丰年之兆。",
    summary:
      "当康是少见的丰穰型异兽。它形状像猪，却长着醒目的牙，原文说它出现时天下将大穰，因此画面不强调阴森危险，而突出古老、厚重和丰收将至的气息。",
    original:
      "有兽焉，其状如豚而有牙，其名曰当康，其鸣自叫，见则天下大穰。",
    interpretation:
      "山中有一种兽，形状像小猪却长着牙，名叫当康。它的叫声像在呼唤自己的名字，出现时据说天下会迎来大丰收。",
    facts: [
      ["出没地", "东山诸野"],
      ["核心形貌", "如豚而有牙"],
      ["声音", "其鸣自叫"],
      ["祥兆", "见则天下大穰"],
    ],
    features: [
      "以野猪和家豚之间的体态为基础，强调厚重身体与短壮四肢。",
      "牙齿做成主要识别点，避免只是普通猪形。",
      "环境加入谷物、山石和暖色雾气，回应“大穰”的丰收含义。",
    ],
  },
  qiongqi: {
    name: "穷奇",
    source: "《山海经·西山经》",
    image: "assets/images/qiongqi.png",
    alt: "牛形猬毛的凶兽穷奇低伏于矿石山谷之中",
    caption: "依据“其状如牛，猬毛，音如嗥狗”生成：牛形、猬毛与凶悍食人的山中异兽感。",
    summary:
      "穷奇出自邽山，是《山海经》中凶性极强的异兽。原文描述它形状像牛，身披刺猬般的粗硬毛刺，叫声像狗嗥，并直接点明“是食人”，因此形象带有沉重、粗砺而危险的压迫感。",
    original:
      "又西二百六十里，曰邽山。其上有兽焉，其状如牛，猬毛，名曰穷奇，音如嗥狗，是食人。",
    interpretation:
      "再向西二百六十里，有一座邽山。山上有一种兽，形状像牛，身上长着刺猬一样的毛，名叫穷奇，叫声像狗嗥，会吃人。",
    facts: [
      ["出没地", "邽山"],
      ["核心形貌", "如牛，猬毛"],
      ["声音", "音如嗥狗"],
      ["危险", "是食人"],
    ],
    features: [
      "身体以牛为基础，保留厚重肩背、低伏头颈和强壮四肢。",
      "背脊与肩部加入刺猬般粗硬毛刺，回应原文“猬毛”。",
      "姿态压低而逼近，配合荒山矿石环境，强化“食人”凶兽的威胁感。",
    ],
  },
  gudiao: {
    name: "蛊雕",
    source: "《山海经·南山经》",
    image: "assets/images/gudiao.png",
    alt: "雕形有角的蛊雕立在泽水旁的湿石上张口鸣叫",
    caption: "依据“其状如雕而有角，其音如婴儿之音”生成：雕形、头角、水泽环境与婴儿般怪鸣。",
    summary:
      "蛊雕出现在鹿吴山下的泽更之水中，形体像雕却长有角，叫声像婴儿，并且会吃人。它把猛禽的锋利、水泽的阴冷和婴儿声的反常感叠在一起，是极具不安气质的异兽。",
    original:
      "又东五百里，曰鹿吴之山，上无草木，多金石。泽更之水出焉，而南流注于滂水。水有兽焉，名曰蛊雕，其状如雕而有角，其音如婴儿之音，是食人。",
    interpretation:
      "再向东五百里，有一座鹿吴山，山上没有草木，多金属矿物和石头。泽更水从这里流出，向南注入滂水。水中有一种兽名叫蛊雕，形状像雕却长着角，叫声像婴儿，会吃人。",
    facts: [
      ["出没地", "鹿吴之山，泽更之水"],
      ["核心形貌", "如雕而有角"],
      ["声音", "如婴儿之音"],
      ["危险", "是食人"],
    ],
    features: [
      "主体采用大型猛禽轮廓，突出钩喙、利爪和厚重羽翼。",
      "头顶加入清晰单角，让它与普通雕、鹰区分开来。",
      "场景置于水边湿石和冷雾中，回应蛊雕来自泽水的原文环境。",
    ],
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
  });
}

initMenu();
const initialKey = location.hash.replace("#", "");
renderCreature(creatures[initialKey] ? initialKey : state.current);

