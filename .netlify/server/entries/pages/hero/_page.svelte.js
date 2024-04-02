import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const css$1 = {
  code: ".uno-0l0ny9{visibility:hidden;position:fixed;inset:0;fill:transparent;stroke-width:200px}.uno-1xaxd2{position:relative;height:100dvh;width:100dvw;display:flex;flex-shrink:0;align-items:center;justify-content:center}",
  map: null
};
const Onimation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let circle;
  console.log(circle);
  $$result.css.add(css$1);
  return `<section class="uno-1xaxd2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000" preserveAspectRatio="xMidYMid meet"><circle class="uno-0l0ny9 stroke-[#800000 ] transform-origin: center center rotate(-90deg) stroke-dasharray: 1 stroke-dashoffset: 1 stroke-linecap: round stroke-linejoin: round" cx="500" cy="500" r="400" pathLength="1"${add_attribute("this", circle, 0)}></circle></svg> </section>`;
});
const css = {
  code: ".uno-06zqm6{position:absolute;z-index:-10;height:100%;width:100%;object-fit:cover}.uno-6wdgm1{position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden}.uno-narlgh{position:relative;height:100dvh;width:100dvw;display:flex;flex-shrink:0;align-items:center;justify-content:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="uno-narlgh"><div class="uno-6wdgm1" data-svelte-h="svelte-kvbtde"><video class="uno-06zqm6" muted autoplay loop playsinline disablepictureinpicture><source src="assets/punkvideo/probrone.webm" type="video/webm"><source src="assets/punkvideo/probrone.mp4" type="video/mp4"></video></div> ${validate_component(Onimation, "Onimation").$$render($$result, {}, {}, {})} </section>`;
});
export {
  Page as default
};
