<template>
  <div class="board-card bg-white p-2.5 pb-6 polaroid-shadow">
    <div class="w-full aspect-square bg-gray-100 overflow-hidden mb-1.5 relative">
      <img :src="data.image" alt="" class="w-full h-full object-cover" />
    </div>
    <p class="text-center text-[10px] text-gray-400 italic">{{ data.label }}</p>
  </div>
</template>

<script setup>
defineProps({ data: Object })
</script>
