/* Scene geometry, generated from the asset-processing step.
   All numbers are percentages of the 896x1200 frame of master.jpg, so the scene scales fluidly.
   layers: bottom to top. x/y/w/h = layer box. clip = CSS clip-path polygon (in % of the layer box).
   shape = simplified alpha outline (in % of the layer box), used only by the file:// hit-test fallback.
   anchors: where each hotspot's connector line starts. */
const SCENE = {
 aspect: [896, 1200],
 layers: [
  {"id":"bucket","src":"assets/bucket-with-tray.png","hotspot":"body","x":17.299,"y":22.667,"w":65.848,"h":68.433,"shape":[[7.5,4.7],[0.0,13.4],[0.0,17.1],[7.0,32.1],[14.3,94.2],[34.4,99.9],[46.7,95.5],[58.5,96.2],[64.3,99.9],[82.4,96.2],[86.0,93.4],[92.7,31.7],[99.8,16.3],[94.7,6.1],[60.8,0.0],[39.7,0.0]]},
  {"id":"food-fill","src":"assets/scene/food-fill.png","hotspot":null,"x":24.33,"y":24.333,"w":51.786,"h":48.5,"decor":true,"clip":[[0.99,13.4],[1.83,38.66],[2.89,60.55],[3.53,77.39],[4.59,93.38],[6.27,97.25],[49.78,100.29],[93.51,97.25],[95.19,93.38],[95.82,77.39],[96.68,60.55],[97.52,38.66],[98.58,13.4],[98.99,2.27],[92.84,4.04],[86.7,5.03],[80.54,5.74],[74.4,6.25],[68.25,6.62],[62.09,6.86],[55.93,7.01],[49.78,7.04],[43.64,6.99],[37.5,6.86],[31.31,6.58],[25.17,6.22],[19.03,5.69],[12.87,4.98],[6.72,3.93],[0.58,2.04]]},
  {"id":"liquid-left","src":"assets/scene/liquid-left.png","hotspot":"leachate","x":26.786,"y":76.667,"w":16.071,"h":12.167,"clip":[[7.01,7.26],[95.49,7.26],[95.49,93.15],[87.29,93.15],[49.86,89.79],[19.93,81.1],[9.03,76.37]],"shape":[[91.7,13.0],[88.2,11.0],[70.1,11.0],[39.6,13.7],[16.0,19.9],[7.6,24.7],[4.9,32.9],[0.0,35.6],[0.0,99.3],[91.7,99.3]]},
  {"id":"liquid-right","src":"assets/scene/liquid-right.png","hotspot":"leachate","x":57.589,"y":76.667,"w":16.071,"h":12.167,"clip":[[7.92,7.26],[91.6,7.26],[90.97,76.37],[79.37,81.1],[48.75,89.79],[11.32,93.15],[7.92,93.15]],"shape":[[6.9,11.0],[5.6,99.3],[93.1,99.3],[93.1,39.7],[88.9,28.1],[79.2,20.5],[53.5,13.7],[22.2,10.3]]},
  {"id":"bran-top","src":"assets/normalized/layer-bran.png","hotspot":"bran","x":26.161,"y":26.167,"w":48.013,"h":6.0,"clip":[[-2.74,77.78],[-1.84,281.94],[-0.7,458.89],[0.0,595.0],[1.14,724.31],[2.95,755.56],[49.88,780.14],[97.05,755.56],[98.86,724.31],[99.54,595.0],[100.46,458.89],[101.37,281.94],[102.51,77.78],[102.95,-12.22],[96.33,2.08],[89.7,10.14],[83.05,15.83],[76.43,20.0],[69.8,22.92],[63.16,24.86],[56.51,26.11],[49.88,26.39],[43.26,25.97],[36.63,24.86],[29.96,22.64],[23.34,19.72],[16.71,15.42],[10.07,9.72],[3.44,1.25],[-3.18,-14.03]],"shape":[[1.3,48.7],[5.3,69.7],[22.5,84.2],[59.3,90.8],[63.0,84.2],[66.1,98.7],[70.9,80.3],[91.0,71.1],[99.6,46.1],[95.6,23.7],[80.4,9.2],[42.3,13.2],[37.9,0.0],[34.8,13.2],[10.6,18.4],[2.6,35.5]]},
  {"id":"fresh","src":"assets/scene/layer-fresh.png","hotspot":"fresh","x":26.161,"y":31.0,"w":48.013,"h":13.033,"clip":[[-2.74,-1.28],[-1.84,92.71],[-0.7,174.17],[0.0,236.83],[1.14,296.36],[2.95,310.74],[49.88,322.06],[97.05,310.74],[98.86,296.36],[99.54,236.83],[100.46,174.17],[101.37,92.71],[102.51,-1.28],[102.95,-42.71],[96.33,-36.13],[89.7,-32.42],[83.05,-29.8],[76.43,-27.88],[69.8,-26.53],[63.16,-25.64],[56.51,-25.06],[49.88,-24.94],[43.26,-25.13],[36.63,-25.64],[29.96,-26.66],[23.34,-28.01],[16.71,-29.99],[10.07,-32.61],[3.44,-36.51],[-3.18,-43.54]],"shape":[[0.0,36.4],[0.0,44.8],[5.9,70.9],[1.5,81.2],[4.8,86.7],[10.6,81.2],[25.8,93.3],[30.4,81.2],[35.0,92.1],[39.2,92.1],[43.2,99.4],[47.4,87.3],[53.1,89.1],[58.1,83.0],[62.6,91.5],[67.2,87.3],[68.5,94.5],[83.0,93.3],[98.7,73.3],[95.6,59.4],[97.1,30.3],[93.0,21.2],[94.7,13.9],[93.0,4.2],[89.4,9.1],[85.0,3.6],[83.0,13.3],[79.3,16.4],[77.3,4.8],[70.0,19.4],[58.8,13.3],[51.8,20.0],[49.8,12.1],[45.2,17.0],[42.1,7.3],[28.0,15.8],[24.9,8.5],[21.8,13.3],[15.4,6.1],[13.0,16.4],[5.3,3.6],[6.8,26.7]]},
  {"id":"bran-mid","src":"assets/normalized/layer-bran.png","hotspot":"bran","x":26.161,"y":43.167,"w":48.013,"h":6.0,"clip":[[-2.74,-205.56],[-1.84,-1.39],[-0.7,175.56],[0.0,311.67],[1.14,440.97],[2.95,472.22],[49.88,496.81],[97.05,472.22],[98.86,440.97],[99.54,311.67],[100.46,175.56],[101.37,-1.39],[102.51,-205.56],[102.95,-295.56],[96.33,-281.25],[89.7,-273.19],[83.05,-267.5],[76.43,-263.33],[69.8,-260.42],[63.16,-258.47],[56.51,-257.22],[49.88,-256.94],[43.26,-257.36],[36.63,-258.47],[29.96,-260.69],[23.34,-263.61],[16.71,-267.92],[10.07,-273.61],[3.44,-282.08],[-3.18,-297.36]],"shape":[[1.3,48.7],[5.3,69.7],[22.5,84.2],[59.3,90.8],[63.0,84.2],[66.1,98.7],[70.9,80.3],[91.0,71.1],[99.6,46.1],[95.6,23.7],[80.4,9.2],[42.3,13.2],[37.9,0.0],[34.8,13.2],[10.6,18.4],[2.6,35.5]]},
  {"id":"fermenting","src":"assets/normalized/layer-fermenting.png","hotspot":"fermenting","x":26.161,"y":45.833,"w":48.013,"h":12.475,"clip":[[-2.74,-120.24],[-1.84,-22.04],[-0.7,63.06],[0.0,128.52],[1.14,190.71],[2.95,205.74],[49.88,217.57],[97.05,205.74],[98.86,190.71],[99.54,128.52],[100.46,63.06],[101.37,-22.04],[102.51,-120.24],[102.95,-163.53],[96.33,-156.65],[89.7,-152.77],[83.05,-150.03],[76.43,-148.03],[69.8,-146.63],[63.16,-145.69],[56.51,-145.09],[49.88,-144.96],[43.26,-145.16],[36.63,-145.69],[29.96,-146.76],[23.34,-148.16],[16.71,-150.23],[10.07,-152.97],[3.44,-157.05],[-3.18,-164.4]],"shape":[[98.5,29.1],[96.5,24.7],[94.7,3.2],[90.5,12.7],[82.2,10.8],[70.7,24.7],[64.8,15.2],[61.0,29.7],[55.3,31.6],[53.3,27.8],[54.6,16.5],[46.0,23.4],[43.4,17.1],[39.6,28.5],[28.6,15.8],[25.6,21.5],[20.7,15.2],[12.6,18.4],[9.9,4.4],[7.3,8.2],[8.4,24.1],[4.4,24.1],[0.2,41.1],[3.1,49.4],[3.7,74.1],[8.6,86.7],[13.2,87.3],[17.6,81.0],[31.7,99.4],[35.5,99.4],[41.9,89.2],[48.9,91.8],[58.1,87.3],[61.9,93.7],[70.3,94.3],[75.6,86.1],[92.5,85.4],[96.9,65.8],[94.5,62.0],[92.3,46.2],[96.0,40.5]]},
  {"id":"finished","src":"assets/normalized/layer-finished.png","hotspot":"finished","x":26.161,"y":57.333,"w":48.013,"h":12.4,"clip":[[-2.74,-213.71],[-1.84,-114.92],[-0.7,-29.3],[0.0,36.56],[1.14,99.13],[2.95,114.25],[49.88,126.14],[97.05,114.25],[98.86,99.13],[99.54,36.56],[100.46,-29.3],[101.37,-114.92],[102.51,-213.71],[102.95,-257.26],[96.33,-250.34],[89.7,-246.44],[83.05,-243.68],[76.43,-241.67],[69.8,-240.26],[63.16,-239.31],[56.51,-238.71],[49.88,-238.58],[43.26,-238.78],[36.63,-239.31],[29.96,-240.39],[23.34,-241.8],[16.71,-243.88],[10.07,-246.64],[3.44,-250.74],[-3.18,-258.13]],"shape":[[2.2,9.6],[3.1,25.5],[1.1,31.8],[3.7,38.9],[1.8,47.1],[3.1,77.1],[12.6,85.4],[15.9,83.4],[22.9,94.3],[30.6,88.5],[33.9,93.6],[36.6,88.5],[49.6,96.2],[55.7,85.4],[60.4,91.7],[67.8,89.2],[72.7,94.3],[80.8,93.0],[83.5,87.9],[89.9,90.4],[94.5,83.4],[96.5,66.9],[98.7,62.4],[96.9,54.8],[98.0,22.3],[95.4,13.4],[68.1,24.2],[63.7,17.8],[57.3,24.2],[48.2,15.9],[31.9,28.0],[25.1,15.9],[18.1,19.7],[15.2,16.6],[13.2,21.0],[6.8,15.9],[4.2,3.8]]},
  {"id":"tray","src":"assets/scene/tray.png","hotspot":"tray","x":27.366,"y":68.725,"w":46.049,"h":10.7,"shape":[[0.0,27.5],[0.2,46.6],[39.9,60.3],[42.0,67.9],[45.1,99.2],[54.2,99.2],[58.7,61.1],[86.0,54.2],[99.8,45.8],[99.5,26.0],[90.7,13.7],[75.8,5.3],[74.8,0.0],[22.6,0.0],[21.6,5.3],[5.7,16.0]]},
  {"id":"tap","src":"assets/tap.png","hotspot":"tap","x":44.643,"y":73.167,"w":8.482,"h":7.25,"shape":[[18.4,3.4],[5.3,16.1],[1.3,16.1],[0.0,18.4],[5.3,19.5],[15.8,28.7],[23.7,29.9],[28.9,35.6],[38.2,32.2],[43.4,33.3],[47.4,36.8],[47.4,56.3],[52.6,66.7],[52.6,73.6],[48.7,78.2],[56.6,88.5],[64.5,94.3],[65.8,98.9],[71.1,98.9],[72.4,94.3],[84.2,86.2],[85.5,81.6],[89.5,78.2],[85.5,73.6],[85.5,66.7],[93.4,57.5],[98.7,56.3],[98.7,46.0],[93.4,44.8],[81.6,32.2],[80.3,23.0],[73.7,16.1],[55.3,16.1],[23.7,8.0]]},
  {"id":"jar","src":"assets/jar-amber.png","hotspot":"jar","x":42.746,"y":79.833,"w":14.732,"h":17.0,"shape":[[38.6,0.0],[35.6,3.4],[14.4,7.8],[12.9,22.1],[5.3,31.4],[0.0,33.3],[0.0,78.9],[5.3,80.9],[11.4,89.7],[18.2,92.6],[37.1,96.1],[40.2,99.5],[63.6,99.5],[66.7,96.1],[86.4,91.2],[93.9,82.4],[99.2,80.4],[99.2,32.4],[93.9,30.4],[86.4,21.6],[87.1,9.8],[84.8,7.4],[63.6,3.4],[60.6,0.0]]},
  {"id":"plate","src":"assets/press-plate.png","hotspot":"plate","x":23.326,"y":20.167,"w":53.46,"h":8.0,"shape":[[0.0,53.1],[4.8,71.9],[11.1,80.2],[35.7,90.6],[37.4,99.0],[66.4,99.0],[68.1,90.6],[90.6,78.1],[99.8,56.2],[96.7,32.3],[82.5,15.6],[63.9,8.3],[62.2,0.0],[37.8,0.0],[36.1,8.3],[12.3,17.7],[2.7,31.2]]},
  {"id":"lid","src":"assets/lid.png","hotspot":"lid","x":17.634,"y":6.333,"w":64.955,"h":13.75,"shape":[[0.0,60.0],[2.1,70.9],[9.3,81.8],[38.8,94.5],[40.2,99.4],[57.4,99.4],[58.8,94.5],[81.6,87.9],[93.6,78.2],[99.8,63.6],[96.7,51.5],[95.7,37.6],[92.1,29.7],[78.4,19.4],[60.0,15.2],[52.4,0.0],[46.9,0.0],[40.0,14.5],[19.8,20.0],[8.9,28.5],[5.0,35.2],[3.1,50.9]]}
 ],
 anchors: {"lid": [73.88, 13.33], "plate": [71.43, 25.0], "bran": [68.3, 28.5], "body": [78.01, 33.67], "fresh": [65.29, 37.33], "fermenting": [66.52, 51.83], "finished": [67.63, 64.33], "tray": [70.09, 70.67], "tap": [50.45, 76.0], "leachate": [34.82, 79.17], "jar": [54.91, 90.83]}
};

/* Detail-view illustrations per hotspot (paths only; alt text comes from content.js titles). */
const ILLUSTRATIONS = {
  lid:        [{ src: "assets/lid.png", cls: "is-wide" }],
  plate:      [{ src: "assets/press-plate.png", cls: "is-wide" }],
  body:       [{ src: "assets/bucket-with-tray.png" }],
  bran:       [{ src: "assets/scene/bran-scoop.png" },
               { src: "assets/microbe-1.png", cls: "is-small", decorative: true },
               { src: "assets/microbe-2.png", cls: "is-small", decorative: true },
               { src: "assets/microbe-3.png", cls: "is-small", decorative: true }],
  fresh:      [{ src: "assets/scene/layer-fresh.png", cls: "is-wide" }],
  fermenting: [{ src: "assets/normalized/layer-fermenting.png", cls: "is-wide" }],
  finished:   [{ src: "assets/normalized/layer-finished.png", cls: "is-wide" }],
  tray:       [{ src: "assets/tray-top.png", cls: "is-wide" }],
  leachate:   [{ src: "assets/drop.png", cls: "is-small" }],
  tap:        [{ src: "assets/tap.png", cls: "is-small" }],
  jar:        [{ src: "assets/jar-empty.png" }, { src: "assets/jar-amber.png" }]
};

(function () {
  "use strict";

  const C = window.BOKASHI_CONTENT || { site: {}, labels: {}, items: [] };
  const site = C.site || {};
  const labels = C.labels || {};
  const items = Array.isArray(C.items) ? C.items : [];
  const byId = new Map(items.map(it => [it.id, it]));

  const $ = sel => document.querySelector(sel);
  const sceneEl = $("#scene");
  const stageEl = $("#stage");
  const cardsEl = $("#cards");
  const overviewEl = $("#overview");
  const detailEl = $("#detail");
  const linesEl = $("#connector-lines");
  const svgEl = $("#connectors");
  const desktopMQ = window.matchMedia("(min-width: 1024px)");
  const reduceMQ = window.matchMedia("(prefers-reduced-motion: reduce)");

  let active = null;        // hovered / focused hotspot id
  let selected = null;      // hotspot shown in the detail view
  let openedFromOverview = false;
  let fadeTimer = 0;
  const layerEls = [];      // { def, el }

  /* ---------- text ---------- */
  document.title = site.title || "";
  $("#site-title").textContent = site.title || "";
  const subEl = $("#site-subtitle");
  subEl.textContent = site.subtitle || "";
  subEl.hidden = !site.subtitle;
  document.querySelector(".site-header").classList.toggle("has-subtitle", !!site.subtitle);
  $("#scene-hint").textContent = labels.sceneHint || "";
  $("#site-footer").textContent = site.footer || "";
  sceneEl.setAttribute("aria-label", labels.sceneDescription || site.title || "");

  /* ---------- scene ---------- */
  const polyCss = pts => "polygon(" + pts.map(p => p[0] + "% " + p[1] + "%").join(", ") + ")";
  SCENE.layers.forEach((def, i) => {
    const wrap = document.createElement("div");
    wrap.className = "layer";
    wrap.dataset.hotspot = def.hotspot || "";
    wrap.dataset.layer = def.id;
    Object.assign(wrap.style, { left: def.x + "%", top: def.y + "%", width: def.w + "%", height: def.h + "%", zIndex: String(i + 1) });
    const img = document.createElement("img");
    img.src = def.src;
    img.alt = "";            // the scene as a whole is described by role="img" + aria-label
    img.draggable = false;
    img.decoding = "async";
    if (def.clip) img.style.clipPath = polyCss(def.clip);
    wrap.appendChild(img);
    sceneEl.appendChild(wrap);
    layerEls.push({ def, el: wrap, img });
  });
  const hotspotIds = new Set(SCENE.layers.filter(l => l.hotspot && byId.has(l.hotspot)).map(l => l.hotspot));

  /* ---------- cards (ordered by anchor height so connectors never cross) ---------- */
  const anchorY = id => (SCENE.anchors[id] ? SCENE.anchors[id][1] : Infinity);
  const ordered = items
    .map((it, idx) => ({ it, idx }))
    .sort((a, b) => (anchorY(a.it.id) - anchorY(b.it.id)) || (a.idx - b.idx))
    .map(o => o.it);
  const cardEls = new Map();
  ordered.forEach(it => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "card";
    btn.dataset.id = it.id;
    const t = document.createElement("span"); t.className = "card-title"; t.textContent = it.title || "";
    const b = document.createElement("span"); b.className = "card-blurb"; b.textContent = it.short || "";
    btn.append(t, b);
    btn.addEventListener("mouseenter", () => setActive(it.id));
    btn.addEventListener("mouseleave", () => setActive(null));
    btn.addEventListener("focus", () => setActive(it.id));
    btn.addEventListener("blur", () => setActive(null));
    btn.addEventListener("click", () => openDetail(it.id, true));
    li.appendChild(btn);
    cardsEl.appendChild(li);
    cardEls.set(it.id, btn);
  });

  /* ---------- highlight state ---------- */
  function applyState() {
    const shown = selected ? null : active;
    sceneEl.classList.toggle("has-active", !!shown);
    sceneEl.classList.toggle("has-selected", !!selected);
    layerEls.forEach(({ def, el }) => {
      el.classList.toggle("is-active", !!shown && def.hotspot === shown);
      el.classList.toggle("is-selected", !!selected && def.hotspot === selected);
    });
    cardEls.forEach((btn, id) => btn.classList.toggle("is-active", id === active && !selected));
    linesEl.querySelectorAll(".connector").forEach(g => {
      g.classList.toggle("is-active", g.dataset.id === (selected || active));
    });
  }
  function setActive(id) {
    if (id && !byId.has(id)) id = null;
    if (id === active) return;
    active = id;
    applyState();
  }

  /* ---------- alpha-accurate hit testing ---------- */
  const HIT_W = 448, HIT_H = Math.round(HIT_W * SCENE.aspect[1] / SCENE.aspect[0]);
  let hitMaps = null;      // [{def, alpha: Uint8ClampedArray}] bottom -> top
  let hitMode = "pending"; // "alpha" | "shape"

  function loadImage(src) {
    return new Promise((res, rej) => { const im = new Image(); im.onload = () => res(im); im.onerror = rej; im.src = src; });
  }
  async function buildHitMaps() {
    try {
      const maps = [];
      for (const { def } of layerEls) {
        if (!def.hotspot && !def.decor) continue;
        const im = await loadImage(def.src);
        const cv = document.createElement("canvas");
        cv.width = HIT_W; cv.height = HIT_H;
        const ctx = cv.getContext("2d", { willReadFrequently: true });
        const x = def.x / 100 * HIT_W, y = def.y / 100 * HIT_H, w = def.w / 100 * HIT_W, h = def.h / 100 * HIT_H;
        if (def.clip) {
          ctx.beginPath();
          def.clip.forEach((p, k) => { const px = x + p[0] / 100 * w, py = y + p[1] / 100 * h; k ? ctx.lineTo(px, py) : ctx.moveTo(px, py); });
          ctx.closePath(); ctx.clip();
        }
        ctx.drawImage(im, x, y, w, h);
        const data = ctx.getImageData(0, 0, HIT_W, HIT_H).data; // throws on file:// (tainted canvas)
        const alpha = new Uint8ClampedArray(HIT_W * HIT_H);
        for (let k = 0, j = 3; k < alpha.length; k++, j += 4) alpha[k] = data[j];
        maps.push({ def, alpha });
      }
      hitMaps = maps; hitMode = "alpha";
    } catch (e) {
      hitMaps = null; hitMode = "shape";
    }
    document.documentElement.dataset.hitMode = hitMode;
  }
  function inPoly(px, py, pts) {
    let inside = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if ((yi > py) !== (yj > py) && px < (xj - xi) * (py - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  }
  // u, v in scene percent. Returns hotspot id or null. Layers tested topmost -> bottommost.
  function hitTest(u, v) {
    if (hitMode === "alpha" && hitMaps) {
      const px = Math.floor(u / 100 * HIT_W), py = Math.floor(v / 100 * HIT_H);
      if (px < 0 || py < 0 || px >= HIT_W || py >= HIT_H) return null;
      for (let i = hitMaps.length - 1; i >= 0; i--) {
        const m = hitMaps[i];
        if (m.alpha[py * HIT_W + px] > 30) return m.def.decor ? null : (hotspotIds.has(m.def.hotspot) ? m.def.hotspot : null);
      }
      return null;
    }
    // fallback: clip polygons where present, otherwise the layer's bounding box
    for (let i = layerEls.length - 1; i >= 0; i--) {
      const d = layerEls[i].def;
      if (!d.hotspot && !d.decor) continue;
      if (u < d.x || u > d.x + d.w || v < d.y || v > d.y + d.h) continue;
      const lu = (u - d.x) / d.w * 100, lv = (v - d.y) / d.h * 100;
      if (d.clip && !inPoly(lu, lv, d.clip)) continue;
      if (d.shape && !inPoly(lu, lv, d.shape)) continue;
      return d.decor ? null : (hotspotIds.has(d.hotspot) ? d.hotspot : null);
    }
    return null;
  }
  function sceneUV(ev) {
    const r = sceneEl.getBoundingClientRect();
    return [(ev.clientX - r.left) / r.width * 100, (ev.clientY - r.top) / r.height * 100];
  }
  sceneEl.addEventListener("pointermove", ev => {
    const id = hitTest(...sceneUV(ev));
    sceneEl.classList.toggle("is-pointer", !!id);
    if (ev.pointerType === "mouse" || ev.pointerType === "pen") setActive(id);
  });
  sceneEl.addEventListener("pointerleave", () => { sceneEl.classList.remove("is-pointer"); setActive(null); });
  sceneEl.addEventListener("click", ev => {
    const id = hitTest(...sceneUV(ev));
    if (!id) return;
    if (selected) openDetail(id, false, true);
    else openDetail(id, true);
  });

  /* ---------- detail view ---------- */
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function section(heading, paragraphs, bullets) {
    const frag = document.createDocumentFragment();
    const hasP = Array.isArray(paragraphs) ? paragraphs.length : !!paragraphs;
    const hasB = Array.isArray(bullets) && bullets.length;
    if (!hasP && !hasB) return frag;
    if (heading) frag.appendChild(el("h3", null, heading));
    (Array.isArray(paragraphs) ? paragraphs : paragraphs ? [paragraphs] : []).forEach(p => frag.appendChild(el("p", null, p)));
    if (hasB) { const ul = el("ul"); bullets.forEach(b => ul.appendChild(el("li", null, b))); frag.appendChild(ul); }
    return frag;
  }
  function renderDetail(id) {
    const it = byId.get(id);
    detailEl.textContent = "";
    if (!it) return;
    const bar = el("div", "detail-bar");
    const back = el("button", "back", labels.back || "←");
    back.type = "button";
    back.addEventListener("click", closeDetail);
    bar.appendChild(back);
    detailEl.appendChild(bar);
    const h = el("h2", "detail-title", it.title || "");
    h.id = "detail-title"; h.tabIndex = -1;
    detailEl.appendChild(h);
    if (it.short) detailEl.appendChild(el("p", "detail-lead", it.short));
    const ill = ILLUSTRATIONS[id];
    if (ill && ill.length) {
      const fig = el("figure", "illus");
      ill.forEach((d, k) => {
        const im = el("img", d.cls || null);
        im.src = d.src;
        im.alt = d.decorative ? "" : (k === 0 ? (it.title || "") : (it.title || ""));
        if (k > 0 && !d.decorative) im.alt = "";
        fig.appendChild(im);
      });
      detailEl.appendChild(fig);
    }
    detailEl.appendChild(section(labels.what, it.what));
    detailEl.appendChild(section(labels.state, it.state));
    detailEl.appendChild(section(labels.tips, null, it.tips));
    (Array.isArray(it.extra) ? it.extra : []).forEach(x => detailEl.appendChild(section(x.heading, x.paragraphs, x.bullets)));
    if (it.note) detailEl.appendChild(el("p", "detail-note", it.note));
    detailEl.scrollTop = 0;
    detailEl.classList.remove("is-scrolled");
  }

  function show(mode) {
    const isDetail = mode === "detail";
    overviewEl.classList.toggle("is-shown", !isDetail);
    detailEl.classList.toggle("is-shown", isDetail);
    overviewEl.setAttribute("aria-hidden", String(isDetail));
    detailEl.setAttribute("aria-hidden", String(!isDetail));
    overviewEl.inert = isDetail;
    detailEl.inert = !isDetail;
  }

  function openDetail(id, push, replace) {
    if (!byId.has(id)) return;
    if (push && !selected) {
      openedFromOverview = true;
      if (location.hash !== "#" + id) { location.hash = id; return; } // hashchange renders
    } else if (replace) {
      history.replaceState(null, "", "#" + id);
    }
    enterDetail(id);
  }
  function enterDetail(id) {
    selected = id;
    active = null;
    renderDetail(id);
    show("detail");
    applyState();
    // fade the other connector lines, then redraw the single line to the detail title
    linesEl.querySelectorAll(".connector").forEach(g => { if (g.dataset.id !== id) g.classList.add("is-faded"); });
    clearTimeout(fadeTimer);
    fadeTimer = setTimeout(() => drawConnectors(true), reduceMQ.matches ? 0 : 250);
    const t = $("#detail-title");
    if (t) t.focus({ preventScroll: true });
    if (!desktopMQ.matches) {
      detailEl.scrollIntoView({ behavior: reduceMQ.matches ? "auto" : "smooth", block: "start" });
    }
  }
  function closeDetail() {
    if (!selected) return;
    const was = selected;
    if (openedFromOverview && location.hash) { history.back(); return; } // hashchange -> overview
    history.replaceState(null, "", location.pathname + location.search);
    exitDetail(was);
  }
  function exitDetail(was) {
    selected = null;
    openedFromOverview = false;
    show("overview");
    applyState();
    clearTimeout(fadeTimer);
    drawConnectors(true);
    const c = cardEls.get(was);
    if (c) c.focus({ preventScroll: desktopMQ.matches });
  }
  function route() {
    const id = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (id && byId.has(id)) enterDetail(id);
    else if (selected) exitDetail(selected);
  }
  window.addEventListener("hashchange", route);
  document.addEventListener("keydown", ev => {
    if (ev.key === "Escape" && selected) { ev.preventDefault(); closeDetail(); }
  });

  /* ---------- connectors ---------- */
  const SVGNS = "http://www.w3.org/2000/svg";
  // Vertical centre of the FIRST line of a title (titles may wrap if they get long).
  function titleLineY(t) {
    const range = document.createRange();
    range.selectNodeContents(t);
    const first = range.getClientRects()[0];
    const r = first || t.getBoundingClientRect();
    if (first) return r.top + r.height / 2;
    return r.top + Math.min(r.height / 2, parseFloat(getComputedStyle(t).lineHeight) / 2 || r.height / 2);
  }
  function drawConnectors(fadeIn) {
    linesEl.textContent = "";
    if (!desktopMQ.matches) return;
    const sr = stageEl.getBoundingClientRect();
    const scr = sceneEl.getBoundingClientRect();
    if (!scr.width) return;
    const ax = id => scr.left - sr.left + SCENE.anchors[id][0] / 100 * scr.width;
    const ay = id => scr.top - sr.top + SCENE.anchors[id][1] / 100 * scr.height;
    const bandL = scr.left - sr.left + 0.855 * scr.width;   // right of the bucket and lid
    const targets = [];
    if (selected) {
      const t = $("#detail-title");
      if (t && SCENE.anchors[selected]) {
        const r = t.getBoundingClientRect();
        const dr = detailEl.getBoundingClientRect();
        const bar = detailEl.querySelector(".detail-bar");
        const visTop = dr.top + (bar ? bar.offsetHeight : 0);
        const y = r.top + Math.min(r.height / 2, 20);
        if (y >= visTop && y <= dr.bottom) targets.push({ id: selected, x: r.left - sr.left - 8, y: y - sr.top });
      }
    } else {
      ordered.forEach(it => {
        const c = cardEls.get(it.id);
        if (!c || !SCENE.anchors[it.id]) return;
        const r = c.getBoundingClientRect();
        targets.push({ id: it.id, x: r.left - sr.left - 2, y: titleLineY(c.querySelector(".card-title")) - sr.top });
      });
    }
    if (!targets.length) return;
    const bandR = Math.min(...targets.map(t => t.x)) - 14;
    const n = targets.length;
    const step = n > 1 ? Math.max(4, Math.min(14, (bandR - bandL) / (n - 1))) : 0;
    // Jog x: lines heading down -> upper ones jog further right; lines heading up -> lower ones jog further right.
    const downs = targets.filter(t => t.y > ay(t.id) + 1);
    const ups = targets.filter(t => t.y < ay(t.id) - 1);
    const jog = new Map();
    downs.forEach((t, k) => jog.set(t.id, bandL + (downs.length - 1 - k) * step));
    ups.forEach((t, k) => jog.set(t.id, bandL + k * step));
    targets.forEach(t => { if (!jog.has(t.id)) jog.set(t.id, bandL); });
    targets.forEach(t => {
      const x0 = ax(t.id), y0 = ay(t.id), X = Math.min(jog.get(t.id), bandR), y1 = t.y, x1 = t.x;
      const g = document.createElementNS(SVGNS, "g");
      g.setAttribute("class", "connector");
      g.dataset.id = t.id;
      const r = Math.min(6, Math.abs(y1 - y0) / 2);
      const sgn = y1 > y0 ? 1 : -1;
      const d = Math.abs(y1 - y0) < 1.5
        ? `M${x0},${y0} H${x1}`
        : `M${x0},${y0} H${X - r} Q${X},${y0} ${X},${y0 + sgn * r} V${y1 - sgn * r} Q${X},${y1} ${X + r},${y1} H${x1}`;
      const p = document.createElementNS(SVGNS, "path"); p.setAttribute("d", d);
      const c = document.createElementNS(SVGNS, "circle"); c.setAttribute("cx", x0); c.setAttribute("cy", y0); c.setAttribute("r", 2.6);
      g.append(p, c);
      if (fadeIn && !reduceMQ.matches) g.classList.add("is-faded");
      linesEl.appendChild(g);
    });
    applyState();
    if (fadeIn) requestAnimationFrame(() => requestAnimationFrame(() =>
      linesEl.querySelectorAll(".connector.is-faded").forEach(g => g.classList.remove("is-faded"))));
  }

  let raf = 0;
  function relayout() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => drawConnectors());
  }
  window.addEventListener("resize", relayout);
  detailEl.addEventListener("scroll", () => { detailEl.classList.toggle("is-scrolled", detailEl.scrollTop > 2); if (selected) { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => drawConnectors()); } }, { passive: true });
  if ("ResizeObserver" in window) { const ro = new ResizeObserver(relayout); ro.observe(stageEl); ro.observe(cardsEl); }
  desktopMQ.addEventListener("change", relayout);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(relayout);
  window.addEventListener("load", relayout);

  /* ---------- start ---------- */
  show("overview");
  buildHitMaps();
  route();
  relayout();
})();
