# GEMINI.md

## 1) Propósito del asistente
Breve: "Ayúdame a mejorar la app React (v19) añadiendo animaciones modernas con Three.js / Anime.js y mejorar micro-animaciones y presentaciones de texto con GSAP. Prioridad: experiencia visual, rendimiento y accesibilidad."

## 2) Resumen del proyecto
- Stack: React (v19), CRA (Create React App), TypeScript? (indicar), CSS Modules / Tailwind (indicar).
- Carpetas clave: `src/components/`, `src/pages/`, `src/styles/`, `public/assets/`, `src/three/`.
- Entradas de ejemplo: `src/App.jsx`, `src/index.jsx`, `src/components/Hero.jsx`.

## 3) Objetivos claros (priority)
1. Añadir hero 3D (Three.js con @react-three/fiber) que funcione en desktop y degrade a una imagen en móviles.  
2. Micro-animaciones en componentes (GSAP) — reveal, stagger, hover.  
3. Animaciones UI/SMOOTH con Anime.js para timelines sencillos (por ejemplo un reproductor o loader).  
4. Mantener < 200KB adicional en assets críticos; lazy-load de escenas 3D.  
5. Tests visuales manuales (acceptance criteria) y small perf checks (Lighthouse).

## 4) Comandos de instalación (dev)
# instalar librerías recomendadas
```bash
npm install three @react-three/fiber @react-three/drei
npm install animejs
npm install gsap @gsap/react
```

##  5) Reglas / restricciones

- Evitar bloqueo del main thread: mover heavy computations fuera del render, usar requestAnimationFrame y lazy loading.

- Fallback simple en móviles: imagen estática + CSS animation.

- Accesibilidad: respetar prefers-reduced-motion y controles para pausar animaciones.

- Mantener buen SEO / SSR cuando aplique (no renderizar escenas 3D que afecten indexación).

##  6) Tareas (epics -> historias -> tareas)
- Epic A: Hero 3D

- Historia: Crear Hero3D reutilizable con @react-three/fiber.
## 6) Tareas (epics -> historias -> tareas)

### Epic A: Hero 3D
**Historia:** Crear `Hero3D` reutilizable con `@react-three/fiber`.

1. **Tarea A1:** Crear escena simple (geometría + luz + orbit control limitado).  
2. **Tarea A2:** Implementar lazy-load de la escena (`React.lazy` + `Suspense`).  
3. **Tarea A3:** Añadir fallback con imagen estática y soporte para `prefers-reduced-motion`.  

---

### Epic B: Micro-animaciones con GSAP
**Historia:** Texto y cards con reveal al hacer scroll.

1. **Tarea B1:** Añadir `ScrollTrigger` a secciones de la landing.  
2. **Tarea B2:** Crear hook `useGsapReveal(ref)` para animaciones reutilizables.  

---

### Epic C: Animaciones puntuales con Anime.js
**Historia:** Loader y small timeline en un componente (por ejemplo, botones).

1. **Tarea C1:** Implementar loader con `anime.timeline()`.  

## 7) Criterios de aceptación (pruebas)

- Hero3D aparece sin errores en desktop; en mobile muestra fallback.

- Las animaciones pueden pausarse si prefers-reduced-motion está activado.

- Lighthouse: no degradar rendimiento crítico (mejorar lazy-load).

- Componentes con GSAP son desinstanciados correctamente al desmontar (no memory leaks).