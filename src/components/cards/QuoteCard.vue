<template>
  <div class="board-card p-5 paper-shadow" :class="bgClass">
    <div class="quote-line text-[13px] leading-8 text-gray-800">{{ data.text }}</div>
    <div v-if="data.author" class="mt-3 text-[9px] tracking-[0.08em] text-gray-400 text-right">— {{ data.author }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ data: Object, index: Number })

const colors = [
  'bg-[#FDFAF3]',
  'bg-[#FEFCF5]',
  'bg-[#FFFBE0]',
  'bg-[#FAF8EE]',
  'bg-[#FDFBF2]',
  'bg-[#F9F7EE]'
]

const bgClass = computed(() => colors[(props.index || 0) % colors.length])
</script>
