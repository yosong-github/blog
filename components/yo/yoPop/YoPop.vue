<template>
  <div class="yo-pop">
    <div>{{ props.msg }}</div>
    <button @click="props.close()">关闭</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg: string
  close: any
}>()
</script>
