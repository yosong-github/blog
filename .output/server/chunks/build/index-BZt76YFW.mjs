import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './yosong-WZFSDw7r.mjs';
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

const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYdJREFUWEftVktOwzAUnGfOQDEr0pPQnoRmiSLOQHsGFFi2nKThJGSHCWdIDM/NQ05waVETRUix1EUtx56M5xMqUm0x4KARwMjAyMDIwMjAyMB/ZiAHIXdFahEB7ueP3ALPBFzVk7PAGpzShvEkMRvevEj1GsBCTqcK8/M7k/lo3p50pCosCLj35zsHYIHVRWKW+z4xike9hQWz4UbnACaJIdn8PdVLIlxbixcG5f73zYAAYMrPKrzWYHZa+amTzhnIJ4mZNhhovXH7ajq/AgDf4uTD9omvNw18uSGnCvFgLpA75wwIuaEtxD6uoBFGALJSYXV5a5wQnTgt1mLFvgEImLxUmAsIP7iOBsABQ8CNZ6VQErr4rRQ2ngUFRDA5DwMgZCUhZvRCnwSL7Fykmv0elQpTn2oXvV4Qtdcfm4QN+to+/njQM6uwFfH5ORCK4yLV3BncHX+K4kbAyMN12vHhfhMGbcjPnBrFrn6ZflexhMgvlcDbsup3jfjL2sMaCPHY4dzgAD4BnL8m8POQ6vAAAAAASUVORK5CYII=";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAXRJREFUWEftll9OhDAQxr+C9xCPYGSfXU4i3EKJiUti0FuIJ1l9XoxHkIO4jGkbSsv/RYg+dBIeWOj2129mvoEhzgl/GMwCWAWsAlYBq4BV4H8rQHibPCgZPEBcemTihuCBYdv1X8PTMPXZZIC7fF9vQgnSzc5Ye/vpwTk+AAj135cH4Ko9+UEvuAEKjH0PSAmrKN0Ez5eFuI0PO4Cda0/lyRwK8LiRqYs/QhDdgNG7UOT+sEXJ9tMVaB6jdC9qgPyrI+eAnjbza4uDN2tkVAETYQqA8Y5Qiee9N8ZScDoAkCH1I7VQFN932AeyBkAB0Gt3F7RB1gDgh5cQ5VmmaqaSRBavSstaANV2bRDpB7yARawNUIM4FKn21LxgBQBKhPTOkfe71nYsQnolfSXOXypHXBhA26SqfmLXyohUHdQesjAACpRu0Co8vZkbbrg0QN0BncPot22oj+ee8aodlluvPs6NKTivC4Y8deaz01Iwc5OhZT/iwPnB+QGAOwAAAABJRU5ErkJggg==";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAl1JREFUWEdjZICCU+9fJTAwMMT/Z2BwgInRgH7AyMDw4D/D/4PmguINIPMZQcSp96/209hiDL8wMjAcMBMUc2QE+fw/A8N8GviWoJGMDAyJIAfQ3fcwl4FCgfHk+1f3GRgYFAg6lzYKHoAc8J82ZhNn6uB1QOOpuQw///6Ge+PnhucMfz9C+DzCvAzJWTEMitKycPmKymaGH++/g/nM/KwM7AGScDl2ZlaGerNkrEGCMwRmXdnAcO/TM7imX6feM4AwDGi4aDPkJCWCuVPmzWe4secqXI7NTJABhGFAiU+KIU0ngDQHgFRXHZ/B8O//P7jGb4seMfz79AfOL+7OB7N7SyfCxZj4WBi44uQQfEYmhjbLDJwJAm8aOPLsIsOWB0fhmv8+/c7wff1zlFAAcZB9zxkoycAszQlX46NgzWAjpU+eA0C6us8tZXj74yMiLex9zfD7+mesBrJq8jKwO4vC5ThZ2HHGPUwRwVzw4PNzhllXNsKjAhQFPzY8Q4kKmGE8OUooDsvQDWRQ4EUkRmyuJugAkCZCCRKkhpSEh+wQohxAKEGSmvDIcgC+UCDX9yCHEB0CuEIBJE5KtkNPByQ5AD1bghLk/8+/Scp2FDkAW7ZENpCYbEexA9CzJbKBxGQ7ih2ALVuCxPCV9ziLQVITIbJByPUEE4HyniYOQM6W5Pqe5GyI7hNQKIAAvtoOn+8pdgAoW4IAvtqOpg4gZDgx8iQVRMQYSKqagW6WMwxox+Q/A8OCAe2a/WNgdAR3Tk+8fzUf2GsF9Y7pBuCdU5iNSN1zUDeNVl01jO45AIZdTa5eNXFmAAAAAElFTkSuQmCC";
const _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArtJREFUWEfFl89qE1EUxs8siraLhFKbZmFApOBCsYKg4MoitA8htPoKFl27VvQVqgUfogVRN6IFwYJdCEUDcZGklpAsakvE0d+lX7ydzCSjzDRnkczf833nnO+cOzewI9tsNe+Y2XJodlPXcvivBmbV0MI31ydnHuI/4Gez1XyVM3BfLIHZ62uTpfmAyEOz1RyiHeoyMLsLgROPXszIQvC+1fxqZueG0s3ngSoEwnx8p/OamsDWftvWO7vW6B7a0tRZm5soHkNYbzdt60fH3V8oTNtisZSKQSoC9e6h3f7ywcpjp5xTzq9MFO1+edadP67v2Mf9tjvmOscvzl/tPT+ISSoCz7/XbG2vZi8v3HC+iJZzkeH/QXnWRS2yS1MVWz5TGZqFVAQe1XccqAjglZLcq207AIEL7dbnt44M14fZfxGIlgSQJ5VLvZRDINMMED1ZwGnj56GLHhIYuuCY//LYabs8XnDlyYQAjnEGAZkAEdvMkShRvkSo+zxPGSAi8caVI7EEilqOiJoIAcIhKveNLlF31LsHrk2VqahG/PdiCQhcrQagOoGXBU77YbRjo3vgygQJpd/PYBKJWAIC83tZqpe6/QzJubrlaeXisUE1qCsGZoBIAEzKwErtk8sAHYBRBswX4Ept25UtSZSJGlAWAF8olGyj81eI1Dfa4wKS4ABEwH5J/kmEGjZre98MUant5AQA3wDzR7XEu1iY7ls3hoowylS1pRy0XBwh3kG02KCUR32nmoTRtYBsqP60JoSikzDXUUwUcV2g6HJbC9SWWg01ggFGlIgzl9VQM4Aaq/4ITp2gAeTfz/R7QClH6UQ5N17o++IhKxudXVeFzL+I4vo3q2upuiArsKRBNMrPchvpxiQ0ezbSrdkvC+bd5vRdq7n6Z9fK7vjErLc5FaK3PWebltdWrW97/hvWzhC9wJs4VQAAAABJRU5ErkJggg==";
const _imports_5 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALJJREFUWEdj1J1k9Z9hAAHjqANGQ2Awh8ADBgaGA2gZJIG4DPP/AAMDI0g/FPxXYGBgdMCmF2cuYPzP0Hgp/1gDTJPOZBsHxv//9hPjgP+MTI5Xco/AHa830arhPyND/agDRkNgNARGQ2A0BEZDYDQEqBACf7FWqegGM//9n3ih8AS8PUCV6piYdgAuNaMOICsEGBgYFvxnZFpISdDD9DL+/xfPwMCAtT052jMaDYEBDwEAwa1QMIymzswAAAAASUVORK5CYII=";
const _imports_6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAY1JREFUWEftlrFOAkEQhufkFGKDNtoJNJa+glD5GOqTiE+CPomE1g4aYiV2WqmJCApi/kv2srfM7u2sEGJy01xxezvf/vPP7EXvPVrQBiMqAAoF/p0CW5U6bR9eUFSupb2zmI5o9tql+VtX3E+iLkDiynHHmuRn8kifgxbh6RsiAJX86+k6ASlVm0t58G46avvmJzEAkkJqqMHFWgHKtTaVqqeZvKYKKwdAUlfsHF1lXgMABoVZEZOHS6cnnCXYPblj6+wCAkB8cJ4C5BnTCpDneBuECYB1rrJYASC9Ka+Ptcf9VtIhqgT45vv5JikFF1YAbMI5HZLOXm7ZzebjIcX7Z0vfrQwAp4v3mpkpqJOgI/STq3dBAFwJAABjSiPIAziNnkxJH+oL2z1h9QCk1MdtKAASQzlbOOeAfvPhxkNwg8dVkrx7QXQXcL4wbz6c2NZyojbkFrtmgxpAGwGACh/3jfRfYW0KmMY0VQIIkkv+jEQeUAkBwg2dPMP92QPSAeSzPkgBn4191xQAhQK/DdMQkPV3cU0AAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "yosong",
      meta: [
        { name: "description", content: "yosong" },
        { name: "keywords", content: "yosong" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:w-400px text-center m-auto md:mt-20 mb-10" }, _attrs))}><img data-aos="fade-down"${ssrRenderAttr("src", _imports_0)} alt="yosong" class="object-cover rounded-full w-102px h-102px m-auto"><h1 data-aos="fade-down" class="font-size-26px text-center my-8">yosong</h1><p data-aos="fade-down" class="my-6 opacity-50"> I&#39;m yosong, a front-end developer </p><div class="flex-center"><img class="mx-1 cursor-pointer" data-aos="fade-right"${ssrRenderAttr("src", _imports_1)}><img class="mx-1 cursor-pointer" data-aos="fade-right"${ssrRenderAttr("src", _imports_2)}><img class="mx-1 cursor-pointer" data-aos="fade-up"${ssrRenderAttr("src", _imports_3)}><img class="mx-1 cursor-pointer" data-aos="fade-up"${ssrRenderAttr("src", _imports_4)}><img class="mx-1 cursor-pointer" data-aos="fade-left"${ssrRenderAttr("src", _imports_5)}><img class="mx-1 cursor-pointer" data-aos="fade-left"${ssrRenderAttr("src", _imports_6)}></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BZt76YFW.mjs.map
