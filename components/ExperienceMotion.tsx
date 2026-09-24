'use client';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';
import { createPinnedScenes } from '@/lib/animations/scenes';

export function ExperienceMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({
      cinematic: '(min-width: 1024px) and (min-height: 700px) and (hover: hover) and (pointer: fine)',
      motion: '(prefers-reduced-motion: no-preference)',
    }, (context) => {
      const { cinematic, motion } = context.conditions!;
      if (!motion) return;

      const resetPins = cinematic ? createPinnedScenes() : undefined;
      // Never hide mobile text. Desktop reveals finish near the bottom edge,
      // directly following scroll position instead of playing a delayed queue.
      if (cinematic) {
        gsap.utils.toArray<HTMLElement>('.timeline-copy, .section-heading h2, .models-heading h2, .limited-section h2, .final-section h2').forEach((element) => {
          gsap.from(element, {
            opacity: 0, y: 22, ease: 'none',
            scrollTrigger: { trigger: element, start: 'top 108%', end: 'top 86%', scrub: true, invalidateOnRefresh: true },
          });
        });
      }

      const path = document.querySelector<SVGPathElement>('.path-draw');
      if (path) {
        const length = path.getTotalLength();
        gsap.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, {
          strokeDashoffset: 0, ease: 'none',
          scrollTrigger: { trigger: '.timeline', start: 'top 80%', end: 'bottom 65%', scrub: true, invalidateOnRefresh: true },
        });
      }
      gsap.from('.timeline-mobile-line', {
        scaleY: 0, transformOrigin: 'top', ease: 'none',
        scrollTrigger: { trigger: '.timeline', start: 'top 80%', end: 'bottom 65%', scrub: true },
      });
      gsap.utils.toArray<HTMLElement>('.timeline-node').forEach((node) => {
        gsap.from(node, { scale: .65, opacity: .3, ease: 'none', scrollTrigger: { trigger: node, start: 'top 96%', end: 'top 80%', scrub: true } });
      });

      // Each exhibit owns its reveal, so a narrow/stacked layout cannot leave
      // the second watch waiting on the first exhibit's scroll position.
      gsap.utils.toArray<HTMLElement>('.model-reveal').forEach((element) => {
        gsap.from(element, {
          clipPath: cinematic ? 'inset(75% 0 0 0)' : 'inset(12% 0 0 0)',
          opacity: cinematic ? .15 : .65, y: cinematic ? 35 : 12, ease: 'none',
          scrollTrigger: { trigger: element, start: 'top 112%', end: 'top 83%', scrub: true, invalidateOnRefresh: true },
        });
      });
      gsap.from('.macro-portal', {
        clipPath: cinematic ? 'inset(45% 0 45% 0)' : 'inset(8% 0 8% 0)', ease: 'none',
        scrollTrigger: { trigger: '.macro-section', start: 'top 100%', end: 'top 40%', scrub: true, invalidateOnRefresh: true },
      });
      gsap.from('.limited-object .watch-image', {
        opacity: .15, y: 25, ease: 'none',
        scrollTrigger: { trigger: '.limited-object', start: 'top 110%', end: 'top 78%', scrub: true, invalidateOnRefresh: true },
      });

      // Intro is decorative only. Scrolling immediately completes it, even
      // before its first frame, and restored/deep-linked pages skip it entirely.
      const intro = gsap.timeline({ defaults: { ease: 'power2.out' } });
      if (window.scrollY < 10 && !window.location.hash) {
        intro.from('.hero-light', { opacity: 0, duration: 1.1 })
          .from('.hero-product .watch-image', { opacity: .1, y: 16, duration: 1 }, 0)
          .from('.hero-orbit', { opacity: 0, duration: .9 }, .15);
      }
      const finishIntro = () => { intro.progress(1); };
      window.addEventListener('scroll', finishIntro, { once: true, passive: true });
      return () => {
        window.removeEventListener('scroll', finishIntro);
        resetPins?.();
      };
    });

    let disposed = false;
    const refresh = () => { if (!disposed) ScrollTrigger.refresh(); };
    window.addEventListener('load', refresh);
    const initialHash = window.location.hash;
    document.fonts.ready.then(() => {
      if (disposed) return;
      refresh();
      if (initialHash) {
        // Ignore malformed URL fragments without breaking animation setup.
        try { document.getElementById(decodeURIComponent(initialHash.slice(1)))?.scrollIntoView({ behavior: 'instant', block: 'start' }); } catch {}
      }
    });
    return () => {
      disposed = true;
      window.removeEventListener('load', refresh);
      mm.revert();
    };
  }, []);
  return null;
}
