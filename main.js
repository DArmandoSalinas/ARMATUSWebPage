(() => {
  "use strict";

  const COPY = {
    es: {
      "nav.cta": "App Store",
      "hero.lineA": "La fuerza no se improvisa.",
      "hero.lineB": "Se arma.",
      "hero.cta": "Descargar en App Store",
      "hero.secondary": "Ver el sistema",

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
        "Uno te entretiene con respuestas fáciles. El otro te arma un sistema completo: te conoce, planifica la semana, adapta el día, registra con técnica y usa tu historia para la siguiente carga.",
      "pos.badLabel": "Lo genérico",
      "pos.bad":
        "Prompts vagos. “Squat / Row / Press”. Sin plan. Sin overload. Sin técnica. Sin memoria. Sin vida real.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Perfil profundo. Plan con ciencia. Sesión según cómo llegas. Tracker con bocetos. Journey que alimenta la siguiente semana. EN o ES — sin improvisar.",

      "loop.tag": "El sistema",
      "loop.title": "Un ciclo. No una app de tips.",
      "loop.lead":
        "Te conoce → arma la semana → adapta el día → registra limpio → lee el progreso → regenera mejor. Eso es ARMATUS.",
      "loop.s1": "Calibrar",
      "loop.s2": "Planear",
      "loop.s3": "Adaptar",
      "loop.s4": "Ejecutar",
      "loop.s5": "Evolucionar",

      "cal.tag": "01 · Calibración",
      "cal.title": "Primero te conoce. Después te arma.",
      "cal.lead":
        "Perfil, objetivo, equipo, horario, sueño, estrés, dieta, lesiones, deportes. Sin ese contexto no hay protocolo — solo ruido con buena tipografía.",
      "cal.cap1": "Perfil",
      "cal.cap2": "Objetivo",
      "cal.cap3": "Entrenamiento",
      "cal.cap4": "Horario",
      "cal.cap5": "Lifestyle",

      "plan.tag": "02 · Plan semanal",
      "plan.title": "La semana tiene rumbo. No días sueltos.",
      "plan.lead":
        "Un blueprint con tu nombre, tu objetivo y la arquitectura detrás. Regenera desde logs y PRs. Baja carga o viaja sin romper el protocolo. Diseña la semana — o deja que el criterio la arme.",
      "plan.cap1": "Tu semana",
      "plan.cap2": "Ciencia",
      "plan.cap3": "Modos",
      "plan.subTag": "Antes de generar",
      "plan.subTitle": "Techo de capacidad. No ego.",
      "plan.subLead":
        "Qué puedes sostener hoy — no tu pace de carrera. Fatiga de la semana, notas como “rodilla sensible”. El plan se arma bajo un techo real.",
      "plan.cap4": "Readiness",
      "plan.designTag": "Diseño y chat",
      "plan.designTitle": "Escríbela. O pídele cambios.",
      "plan.designLead":
        "Templates rápidos, brief en lenguaje natural, o chat: “lower body el lunes”. Ves la propuesta con rationale. Aceptas — o te quedas con la semana actual.",
      "plan.cap5": "Diseña",
      "plan.cap6": "Chat",
      "plan.arsenalTag": "El arsenal del plan",
      "plan.arsenalTitle": "Más control. Mismo criterio.",
      "plan.a1t": "Regenerar con memoria",
      "plan.a1b":
        "Una semana nueva no parte de cero: usa sesiones logueadas y PRs para ajustar volumen, recuperación y foco.",
      "plan.a2t": "Diseña tu propia semana",
      "plan.a2b":
        "Describe días, rests y deportes. ARMATUS completa dosis y lo deja como plan oficial.",
      "plan.a3t": "Templates rápidos",
      "plan.a3b":
        "Full body ×3, upper/lower ×4, base 5K y más — un atajo sin perder personalización.",
      "plan.a4t": "Deload y vacaciones",
      "plan.a4b":
        "Baja la carga o pausa la semana. El protocolo sigue vivo; no se improvisa el regreso.",
      "plan.a5t": "Mapa de overload",
      "plan.a5b": "Ves hacia dónde va la progresión — no solo qué toca hoy.",
      "plan.a6t": "Arma tu propia rutina",
      "plan.a6b":
        "En Coach: construye una sesión custom cuando quieras salirte del plan del día — sin perder el registro en Journey.",
      "plan.cap7": "Overload",

      "coach.tag": "03 · Coach del día",
      "coach.title": "El plan es la brújula. Hoy decide la sesión.",
      "coach.lead":
        "Energía, sueño, tiempo, lugar, foco. Llegas como llegas — y el coach arma el trabajo exacto. Más ligero, swap, skip, o a full. No un PDF que te ignora.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Sesión viva",

      "track.tag": "04 · Tracker · Técnica",
      "track.title": "Ejecuta limpio. Que cada serie cuente.",
      "track.lead":
        "Series, peso, rest timer, alternativas con coach pick. Guía de setup, ejecución, errores y respiración. Bocetos reales. Autosave — el gimnasio no espera a la señal.",
      "track.cap1": "En vivo",
      "track.cap2": "Guía",
      "track.cap3": "Sesión",
      "track.bocetoLabel": "Bocetos de técnica",

      "journey.tag": "05 · Journey",
      "journey.title": "El progreso cierra el ciclo.",
      "journey.lead":
        "PRs, volumen, curvas, sesiones de gym y deporte. No es un feed: es la evidencia que regenera la siguiente semana más inteligente.",
      "journey.cap": "Evidencia",

      "life.tag": "Vida real",
      "life.title": "Armado también fuera del rack.",
      "life.lead":
        "Carrera, bici, natación, viajes, lesiones, deload. El coach y el plan leen todo — no solo lo que pasó bajo la barra.",
      "life.c1t": "Límites y lesiones",
      "life.c1b": "Historial, notas del día, ejercicios a evitar. Criterio de coach, no ego de chatbot.",
      "life.c2t": "Deload y vacaciones",
      "life.c2b": "Baja la carga o pausa la semana sin romper el protocolo.",
      "life.c3t": "Deporte híbrido",
      "life.c3b": "Registra carrera, bici, natación y más. Viaja a Journey y alimenta el siguiente plan.",
      "life.c4t": "Horarios reales",
      "life.c4b": "Ventanas por día, two-a-days, equipo mínimo en viaje.",
      "life.c5t": "Chat del plan",
      "life.c5b": "Pide cambios con razón. Revisa. Acepta o quédate.",
      "life.c6t": "Offline en el gym",
      "life.c6b": "Autosave, pausa/reanuda, cola offline. La señal no manda.",
      "life.cap": "Sport log",

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
      "hero.secondary": "See the system",

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
        "One entertains you with easy answers. The other arms a full system: it knows you, plans the week, adapts the day, logs with technique, and uses your history for the next load.",
      "pos.badLabel": "The generic path",
      "pos.bad":
        "Vague prompts. “Squat / Row / Press”. No plan. No overload. No technique. No memory. No real life.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Deep profile. Plan with science. Session from how you arrive. Tracker with bocetos. Journey that feeds next week. EN or ES — no improvisation.",

      "loop.tag": "The system",
      "loop.title": "A loop. Not a tips app.",
      "loop.lead":
        "Knows you → arms the week → adapts the day → logs clean → reads progress → regenerates smarter. That’s ARMATUS.",
      "loop.s1": "Calibrate",
      "loop.s2": "Plan",
      "loop.s3": "Adapt",
      "loop.s4": "Execute",
      "loop.s5": "Evolve",

      "cal.tag": "01 · Calibration",
      "cal.title": "First it knows you. Then it arms you.",
      "cal.lead":
        "Profile, goal, equipment, schedule, sleep, stress, diet, injuries, sports. Without that context there is no protocol — only noise with nice typography.",
      "cal.cap1": "Profile",
      "cal.cap2": "Goal",
      "cal.cap3": "Training",
      "cal.cap4": "Schedule",
      "cal.cap5": "Lifestyle",

      "plan.tag": "02 · Weekly plan",
      "plan.title": "The week has direction. Not loose days.",
      "plan.lead":
        "A blueprint with your name, your goal, and the architecture behind it. Regenerate from logs and PRs. Deload or travel without breaking the protocol. Design the week — or let judgment arm it.",
      "plan.cap1": "Your week",
      "plan.cap2": "Science",
      "plan.cap3": "Modes",
      "plan.subTag": "Before generating",
      "plan.subTitle": "Capacity ceiling. Not ego.",
      "plan.subLead":
        "What you can hold today — not race pace. Weekly fatigue, notes like “sore knee.” The plan is built under a real ceiling.",
      "plan.cap4": "Readiness",
      "plan.designTag": "Design & chat",
      "plan.designTitle": "Write it. Or ask for changes.",
      "plan.designLead":
        "Quick templates, a natural-language brief, or chat: “lower body on Monday.” See the proposal with rationale. Accept — or keep the current week.",
      "plan.cap5": "Design",
      "plan.cap6": "Chat",
      "plan.arsenalTag": "Plan arsenal",
      "plan.arsenalTitle": "More control. Same judgment.",
      "plan.a1t": "Regenerate with memory",
      "plan.a1b":
        "A new week doesn’t start from zero: it uses logged sessions and PRs to adjust volume, recovery, and focus.",
      "plan.a2t": "Design your own week",
      "plan.a2b":
        "Describe days, rests, and sports. ARMATUS fills doses and makes it the official plan.",
      "plan.a3t": "Quick templates",
      "plan.a3b":
        "Full body ×3, upper/lower ×4, 5K base, and more — a shortcut without losing personalization.",
      "plan.a4t": "Deload & vacation",
      "plan.a4b":
        "Drop load or pause the week. The protocol stays alive; the comeback isn’t improvised.",
      "plan.a5t": "Overload map",
      "plan.a5b": "See where progression is headed — not only what’s on today.",
      "plan.a6t": "Build your own routine",
      "plan.a6b":
        "In Coach: build a custom session when you step off today’s plan — without losing the log in Journey.",
      "plan.cap7": "Overload",

      "coach.tag": "03 · Daily coach",
      "coach.title": "The plan is the compass. Today decides the session.",
      "coach.lead":
        "Energy, sleep, time, place, focus. You arrive as you are — and the coach builds the exact work. Lighter, swap, skip, or full send. Not a PDF that ignores you.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Living session",

      "track.tag": "04 · Tracker · Technique",
      "track.title": "Execute clean. Make every set count.",
      "track.lead":
        "Sets, weight, rest timer, alternatives with a coach pick. Setup, execution, mistakes, breathing. Real bocetos. Autosave — the gym doesn’t wait on signal.",
      "track.cap1": "Live",
      "track.cap2": "Guide",
      "track.cap3": "Session",
      "track.bocetoLabel": "Technique bocetos",

      "journey.tag": "05 · Journey",
      "journey.title": "Progress closes the loop.",
      "journey.lead":
        "PRs, volume, curves, gym and sport sessions. Not a feed: evidence that regenerates next week smarter.",
      "journey.cap": "Evidence",

      "life.tag": "Real life",
      "life.title": "Armed beyond the rack too.",
      "life.lead":
        "Run, bike, swim, travel, injuries, deload. Coach and plan read all of it — not only what happened under the bar.",
      "life.c1t": "Limits & injuries",
      "life.c1b": "History, day notes, exercises to avoid. Coach judgment — not chatbot ego.",
      "life.c2t": "Deload & vacation",
      "life.c2b": "Drop load or pause the week without breaking the protocol.",
      "life.c3t": "Hybrid sport",
      "life.c3b": "Log run, bike, swim, and more. It lands in Journey and feeds the next plan.",
      "life.c4t": "Real schedules",
      "life.c4b": "Day windows, two-a-days, minimal equipment while traveling.",
      "life.c5t": "Plan chat",
      "life.c5b": "Ask for changes with reason. Review. Accept or keep.",
      "life.c6t": "Offline in the gym",
      "life.c6b": "Autosave, pause/resume, offline queue. Signal doesn’t run the session.",
      "life.cap": "Sport log",

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
    const narrow = window.matchMedia("(max-width: 899px)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        // Reveal earlier on phones so sections don't sit invisible mid-scroll
        rootMargin: narrow ? "0px 0px -2% 0px" : "0px 0px -8% 0px",
        threshold: narrow ? 0.06 : 0.12,
      }
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
