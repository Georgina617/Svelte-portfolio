import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CgSNn_JN.js","_app/immutable/chunks/2eaG5y1i.js","_app/immutable/chunks/Ba74vxut.js","_app/immutable/chunks/dgpNUUjH.js","_app/immutable/chunks/ClRC6CJK.js","_app/immutable/chunks/B9lVhfsp.js","_app/immutable/chunks/Dn74RUrs.js","_app/immutable/chunks/KAbvVxVO.js","_app/immutable/chunks/-lgoc38W.js","_app/immutable/chunks/OA8UcISh.js","_app/immutable/chunks/DowlfT_H.js"];
export const stylesheets = ["_app/immutable/assets/0.DGOFwrPM.css"];
export const fonts = [];
