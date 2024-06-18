<!--
 * @Author: yosong
 * @Date: 2024-06-18 14:44:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-06-18 15:00:00
 * @FilePath: \blog\components\content\Mermaid.vue
-->
<template>
  <pre
    ref="el"
    :style="{ display: rendered ? 'block' : 'none' }"
    class="not-prose">
    <slot />
  </pre>
</template>

<script setup>
const el = ref(null)
const rendered = ref(false)

async function render() {
  if (!el.value) {
    return
  }
  if (el.value.querySelector('svg')) {
    // Already rendered
    return
  }

  // Iterate children to remove comments
  for (const child of el.value.childNodes) {
    if (child.nodeType === Node.COMMENT_NODE) {
      el.value.removeChild(child)
    }
  }
  const { default: mermaid } = await import('mermaid')
  el.value.classList.add('mermaid')
  rendered.value = true
  await mermaid.run({ nodes: [el.value] })
}

onMounted(() => {
  render()
})
</script>

<style>
.mermaid rect {
  stroke: #6195ff !important;
  fill: #fff !important;
}

.mermaid .current-doc.node .label {
  color: #fff !important;
}

.mermaid line {
  stroke: #6195ff !important;
}

[data-theme='dark'] .mermaid .flowchart-link {
  stroke: #fff !important;
}

[data-theme='dark'] .mermaid .messageText {
  fill: #fff !important;
}

[data-theme='dark'] .mermaid marker {
  fill: #fff !important;
  color: #fff !important;
}

[data-theme='dark'] .mermaid line {
  stroke: #fff !important;
}
</style>
