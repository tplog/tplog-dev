<template>
  <div class="board-card bg-[#FDFCFA] p-5 paper-shadow">
    <div class="card-label">{{ data.label }}</div>
    <div class="space-y-3 text-[13px] text-gray-700">
      <a
        v-for="link in data.links"
        :key="link.text"
        :href="link.href"
        class="flex items-center justify-between hover:text-[#4a9e8e] transition-colors"
      >
        <span>{{ link.text }}</span>
        <span class="card-arrow">↗</span>
      </a>
    </div>
    <div class="mt-4 pt-3 border-t border-black/8 text-[9px] tracking-[0.1em] text-gray-400">
      いつでもお便りください
    </div>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>
