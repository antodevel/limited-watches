'use client';
import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';

export function ExperienceMotion() {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add({ desktop: '(min-width: 768px)', mobile: '(max-width: 767px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
      const { desktop, motion } = context.conditions!;
      if (!motion) return;
      const intro = gsap.timeline({ defaults: { ease: 'power2.out' } });
      intro.from('.hero-light', { opacity: 0, duration: 1.5 })
        .from('.hero-product .watch-image', { opacity: 0, y: 22, duration: 1.6 }, .1)
        .from('.hero-copy > *', { opacity: 0, y: 12, stagger: .07, duration: .95 }, .45)
        .from('.hero-orbit > *', { opacity: 0, duration: 1.2 }, .6);
      const path = document.querySelector<SVGPathElement>('.path-draw');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.timeline', start: 'top 65%', end: 'bottom 65%', scrub: .3 } });
      }
      gsap.utils.toArray<HTMLElement>('.timeline-entry').forEach((entry) => {
        gsap.from(entry.querySelector('.timeline-copy'), { opacity: 0, y: 35, clipPath: 'inset(0 0 100% 0)', ease: 'power1.out', scrollTrigger: { trigger: entry, start: 'top 76%', end: 'top 32%', scrub: .6 } });
        gsap.from(entry.querySelector('.timeline-node'), { opacity: 0, scale: .7, scrollTrigger: { trigger: entry, start: 'top 76%', end: 'top 58%', scrub: true } });
      });
      gsap.utils.toArray<HTMLElement>('.section-heading h2, .models-heading h2, .limited-section h2, .final-section h2').forEach((heading) => {
        gsap.from(heading, { y: 30, opacity: 0, clipPath: 'inset(0 0 100% 0)', ease: 'power1.out', scrollTrigger: { trigger: heading, start: 'top 90%', end: 'top 52%', scrub: .55 } });
      });
      gsap.utils.toArray<HTMLElement>('.model-reveal').forEach((reveal, index) => {
        gsap.from(reveal, { clipPath: 'inset(100% 0 0 0)', opacity: .1, y: desktop ? 70 : 24, ease: 'power1.inOut', scrollTrigger: { trigger: '.model-pair', start: index ? 'top 70%' : 'top 88%', end: index ? 'top 5%' : 'top 30%', scrub: .7 } });
      });
      gsap.from('.macro-portal', { clipPath: desktop ? 'inset(48% 0 48% 0)' : 'inset(24% 0 24% 0)', ease: 'power1.inOut', scrollTrigger: { trigger: '.macro-section', start: 'top 75%', end: 'top top', scrub: .6 } });
      gsap.from('.macro-copy', { opacity: 0, scrollTrigger: { trigger: '.macro-section', start: 'top 35%', end: 'top top', scrub: .5 } });
      if (desktop) {
        gsap.set('.hero-scene', { height: '230svh' });
        const hero = gsap.timeline({ scrollTrigger: { trigger: '.hero-scene', start: 'top top', end: 'bottom bottom', pin: '.hero-stage', pinSpacing: false, scrub: .7, invalidateOnRefresh: true } });
        hero.to(['.hero-copy', '.hero-bottom', '.hero-object-label'], { opacity: 0, y: -35, duration: .24 }, 0)
          .to('.hero-product', { scale: 3.6, rotation: 0, xPercent: -65, yPercent: 26, ease: 'power1.inOut', duration: 1 }, 0)
          .to('.hero-orbit', { scale: 1.8, opacity: 0, duration: .8 }, 0)
          .to('.hero-veil', { opacity: 1, duration: .25 }, .75);
        gsap.set('.details-section', { height: '350svh' });
        gsap.set('.detail-panels', { position: 'absolute', inset: 0 });
        gsap.set('.detail-panel', { position: 'absolute', inset: 0, autoAlpha: 0 });
        gsap.set('.detail-panel:first-child', { autoAlpha: 1 });
        const detailTimeline = gsap.timeline({ scrollTrigger: { trigger: '.details-section', start: 'top top', end: 'bottom bottom', pin: '.details-stage', pinSpacing: false, scrub: .5, invalidateOnRefresh: true } });
        const panels = gsap.utils.toArray<HTMLElement>('.detail-panel');
        panels.forEach((panel, i) => {
          const connector = panel.querySelector<SVGPathElement>('path');
          if (connector) { const len = connector.getTotalLength(); gsap.set(connector, { strokeDasharray: len, strokeDashoffset: len }); detailTimeline.to(connector, { strokeDashoffset: 0, duration: .32 }, i); }
          if (i) detailTimeline.to(panel, { autoAlpha: 1, duration: .18 }, i);
          detailTimeline.to(panel, { autoAlpha: 0, duration: .15 }, i + .85);
        });
        // Leave the final annotation visible at the end of its scene.
        detailTimeline.to(panels[3], { autoAlpha: 1, duration: .01 });
        detailTimeline.to('.details-watch', { rotation: -7, yPercent: -3, duration: 4, ease: 'none' }, 0);
        gsap.set('.macro-section', { height: '175svh' });
        gsap.timeline({ scrollTrigger: { trigger: '.macro-section', start: 'top top', end: 'bottom bottom', pin: '.macro-stage', pinSpacing: false, scrub: .7 } }).to('.macro-image', { scale: 1.25, xPercent: -8, yPercent: 3, ease: 'none' }, 0).to('.macro-copy', { y: -45, ease: 'none' }, 0);
        gsap.set('.cosmos-transition', { height: '170svh' });
        gsap.timeline({ scrollTrigger: { trigger: '.cosmos-transition', start: 'top top', end: 'bottom bottom', pin: '.cosmos-transition-stage', pinSpacing: false, scrub: .7 } }).to('.cosmos-word', { scale: 6, opacity: 0, ease: 'power2.in' }, 0).fromTo('.transition-aperture', { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)', ease: 'power2.in' }, 0).to('.cosmos-transition-stage>.eyebrow', { opacity: 0, duration: .2 }, 0);
      }
      gsap.from('.limited-object .watch-image', { opacity: 0, y: 35, clipPath: 'inset(0 0 100% 0)', ease: 'power1.out', scrollTrigger: { trigger: '.limited-object', start: 'top 90%', end: 'top 25%', scrub: .7 } });
      const onLoad = () => ScrollTrigger.refresh();
      document.fonts.ready.then(() => { if (context.isReverted !== true) ScrollTrigger.refresh(); });
      window.addEventListener('load', onLoad);
      return () => { window.removeEventListener('load', onLoad); };
    });
    // Pinning changes document offsets during hydration. Resolve a direct
    // chapter URL once after layout so #collection/#details remain reliable.
    const initialHash = window.location.hash;
    let disposed = false;
    document.fonts.ready.then(() => {
      if (disposed) return;
      ScrollTrigger.refresh();
      if (initialHash) document.getElementById(decodeURIComponent(initialHash.slice(1)))?.scrollIntoView({ behavior: 'instant', block: 'start' });
    });
    return () => { disposed = true; mm.revert(); };
  }, []);
  return null;
}
