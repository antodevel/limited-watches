import { gsap } from './gsap';
import { createDetailConnectorUpdater } from './detailConnectors';

// Create pins in document order, before any reveals measure downstream offsets.
// Direct scrubbing prevents scenes from trailing behind a fast wheel/touch jump.
export function createPinnedScenes() {
  // The next chapter shares the outgoing scene's final viewport. Otherwise a
  // fully faded pinned stage still occupies a screen of empty document flow.
  // Keep these layout changes inside the matchMedia context for automatic
  // restoration on mobile and with reduced motion.
  gsap.set(['.history-section', '.limited-section'], {
    marginTop: '-100svh', zIndex: 2,
    // These chapter anchors land at the completed handoff, not 96px before it.
    scrollMarginTop: '-96px',
  });
  gsap.set('.hero-scene', { height: '210svh' });
  gsap.timeline({ scrollTrigger: { trigger: '.hero-scene', start: 'top top', end: 'bottom bottom', pin: '.hero-stage', pinSpacing: false, scrub: true, invalidateOnRefresh: true } })
    .to(['.hero-copy', '.hero-bottom', '.hero-object-label'], { opacity: 0, y: -25, duration: .22 }, 0)
    .to('.hero-product', { scale: 4, rotation: 0, xPercent: -65, yPercent: 20, ease: 'power1.inOut', duration: 1 }, 0)
    .to('.hero-orbit', { scale: 1.8, opacity: 0, duration: .8 }, 0)
    .to('.hero-veil', { opacity: 1, duration: .35 }, .65)
    .fromTo('.history-section', { autoAlpha: 0 }, { autoAlpha: 1, duration: .26, ease: 'none' }, .64);

  const details = document.querySelector('.details-section');
  details?.classList.add('is-pinned');
  gsap.set('.details-section', { height: '310svh' });
  gsap.set('.detail-panels', { position: 'absolute', inset: 0 });
  const panels = gsap.utils.toArray<HTMLElement>('.detail-panel');
  gsap.set(panels, { position: 'absolute', inset: 0, autoAlpha: 0 });
  gsap.set(panels[0], { autoAlpha: 1 });
  const updateConnectors = createDetailConnectorUpdater(panels);
  const detailTimeline = gsap.timeline({ onUpdate: updateConnectors, scrollTrigger: { trigger: '.details-section', start: 'top top', end: 'bottom bottom', pin: '.details-stage', pinSpacing: false, scrub: true, invalidateOnRefresh: true, onRefresh: updateConnectors } });
  panels.forEach((panel, index) => {
    const connector = panel.querySelector('path');
    if (connector) {
      // pathLength=1 keeps the reveal stable while the endpoint moves.
      gsap.set(connector, { strokeDasharray: 1, strokeDashoffset: 1 });
      detailTimeline.to(connector, { strokeDashoffset: 0, duration: .3, ease: 'none' }, index);
    }
    // Crossfade at the same time: no empty interval, including the final panel.
    if (index) {
      detailTimeline.to(panels[index - 1], { autoAlpha: 0, duration: .12, ease: 'none' }, index)
        .to(panel, { autoAlpha: 1, duration: .12, ease: 'none' }, index);
    }
  });
  detailTimeline.to('.details-watch', { rotation: -7, yPercent: -3, duration: panels.length, ease: 'none' }, 0);
  updateConnectors();

  gsap.set('.macro-section', { height: '165svh' });
  gsap.timeline({ scrollTrigger: { trigger: '.macro-section', start: 'top top', end: 'bottom bottom', pin: '.macro-stage', pinSpacing: false, scrub: true, invalidateOnRefresh: true } })
    .to('.macro-image', { scale: 1.2, xPercent: -5, yPercent: 3, ease: 'none' }, 0);

  gsap.set('.cosmos-transition', { height: '160svh' });
  gsap.set('.cosmos-transition-stage', { height: '100svh' });
  gsap.timeline({ scrollTrigger: { trigger: '.cosmos-transition', start: 'top top', end: 'bottom bottom', pin: '.cosmos-transition-stage', pinSpacing: false, scrub: true, invalidateOnRefresh: true } })
    .to('.cosmos-word', { scale: 6, opacity: 0, duration: 1, ease: 'power2.in' }, 0)
    .fromTo('.transition-aperture', { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)', duration: 1, ease: 'power2.in' }, 0)
    .to('.cosmos-transition-stage>.eyebrow', { opacity: 0, duration: .4 }, 0)
    .fromTo('.limited-section', { autoAlpha: 0 }, { autoAlpha: 1, duration: .4, ease: 'none' }, .5);

  return () => details?.classList.remove('is-pinned');
}
