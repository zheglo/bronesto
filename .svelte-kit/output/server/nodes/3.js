

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Destiny/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CPx5X3zI.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Baw2YTpQ.js"];
export const stylesheets = [];
export const fonts = [];
