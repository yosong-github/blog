import _sfc_main$4 from './ContentDoc-Bhc96212.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, createVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_0 } from './yosong-WZFSDw7r.mjs';
import Dayjs from 'dayjs';
import _sfc_main$5 from './ContentRenderer-BsujnVZD.mjs';
import { useRoute } from 'vue-router';
import './server.mjs';
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
import 'aos';
import './ContentQuery-DEjHRJ3x.mjs';
import './query-DOwnc_F2.mjs';
import './preview-BL-1I7Py.mjs';
import './ContentRendererMarkdown-CgHYXEfw.mjs';
import './index-FGi92GG-.mjs';
import './node-04k6j4dz.mjs';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DocTitle",
  __ssrInlineRender: true,
  props: ["article"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-10" }, _attrs))}><h1 class="text-center font-size-26px font-weight-bold">${ssrInterpolate(props.article.title)}</h1><div class="mb-4 w-100%"><div class="flex-center w-100% justify-around"><span class="flex-center"><img${ssrRenderAttr("src", _imports_0)} class="object-cover rounded-full w-40px h-40px mr-2" alt="yosong"><span>yosong</span></span><span>${ssrInterpolate(unref(Dayjs)(props.article.date).format("YYYY-MM-DD HH:mm:ss"))}</span></div><br><div class="op-70 flex gap-2 m-t-0.5em"><!--[-->`);
      ssrRenderList(props.article.tags, (tag) => {
        _push(`<span> #${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocTitle.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DocRender",
  __ssrInlineRender: true,
  props: ["article"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DocTitle = _sfc_main$3;
      const _component_ContentRenderer = _sfc_main$5;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_DocTitle, {
        article: props.article
      }, null, _parent));
      _push(ssrRenderComponent(_component_ContentRenderer, {
        style: { "word-wrap": "break-word" },
        value: props.article
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocRender.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocToc",
  __ssrInlineRender: true,
  props: ["toc"],
  setup(__props) {
    const props = __props;
    const currentId = ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed top-32 lg:left-80% xl:left-75% w-260px hidden lg:block overflow-x-hidden max-h-60% border-s lg:max-w-19.5% xl:max-w-24.5%" }, _attrs))}><ul style="${ssrRenderStyle({ "padding": "0 1rem", "margin": "0", "font-size": "0.9rem" })}"><!--[-->`);
      ssrRenderList(props.toc.links, (h2, h2Index) => {
        _push(`<li class="list-none relative line-height-loose"><span class="${ssrRenderClass([{
          "text-Accent": h2.id === unref(currentId)
        }, "cursor-pointer"])}">${ssrInterpolate(h2.text)}</span>`);
        if (h2.children && h2.children.length > 0) {
          _push(`<ul class="m-0"><!--[-->`);
          ssrRenderList(h2.children, (h3, h3Index) => {
            _push(`<li class="list-none relative flex items-center line-height-loose"><span class="${ssrRenderClass([{
              "text-Accent": h3.id === unref(currentId)
            }, "cursor-pointer"])}">${ssrInterpolate(h3.text)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/doc/DocToc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...post]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const post = route.params.blogType + "/" + route.params.post[0];
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentDoc = _sfc_main$4;
      const _component_doc_render = _sfc_main$2;
      const _component_doc_toc = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-10 prose m-x-auto content" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ContentDoc, { path: post }, {
        default: withCtx(({ doc }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_doc_render, { article: doc }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_doc_toc, {
              toc: doc.body.toc
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_doc_render, { article: doc }, null, 8, ["article"]),
              createVNode(_component_doc_toc, {
                toc: doc.body.toc
              }, null, 8, ["toc"])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Document not found</h1>`);
          } else {
            return [
              createVNode("h1", null, "Document not found")
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1${_scopeId}>Document is empty</h1>`);
          } else {
            return [
              createVNode("h1", null, "Document is empty")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="content"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[blogType]/[...post].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...post_-BwjoWZlc.mjs.map
