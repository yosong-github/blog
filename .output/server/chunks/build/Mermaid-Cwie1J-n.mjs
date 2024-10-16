import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "Mermaid",
  __ssrInlineRender: true,
  setup(__props) {
    const el = ref(null);
    const rendered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<pre${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        style: {
          display: unref(rendered) ? "flex" : "none",
          justifyContent: "center",
          "align-items": "center"
        },
        class: "not-prose"
      }, _attrs))}>    `);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`
  </pre>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/content/Mermaid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Mermaid-Cwie1J-n.mjs.map
