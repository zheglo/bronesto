

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Heritage/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CPx5X3zI.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.Baw2YTpQ.js"];
export const stylesheets = [];
export const fonts = [];
