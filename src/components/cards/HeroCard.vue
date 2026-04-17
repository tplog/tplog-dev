<template>
  <a :href="data.href || '#'" class="board-card bg-[#FFFBE0] p-7 paper-shadow">
    <div class="card-label">tplog</div>
    <p class="text-[15px] leading-8 text-gray-800">{{ data.text }}</p>
    <div class="mt-5 pt-3 border-t border-black/8 text-[10px] tracking-[0.1em] text-gray-500">
      ここで書く。 <span class="card-arrow">→</span>
    </div>
  </a>
</template>

<script setup>
defineProps({ data: Object })
</script>
