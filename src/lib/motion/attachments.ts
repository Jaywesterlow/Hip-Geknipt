import type { Attachment } from 'svelte/attachments';
import { prefersReducedMotion } from 'svelte/motion';
import { gsap, ScrollTrigger } from './scroll';

/**
 * Motion as Svelte attachments: `{@attach slideUp()}` on the element that moves.
 * Each one reads `prefersReducedMotion.current`, so it re-runs when the visitor flips the
 * setting, and each returns a cleanup that leaves the element in its resting state.
 *
 * The three kinds of movement on the page (`docs/bewegingsconcept.md`), each a library entry
 * with the library's own timings:
 *
 * 1. 11b, text slides up softly: every line in its own mask, from 110 % below to its place,
 *    1.2 s on expo.out, lines 0.08 s apart. Resets only once the block is below the screen again.
 * 2. 12, a photo wipes open from its bottom edge in 1 s on power2.out (after 0.2 s) while the
 *    photo itself zooms back from 130 % to 100 % over 4 s.
 * 3. 07, the signature: the collage. Each image comes in diagonally and at 80 % (a CSS transition
 *    the class `-active` starts) once it is 92 % up the screen, and scrubs with its own speed
 *    between +6 % and −6 % of the screen height.
 *
 * Until an attachment has set its start state, `html.js [data-reveal]` is `visibility: hidden`
 * (app.css), so nothing flashes before hydration; each attachment sets the start and then
 * `visibility: visible` in the same frame. No CSS transform ever sits on these elements.
 */

/** On the first screen at load: play now instead of waiting for a scroll. */
function onScreen(node: Element): boolean {
	const box = node.getBoundingClientRect();
	return box.top < window.innerHeight && box.bottom > 0;
}

/** 11b. The node holds `.line > span` children (`Lines.svelte`, `Mask.svelte`). */
export function slideUp(): Attachment<HTMLElement> {
	return (node) => {
		if (prefersReducedMotion.current) return;

		const masks = Array.from(node.querySelectorAll<HTMLElement>('.line'));
		const spans = node.querySelectorAll<HTMLElement>('.line > span');
		gsap.set(spans, { yPercent: 110 });
		gsap.set(node, { visibility: 'visible' });

		const tween = gsap.to(spans, {
			yPercent: 0,
			duration: 1.2,
			ease: 'expo.out',
			stagger: 0.08,
			paused: true,
			// once up, the masks open: a button's focus ring may reach out of its line
			onComplete: () => masks.forEach((mask) => (mask.style.overflow = 'visible')),
			onStart: () => masks.forEach((mask) => (mask.style.overflow = ''))
		});
		const triggers = onScreen(node)
			? (tween.play(), [])
			: [
					ScrollTrigger.create({ trigger: node, start: 'top 85%', onEnter: () => tween.play() }),
					// reset only once the block is below the screen again, never on the way out
					ScrollTrigger.create({
						trigger: node,
						start: 'top bottom',
						onLeaveBack: () => tween.pause(0)
					})
				];

		return () => {
			triggers.forEach((trigger) => trigger.kill());
			tween.kill();
			masks.forEach((mask) => (mask.style.overflow = ''));
			gsap.set(spans, { clearProps: 'transform' });
		};
	};
}

/** 12. The node is the photo's frame; the `img` inside it zooms. */
export function revealImage(): Attachment<HTMLElement> {
	return (node) => {
		if (prefersReducedMotion.current) return;

		const media = node.querySelector<HTMLElement>('img');
		gsap.set(node, { clipPath: 'inset(100% 0% 0% 0%)' });
		if (media) gsap.set(media, { scale: 1.3 });
		gsap.set(node, { visibility: 'visible' });

		const timeline = gsap
			.timeline({ paused: true })
			.to(node, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1, ease: 'power2.out', delay: 0.2 }, 0);
		if (media) timeline.to(media, { scale: 1, duration: 4, ease: 'power2.out' }, 0);

		const triggers = onScreen(node)
			? (timeline.play(), [])
			: [
					ScrollTrigger.create({
						trigger: node,
						start: 'top 60%',
						onEnter: () => timeline.play()
					}),
					ScrollTrigger.create({
						trigger: node,
						start: 'top bottom',
						onLeaveBack: () => timeline.pause(0)
					})
				];

		return () => {
			triggers.forEach((trigger) => trigger.kill());
			timeline.kill();
			gsap.set(node, { clearProps: 'clipPath' });
			if (media) gsap.set(media, { clearProps: 'transform' });
		};
	};
}

/** 07. The node is the stage; every `.item` in it carries `data-speed` and holds one `.image`. */
export function collage(): Attachment<HTMLElement> {
	return (stage) => {
		const items = Array.from(stage.querySelectorAll<HTMLElement>('.item'));
		if (prefersReducedMotion.current) {
			stage.classList.add('reduced');
			return () => stage.classList.remove('reduced');
		}

		const triggers: ScrollTrigger[] = [];
		const tweens: gsap.core.Tween[] = [];
		for (const item of items) {
			const speed = Number(item.dataset.speed) || 1;
			const image = item.querySelector<HTMLElement>('.image');
			// the entry: the class starts the CSS transition, once
			triggers.push(
				ScrollTrigger.create({
					trigger: item,
					start: 'top 92%',
					once: true,
					onEnter: () => image?.classList.add('-active')
				})
			);
			// the parallax: faster than the page, by speed
			tweens.push(
				gsap.fromTo(
					item,
					{ y: () => speed * 0.06 * window.innerHeight },
					{
						y: () => -speed * 0.06 * window.innerHeight,
						ease: 'none',
						scrollTrigger: {
							trigger: item,
							start: 'top bottom',
							end: 'bottom top',
							scrub: true,
							invalidateOnRefresh: true
						}
					}
				)
			);
		}
		gsap.set(stage, { visibility: 'visible' });

		return () => {
			triggers.forEach((trigger) => trigger.kill());
			tweens.forEach((tween) => {
				tween.scrollTrigger?.kill();
				tween.kill();
			});
			gsap.set(items, { clearProps: 'transform' });
			items.forEach((item) => item.querySelector('.image')?.classList.remove('-active'));
		};
	};
}
