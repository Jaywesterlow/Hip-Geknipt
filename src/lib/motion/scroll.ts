import { browser } from '$app/environment';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

/* The invisible base: GSAP + ScrollTrigger + Lenis on one clock, once per site. */

if (browser) {
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger };

let current: Lenis | null = null;

/**
 * Lenis + ScrollTrigger on one clock. Returns the cleanup, so it can be the body of an $effect.
 */
export function startSmoothScroll(): () => void {
	const lenis = new Lenis({ autoRaf: false, anchors: true });
	current = lenis;
	const raf = (time: number) => lenis.raf(time * 1000);

	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add(raf);
	gsap.ticker.lagSmoothing(0);

	return () => {
		gsap.ticker.remove(raf);
		lenis.destroy();
		if (current === lenis) current = null;
	};
}

/** While the dialog is open the page behind it stays where it is. */
export function holdScroll(hold: boolean): void {
	if (!current) return;
	if (hold) current.stop();
	else current.start();
}

/**
 * Trigger positions depend on fonts and images; measure again once both have settled.
 * Returns the cleanup for the listener.
 */
export function refreshWhenSettled(): () => void {
	if (!browser) return () => {};
	const refresh = () => ScrollTrigger.refresh();
	document.fonts?.ready.then(refresh);
	window.addEventListener('load', refresh, { once: true });
	return () => window.removeEventListener('load', refresh);
}
