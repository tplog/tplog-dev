<template>
  <div class="w-screen min-h-screen flex">
    <!-- sidebar (desktop) -->
    <aside class="hidden lg:flex w-10 min-h-screen border-r border-black/5 flex-col items-center py-5 bg-[#F9F8F4] z-20 sticky top-0">
      <div class="h-full flex flex-col justify-between items-center text-[9px] text-gray-300">
        <div class="flex flex-col items-center gap-10">
          <span class="writing-vertical tracking-[0.25em]">TPLOG</span>
          <span class="writing-vertical tracking-[0.25em]">2026</span>
        </div>
        <div class="flex flex-col items-center gap-6">
          <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
          <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </aside>

    <!-- main -->
    <main class="flex-1 min-h-screen relative">
      <div class="absolute inset-0 grid-bg opacity-50 pointer-events-none"></div>

      <header class="h-14 border-b border-black/5 flex items-center px-5 md:px-8 bg-[#F9F8F4]/85 backdrop-blur-sm z-10 sticky top-0">
        <RouterLink to="/" class="text-[10px] tracking-[0.2em] text-gray-400 hover:text-[#4a9e8e] transition-colors">tplog</RouterLink>
        <span class="mx-3 text-gray-200">/</span>
        <span class="text-[10px] tracking-[0.2em] text-gray-600">about</span>
      </header>

      <section class="relative z-0 px-5 py-10 md:px-8 lg:px-12 max-w-3xl mx-auto">
        <!-- hero section -->
        <div class="mb-12">
          <div class="card-label mb-4">人生現役</div>
          <h1 class="text-2xl md:text-3xl font-light leading-relaxed text-gray-800">
            <!-- TODO: 填充你的标题 -->
            ここにタイトル
          </h1>
        </div>

        <!-- image -->
        <div class="mb-12">
          <div class="w-full max-w-sm aspect-square bg-gray-100 overflow-hidden polaroid-shadow">
            <!-- TODO: 替换成你的图片 -->
            <img src="/icon.jpg" alt="" class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- content blocks -->
        <div class="space-y-10">
          <!-- block 1 -->
          <div class="bg-white p-6 paper-shadow">
            <div class="card-label mb-3">自己紹介</div>
            <p class="text-[14px] leading-8 text-gray-700">
              <!-- TODO: 填充自我介绍 -->
              ここに自己紹介文を書きます。言葉を拾い、光を灯す。
            </p>
          </div>

          <!-- block 2 -->
          <div class="bg-[#FDFAF3] p-6 paper-shadow">
            <div class="card-label mb-3">哲学</div>
            <p class="text-[14px] leading-8 text-gray-700">
              <!-- TODO: 填充你的理念/哲学 -->
              ここにあなたの考えや哲学を書きます。
            </p>
          </div>

          <!-- block 3 -->
          <div class="bg-white p-6 paper-shadow">
            <div class="card-label mb-3">関心領域</div>
            <ul class="space-y-2 text-[14px] text-gray-700">
              <!-- TODO: 填充你的兴趣领域 -->
              <li class="flex items-center gap-2">
                <span class="w-1 h-1 bg-[#4a9e8e] rounded-full"></span>
                <span>項目一</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1 h-1 bg-[#4a9e8e] rounded-full"></span>
                <span>項目二</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="w-1 h-1 bg-[#4a9e8e] rounded-full"></span>
                <span>項目三</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- timeline / milestones -->
        <div class="mt-14">
          <div class="card-label mb-6">軌跡</div>
          <div class="space-y-6 pl-4 quote-line">
            <!-- TODO: 填充你的时间线 -->
            <div class="flex gap-4 items-baseline">
              <span class="text-[10px] tracking-[0.1em] text-gray-400 shrink-0">2026</span>
              <span class="text-[13px] text-gray-700">何か出来事</span>
            </div>
            <div class="flex gap-4 items-baseline">
              <span class="text-[10px] tracking-[0.1em] text-gray-400 shrink-0">2025</span>
              <span class="text-[13px] text-gray-700">何か出来事</span>
            </div>
            <div class="flex gap-4 items-baseline">
              <span class="text-[10px] tracking-[0.1em] text-gray-400 shrink-0">2024</span>
              <span class="text-[13px] text-gray-700">何か出来事</span>
            </div>
          </div>
        </div>

        <!-- contact / links -->
        <div class="mt-14 mb-10">
          <div class="card-label mb-4">Find Me</div>
          <div class="flex gap-6 text-[13px] text-gray-500">
            <a href="https://github.com/tplog" class="hover:text-[#4a9e8e] transition-colors">
              GitHub <span class="card-arrow">↗</span>
            </a>
            <a href="https://x.com/tenbai_x" class="hover:text-[#4a9e8e] transition-colors">
              X <span class="card-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer class="h-auto md:h-10 border-t border-black/5 bg-[#F9F8F4] flex flex-col md:flex-row items-start md:items-center justify-between px-5 py-3 md:px-6 md:py-0 gap-2 z-20">
        <RouterLink to="/" class="text-[9px] tracking-[0.15em] text-gray-400 hover:text-[#4a9e8e] transition-colors">tplog.dev</RouterLink>
        <div class="flex-1 flex justify-start md:justify-center w-full md:w-auto">
          <div class="h-0.5 w-16 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-[#4a9e8e]"></div>
          </div>
        </div>
        <span class="text-[9px] tracking-[0.12em] text-gray-300">about</span>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
