(() => {
  "use strict";

  const COPY = {
    es: {
      "nav.cta": "App Store",
      "hero.lineA": "La fuerza no se improvisa.",
      "hero.lineB": "Se arma.",
      "hero.cta": "Descargar en App Store",
      "hero.secondary": "Ver la arquitectura",

      "name.title": "Armado. Equipado. Fortificado.",
      "name.latin": "armātus — del latín: armado, equipado, fortificado",
      "name.body":
        "ARMATUS es arquitectura de entrenamiento. Plan con dirección. Sesión con dosis. Técnica con estándar. Memoria que decide la siguiente carga.",
      "why.title": "Para atletas que no aceptan consejos genéricos.",
      "why.body":
        "Fuerza, hipertrofia y resistencia estructurada en el mismo sistema. ARMATUS gestiona la carga total — gym y deporte — para progresar sin quemar el sistema nervioso.",

      "pos.tag": "Principio",
      "pos.title": "Arquitectura. No listas.",
      "pos.lead":
        "Un protocolo cerrado: te calibra, arma la semana, dosifica el día, registra con precisión y regenera con evidencia.",
      "pos.badLabel": "Ruido genérico",
      "pos.bad":
        "Rutinas sueltas. Cero mapa de overload. El running no cuenta. La fatiga se ignora hasta que duele.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Perfil profundo. Semana con lógica. Readiness antes de cargar. Tracker con estándar técnico. Journey que alimenta el siguiente ciclo. ES / EN.",

      "loop.tag": "Protocolo",
      "loop.title": "Un ciclo cerrado. Cada vuelta, más preciso.",
      "loop.lead":
        "Calibrar → planear → adaptar → ejecutar → evolucionar. La salida de hoy es la entrada de la siguiente semana.",
      "loop.s1": "Calibrar",
      "loop.s2": "Planear",
      "loop.s3": "Adaptar",
      "loop.s4": "Ejecutar",
      "loop.s5": "Evolucionar",

      "cal.tag": "01 · Calibración",
      "cal.title": "Sin datos, no hay protocolo.",
      "cal.lead":
        "Objetivo, equipo, horario, sueño, estrés, lesiones y deportes externos. ARMATUS no inventa tu semana. La calcula.",
      "cal.cap1": "Perfil",
      "cal.cap2": "Objetivo",
      "cal.cap3": "Entrenamiento",
      "cal.cap4": "Horario",
      "cal.cap5": "Carga de vida",

      "plan.tag": "02 · Plan semanal",
      "plan.title": "Overload con mapa. No ego.",
      "plan.lead":
        "Cada semana tiene rumbo, dosis y razón. Empuja la progresión. Protege del sobreentrenamiento. El roadmap es visible — no improvisado.",
      "plan.cap1": "Semana",
      "plan.cap2": "Rationale",
      "plan.cap3": "Modos",
      "plan.subTag": "Readiness",
      "plan.subTitle": "Primero el techo. Después la carga.",
      "plan.subLead":
        "Fatiga acumulada. Sueño. Notas como “rodilla sensible”. El plan se arma bajo capacidad real — no bajo ilusión.",
      "plan.cap4": "Techo",
      "plan.designTag": "Control",
      "plan.designTitle": "Tú defines. El sistema dosifica.",
      "plan.designLead":
        "Plantilla, brief o chat: “lower body el lunes”. Ves la propuesta con rationale. Aceptas — o mantienes la semana vigente.",
      "plan.cap5": "Diseño",
      "plan.cap6": "Chat",
      "plan.arsenalTag": "Capacidades",
      "plan.arsenalTitle": "Herramientas. Mismo criterio.",
      "plan.a1t": "Regenerar con memoria",
      "plan.a1b":
        "La semana nueva parte de logs y PRs. Ajusta volumen, foco y recuperación con evidencia.",
      "plan.a2t": "Diseñar la semana",
      "plan.a2b":
        "Defines días, rests y deportes. ARMATUS completa dosis y lo firma como plan oficial.",
      "plan.a3t": "Plantillas",
      "plan.a3b":
        "Full body ×3, upper/lower ×4, base 5K. Atajos sin perder personalización.",
      "plan.a4t": "Deload y vacaciones",
      "plan.a4b":
        "Bajas carga o pausas. El protocolo sigue. El regreso no se inventa.",
      "plan.a5t": "Mapa de overload",
      "plan.a5b": "Ves la trayectoria de progresión — no solo la sesión de hoy.",
      "plan.a6t": "Sesión custom",
      "plan.a6b":
        "Sales del plan del día en Coach. El registro sigue alimentando Journey.",
      "plan.cap7": "Overload",

      "coach.tag": "03 · Coach del día",
      "coach.title": "El plan es la brújula. Hoy es la dosis.",
      "coach.lead":
        "Energía, sueño, tiempo, lugar, foco. El coach actúa con lógica fría: reduce, sustituye, omite o carga a full. Sin motivación vacía.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Sesión",

      "track.tag": "04 · Tracker · Técnica",
      "track.title": "Ejecución limpia. Datos limpios.",
      "track.lead":
        "Series, carga, rest, alternativas con pick del coach. Setup, errores, respiración — con bocetos. Autosave. La señal no manda en el gym.",
      "track.cap1": "En vivo",
      "track.cap2": "Guía",
      "track.cap3": "Sesión",
      "track.bocetoLabel": "Bocetos de técnica",

      "journey.tag": "05 · Journey",
      "journey.title": "La evidencia manda la siguiente carga.",
      "journey.lead":
        "PRs, volumen, curvas, gym y deporte. No es un feed. Es el dataset con el que ARMATUS regenera la semana.",
      "journey.cap": "Evidencia",

      "life.tag": "Híbrido",
      "life.title": "La carrera también carga el sistema.",
      "life.lead":
        "Running, bici, natación, triatlón. El deporte externo entra al algoritmo como fatiga real — no como nota al margen. La semana de fuerza se ajusta a la carga total.",
      "life.c3t": "Deportes en el protocolo",
      "life.c3b":
        "Cada sesión de resistencia cuenta para recuperación y dosis. El plan de fuerza responde.",
      "life.c1t": "Límites y lesiones",
      "life.c1b": "Historial, notas del día, ejercicios vetados. El ego no manda.",
      "life.c2t": "Deload y vacaciones",
      "life.c2b": "Reduces o pausas sin romper el hilo del protocolo.",
      "life.c4t": "Horarios reales",
      "life.c4b": "Ventanas por día, two-a-days, equipo mínimo en viaje.",
      "life.c5t": "Chat del plan",
      "life.c5b": "Pides el cambio. Revisas el rationale. Aceptas o mantienes.",
      "life.c6t": "Offline en el gym",
      "life.c6b": "Autosave, pausa, cola offline. El set no espera Wi‑Fi.",
      "life.cap": "Sport log",

      "cta.lead": "Arma el sistema. Deja de improvisar.",
      "cta.store": "Descargar en App Store",
      "cta.contact": "Contacto",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.note": "Guía general de entrenamiento. No es consejo médico.",
      title: "ARMATUS — Arquitectura de fuerza. Sin improvisar.",
    },
    en: {
      "nav.cta": "App Store",
      "hero.lineA": "Strength isn’t improvised.",
      "hero.lineB": "It’s armed.",
      "hero.cta": "Download on the App Store",
      "hero.secondary": "See the architecture",

      "name.title": "Armed. Equipped. Fortified.",
      "name.latin": "armātus — from Latin: armed, equipped, fortified",
      "name.body":
        "ARMATUS is training architecture. A week with direction. A session with dose. Technique with a standard. Memory that sets the next load.",
      "why.title": "For athletes who refuse generic advice.",
      "why.body":
        "Strength, hypertrophy, and structured endurance in one system. ARMATUS manages total load — gym and sport — so you progress without torching the nervous system.",

      "pos.tag": "Principle",
      "pos.title": "Architecture. Not lists.",
      "pos.lead":
        "A closed protocol: calibrate you, arm the week, dose the day, log with precision, regenerate from evidence.",
      "pos.badLabel": "Generic noise",
      "pos.bad":
        "Loose routines. No overload map. Runs don’t count. Fatigue is ignored until it hurts.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Deep profile. Week with logic. Readiness before load. Tracker with a technical standard. Journey that feeds the next cycle. EN / ES.",

      "loop.tag": "Protocol",
      "loop.title": "A closed loop. Each pass, sharper.",
      "loop.lead":
        "Calibrate → plan → adapt → execute → evolve. Today’s output is next week’s input.",
      "loop.s1": "Calibrate",
      "loop.s2": "Plan",
      "loop.s3": "Adapt",
      "loop.s4": "Execute",
      "loop.s5": "Evolve",

      "cal.tag": "01 · Calibration",
      "cal.title": "No data. No protocol.",
      "cal.lead":
        "Goal, equipment, schedule, sleep, stress, injuries, external sports. ARMATUS doesn’t invent your week. It calculates it.",
      "cal.cap1": "Profile",
      "cal.cap2": "Goal",
      "cal.cap3": "Training",
      "cal.cap4": "Schedule",
      "cal.cap5": "Life load",

      "plan.tag": "02 · Weekly plan",
      "plan.title": "Overload with a map. Not ego.",
      "plan.lead":
        "Every week has direction, dose, and rationale. It pushes progression. It guards against overtraining. The roadmap is visible — never guessed.",
      "plan.cap1": "Week",
      "plan.cap2": "Rationale",
      "plan.cap3": "Modes",
      "plan.subTag": "Readiness",
      "plan.subTitle": "Ceiling first. Load second.",
      "plan.subLead":
        "Accumulated fatigue. Sleep. Notes like “sore knee.” The plan builds under real capacity — not fantasy.",
      "plan.cap4": "Ceiling",
      "plan.designTag": "Control",
      "plan.designTitle": "You define. The system doses.",
      "plan.designLead":
        "Template, brief, or chat: “lower body on Monday.” See the proposal with rationale. Accept — or keep the live week.",
      "plan.cap5": "Design",
      "plan.cap6": "Chat",
      "plan.arsenalTag": "Capabilities",
      "plan.arsenalTitle": "Tools. Same judgment.",
      "plan.a1t": "Regenerate with memory",
      "plan.a1b":
        "The new week starts from logs and PRs. Volume, focus, recovery — adjusted by evidence.",
      "plan.a2t": "Design the week",
      "plan.a2b":
        "You set days, rests, sports. ARMATUS fills doses and signs it as the official plan.",
      "plan.a3t": "Templates",
      "plan.a3b":
        "Full body ×3, upper/lower ×4, 5K base. Shortcuts without losing personalization.",
      "plan.a4t": "Deload & vacation",
      "plan.a4b":
        "Drop load or pause. The protocol stays intact. The return isn’t invented.",
      "plan.a5t": "Overload map",
      "plan.a5b": "See the progression trajectory — not only today’s session.",
      "plan.a6t": "Custom session",
      "plan.a6b":
        "Leave today’s plan in Coach. The log still feeds Journey.",
      "plan.cap7": "Overload",

      "coach.tag": "03 · Daily coach",
      "coach.title": "The plan is the compass. Today is the dose.",
      "coach.lead":
        "Energy, sleep, time, place, focus. The coach acts with cold logic: reduce, swap, skip, or go full. No empty motivation.",
      "coach.cap1": "Check-in",
      "coach.cap2": "Session",

      "track.tag": "04 · Tracker · Technique",
      "track.title": "Clean execution. Clean data.",
      "track.lead":
        "Sets, load, rest, alternatives with a coach pick. Setup, faults, breathing — with bocetos. Autosave. Signal doesn’t run the gym.",
      "track.cap1": "Live",
      "track.cap2": "Guide",
      "track.cap3": "Session",
      "track.bocetoLabel": "Technique bocetos",

      "journey.tag": "05 · Journey",
      "journey.title": "Evidence sets the next load.",
      "journey.lead":
        "PRs, volume, curves, gym and sport. Not a feed. The dataset ARMATUS uses to regenerate the week.",
      "journey.cap": "Evidence",

      "life.tag": "Hybrid",
      "life.title": "The run loads the system too.",
      "life.lead":
        "Running, cycling, swimming, triathlon prep. External sport enters the algorithm as real fatigue — not a footnote. Strength week adjusts to total load.",
      "life.c3t": "Sports in the protocol",
      "life.c3b":
        "Every endurance session counts toward recovery and dose. The strength plan responds.",
      "life.c1t": "Limits & injuries",
      "life.c1b": "History, day notes, banned lifts. Ego doesn’t set the session.",
      "life.c2t": "Deload & vacation",
      "life.c2b": "Reduce or pause without breaking the protocol thread.",
      "life.c4t": "Real schedules",
      "life.c4b": "Day windows, two-a-days, minimal gear while traveling.",
      "life.c5t": "Plan chat",
      "life.c5b": "Request the change. Review the rationale. Accept or hold.",
      "life.c6t": "Offline in the gym",
      "life.c6b": "Autosave, pause, offline queue. The set doesn’t wait on Wi‑Fi.",
      "life.cap": "Sport log",

      "cta.lead": "Arm the system. Stop improvising.",
      "cta.store": "Download on the App Store",
      "cta.contact": "Contact",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.note": "General training guidance. Not medical advice.",
      title: "ARMATUS — Strength architecture. No improvisation.",
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

  function screenSrc(screenId, lang) {
    if (lang === "es") return `assets/screens/es/${screenId}.webp`;
    return `assets/screens/${screenId}.webp`;
  }

  function applyScreens(lang) {
    document.querySelectorAll("img[data-screen]").forEach((img) => {
      const id = img.getAttribute("data-screen");
      if (!id) return;
      const next = screenSrc(id, lang);
      if (img.getAttribute("src") === next) return;
      img.setAttribute("src", next);
    });
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
    applyScreens(lang);
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
