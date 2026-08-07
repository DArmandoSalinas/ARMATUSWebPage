(() => {
  "use strict";

  const COPY = {
    es: {
      "nav.cta": "App Store",
      "hero.line": "Fuerza con criterio de coach. No un chatbot genérico.",
      "hero.cta": "Descargar en App Store",
      "hero.secondary": "Ver el producto",
      "pos.title": "Coaching profesional. No fitness AI genérico.",
      "pos.lead":
        "Dos capas reales: plan semanal con sobrecarga progresiva, y sesión del día generada según energía, sueño, tiempo y foco.",
      "pos.badLabel": "Lo genérico",
      "pos.bad":
        "Prompts vagos. “Squat / Row / Press”. Sin plan, sin overload, sin técnica.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Incline DB press. Deficit RDL. Bulgarian. Chest-supported row. Idioma fijo EN o ES.",
      "coach.tag": "Capa 2 · Coach",
      "coach.title": "La sesión nace de cómo te sientes hoy.",
      "coach.lead":
        "Energía, sueño, tiempo disponible y foco. El coach arma el trabajo del día — no un PDF estático.",
      "coach.cap1": "Check-in del día",
      "coach.cap2": "Sesión generada",
      "plan.tag": "Capa 1 · Plan semanal",
      "plan.title": "Split, recuperación y overload con mapa.",
      "plan.lead":
        "Regenera la semana, programa deload o vacaciones, y deja un brief personalizado. El roadmap muestra hacia dónde va la carga.",
      "plan.cap1": "Semana",
      "plan.cap2": "Rationale",
      "plan.cap3": "Overload",
      "track.tag": "Tracker · Técnica",
      "track.title": "Registra con precisión. Técnica con bocetos reales.",
      "track.lead":
        "Series, reps, peso, rest timer y alternativas con “coach pick” fijo. Autosave y recordatorios nativos.",
      "track.cap": "Sesión en vivo",
      "journey.tag": "Journey",
      "journey.title": "PRs, curvas y sesiones recientes.",
      "journey.lead":
        "El progreso no es un feed. Es el registro de carga que el coach usa para decidir la siguiente semana.",
      "journey.cap": "Progreso",
      "cal.tag": "Calibración",
      "cal.title": "El plan empieza con un perfil serio.",
      "cal.lead":
        "Perfil, objetivo, preferencias de entrenamiento, horario y lifestyle/recovery. Sin eso, no hay coaching.",
      "cal.cap1": "Perfil",
      "cal.cap2": "Objetivo",
      "cal.cap3": "Entrenamiento",
      "cal.cap4": "Horario",
      "cal.cap5": "Lifestyle",
      "cta.lead":
        "Abre la App Store. Entrena con un protocolo, no con improvisación.",
      "cta.store": "Descargar en App Store",
      "cta.contact": "Contacto",
      "footer.privacy": "Privacidad",
      "footer.terms": "Términos",
      "footer.note": "Guía general de entrenamiento. No es consejo médico.",
      title: "ARMATUS — Entrenamiento de fuerza con criterio de coach",
    },
    en: {
      "nav.cta": "App Store",
      "hero.line": "Strength coaching with judgment. Not a generic chatbot.",
      "hero.cta": "Download on the App Store",
      "hero.secondary": "See the product",
      "pos.title": "Professional coaching. Not generic fitness AI.",
      "pos.lead":
        "Two real layers: a weekly plan with progressive overload, and a daily session built from energy, sleep, time, and focus.",
      "pos.badLabel": "The generic path",
      "pos.bad":
        "Vague prompts. “Squat / Row / Press”. No plan, no overload, no technique.",
      "pos.goodLabel": "ARMATUS",
      "pos.good":
        "Incline DB press. Deficit RDL. Bulgarian. Chest-supported row. Language locked EN or ES.",
      "coach.tag": "Layer 2 · Coach",
      "coach.title": "Today’s session starts from how you feel.",
      "coach.lead":
        "Energy, sleep, available time, and focus. The coach builds the day’s work — not a static PDF.",
      "coach.cap1": "Daily check-in",
      "coach.cap2": "Generated session",
      "plan.tag": "Layer 1 · Weekly plan",
      "plan.title": "Split, recovery, and an overload roadmap.",
      "plan.lead":
        "Regenerate the week, schedule a deload or vacation, leave a custom brief. The roadmap shows where load is headed.",
      "plan.cap1": "Week",
      "plan.cap2": "Rationale",
      "plan.cap3": "Overload",
      "track.tag": "Tracker · Technique",
      "track.title": "Log with precision. Technique with real bocetos.",
      "track.lead":
        "Sets, reps, weight, rest timer, and alternatives with a sticky coach pick. Autosave and native reminders.",
      "track.cap": "Live session",
      "journey.tag": "Journey",
      "journey.title": "PRs, curves, and recent sessions.",
      "journey.lead":
        "Progress isn’t a feed. It’s the load history the coach uses to decide next week.",
      "journey.cap": "Progress",
      "cal.tag": "Calibration",
      "cal.title": "The plan starts with a serious profile.",
      "cal.lead":
        "Profile, goal, training preferences, schedule, and lifestyle/recovery. Without that, there is no coaching.",
      "cal.cap1": "Profile",
      "cal.cap2": "Goal",
      "cal.cap3": "Training",
      "cal.cap4": "Schedule",
      "cal.cap5": "Lifestyle",
      "cta.lead":
        "Open the App Store. Train with a protocol — not improvisation.",
      "cta.store": "Download on the App Store",
      "cta.contact": "Contact",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.note": "General training guidance. Not medical advice.",
      title: "ARMATUS — Strength coaching with a coach’s judgment",
    },
  };

  const root = document.documentElement;
  const buttons = Array.from(document.querySelectorAll(".lang-btn"));

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

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
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
