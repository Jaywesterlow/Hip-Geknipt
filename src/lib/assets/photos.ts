/**
 * Every photo goes through @sveltejs/enhanced-img: AVIF + WebP, srcset, intrinsic width/height.
 * Static imports (not a glob) so a missing file fails the build instead of the page.
 *
 * All of them are the salon's own, from salonhipgeknipt.nl (8 October 2026); the source of each
 * is in `docs/prospect.md`.
 */
import salon from './photos/salon.jpg?enhanced';
import teamKaylee from './photos/team-kaylee.jpg?enhanced';
import teamJacqueline from './photos/team-jacqueline.jpg?enhanced';
import teamCheyenne from './photos/team-cheyenne.jpg?enhanced';
import teamLinda from './photos/team-linda.jpg?enhanced';
import extensions from './photos/extensions.jpg?enhanced';
import work1 from './photos/work-1.jpg?enhanced';
import work2 from './photos/work-2.jpg?enhanced';
import work3 from './photos/work-3.jpg?enhanced';
import work4 from './photos/work-4.jpg?enhanced';
import work5 from './photos/work-5.jpg?enhanced';
import work6 from './photos/work-6.jpg?enhanced';
import work7 from './photos/work-7.jpg?enhanced';

export const photos = {
	salon,
	teamKaylee,
	teamJacqueline,
	teamCheyenne,
	teamLinda,
	extensions,
	work1,
	work2,
	work3,
	work4,
	work5,
	work6,
	work7
};

export type PhotoKey = keyof typeof photos;
