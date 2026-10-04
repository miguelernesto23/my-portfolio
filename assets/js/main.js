const socialLinks = {
  github: "https://github.com/miguelernesto23",
  linkedin: "https://www.linkedin.com/in/miguel-ernesto-663035397/",
  email: "miguelech23@gmail.com",
  whatsapp: "+5355781841",
  instagram: "miguelech23",
  facebook: "Miguel Ernesto",
};

const cfg = {
  cvUrl: "",
  formEndpoint: "",
  learning: [],
  rate: "",
  timezone: "",
};

const extra = {
  localstock: { decisions: [], learned: "", code: null },
  tesis: { decisions: [], learned: "", code: null },
};

const projectLinks = {
  localstock: { demo: "", code: "" },
  tesis: { demo: "", code: "" },
};

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  Backend: ["Node.js", "Laravel", "PHP", "REST API"],
  Database: ["Prisma", "SQLite", "MySQL"],
  Tools: ["Git", "GitHub", "Vite"],
};

const projects = [
  {
    id: "localstock",
    name: "LocalStock",
    kind: "Proyecto principal",
    desc: "Aplicación web para gestión de inventario y operaciones comerciales.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "SQLite", "Tailwind CSS", "shadcn/ui"],
    feats: [
      "Gestión de productos",
      "Control de inventario",
      "Ventas",
      "Compras",
      "Capital",
      "Movimientos de caja",
      "Deudas",
      "Dashboard",
      "Persistencia de datos",
      "Arquitectura moderna",
    ],
    mock: "// screenshot placeholder\nDashboard\n├─ Productos\n├─ Inventario\n├─ Ventas / Compras\n└─ Caja · Deudas · Capital",
    arch: ["Next.js + React", "Prisma", "SQLite"],
    problem: "Gestionar inventario y operaciones comerciales en un solo lugar.",
    solution:
      "Una aplicación web con módulos para productos, inventario, ventas, compras, capital, caja y deudas, con persistencia de datos.",
    result: "Permite administrar el inventario y registrar las operaciones comerciales desde un dashboard.",
  },
  {
    id: "tesis",
    name: "Sistema de captura y sincronización de datos para la Unidad de Cuidados Intensivos del Hospital Provincial de Villa Clara",
    kind: "Proyecto de tesis · académico/profesional",
    desc: "Aplicación web offline-first que evoluciona un sistema existente y usa almacenamiento local en el frontend para trabajar cuando no hay conectividad.",
    stack: ["React", "Vite", "Laravel", "PHP", "MySQL", "IndexedDB", "Dexie.js", "REST", "Tailwind CSS"],
    feats: [
      "Offline-first",
      "Sincronización de datos",
      "Persistencia local",
      "Aplicación web",
      "Arquitectura cliente-servidor",
    ],
    mock: "// screenshot placeholder\nCliente (React + Dexie)\n  ↕ IndexedDB local\n  ↕ REST\nServidor (Laravel + MySQL)",
    arch: ["React + Dexie.js (IndexedDB)", "REST", "Laravel + MySQL"],
    problem: "Capturar datos en la Unidad de Cuidados Intensivos aun cuando no existe conectividad.",
    solution:
      "Se evoluciona un sistema existente: el frontend guarda los datos localmente y los sincroniza con el servidor cuando hay conexión. No se crea una nueva base de datos central.",
    result: "Permite trabajar sin conexión y sincronizar los datos después.",
  },
];

const services = [
  ["Desarrollo Web", "Aplicaciones web modernas con React y Next.js.", "M3 5h18v14H3zM3 9h18"],
  ["Interfaces modernas", "Interfaces responsive utilizando Tailwind CSS.", "M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 14h7v6H4z"],
  ["Aplicaciones de gestión", "Sistemas para inventario, ventas, productos y operaciones comerciales.", "M4 20V10M10 20V4M16 20v-7M22 20H2"],
  ["Backend y APIs", "Desarrollo de APIs y lógica de servidor.", "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"],
  ["Integración con bases de datos", "Aplicaciones conectadas a SQLite, MySQL y Prisma.", "M4 6c0-2 16-2 16 0s-16 2-16 0v12c0 2 16 2 16 0V6M4 12c0 2 16 2 16 0"],
];

const $ = (s) => document.querySelector(s),
  el = (h) => {
    const t = document.createElement("template");
    t.innerHTML = h.trim();
    return t.content.firstChild;
  };

const toast = (m) => {
  const t = $("#toast");
  t.textContent = tr(m);
  t.classList.add("o");
  setTimeout(() => t.classList.remove("o"), 2200);
};

const linkBtn = (label, url, cls = "") =>
  url
    ? `<a class="btn ${cls}" href="${url}" target="_blank" rel="noopener">${label}</a>`
    : `<a class="btn ${cls}" aria-disabled="true" title="URL pendiente de configurar" href="#" onclick="event.preventDefault();toast('URL pendiente de configurar')">${label}</a>`;

$("#yr").textContent = new Date().getFullYear() + " Miguel Ernesto Capote Hernández";
$("#sk").innerHTML = Object.entries(skills)
  .map(
    ([k, v]) => `<div><h3>${k}</h3>${v.map((x) => `<span class="chip">${x}</span>`).join("")}</div>`,
  )
  .join("");

$("#sv").innerHTML = services
  .map(
    ([t, d, p], i) =>
      `<article class="rv" style="--d:${i * 0.08}s"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="${p}"/></svg><h3>${t}</h3><p>${d}</p></article>`,
  )
  .join("");

$("#pj").innerHTML = projects
  .map(
    (p, i) => `<article class="p1 ${i ? "p2" : ""} rv">
      <div class="mock" style="${i ? "order:2" : ""}"><div class="win" aria-hidden="true"><header><i></i><i></i><i></i></header><pre>${p.mock}</pre></div></div>
      <div class="pb"><span class="tag" style="margin:0">${p.kind}</span><h3>${p.name}</h3><p>${p.desc}</p>
      <ul>${p.feats.map((f) => `<li>${f}</li>`).join("")}</ul>
      <div class="chips">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div>
      <div class="acts"><button class="btn p" data-i="${i}">Ver caso de estudio</button></div></div></article>`,
  )
  .join("");

async function loadProjectImages() {
  const projectIds = ["localstock", "tesis"];
  const mockDivs = document.querySelectorAll(".mock");

  for (let i = 0; i < mockDivs.length; i++) {
    const projectId = projectIds[i];
    const mockDiv = mockDivs[i];

    try {
      const imagePath = `assets/images/${projectId}/dashboard.png`;
      const response = await fetch(imagePath, { method: "HEAD" });

      if (response.ok) {
        mockDiv.innerHTML = `<img src="${imagePath}" alt="${projectId}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
        mockDiv.style.background = "transparent";
      }
    } catch (e) {
      console.log(`No image found for ${projectId}`);
    }
  }
}

setTimeout(loadProjectImages, 100);

document.querySelectorAll("[data-i]").forEach(
  (b) =>
    (b.onclick = () => {
      const p = projects[b.dataset.i];
      $("#db").innerHTML =
        `<h3 id="dt" style="font-size:1.6rem">${p.name}</h3><h4>Problema</h4><p>${p.problem}</p><h4>Solución</h4><p>${p.solution}</p><h4>Tecnologías</h4><div class="chips" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:6px">${p.stack.map((s) => `<span class="chip">${s}</span>`).join("")}</div><h4>Características</h4><p>${p.feats.join(" · ")}</p><h4>Arquitectura</h4>${archSvg(p.arch)}<h4>Resultado</h4><p>${p.result}</p>${extraHtml(p.id)}`;
      apply($("#dlg"));
      $("#dlg").showModal();
    }),
);

$("#cl").onclick = () => $("#dlg").close();
$("#dlg").onclick = (e) => {
  if (e.target.id === "dlg") e.target.close();
};

const icons = {
  github: `<svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.948v5.439h-3.554s.047-8.821 0-9.743h3.554v1.379c.43-.664 1.202-1.61 2.923-1.61 2.136 0 3.74 1.393 3.74 4.385v5.589zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.956.768-1.71 1.959-1.71 1.188 0 1.914.754 1.939 1.71 0 .951-.751 1.71-1.983 1.71zm1.581 11.597H3.635V9.709h3.283v10.743zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.158l-.356.214-3.71-1.005.51 3.62-.235.374a9.86 9.86 0 00-.951 4.887c0 5.428 4.314 9.835 9.605 9.835 2.625 0 5.09-.994 6.964-2.797 1.875-1.802 2.908-4.24 2.908-6.817 0-5.338-4.314-9.742-9.605-9.742"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  download: `<svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`,
};

function setupContactButtons() {
  const cvBtn = cfg.cvUrl
    ? `<a class="btn" href="${cfg.cvUrl}" target="_blank" rel="noopener">${icons.download}Descargar CV</a>`
    : `<a class="btn" aria-disabled="true" href="#" onclick="event.preventDefault();toast('URL pendiente de configurar')">${icons.download}Descargar CV</a>`;

  const githubBtn = socialLinks.github
    ? `<a class="btn" href="${socialLinks.github}" target="_blank" rel="noopener">${icons.github}GitHub</a>`
    : `<a class="btn" aria-disabled="true" href="#" onclick="event.preventDefault();toast('GitHub pendiente de configurar')">${icons.github}GitHub</a>`;

  const linkedinBtn = socialLinks.linkedin
    ? `<a class="btn" href="${socialLinks.linkedin}" target="_blank" rel="noopener">${icons.linkedin}LinkedIn</a>`
    : "";

  const whatsappBtn = socialLinks.whatsapp
    ? `<a class="btn" href="https://wa.me/${socialLinks.whatsapp.replace(/\D/g, "")}" target="_blank" rel="noopener">${icons.whatsapp}WhatsApp</a>`
    : "";

  const instagramBtn = socialLinks.instagram
    ? `<a class="btn" href="https://instagram.com/${socialLinks.instagram}" target="_blank" rel="noopener">${icons.instagram}Instagram</a>`
    : "";

  const facebookBtn = socialLinks.facebook
    ? `<a class="btn" href="https://facebook.com/${socialLinks.facebook.replace(/\s+/g, "")}" target="_blank" rel="noopener">${icons.facebook}Facebook</a>`
    : "";

  $("#ct").innerHTML = `<button class="btn p" id="mail">💬 Contactarme</button>${cvBtn}${githubBtn}${linkedinBtn}${whatsappBtn}${instagramBtn}${facebookBtn}`;

  const mailBtn = document.getElementById("mail");
  if (mailBtn) {
    mailBtn.onclick = async () => {
      if (!socialLinks.email) return toast("Email pendiente de configurar");
      try {
        await navigator.clipboard.writeText(socialLinks.email);
        toast("Email copiado: " + socialLinks.email);
      } catch {
        location.href = "mailto:" + socialLinks.email;
      }
    };
  }
}

function setupCTAButtons() {
  document.querySelectorAll("[data-link=github]").forEach((a) => {
    if (socialLinks.github) {
      a.href = socialLinks.github;
      a.target = "_blank";
      a.rel = "noopener";
      a.removeAttribute("aria-disabled");
    } else {
      a.setAttribute("aria-disabled", "true");
      a.onclick = (e) => {
        e.preventDefault();
        toast("GitHub pendiente de configurar");
      };
    }
  });
}

setupContactButtons();
setupCTAButtons();

const nav = $("#nav"),
  nl = $("#nl"),
  bg = $("#bg");

bg.onclick = () => {
  const o = nl.classList.toggle("o");
  bg.setAttribute("aria-expanded", o);
};

nl.onclick = (e) => {
  if (e.target.tagName === "A") {
    nl.classList.remove("o");
    bg.setAttribute("aria-expanded", false);
  }
};

const tl = $("#tl");
addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("sc", scrollY > 20);
    const r = tl.getBoundingClientRect();
    tl.style.setProperty("--pr", Math.max(0, Math.min(1, (innerHeight * 0.7 - r.top) / r.height)));
  },
  { passive: true },
);

const io = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".rv").forEach((n) => io.observe(n));

const links = [...nl.querySelectorAll("a")];
const so = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) glowTo(e.target.id);
      if (e.isIntersecting)
        links.forEach((a) =>
          a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id),
        );
    }),
  { rootMargin: "-45% 0px -50% 0px" },
);
document.querySelectorAll("main section[id]").forEach((s) => so.observe(s));

const esc = (x) =>
  x.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

function archSvg(a) {
  const w = 260,
    h = 44,
    g = 28,
    H = a.length * h + (a.length - 1) * g;
  return (
    `<svg viewBox="0 0 ${w} ${H}" role="img" aria-label="Arquitectura" style="width:100%;max-width:${w}px;margin-top:10px;display:block">` +
    a
      .map((t, i) => {
        const y = i * (h + g);
        return (
          `<rect x="1" y="${y + 1}" width="${w - 2}" height="${h - 2}" rx="12" fill="var(--s2)" stroke="var(--ln)"/><text x="${w / 2}" y="${y + h / 2 + 4}" text-anchor="middle" fill="var(--tx)" font-size="12" font-family="ui-monospace,monospace">${t}</text>` +
          (i < a.length - 1
            ? `<path d="M${w / 2} ${y + h + 4}v${g - 8}m-5-5l5 5 5-5" stroke="var(--a)" fill="none" stroke-width="1.5"/>`
            : "")
        );
      })
      .join("") +
    "</svg>"
  );
}

const extraHtml = (id) => {
  const x = extra[id] || {};
  return (
    (x.decisions?.length
      ? `<h4>Decisiones técnicas</h4><ul>${x.decisions.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>`
      : "") +
    (x.learned ? `<h4>Aprendizaje</h4><p>${esc(x.learned)}</p>` : "") +
    (x.code?.text ? `<h4>Código</h4><pre><code>${esc(x.code.text)}</code></pre>` : "")
  );
};

if (cfg.learning.length) {
  $("#lrl").innerHTML = cfg.learning.map((x) => `<span class="chip">${esc(x)}</span> `).join("");
  $("#lrn").hidden = false;
}

[
  ["Tarifa", cfg.rate],
  ["Zona horaria", cfg.timezone],
].forEach(([k, v]) => {
  if (v) $("#avl").append(el(`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`));
});

const root = document.documentElement;
function setTheme(t) {
  root.dataset.theme = t;
  try {
    localStorage.setItem("theme", t);
  } catch {}
}

$("#th").onclick = () =>
  setTheme(
    (root.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")) === "light"
      ? "dark"
      : "light",
  );

try {
  const t = localStorage.getItem("theme");
  if (t) setTheme(t);
} catch {}

const contactForm = document.getElementById("cf");
if (contactForm) {
  contactForm.onsubmit = async (e) => {
    e.preventDefault();
    const f = e.target,
      d = Object.fromEntries(new FormData(f)),
      st = $("#cs");
    let m;
    if (cfg.formEndpoint) {
      try {
        const r = await fetch(cfg.formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(d),
        });
        if (!r.ok) throw 0;
        f.reset();
        m = "Mensaje enviado";
      } catch {
        m = "No se pudo enviar el mensaje";
      }
    } else if (socialLinks.email) {
      const subject = encodeURIComponent("Contacto desde el portafolio");
      const body = encodeURIComponent(`Nombre: ${d.name}\nEmail: ${d.email}\n\nMensaje:\n${d.message}`);
      location.href = `mailto:${socialLinks.email}?subject=${subject}&body=${body}`;
      m = "Abriendo cliente de email...";
    } else {
      m = "Formulario pendiente de configurar";
    }
    if (st) {
      st.textContent = m;
      apply(st);
    }
  };
}

const downloadBtn = document.getElementById("downloadPortfolio");
if (downloadBtn) {
  downloadBtn.onclick = async () => {
    try {
      const response = await fetch(window.location.href);
      const html = await response.text();
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Miguel_Ernesto_Capote_Portafolio.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast("Portafolio descargado");
    } catch (error) {
      toast("Error al descargar el portafolio");
      console.error(error);
    }
  };
}

const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const ids = ["hero", "sobre-mi", "skills", "proyectos", "proceso", "servicios", "disponible", "contacto"],
  gp = [
    [55, -10],
    [-10, 35],
    [50, 25],
    [-5, 55],
    [45, 10],
    [15, 40],
    [50, 35],
    [30, 20],
  ];

function glowTo(id) {
  globalThis.mReady && mascotSay(id);
  const i = Math.max(0, ids.indexOf(id)),
    [x, y] = gp[i];
  $("#glow").style.transform = `translate(${x}vw,${y}vh)`;
}

glowTo("hero");

if (!rm) {
  for (let i = 0; i < 14; i++) {
    const d = document.createElement("i");
    d.className = "pt";
    d.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;animation-delay:-${Math.random() * 9}s;animation-duration:${8 + Math.random() * 8}s`;
    document.body.append(d);
  }
}

if (!rm && matchMedia("(pointer:fine)").matches) {
  const cur = $("#cur");
  let cx = 0,
    cy = 0,
    tx = 0,
    ty = 0,
    on = false;
  const loop = () => {
    cx += (tx - cx) * 0.2;
    cy += (ty - cy) * 0.2;
    cur.style.transform = `translate(${cx}px,${cy}px)`;
    requestAnimationFrame(loop);
  };
  addEventListener(
    "pointermove",
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!on) {
        on = true;
        cx = tx;
        cy = ty;
        cur.style.opacity = 1;
        loop();
      }
      cur.classList.toggle("h", !!e.target.closest("a,button,.p1,input,textarea"));
    },
    { passive: true },
  );
}

let L = "es";
const O = new WeakMap();
const D = {
  "Ver proyectos": "View projects",
  Contactarme: "Contact me",
  "Desarrollador Web.": "Web Developer.",
  "Desarrollador Web": "Web Developer",
  "Construyo aplicaciones web modernas, funcionales y escalables, combinando buenas prácticas de desarrollo con una experiencia de usuario cuidada.":
    "I build modern, functional and scalable web applications, combining good development practices with a carefully crafted user experience.",
  "/sobre-mi": "/about",
  "/proyectos": "/projects",
  "/proceso": "/process",
  "/servicios": "/services",
  "/contacto": "/contact",
  "Sobre mí": "About me",
  "Soy graduado de Ingeniería Informática y desarrollador web enfocado en la construcción de aplicaciones modernas. Me interesa especialmente crear soluciones que sean funcionales, mantenibles y capaces de resolver problemas reales.":
    "I am a Computer Engineering graduate and a web developer focused on building modern applications. I am especially interested in creating solutions that are functional, maintainable and capable of solving real problems.",
  Formación: "Education",
  "Ingeniería Informática": "Computer Engineering",
  "Universidad Central “Marta Abreu” de Las Villas": "Central University “Marta Abreu” of Las Villas",
  Especialidad: "Specialty",
  "Desarrollo Web": "Web Development",
  Inglés: "English",
  Ubicación: "Location",
  "Tecnologías que utilizo": "Technologies I use",
  "Proyectos destacados": "Featured projects",
  "Aplicaciones construidas para resolver problemas reales.": "Applications built to solve real problems.",
  "Proyecto principal": "Main project",
  "Proyecto de tesis": "Thesis project",
  "académico/profesional": "academic/professional",
  "Aplicación web para gestión de inventario y operaciones comerciales.": "Web application for inventory management and business operations.",
  "Gestión de productos": "Product management",
  "Control de inventario": "Inventory control",
  Ventas: "Sales",
  Compras: "Purchases",
  "Movimientos de caja": "Cash movements",
  Deudas: "Debts",
  "Persistencia de datos": "Data persistence",
  "Arquitectura moderna": "Modern architecture",
  "Sincronización de datos": "Data synchronization",
  "Persistencia local": "Local persistence",
  "Aplicación web": "Web application",
  "Arquitectura cliente-servidor": "Client-server architecture",
  "Sistema de captura y sincronización de datos para la Unidad de Cuidados Intensivos del Hospital Provincial de Villa Clara":
    "Data capture and synchronization system for the Intensive Care Unit of the Villa Clara Provincial Hospital",
  "Aplicación web offline-first que evoluciona un sistema existente y usa almacenamiento local en el frontend para trabajar cuando no hay conectividad.":
    "Offline-first web application that evolves an existing system and uses local storage in the frontend to keep working when there is no connectivity.",
  "Ver caso de estudio": "View case study",
  "Ver proyecto": "View project",
  Código: "Code",
  Cerrar: "Close",
  Problema: "Problem",
  Solución: "Solution",
  Tecnologías: "Technologies",
  Características: "Features",
  Arquitectura: "Architecture",
  Resultado: "Result",
  "Gestionar inventario y operaciones comerciales en un solo lugar.": "Manage inventory and business operations in one place.",
  "Una aplicación web con módulos para productos, inventario, ventas, compras, capital, caja y deudas, con persistencia de datos.":
    "A web application with modules for products, inventory, sales, purchases, capital, cash and debts, with data persistence.",
  "Permite administrar el inventario y registrar las operaciones comerciales desde un dashboard.":
    "It allows managing inventory and recording business operations from a dashboard.",
  "Capturar datos en la Unidad de Cuidados Intensivos aun cuando no existe conectividad.":
    "Capture data in the Intensive Care Unit even when there is no connectivity.",
  "Se evoluciona un sistema existente: el frontend guarda los datos localmente y los sincroniza con el servidor cuando hay conexión. No se crea una nueva base de datos central.":
    "An existing system is evolved: the frontend stores data locally and syncs it with the server when a connection is available. No new central database is created.",
  "Permite trabajar sin conexión y sincronizar los datos después.":
    "It allows working offline and syncing the data later.",
  "Dashboard\n├─ Productos\n├─ Inventario\n├─ Ventas / Compras\n└─ Caja · Deudas · Capital":
    "Dashboard\n├─ Products\n├─ Inventory\n├─ Sales / Purchases\n└─ Cash · Debts · Capital",
  "Cómo trabajo": "How I work",
  Entender: "Understand",
  "Analizar el problema y los requisitos.": "Analyze the problem and requirements.",
  Diseñar: "Design",
  "Definir estructura, experiencia y arquitectura.": "Define structure, experience and architecture.",
  Construir: "Build",
  "Desarrollar frontend y backend.": "Develop frontend and backend.",
  Probar: "Test",
  "Validar funcionalidades y comportamiento.": "Validate features and behavior.",
  Mejorar: "Improve",
  "Optimizar experiencia, rendimiento y código.": "Optimize experience, performance and code.",
  "¿Qué puedo desarrollar?": "What can I build?",
  "Aplicaciones web modernas con React y Next.js.": "Modern web applications with React and Next.js.",
  "Interfaces modernas": "Modern interfaces",
  "Interfaces responsive utilizando Tailwind CSS.": "Responsive interfaces using Tailwind CSS.",
  "Aplicaciones de gestión": "Management applications",
  "Sistemas para inventario, ventas, productos y operaciones comerciales.": "Systems for inventory, sales, products and business operations.",
  "Backend y APIs": "Backend and APIs",
  "Desarrollo de APIs y lógica de servidor.": "API and server-side logic development.",
  "Integración con bases de datos": "Database integration",
  "Aplicaciones conectadas a SQLite, MySQL y Prisma.": "Applications connected to SQLite, MySQL and Prisma.",
  "¿Construimos": "Shall we build",
  "algo juntos?": "something together?",
  "Estoy abierto a nuevas oportunidades, proyectos y colaboraciones relacionadas con el desarrollo web.":
    "I am open to new opportunities, projects and collaborations related to web development.",
  "Construyo. Experimento. Aprendo.": "I build. I experiment. I learn.",
  "Explora mis proyectos y conoce cómo estoy construyendo mi camino como desarrollador.":
    "Explore my projects and see how I am building my path as a developer.",
  "URL pendiente de configurar": "URL not configured yet",
  "GitHub pendiente de configurar": "GitHub not configured yet",
  "Email pendiente de configurar": "Email not configured yet",
  "Email copiado": "Email copied",
  "Pendiente de configurar": "Not configured yet",
  Principal: "Main",
  "Disponible para freelance y trabajo remoto": "Available for freelance and remote work",
  "/disponible": "/available",
  "Disponible para trabajo freelance": "Available for freelance work",
  "Soy desarrollador freelance y busco oportunidades de trabajo online. Puedo colaborar de forma remota en proyectos de desarrollo web.":
    "I am a freelance developer looking for online work opportunities. I can collaborate remotely on web development projects.",
  Modalidad: "Mode",
  "Tipo de trabajo": "Type of work",
  "Remoto / online": "Remote / online",
  Busco: "Looking for",
  "Proyectos y colaboraciones de desarrollo web": "Web development projects and collaborations",
  Idiomas: "Languages",
  Español: "Spanish",
  "Inglés (B1)": "English (B1)",
  Tarifa: "Rate",
  "Zona horaria": "Time zone",
  "Miguel está disponible para trabajo freelance y remoto.": "Miguel is available for freelance and remote work.",
  "Ocultar asistente": "Hide assistant",
  "Asistente del portafolio": "Portfolio assistant",
  "¡Hola! Soy el asistente del portafolio de Miguel.": "Hi! I am the assistant of Miguel's portfolio.",
  "Miguel es ingeniero informático y vive en Cienfuegos, Cuba.": "Miguel is a computer engineer based in Cienfuegos, Cuba.",
  "Estas son las tecnologías que Miguel utiliza.": "These are the technologies Miguel uses.",
  "Aquí está LocalStock. Abre el caso de estudio.": "Here is LocalStock. Open the case study.",
  "Así aborda Miguel cada proyecto.": "This is how Miguel approaches each project.",
  "Esto es lo que Miguel puede desarrollar.": "This is what Miguel can build.",
  "¿Hablamos? Escríbele desde el formulario.": "Shall we talk? Write to him using the form.",
  Nombre: "Name",
  Correo: "Email",
  Mensaje: "Message",
  "Enviar mensaje": "Send message",
  "Mensaje enviado": "Message sent",
  "No se pudo enviar el mensaje": "The message could not be sent",
  "Formulario pendiente de configurar": "Form not configured yet",
  "Descargar CV": "Download CV",
  "Saltar al contenido": "Skip to content",
  "Ahora estoy aprendiendo": "Currently learning",
  "Decisiones técnicas": "Technical decisions",
  Aprendizaje: "What I learned",
  "Cambiar tema": "Toggle theme",
  "Abrir menú": "Open menu",
  "Cambiar idioma": "Change language",
};

const tr = (s) => {
  if (L === "es") return s;
  const m = s.match(/^(\s*)([\s\S]*?)(\s*)$/),
    k = m[2];
  return (
    m[1] +
    (D[k] ??
      (k.includes(" · ")
        ? k
            .split(" · ")
            .map((x) => D[x] ?? x)
            .join(" · ")
        : k)) +
    m[3]
  );
};

function apply(root = document.body) {
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = w.nextNode())) {
    if (n.parentNode.closest("script,#lg")) continue;
    if (!O.has(n)) O.set(n, n.nodeValue);
    const v = tr(O.get(n));
    if (v !== n.nodeValue) n.nodeValue = v;
  }
  root.querySelectorAll("[title],[aria-label]").forEach((e) =>
    ["title", "aria-label"].forEach((a) => {
      if (!e.hasAttribute(a)) return;
      const k = "o" + a.replace("-", "");
      if (!e.dataset[k]) e.dataset[k] = e.getAttribute(a);
      e.setAttribute(a, tr(e.dataset[k]));
    }),
  );
}

const metas = [...document.querySelectorAll('meta[name=description],meta[property="og:description"]')],
  esMeta = metas.map((m) => m.content),
  esTitle = document.title;
const enMeta = "Portfolio of Miguel Ernesto Capote Hernández, a web developer specialized in React, Next.js and modern applications.",
  enTitle = "Miguel Ernesto Capote Hernández | Web Developer";

function setLang(l) {
  L = l;
  document.documentElement.lang = l;
  document.title = l === "en" ? enTitle : esTitle;
  metas.forEach((m, i) => (m.content = l === "en" ? enMeta : esMeta[i]));
  $("#lg").textContent = l === "en" ? "ES" : "EN";
  try {
    localStorage.setItem("lang", l);
  } catch {}
  apply();
}

$("#lg").onclick = () => setLang(L === "es" ? "en" : "es");
let saved = null;
try {
  saved = localStorage.getItem("lang");
} catch {}
setLang(saved || ((navigator.language || "").toLowerCase().startsWith("en") ? "en" : "es"));

const MS = {
  hero: "¡Hola! Soy el asistente del portafolio de Miguel.",
  "sobre-mi": "Miguel es ingeniero informático y vive en Cienfuegos, Cuba.",
  skills: "Estas son las tecnologías que Miguel utiliza.",
  proyectos: "Aquí está LocalStock. Abre el caso de estudio.",
  proceso: "Así aborda Miguel cada proyecto.",
  servicios: "Esto es lo que Miguel puede desarrollar.",
  disponible: "Miguel está disponible para trabajo freelance y remoto.",
  contacto: "¿Hablamos? Escríbele desde el formulario.",
};

let mk = "hero",
  mt;

function showB() {
  $("#bt").textContent = tr(MS[mk] || MS.hero);
  $("#bub").classList.add("o");
  clearTimeout(mt);
  mt = setTimeout(() => $("#bub").classList.remove("o"), 6000);
}

function mascotSay(id) {
  if (!MS[id] || !$("#mc")) return;
  mk = id;
  $("#mc").dataset.s = id;
  showB();
}

$("#mb2").onclick = () =>
  $("#bub").classList.contains("o")
    ? ($("#bub").classList.remove("o"), clearTimeout(mt))
    : showB();
$("#mx").onclick = () => $("#mc").remove();

if (!rm)
  addEventListener(
    "pointermove",
    (e) => {
      const b = $("#mb2");
      if (!b) return;
      const r = b.getBoundingClientRect(),
        dx = e.clientX - (r.left + r.width / 2),
        dy = e.clientY - (r.top + r.height / 2),
        d = Math.hypot(dx, dy) || 1,
        k = Math.min(3.5, d / 40),
        t = `translate(${(dx / d) * k}px,${(dy / d) * k}px)`;
      $("#eL").style.transform = $("#eR").style.transform = t;
    },
    { passive: true },
  );

const _sl = setLang;
setLang = (l) => {
  _sl(l);
  if ($("#bt")) $("#bt").textContent = tr(MS[mk]);
};

const mc = $("#mc"),
  WP = [
    [0.05, 0.8],
    [0.9, 0.3],
    [0.06, 0.55],
    [0.92, 0.78],
    [0.92, 0.4],
    [0.05, 0.72],
    [0.08, 0.45],
    [0.9, 0.82],
  ],
  secs = ids.map((i) => document.getElementById(i));

let mX = 0,
  mY = 0,
  gX = 0,
  gY = 0,
  run = false;
const sm = (t) => t * t * (3 - 2 * t);

function mMove() {
  if (!mc.isConnected) return;
  const ys = secs.map((e) => e.getBoundingClientRect().top + scrollY),
    max = document.documentElement.scrollHeight - innerHeight,
    pr = max > 0 ? scrollY / max : 0,
    pos = scrollY + innerHeight * 0.5 * pr;
  let i = 0;
  while (i < ys.length - 1 && pos >= ys[i + 1]) i++;
  const j = Math.min(i + 1, ys.length - 1),
    t =
      i === j
        ? 0
        : Math.min(1, Math.max(0, (pos - ys[i]) / (ys[j] - ys[i] || 1))),
    e = sm(t),
    A = WP[i],
    B = WP[j];
  const fx = rm ? 0 : A[0] + (B[0] - A[0]) * e,
    fy = rm ? 1 : A[1] + (B[1] - A[1]) * e - Math.sin(e * Math.PI) * 0.08;
  const w = mc.offsetWidth,
    h = mc.offsetHeight,
    top = Math.min(96, innerHeight - h - 12);
  gX = 12 + fx * Math.max(0, innerWidth - w - 24);
  gY = top + Math.min(1, Math.max(0, fy)) * Math.max(0, innerHeight - h - 12 - top);
  mc.classList.toggle("lf", fx > 0.55);
  if (!run) {
    run = true;
    requestAnimationFrame(mStep);
  }
}

function mStep() {
  if (!mc.isConnected) {
    run = false;
    return;
  }
  const dx = gX - mX,
    dy = gY - mY,
    k = rm ? 1 : 0.07;
  mX += dx * k;
  mY += dy * k;
  mc.style.transform = `translate(${mX}px,${mY}px)`;
  $("#mb2").style.transform = rm ? "" : `rotate(${Math.max(-14, Math.min(14, dx * 0.12))}deg)`;
  if (Math.abs(dx) + Math.abs(dy) > 0.4) requestAnimationFrame(mStep);
  else {
    run = false;
    $("#mb2").style.transform = "";
  }
}

mMove();
mX = gX;
mY = gY;
addEventListener("scroll", mMove, { passive: true });
addEventListener("resize", mMove);
globalThis.mReady = true;
showB();
