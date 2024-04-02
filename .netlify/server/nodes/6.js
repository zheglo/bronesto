

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/hero/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BHIO2nOA.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Baw2YTpQ.js"];
export const stylesheets = ["_app/immutable/assets/6.CLLWZ9u0.css"];
export const fonts = [];
