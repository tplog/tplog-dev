<template>
  <a :href="data.href || '/about'" class="board-card bg-white p-2.5 pb-6 polaroid-shadow">
    <div class="w-full aspect-square bg-gray-100 overflow-hidden mb-1.5 relative">
      <div class="w-full h-full absolute inset-0 bg-gradient-to-br from-[#d4a883] via-[#e8d5c4] to-[#c7bca5] opacity-50"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#ffecd1] blur-xl opacity-50"></div>
    </div>
    <p class="text-center text-[10px] text-gray-400 italic">{{ data.label }}</p>
  </a>
</template>

<script setup>
defineProps({ data: Object })
</script>
