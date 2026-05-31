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
  scene: null,
  renderer: null,
  camera: null,
  group: null,
  three: null,
  fallback: null,
  rotation: { x: -0.2, y: 0.35 },
  scale: 1,
  dragging: false,
  last: { x: 0, y: 0 },
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
  viewer: document.querySelector("#three-viewer"),
  viewerNote: document.querySelector("#viewer-note"),
  reset: document.querySelector("#reset-view"),
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
  els.viewerNote.textContent = `当前模型强调${creature.name}的主要识别特征，可拖动观察轮廓，滚轮放大或缩小。`;

  els.facts.innerHTML = creature.facts
    .map(([term, desc]) => `<div><dt>${term}</dt><dd>${desc}</dd></div>`)
    .join("");
  els.features.innerHTML = creature.features.map((item) => `<li>${item}</li>`).join("");
  if (state.three) {
    buildThreeModel(creature);
  } else {
    buildFallbackModel(creature);
  }
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

async function initThree() {
  buildFallbackModel(creatures[state.current]);
  bindViewerControls();
  return;

  try {
    const THREE = await import("https://unpkg.com/three@0.165.0/build/three.module.js");
    state.three = THREE;
    state.scene = new THREE.Scene();
    state.scene.background = null;

    state.camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    state.camera.position.set(0, 1.35, 7.2);

    state.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    state.renderer.setSize(els.viewer.clientWidth, els.viewer.clientHeight);
    els.viewer.innerHTML = "";
    state.fallback = null;
    els.viewer.appendChild(state.renderer.domElement);

    const ambient = new THREE.HemisphereLight(0xf7eed6, 0x14231f, 2.7);
    const key = new THREE.DirectionalLight(0xffdf9c, 3.2);
    key.position.set(4, 5, 6);
    const rim = new THREE.DirectionalLight(0x7fb6a5, 1.6);
    rim.position.set(-4, 2, -3);
    state.scene.add(ambient, key, rim);

    const grid = new THREE.GridHelper(9, 18, 0x8d7140, 0x3a3a2f);
    grid.position.y = -1.35;
    grid.material.transparent = true;
    grid.material.opacity = 0.2;
    state.scene.add(grid);

    buildThreeModel(creatures[state.current]);
    bindViewerControls();
    resizeRenderer();
    animate();
  } catch (error) {
    console.info("Three.js unavailable, using CSS 3D fallback.", error);
    buildFallbackModel(creatures[state.current]);
    bindViewerControls();
  }
}

function buildThreeModel(creature) {
  const THREE = state.three;
  if (!THREE) return;
  if (state.group) {
    state.scene.remove(state.group);
  }

  const model = creature.model;
  const group = new THREE.Group();
  const main = new THREE.MeshStandardMaterial({
    color: model.main,
    roughness: 0.72,
    metalness: 0.02,
  });
  const accent = new THREE.MeshStandardMaterial({
    color: model.accent,
    roughness: 0.68,
  });
  const dark = new THREE.MeshStandardMaterial({
    color: model.dark,
    roughness: 0.78,
  });
  const ivory = new THREE.MeshStandardMaterial({
    color: 0xf1e5c7,
    roughness: 0.62,
  });

  const body = new THREE.Mesh(new THREE.SphereGeometry(1.45, 48, 24), main);
  body.scale.set(model.type === "goat" ? 1.55 : 1.82, model.type === "goat" ? 0.92 : 0.72, 0.82);
  body.position.set(0, 0, 0);
  group.add(body);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 18), model.humanFace ? ivory : main);
  head.scale.set(model.humanFace ? 0.78 : 1, model.humanFace ? 1.1 : 0.82, 0.9);
  head.position.set(-2.15, 0.48, 0.2);
  group.add(head);

  const snout = new THREE.Mesh(new THREE.ConeGeometry(0.32, 0.74, 28), model.humanFace ? dark : accent);
  snout.rotation.z = Math.PI / 2;
  snout.position.set(-2.7, 0.42, 0.2);
  group.add(snout);

  const eyeMaterial = new THREE.MeshStandardMaterial({
    color: 0xf2c15b,
    emissive: 0x4a2608,
    emissiveIntensity: 0.5,
  });
  addEye(group, THREE, -2.6, 0.65, 0.56, eyeMaterial);
  addEye(group, THREE, -2.6, 0.65, -0.16, eyeMaterial);

  if (model.humanFace) {
    addEye(group, THREE, -1.26, -0.32, 0.82, eyeMaterial, 0.13);
    addEye(group, THREE, -1.26, -0.32, -0.82, eyeMaterial, 0.13);
    addClawHands(group, THREE, ivory, dark);
  }

  for (let i = 0; i < 4; i += 1) {
    const leg = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 1.12, 8, 18), main);
    leg.position.set(i < 2 ? -1.0 : 1.05, -1.02, i % 2 === 0 ? 0.48 : -0.48);
    leg.rotation.z = i < 2 ? -0.14 : 0.12;
    group.add(leg);
  }

  for (let i = 0; i < model.tails; i += 1) {
    const angle = (i - (model.tails - 1) / 2) * (model.tails > 5 ? 0.2 : 0.28);
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(1.55, 0.26, 0),
      new THREE.Vector3(2.15, 0.75 + Math.abs(angle) * 0.5, angle * 2.2),
      new THREE.Vector3(2.85, 1.0 + Math.cos(i) * 0.2, angle * 3.6),
      new THREE.Vector3(3.35, 0.38 + Math.sin(i) * 0.24, angle * 4.3),
    ]);
    const tail = new THREE.Mesh(new THREE.TubeGeometry(curve, 36, model.type === "fox" ? 0.12 : 0.09, 12), accent);
    group.add(tail);
  }

  if (model.horn) {
    const hornCount = model.type === "goat" ? 2 : 1;
    for (let i = 0; i < hornCount; i += 1) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.16, 0.92, 24), dark);
      horn.position.set(-2.16, 1.13, hornCount === 1 ? 0.2 : i === 0 ? 0.45 : -0.08);
      horn.rotation.z = hornCount === 1 ? -0.16 : i === 0 ? -0.45 : 0.28;
      group.add(horn);
    }
  }

  if (model.type === "leopard") {
    for (let i = 0; i < 34; i += 1) {
      const spot = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 8), dark);
      spot.scale.set(1, 0.18, 0.68);
      spot.position.set(
        -1.35 + Math.random() * 2.9,
        0.1 + Math.random() * 0.52,
        (Math.random() > 0.5 ? 0.78 : -0.78) + Math.random() * 0.05,
      );
      group.add(spot);
    }
  }

  group.rotation.set(state.rotation.x, state.rotation.y, 0);
  group.scale.setScalar(state.scale);
  state.group = group;
  state.scene.add(group);
}

function addEye(group, THREE, x, y, z, material, radius = 0.09) {
  const eye = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 10), material);
  eye.position.set(x, y, z);
  group.add(eye);
}

function addClawHands(group, THREE, skin, dark) {
  for (const side of [0.62, -0.62]) {
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 18, 12), skin);
    hand.scale.set(0.8, 0.42, 1.2);
    hand.position.set(-1.42, -1.18, side);
    group.add(hand);
    for (let i = 0; i < 4; i += 1) {
      const claw = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.24, 10), dark);
      claw.rotation.x = Math.PI / 2;
      claw.position.set(-1.58 - i * 0.035, -1.19, side + (i - 1.5) * 0.09);
      group.add(claw);
    }
  }
}

function buildFallbackModel(creature) {
  const model = creature.model;
  const tailCount = Math.min(model.tails, 9);
  els.viewer.innerHTML = `
    <div class="css-creature" style="--model-main:#${model.main.toString(16).padStart(6, "0")}; --model-accent:#${model.accent.toString(16).padStart(6, "0")}; --scale:${state.scale}; --rx:${state.rotation.x}rad; --ry:${state.rotation.y}rad;">
      <div class="model">
        <span class="body"></span>
        <span class="head"></span>
        <span class="leg" style="--z:52px"></span>
        <span class="leg" style="--z:-24px"></span>
        ${model.horn ? '<span class="horn"></span>' : ""}
        ${Array.from({ length: tailCount })
          .map((_, i) => {
            const top = 24 + i * (42 / Math.max(tailCount, 1));
            const z = -50 + i * (100 / Math.max(tailCount - 1, 1));
            const rz = -36 + i * (72 / Math.max(tailCount - 1, 1));
            return `<span class="tail" style="--top:${top}%; --left:62%; --width:${model.type === "fox" ? 34 : 26}%; --z:${z}px; --rz:${rz}deg"></span>`;
          })
          .join("")}
      </div>
    </div>
  `;
  state.fallback = els.viewer.querySelector(".css-creature");
}

function bindViewerControls() {
  els.viewer.addEventListener("pointerdown", (event) => {
    state.dragging = true;
    state.last = { x: event.clientX, y: event.clientY };
    els.viewer.setPointerCapture(event.pointerId);
  });

  els.viewer.addEventListener("pointermove", (event) => {
    if (!state.dragging) return;
    const dx = event.clientX - state.last.x;
    const dy = event.clientY - state.last.y;
    state.last = { x: event.clientX, y: event.clientY };
    state.rotation.y += dx * 0.01;
    state.rotation.x += dy * 0.008;
    applyTransform();
  });

  els.viewer.addEventListener("pointerup", () => {
    state.dragging = false;
  });

  els.viewer.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      state.scale = Math.min(1.85, Math.max(0.62, state.scale + (event.deltaY > 0 ? -0.08 : 0.08)));
      applyTransform();
    },
    { passive: false },
  );

  els.reset.addEventListener("click", () => {
    state.rotation = { x: -0.2, y: 0.35 };
    state.scale = 1;
    applyTransform();
  });

  window.addEventListener("resize", resizeRenderer);
}

function applyTransform() {
  if (state.group) {
    state.group.rotation.set(state.rotation.x, state.rotation.y, 0);
    state.group.scale.setScalar(state.scale);
  }
  if (state.fallback) {
    state.fallback.style.setProperty("--rx", `${state.rotation.x}rad`);
    state.fallback.style.setProperty("--ry", `${state.rotation.y}rad`);
    state.fallback.style.setProperty("--scale", state.scale);
  }
}

function resizeRenderer() {
  if (!state.renderer || !state.camera) return;
  const { clientWidth, clientHeight } = els.viewer;
  state.camera.aspect = clientWidth / clientHeight;
  state.camera.updateProjectionMatrix();
  state.renderer.setSize(clientWidth, clientHeight);
}

function animate() {
  if (!state.renderer || !state.scene || !state.camera) return;
  state.renderer.render(state.scene, state.camera);
  requestAnimationFrame(animate);
}

initMenu();
const initialKey = location.hash.replace("#", "");
renderCreature(creatures[initialKey] ? initialKey : state.current);
initThree();

if (new URLSearchParams(location.search).get("section") === "viewer") {
  const scrollToViewer = () => {
    window.setTimeout(() => {
      document.querySelector("#viewer-title")?.scrollIntoView({ block: "start" });
    }, 450);
  };
  if (document.readyState === "complete") {
    scrollToViewer();
  } else {
    window.addEventListener("load", scrollToViewer);
  }
}
