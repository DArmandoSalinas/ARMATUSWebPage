(() => {
  "use strict";

  const COPY = {
    es: {
      "nav.cta": "App Store",
      "hero.lineA": "La fuerza no se improvisa.",
      "hero.lineB": "Se arma.",
      "hero.cta": "Descargar en App Store",
      "hero.secondary": "Ver el producto",

      "name.title": "Armado. Equipado. Fortificado.",
      "name.latin": "armātus — del latín: armado, equipado, fortificado",
      "name.body":
        "ARMATUS no es un eslogan. Es una postura: llegar preparado — con plan, con juicio, con la perseverancia de quien se forja serie a serie. No entras a ciegas. Entras equipado. Blindado por el método. Listo para la carga.",
      "why.title": "Creado para restaurar el oficio de entrenar.",
      "why.body":
        "La fuerza seria se diluía en tips vacíos, PDFs muertos y chatbots que inventan el día. ARMATUS existe para devolver criterio: plan con visión, sesión viva, técnica clara, registro que decide. No para entretenerte. Para fortalecerte.",

      "pos.tag": "La diferencia",
      "pos.title": "El genérico adivina. ARMATUS decide.",
      "pos.lead":
        "Uno te da respuestas fáciles. El otro te arma con plan, sesión del día y memoria — coaching que avanza, no ruido que entretiene.",
      "pos.badLabel": "Lo genérico",
      "pos.bad":
        "Prompts vagos. “Squat / Row / Press”. Sin plan. Sin overload. Sin técnica. Sin memoria de lo que hiciste ayer.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Ejercicios con nombre. Overload con mapa. Sesión según cómo llegas. Idioma fijo EN o ES. Un protocolo que no te suelta.",

      "coach.tag": "Coach del día",
      "coach.title": "Llegas como llegas. El coach responde.",
      "coach.lead":
        "Energía, sueño, tiempo, foco. Dices cómo estás — y ARMATUS arma el trabajo exacto. No un PDF frío. Una sesión viva.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Sesión del día",

      "plan.tag": "Plan semanal",
      "plan.title": "La carga tiene destino. Tú también.",
      "plan.lead":
        "Split, recuperación y overload con mapa. Regenera, deload, vacaciones, brief. Ves hacia dónde va la fuerza — y el criterio detrás de cada decisión.",
      "plan.cap1": "Semana",
      "plan.cap2": "Rationale",
      "plan.cap3": "Overload",

      "track.tag": "Tracker · Técnica",
      "track.title": "Lo que no se registra, no progresa.",
      "track.lead":
        "Peso, reps, descanso, alternativas con coach pick. Bocetos reales para ejecutar limpio. Autosave nativo — nada se pierde entre series.",
      "track.cap": "En vivo",

      "journey.tag": "Journey",
      "journey.title": "Tu fuerza deja huella. No likes.",
      "journey.lead":
        "PRs, curvas, sesiones. La historia que el coach lee para armar la siguiente semana. Evidencia pura — sin motivación barata.",
      "journey.cap": "Progreso",

      "cal.tag": "Calibración",
      "cal.title": "Sin conocerte, no hay protocolo.",
      "cal.lead":
        "Perfil, objetivo, preferencias, horario, recovery. Primero el contexto. Después el arma — un plan que realmente te pertenece.",
      "cal.cap1": "Perfil",
      "cal.cap2": "Objetivo",
      "cal.cap3": "Entrenamiento",
      "cal.cap4": "Horario",
      "cal.cap5": "Lifestyle",

      "cta.lead": "Arma tu entrenamiento. O sigue improvisando.",
      "cta.store": "Descargar en App Store",
      "cta.contact": "Contacto",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.note": "Guía general de entrenamiento. No es consejo médico.",
      title: "ARMATUS — La fuerza no se improvisa. Se arma.",
    },
    en: {
      "nav.cta": "App Store",
      "hero.lineA": "Strength isn’t improvised.",
      "hero.lineB": "It’s armed.",
      "hero.cta": "Download on the App Store",
      "hero.secondary": "See the product",

      "name.title": "Armed. Equipped. Fortified.",
      "name.latin": "armātus — from Latin: armed, equipped, fortified",
      "name.body":
        "ARMATUS is not a slogan. It is a stance: show up prepared — with a plan, with judgment, with the perseverance of someone forged set by set. You don’t walk in blind. You walk in equipped. Armored by method. Ready for the load.",
      "why.title": "Built to restore the craft of training.",
      "why.body":
        "Serious strength was dissolving into empty tips, dead PDFs, and chatbots inventing the day. ARMATUS exists to bring judgment back: a plan with vision, a living session, clear technique, a log that decides. Not to entertain you. To fortify you.",

      "pos.tag": "The difference",
      "pos.title": "Generic guesses. ARMATUS decides.",
      "pos.lead":
        "One hands you easy answers. The other arms you with a plan, a daily session, and memory — coaching that advances, not noise that entertains.",
      "pos.badLabel": "The generic path",
      "pos.bad":
        "Vague prompts. “Squat / Row / Press”. No plan. No overload. No technique. No memory of what you did yesterday.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Named exercises. Overload with a map. A session built from how you arrive. Language locked EN or ES. A protocol that doesn’t let go.",

      "coach.tag": "Daily coach",
      "coach.title": "You arrive as you are. The coach answers.",
      "coach.lead":
        "Energy, sleep, time, focus. You say how you feel — and ARMATUS builds the exact work. Not a cold PDF. A living session.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Today’s session",

      "plan.tag": "Weekly plan",
      "plan.title": "Load has a destination. So do you.",
      "plan.lead":
        "Split, recovery, and overload with a map. Regenerate, deload, vacation, brief. See where strength is headed — and the judgment behind every call.",
      "plan.cap1": "Week",
      "plan.cap2": "Rationale",
      "plan.cap3": "Overload",

      "track.tag": "Tracker · Technique",
      "track.title": "What isn’t logged doesn’t progress.",
      "track.lead":
        "Weight, reps, rest, alternatives with a coach pick. Real bocetos for clean execution. Native autosave — nothing slips between sets.",
      "track.cap": "Live",

      "journey.tag": "Journey",
      "journey.title": "Your strength leaves a mark. Not likes.",
      "journey.lead":
        "PRs, curves, sessions. The history the coach reads to arm next week. Pure evidence — no cheap motivation.",
      "journey.cap": "Progress",

      "cal.tag": "Calibration",
      "cal.title": "Without knowing you, there is no protocol.",
      "cal.lead":
        "Profile, goal, preferences, schedule, recovery. Context first. Then the weapon — a plan that actually belongs to you.",
      "cal.cap1": "Profile",
      "cal.cap2": "Goal",
      "cal.cap3": "Training",
      "cal.cap4": "Schedule",
      "cal.cap5": "Lifestyle",

      "cta.lead": "Arm your training. Or keep improvising.",
      "cta.store": "Download on the App Store",
      "cta.contact": "Contact",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.note": "General training guidance. Not medical advice.",
      title: "ARMATUS — Strength isn’t improvised. It’s armed.",
    },
  };

  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll(".lang-btn"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const typeRoot = document.querySelector("[data-hero-type]");
  const typeA = document.querySelector("[data-type-a]");
  const typeB = document.querySelector("[data-type-b]");
  let typeToken = 0;

  function sleep(ms, token) {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        if (token === typeToken) resolve(true);
        else resolve(false);
      }, ms);
    });
  }

  async function typeLine(el, text, token, charMs) {
    el.textContent = "";
    for (let i = 0; i < text.length; i += 1) {
      if (token !== typeToken) return false;
      el.textContent = text.slice(0, i + 1);
      const ch = text[i];
      const pause = ch === " " ? charMs * 0.45 : ch === "." || ch === "," ? charMs * 2.2 : charMs;
      const ok = await sleep(pause, token);
      if (!ok) return false;
    }
    return true;
  }

  async function runTypewriter(lang) {
    if (!typeRoot || !typeA || !typeB) return;
    const dict = COPY[lang] || COPY.es;
    const lineA = dict["hero.lineA"];
    const lineB = dict["hero.lineB"];
    const token = ++typeToken;

    typeRoot.classList.remove("is-typed", "is-arming");
    typeA.textContent = "";
    typeB.textContent = "";
    typeB.classList.remove("is-lit");
    if (reduceMotion) {
      typeA.textContent = lineA;
      typeB.textContent = lineB;
      typeB.classList.add("is-lit");
      typeRoot.classList.add("is-typed", "is-arming");
      return;
    }

    const okA = await typeLine(typeA, lineA, token, 38);
    if (!okA) return;
    const pauseOk = await sleep(420, token);
    if (!pauseOk) return;

    typeRoot.classList.add("is-arming");
    const okB = await typeLine(typeB, lineB, token, 52);
    if (!okB) return;

    typeB.classList.add("is-lit");
    typeRoot.classList.add("is-typed");
  }

  function applyLang(lang) {
    const dict = COPY[lang] || COPY.es;
    root.lang = lang;
    document.title = dict.title;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) el.textContent = dict[key];
    });
    buttons.forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try {
      localStorage.setItem("armatus-lang", lang);
    } catch (_) {
      /* ignore */
    }
    runTypewriter(lang);
  }

  let saved = null;
  try {
    saved = localStorage.getItem("armatus-lang");
  } catch (_) {
    /* ignore */
  }
  applyLang(saved === "en" || saved === "es" ? saved : "es");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang) applyLang(lang);
    });
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
  }

  const topbar = document.querySelector("[data-topbar]");
  if (topbar) {
    const onScroll = () => {
      topbar.classList.toggle("is-solid", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
