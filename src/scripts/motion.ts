// Site-wide motion: smooth scroll, scroll reveals, stat count-up, nav state,
// and pausing off-screen videos. Everything here is progressive enhancement:
// the page is complete without it, and prefers-reduced-motion turns it off.
import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
let lenis: Lenis | null = null;

function startLenis() {
  if (reduce.matches || lenis) return;
  lenis = new Lenis({
    // Higher lerp = page catches up to the wheel faster. 0.11 felt laggy;
    // 0.22 keeps the glide but responds almost immediately.
    lerp: 0.22,
    wheelMultiplier: 1.1,
    anchors: { offset: -84 },
  });
  const raf = (t: number) => {
    lenis?.raf(t);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

// ── Reveal on scroll ──
const REVEAL = [
  '.scroll-in',
  '[data-reveal]',
  '.case-body > h2',
  '.case-body > figure',
  '.case-body > blockquote',
  '.glance-card',
  '.principle',
  '.about-aside',
  '.tool-row',
].join(',');

let revealObserver: IntersectionObserver | null = null;

function initReveal() {
  revealObserver?.disconnect();
  const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
  if (reduce.matches) {
    els.forEach(el => el.classList.add('is-in'));
    return;
  }
  revealObserver = new IntersectionObserver(
    entries => {
      // Stagger items that enter together, in document order.
      const entering = entries.filter(e => e.isIntersecting).map(e => e.target as HTMLElement);
      entering.forEach((el, i) => {
        el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 70}ms`);
        el.classList.add('is-in');
        revealObserver?.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  els.forEach(el => {
    el.classList.add('will-reveal');
    // Anything already on screen at load shows immediately (no flash of hidden content).
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.92 && r.bottom > 0) {
      el.classList.add('is-in');
    } else {
      revealObserver!.observe(el);
    }
  });
}

// ── Count-up stats ──
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count-to]');
  if (!els.length || reduce.matches) return;
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const to = Number(el.dataset.countTo);
        const from = Number(el.dataset.countFrom ?? 0);
        const prefix = el.dataset.prefix ?? '';
        const suffix = el.dataset.suffix ?? '';
        const dur = 1400;
        const t0 = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          el.textContent = `${prefix}${Math.round(from + (to - from) * eased)}${suffix}`;
          if (p < 1) requestAnimationFrame(step);
        };
        el.textContent = `${prefix}${from}${suffix}`;
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.6 }
  );
  els.forEach(el => io.observe(el));
}

// ── Videos: only play while visible; never autoplay with reduced motion ──
function initVideos() {
  const vids = document.querySelectorAll<HTMLVideoElement>('video[autoplay]');
  if (reduce.matches) {
    vids.forEach(v => {
      v.removeAttribute('autoplay');
      v.pause();
      v.controls = true;
    });
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target as HTMLVideoElement;
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
  }, { threshold: 0.15 });
  vids.forEach(v => io.observe(v));
}

// ── Nav gets a hairline once you scroll ──
function onScroll() {
  document.documentElement.classList.toggle('scrolled', window.scrollY > 8);
}

function init() {
  startLenis();
  lenis?.resize();
  initReveal();
  initCounters();
  initVideos();
  onScroll();
}

window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('astro:page-load', init);
// Page swaps reset scroll natively; keep Lenis in sync so it doesn't fight.
document.addEventListener('astro:after-swap', () => {
  lenis?.scrollTo(window.scrollY, { immediate: true, force: true });
});
