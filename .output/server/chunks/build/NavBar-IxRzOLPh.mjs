import { _ as __nuxt_component_0 } from './nuxt-link-BiTLaVhX.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { n as useCookie } from './server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navList = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" }
    ];
    ref();
    useCookie("theme", {
      maxAge: 1e3 * 60 * 24 * 30
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex-center nav" }, _attrs))}><!--[-->`);
      ssrRenderList(navList, (it) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: it.path,
          class: "mx-6 px-2 py-1 cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(it.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(it.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><i class="i-grommet-icons-actions cursor-pointer" id="btn"></i></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/cpns/NavBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=NavBar-IxRzOLPh.mjs.map
