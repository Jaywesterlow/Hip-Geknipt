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
	// anchors are handled by `goToHash`: Lenis's own anchor handler lands 449 px past every
	// target after the first one (measured 12 October 2026)
	const lenis = new Lenis({ autoRaf: false, anchors: false });
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

/** The bar's height from its token (`--nav-h`, in rem or px), the offset for every in-page jump. */
function navOffset(): number {
	const raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim();
	const n = parseFloat(raw) || 0;
	return raw.endsWith('rem')
		? n * parseFloat(getComputedStyle(document.documentElement).fontSize)
		: n;
}

/**
 * Click handler for every in-page link: scrolls to the target under the bar, smoothly through
 * Lenis when it runs, natively when it does not, and keeps the hash in the address bar. The
 * position is computed here as a number, so it is right whatever Lenis believes its position is.
 */
export function goToHash(event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
	const hash = event.currentTarget.getAttribute('href') ?? '';
	if (!hash.startsWith('#')) return;
	const target = document.getElementById(hash.slice(1));
	if (!target) return;
	event.preventDefault();
	const y = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navOffset());
	if (current) current.scrollTo(y, { force: true });
	else window.scrollTo({ top: y });
	history.replaceState(null, '', hash);
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
