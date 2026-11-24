/* ====== AR STORE · script.js ====== */

/* ====== STORE SETTINGS ====== */
const WA_NUMBER = "201044664788"; // customers see 01044664788

/* ====== EDIT GAME PRICES HERE ======
   Row: [title, category, platform, priceEGP, originalPriceEGP, rating, releaseYear, developer, story]
   Categories: Action | Sports | RPG | Shooter | Open World      Platforms: PC | PS5 | Xbox */
const GAME_ROWS = [
 ["Grand Theft Auto V","Open World","PC",350,500,4.9,2013,"Rockstar North","Three criminals plan bold heists across Los Santos as the city closes in."],
 ["EA Sports FC 26","Sports","PS5",2200,2600,4.3,2025,"EA Vancouver & EA Romania","Build your dream squad and chase glory in Ultimate Team and Career."],
 ["Red Dead Redemption 2","Open World","PC",600,900,4.9,2018,"Rockstar Games","Outlaw Arthur Morgan fights to keep his gang alive as the Wild West fades."],
 ["Cyberpunk 2077","RPG","PC",750,1000,4.6,2020,"CD Projekt Red","A Night City mercenary hunts an immortality chip that is overwriting his mind."],
 ["Elden Ring","RPG","PC",1150,1400,4.9,2022,"FromSoftware","A Tarnished rises to claim the Elden Ring and rule the Lands Between."],
 ["Call of Duty: Black Ops 6","Shooter","PS5",2300,2800,4.4,2024,"Treyarch & Raven Software","Disavowed agents expose a conspiracy inside their own agency in 1991."],
 ["God of War Ragnarök","Action","PS5",1500,1900,4.9,2022,"Santa Monica Studio","Kratos and Atreus cross the Nine Realms to stop Ragnarok."],
 ["Marvel's Spider-Man 2","Action","PS5",1900,2400,4.8,2023,"Insomniac Games","Peter and Miles swing through New York to stop Kraven and Venom."],
 ["Hogwarts Legacy","RPG","PC",1100,1500,4.6,2023,"Avalanche Software","Attend Hogwarts in the 1800s and uncover a secret that could shatter magic."],
 ["Fortnite Packs","Shooter","PC",400,500,4.5,2017,"Epic Games","Drop in, build and fight for Victory Royale with bundles of skins and V-Bucks."],
 ["Valorant","Shooter","PC",250,300,4.5,2020,"Riot Games","A 5v5 tactical hero shooter; this listing is a Valorant Points card."],
 ["Minecraft","Open World","PC",650,800,4.9,2011,"Mojang Studios","Mine, craft and survive in an endless blocky world of pure imagination."],
 ["Watch Dogs","Open World","PC",200,300,4.0,2014,"Ubisoft Montreal","Hacker Aiden Pearce turns Chicago's network against those who destroyed his family."],
 ["Hitman: Absolution","Action","PC",180,300,4.0,2012,"IO Interactive","Agent 47 turns on his handler to protect a girl hunted by the Agency."],
 ["Assassin's Creed Shadows","Open World","PC",1800,2300,4.5,2025,"Ubisoft Quebec","Shinobi Naoe and samurai Yasuke take on a shadowy order in feudal Japan."],
 ["The Witcher 3: Wild Hunt","RPG","PC",300,450,4.9,2015,"CD Projekt Red","Geralt hunts for his adopted daughter Ciri as the Wild Hunt closes in."],
 ["Forza Horizon 5","Open World","Xbox",900,1200,4.8,2021,"Playground Games","Race through a vibrant Mexico in the biggest open-world car festival yet."],
 ["Mortal Kombat 1","Action","PS5",1300,1700,4.4,2023,"NetherRealm Studios","A new timeline begins as Liu Kang remakes the realms and rivals clash."],
 ["Resident Evil 4 Remake","Action","PS5",1100,1500,4.8,2023,"Capcom","Leon Kennedy infiltrates a Spanish village to rescue the president's daughter."],
 ["Ghost of Tsushima","Open World","PS5",1600,2000,4.8,2020,"Sucker Punch Productions","Samurai Jin Sakai defends Tsushima from the Mongol invasion."],
 ["Horizon Forbidden West","Open World","PS5",1200,1600,4.6,2022,"Guerrilla Games","Aloy journeys west to stop a deadly plague and relentless machines."],
 ["The Last of Us Part I","Action","PS5",1400,1900,4.8,2022,"Naughty Dog","Joel and Ellie cross a ravaged America in a rebuilt tale of survival."],
 ["Baldur's Gate 3","RPG","PC",1300,1600,4.9,2023,"Larian Studios","Gather your party and fight a mind flayer plot to decide Faerun's fate."],
 ["Starfield","RPG","Xbox",1500,2000,4.1,2023,"Bethesda Game Studios","Join Constellation and explore a thousand planets in Bethesda's space RPG."],
 ["Black Myth: Wukong","Action","PC",1500,1800,4.6,2024,"Game Science","As the Destined One, fight through a mythic China inspired by Journey to the West."],
 ["Far Cry 6","Shooter","PC",550,900,4.1,2021,"Ubisoft Toronto","Guerrilla fighter Dani Rojas rises to free Yara from a brutal dictator."],
 ["Call of Duty: Modern Warfare III","Shooter","PS5",1600,2200,4.0,2023,"Sledgehammer Games","Task Force 141 hunts the ultranationalist Makarov across the globe."],
 ["NBA 2K25","Sports","PS5",1400,1900,4.0,2024,"Visual Concepts","Hit the court with realistic hoops, MyCareer stories and the Neighborhood."],
 ["UFC 5","Sports","PS5",1000,1500,4.2,2023,"EA Vancouver","Step into the Octagon with realistic striking, grappling and submissions."],
 ["WWE 2K24","Sports","PS5",1000,1500,4.2,2024,"Visual Concepts","Create a superstar and fight for championship gold across WWE history."],
 ["F1 24","Sports","PC",700,1100,4.2,2024,"Codemasters","Race the 2024 Formula 1 season and build your own career."],
 ["Gran Turismo 7","Sports","PS5",1200,1700,4.5,2022,"Polyphony Digital","Master driving with hundreds of cars and breathtaking tracks."],
 ["Need for Speed Unbound","Open World","PC",600,1000,4.1,2022,"Criterion Games","Race Lakeshore City's street scene while the cops hunt you down."],
 ["Batman: Arkham Knight","Action","PC",250,400,4.7,2015,"Rocksteady Studios","Batman faces Scarecrow and the Arkham Knight in one decisive night."],
 ["Sekiro: Shadows Die Twice","Action","PC",1100,1400,4.8,2019,"FromSoftware","A one-armed shinobi fights to rescue his lord in Sengoku Japan."],
 ["Dark Souls III","RPG","PC",700,1000,4.7,2016,"FromSoftware","The Ashen One must link the fire and defeat the Lords of Cinder."],
 ["Stray","Action","PC",450,600,4.6,2022,"BlueTwelve Studio","A lost cat navigates a neon city of robots to find its way home."],
 ["Hades","Action","PC",400,550,4.9,2020,"Supergiant Games","Escape the Underworld again and again as Zagreus in this fiery roguelike."],
 ["Hollow Knight","Action","PC",200,280,4.9,2017,"Team Cherry","Descend into the ruined kingdom of Hallownest in this hand-drawn metroidvania."],
 ["Stardew Valley","RPG","PC",220,300,4.9,2016,"ConcernedApe","Inherit your grandfather's farm and build a new life in this cozy sim."],
 ["Terraria","Open World","PC",180,250,4.8,2011,"Re-Logic","Dig, build and battle bosses in a vast pixelated sandbox."],
 ["Sea of Thieves","Open World","Xbox",700,1000,4.4,2018,"Rare","Sail with your crew, hunt treasure and battle skeletons in a shared pirate world."],
 ["Dying Light 2 Stay Human","Open World","PC",600,1000,4.3,2022,"Techland","Parkour across a plague-ridden city where your choices decide who rules."],
 ["Death Stranding Director's Cut","Open World","PS5",1100,1500,4.4,2021,"Kojima Productions","Sam Bridges reconnects a fractured America in a haunting delivery adventure."],
 ["Marvel's Spider-Man: Miles Morales","Action","PS5",1000,1400,4.7,2020,"Insomniac Games","Miles protects Harlem as the new Spider-Man during a freezing winter conflict."],
 ["DOOM Eternal","Shooter","PC",450,700,4.7,2020,"id Software","Rip and tear through hell as the Doom Slayer to stop Earth's invasion."],
 ["Halo Infinite","Shooter","Xbox",600,900,4.3,2021,"343 Industries","Master Chief returns to fight the Banished on the ringworld Zeta Halo."],
 ["Final Fantasy VII Rebirth","RPG","PS5",2000,2500,4.8,2024,"Square Enix","Cloud and his friends race across the world to stop Sephiroth."],
 ["Persona 5 Royal","RPG","PS5",1100,1500,4.9,2019,"Atlus","The Phantom Thieves steal corrupt desires in a stylish turn-based RPG."],
 ["Street Fighter 6","Action","PC",950,1300,4.6,2023,"Capcom","Learn, fight and rise through World Tour mode in Capcom's legendary series."]
];

/* ====== EDIT GAME COVER IMAGES HERE ======
   STEAM_IDS: gameId -> Steam app id. Official artwork is loaded from Steam's image servers.
   WIKI_COVERS: gameId -> Wikipedia page title, for games that are not on Steam (cover is fetched when the page loads).
   COVER_OVERRIDES: gameId -> your own image URL. It wins over both, e.g. 1: "https://your-site.com/gta5.jpg" */
const STEAM_IDS = {1:271590,2:3405690,3:1174180,4:1091500,5:1245620,6:2933620,7:2322010,8:2651280,9:990080,13:243470,14:203140,15:3159330,16:292030,17:1551360,18:1971870,19:2050650,20:2215430,21:2420110,22:1888930,23:1086940,24:1716740,25:2358720,26:2369390,27:3595270,28:2878980,30:2315690,31:2488620,33:1846380,34:208650,35:814380,36:374320,37:1332010,38:1145360,39:367520,40:413150,41:105600,42:1172620,43:534380,44:1850570,45:1817190,46:782330,47:1240440,48:2909400,49:1687950,50:1364780};
const WIKI_COVERS = {10:"Fortnite",11:"Valorant",12:"Minecraft",29:"EA_Sports_UFC_5",32:"Gran_Turismo_7"};
const COVER_OVERRIDES = {};
const STEAM = "https://cdn.cloudflare.steamstatic.com/steam/apps/", STEAM2 = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/";

/* ====== EDIT SYSTEM REQUIREMENTS / EDITION INFO HERE ====== */
const SYSREQ = {
  PC: "Windows 10/11 64-bit, Intel i5-8400 or Ryzen 5 2600, 8 GB RAM, GTX 1060 or RX 580, 50+ GB SSD. Digital activation delivered on WhatsApp.",
  PS5: "PlayStation 5, 50+ GB free storage, stable internet. Digital edition delivered to your PSN account.",
  Xbox: "Xbox Series X|S, 50+ GB free storage, stable internet. Digital edition delivered to your Xbox account."
};

/* ====== EDIT V-BUCKS, TOP-UP & SUBSCRIPTION PRICES HERE ======
   Row: [title, priceEGP, originalPriceEGP, type, hint] */
const EPIC = "Add your Epic Games username in the cart note.";
const TOPUP_ROWS = [
 ["Fortnite 1,000 V-Bucks",380,450,"V-Bucks",EPIC],
 ["Fortnite 2,800 V-Bucks",950,1100,"V-Bucks",EPIC],
 ["Fortnite 5,000 V-Bucks",1550,1800,"V-Bucks",EPIC],
 ["Fortnite 13,500 V-Bucks",3700,4300,"V-Bucks",EPIC],
 ["Fortnite Crew (1 month)",450,520,"Subscription","Monthly V-Bucks, Battle Pass and Crew skin."],
 ["PlayStation Store gift card $10",600,680,"Gift card","US region code sent on WhatsApp."],
 ["PlayStation Store gift card $25",1450,1650,"Gift card","US region code sent on WhatsApp."],
 ["Xbox gift card $10",600,680,"Gift card","US region code sent on WhatsApp."],
 ["Steam Wallet $10",580,650,"Gift card","Global code sent on WhatsApp."],
 ["PUBG Mobile 660 UC",470,540,"Top-up","Add your Player ID in the cart note."],
 ["Xbox Game Pass Ultimate (1 month)",420,500,"Subscription","Activated on your account."],
 ["PlayStation Plus Essential (1 month)",380,450,"Subscription","Activated on your account."]
];

/* ====== BUILD DATABASE (no need to edit below) ====== */
const GAMES = GAME_ROWS.map((r, i) => ({
  id: i + 1, key: "g" + (i + 1), title: r[0], category: r[1], platform: r[2],
  priceEGP: r[3], originalPriceEGP: r[4], rating: r[5], releaseYear: r[6], developer: r[7],
  steamId: STEAM_IDS[i + 1] || 0,
  coverImage: COVER_OVERRIDES[i + 1] || (STEAM_IDS[i + 1] ? `${STEAM}${STEAM_IDS[i + 1]}/capsule_616x353.jpg` : ""),
  shortDescription: `${r[1]} game for ${r[2]}`, fullStory: r[8], systemRequirements: SYSREQ[r[2]]
}));
const TOPUPS = TOPUP_ROWS.map((r, i) => ({ key: "t" + (i + 1), title: r[0], priceEGP: r[1], originalPriceEGP: r[2], type: r[3], hint: r[4] }));
const ITEMS = Object.fromEntries([...GAMES, ...TOPUPS].map(x => [x.key, x]));

/* ====== HELPERS & STATE (cart + favorites saved in localStorage) ====== */
const $ = s => document.querySelector(s);
const egp = n => n.toLocaleString("en-US") + " EGP";
const off = p => p.originalPriceEGP > p.priceEGP ? Math.round((1 - p.priceEGP / p.originalPriceEGP) * 100) : 0;
const store = {
  get(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};
let cart = store.get("ar_cart", {}), favs = store.get("ar_favs", []), pay = "", viaClick = false;
const F = { q: "", cat: "All", plat: "All", sort: "def" };
Object.keys(cart).forEach(k => { if (!ITEMS[k]) delete cart[k]; });
const save = () => { store.set("ar_cart", cart); store.set("ar_favs", favs); };

/* ====== MOTION: scroll reveal + toasts ====== */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .08 });
const watch = () => document.querySelectorAll(".reveal:not(.in),.card:not(.in)").forEach(el => io.observe(el));
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg;
  $("#toasts").append(t); setTimeout(() => t.remove(), 2900);
}

/* ====== CATALOG RENDERING ====== */
const CATS = ["All", "Action", "Sports", "RPG", "Shooter", "Open World", "Favorites"];
const imgs = (g, hero) => COVER_OVERRIDES[g.id] ? [COVER_OVERRIDES[g.id]] : g.steamId
  ? [...(hero ? [STEAM + g.steamId + "/library_hero.jpg"] : []), STEAM + g.steamId + "/capsule_616x353.jpg", STEAM + g.steamId + "/header.jpg", STEAM2 + g.steamId + "/header.jpg"] : [];
const imgTag = (g, u) => `<img ${WIKI_COVERS[g.id] ? 'style="object-fit:contain;padding:8px" ' : ""}src="${u[0]}" data-fb="${u.slice(1).join("|")}" alt="${g.title} cover" loading="lazy" onerror="fb(this)">`;
const artHTML = (g, extra, hero) => { const u = imgs(g, hero); return `<div class="art" style="--h:${g.id * 47 % 360}"><span>${g.title}</span>${u.length ? imgTag(g, u) : ""}${extra}</div>`; };
function fb(img) { // try the next image URL; if none is left, the gradient tile with the title shows
  const n = (img.dataset.fb || "").split("|").filter(Boolean);
  if (n.length) { img.dataset.fb = n.slice(1).join("|"); img.src = n[0]; } else img.remove();
}
const priceHTML = p => `<div class="price"><b>${egp(p.priceEGP)}</b>${off(p) ? `<s>${egp(p.originalPriceEGP)}</s>` : ""}</div>`;
const badgeHTML = p => off(p) ? `<span class="badge">-${off(p)}%</span>` : "";

function gameCard(g, i) {
  return `<article class="card" data-id="${g.id}" style="--d:${(i % 8) * 60}ms">${badgeHTML(g)}
    <button class="fav ${favs.includes(g.id) ? "on" : ""}" data-fav="${g.id}" aria-label="Favorite">♥</button>
    ${artHTML(g, `<i class="plat">${g.platform}</i>`)}
    <div class="info"><h3>${g.title}</h3>
      <div class="meta"><span>${g.category}</span><span>★ ${g.rating.toFixed(1)}</span></div>
      ${priceHTML(g)}<button class="add" data-add="${g.key}">Add to cart</button></div></article>`;
}
function topCard(t, i) {
  return `<article class="card top" style="--d:${(i % 8) * 60}ms">${badgeHTML(t)}
    <div class="info"><div class="meta"><span>${t.type}</span></div><h3>${t.title}</h3><p class="hint">${t.hint}</p>
      ${priceHTML(t)}<button class="add" data-add="${t.key}">Add to cart</button></div></article>`;
}
function filtered() {
  const q = F.q.trim().toLowerCase();
  const list = GAMES.filter(g =>
    (!q || (g.title + " " + g.developer + " " + g.category).toLowerCase().includes(q)) &&
    (F.cat === "All" || (F.cat === "Favorites" ? favs.includes(g.id) : g.category === F.cat)) &&
    (F.plat === "All" || g.platform === F.plat));
  if (F.sort !== "def") list.sort((a, b) => F.sort === "asc" ? a.priceEGP - b.priceEGP : b.priceEGP - a.priceEGP);
  return list;
}
function renderGrid() {
  const l = filtered();
  $("#grid").innerHTML = l.length ? l.map(gameCard).join("") : `<p class="empty">No games match. Try another search or filter.</p>`;
  watch();
}
function apply(skeleton) { // skeleton shimmer between category/platform/sort changes
  if (!skeleton) return renderGrid();
  $("#grid").innerHTML = '<div class="sk"></div>'.repeat(8);
  clearTimeout(apply.t); apply.t = setTimeout(renderGrid, 350);
}
function renderPills() {
  $("#pills").innerHTML = CATS.map(c => `<button class="pill ${F.cat === c ? "on" : ""}" data-cat="${c}">${c === "Favorites" ? "♥ Favorites" : c}</button>`).join("");
}
function toggleFav(id, btn) {
  favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id]; save();
  btn.classList.toggle("on", favs.includes(id));
  toast(favs.includes(id) ? "Saved to favorites" : "Removed from favorites");
  if (F.cat === "Favorites") renderGrid();
}

/* ====== CART ====== */
const total = () => Object.entries(cart).reduce((s, [k, q]) => s + ITEMS[k].priceEGP * q, 0);
function renderCart() {
  const ks = Object.keys(cart);
  $("#cartItems").innerHTML = ks.length ? ks.map(k => `<div class="line"><div><b>${ITEMS[k].title}</b><br><small>${egp(ITEMS[k].priceEGP)} each</small></div>
    <div class="qty"><button data-q="${k}" data-d="-1" aria-label="Decrease">-</button><span>${cart[k]}</span><button data-q="${k}" data-d="1" aria-label="Increase">+</button><button class="rm" data-rm="${k}" aria-label="Remove">✕</button></div></div>`).join("")
    : `<p class="empty">Your cart is empty. Add a game to get started.</p>`;
  $("#cartTotal").textContent = egp(total());
  $("#cartCount").textContent = ks.reduce((s, k) => s + cart[k], 0);
}
function add(key) {
  cart[key] = (cart[key] || 0) + 1; save(); renderCart();
  const b = $("#cartCount"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
  toast(`${ITEMS[key].title} added to cart`);
}
function setQty(key, d) { cart[key] = (cart[key] || 0) + d; if (cart[key] <= 0) delete cart[key]; save(); renderCart(); }
const cartOpen = o => document.body.classList.toggle("cart-open", o);

/* ====== WHATSAPP ORDER ====== */
function order() {
  const ks = Object.keys(cart);
  if (!ks.length) return toast("Your cart is empty");
  if (!pay) {
    const p = $("#pays"); p.classList.remove("shake"); void p.offsetWidth; p.classList.add("shake");
    return toast("Choose a payment method first");
  }
  const lines = ks.map((k, i) => `${i + 1}. ${ITEMS[k].title}  x${cart[k]}  (${egp(ITEMS[k].priceEGP)} each = ${egp(ITEMS[k].priceEGP * cart[k])})`).join("\n");
  const note = $("#note").value.trim();
  const msg = `Hello AR Store 👋\nI would like to place an order:\n\n${lines}\n\n💰 Total: ${egp(total())}\n💳 Payment method: ${pay}\n📝 Note / In-game ID: ${note || "None"}`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
}

/* ====== GAME DETAIL MODAL + HASH ROUTING (#game-1) ====== */
function openModal(g) {
  $("#mCard").innerHTML = `${artHTML(g, `<button class="m-x" data-close aria-label="Close">✕</button>`, true).replace('class="art"', 'class="art m-art"')}
    <div class="m-body"><h2>${g.title}</h2>
      <div class="chips"><span>${g.platform}</span><span>${g.category}</span><span>${g.developer}</span><span>${g.releaseYear}</span><span>★ ${g.rating.toFixed(1)}</span></div>
      <div><h4>The full story</h4><p>${g.fullStory}</p></div>
      <div><h4>System requirements and edition</h4><p>${g.systemRequirements}</p></div>
      <div class="buy"><div class="price"><b>${egp(g.priceEGP)}</b>${off(g) ? `<s>${egp(g.originalPriceEGP)}</s><span class="badge st">-${off(g)}%</span>` : ""}</div>
        <button class="btn" data-add="${g.key}">Add to cart</button></div></div>`;
  $("#modal").classList.add("open"); document.body.classList.add("lock"); document.title = g.title + " | AR Store";
}
function closeModal() {
  $("#modal").classList.remove("open"); document.body.classList.remove("lock"); document.title = "AR Store | Games, V-Bucks & Top-Ups";
}
const openGame = id => { viaClick = true; location.hash = "game-" + id; };
const closeGame = () => { if (viaClick) history.back(); else location.hash = "games"; };
function route() {
  const m = location.hash.match(/^#game-(\d+)$/), g = m && GAMES.find(x => x.id == m[1]);
  if (g) openModal(g); else { viaClick = false; closeModal(); }
}

/* ====== EVENTS ====== */
document.addEventListener("click", e => {
  const c = s => e.target.closest(s); let el;
  if ((el = c("[data-add]"))) add(el.dataset.add);
  else if ((el = c("[data-fav]"))) toggleFav(+el.dataset.fav, el);
  else if ((el = c("[data-q]"))) setQty(el.dataset.q, +el.dataset.d);
  else if ((el = c("[data-rm]"))) { delete cart[el.dataset.rm]; save(); renderCart(); }
  else if ((el = c("[data-cat]"))) { F.cat = el.dataset.cat; renderPills(); apply(true); }
  else if ((el = c("[data-pay]"))) { pay = el.dataset.pay; document.querySelectorAll(".pay").forEach(b => b.classList.toggle("sel", b === el)); }
  else if (c("[data-close]") || e.target.id === "modal") closeGame();
  else if ((el = c(".card[data-id]"))) openGame(el.dataset.id);
});
$("#search").oninput = e => { F.q = e.target.value; apply(false); };
$("#platform").onchange = e => { F.plat = e.target.value; apply(true); };
$("#sort").onchange = e => { F.sort = e.target.value; apply(true); };
$("#openCart").onclick = () => cartOpen(true);
$("#closeCart").onclick = $("#overlay").onclick = () => cartOpen(false);
$("#orderBtn").onclick = order;
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  cartOpen(false); if ($("#modal").classList.contains("open")) closeGame();
});
addEventListener("hashchange", route);

/* 3D tilt on product cards (mouse only) */
document.addEventListener("pointermove", e => {
  const c = e.pointerType === "mouse" && e.target.closest && e.target.closest(".card"); if (!c) return;
  const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
  c.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-4px)`;
});
document.addEventListener("pointerleave", e => {
  if (e.target.classList && e.target.classList.contains("card")) e.target.style.transform = "";
}, true);

/* ====== START ====== */
$("#topGrid").innerHTML = TOPUPS.map(topCard).join("");
renderPills(); renderCart(); apply(true); route(); watch();

/* Games that are not on Steam: fetch the cover from their Wikipedia page (needs internet) */
Object.entries(WIKI_COVERS).forEach(([id, title]) => {
  if (COVER_OVERRIDES[id]) return;
  fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + title).then(r => r.json()).then(j => {
    const u = (j.originalimage && j.originalimage.source) || (j.thumbnail && j.thumbnail.source); if (!u) return;
    COVER_OVERRIDES[id] = u;
    document.querySelectorAll(`.card[data-id="${id}"] .art`).forEach(a => {
      if (!a.querySelector("img")) a.insertAdjacentHTML("afterbegin", `<img style="object-fit:contain;padding:8px" src="${u}" alt="" onerror="this.remove()">`);
    });
  }).catch(() => {});
});