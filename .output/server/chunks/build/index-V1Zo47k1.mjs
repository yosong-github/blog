import { _ as __nuxt_component_0 } from './nuxt-link-BiTLaVhX.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import Dayjs from 'dayjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'fs';
import 'path';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'aos';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const activeIndex = ref("");
    const posts = ref({});
    useHead({
      title: "yosong - blog",
      meta: [
        { name: "description", content: "yosong blog list" },
        { name: "keywords", content: "yosong blog" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-10" }, _attrs))}><!--[-->`);
      ssrRenderList(posts.value, (_, key, index) => {
        _push(`<span><span class="${ssrRenderClass([{
          "color-type": key !== activeIndex.value
        }, "cursor-pointer font-size-26px font-weight-bold"])}"><span>${ssrInterpolate(String(key).trim())}</span><span class="mr-6 font-size-16px">(${ssrInterpolate(_.length)})</span></span></span>`);
      });
      _push(`<!--]--><div class="mt-10"><!--[-->`);
      ssrRenderList(posts.value[activeIndex.value], (it) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/" + it._file.slice(0, -3),
          class: "flex justify-between items-start my-2 py-2 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="flex-1"${_scopeId}>${ssrInterpolate(it.title)}</span><span class="w-100px font-size-12px ml-5 color-#aaa"${_scopeId}>${ssrInterpolate(unref(Dayjs)(it.date).format("YYYY-MM-DD"))}</span>`);
            } else {
              return [
                createVNode("span", { class: "flex-1" }, toDisplayString(it.title), 1),
                createVNode("span", { class: "w-100px font-size-12px ml-5 color-#aaa" }, toDisplayString(unref(Dayjs)(it.date).format("YYYY-MM-DD")), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[blogType]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-V1Zo47k1.mjs.map
