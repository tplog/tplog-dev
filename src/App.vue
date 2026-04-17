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
        <span class="text-[10px] tracking-[0.2em] text-gray-400">tplog</span>
      </header>

      <section class="relative z-0 px-5 py-8 md:px-8">
        <div class="board-canvas">
          <component
            v-for="(card, i) in shuffled"
            :key="card._key"
            :is="cardMap[card.type]"
            :data="card"
            :index="i"
            class="board-item"
            :style="positions[i]"
          />
        </div>
      </section>

      <footer class="h-auto md:h-10 border-t border-black/5 bg-[#F9F8F4] flex flex-col md:flex-row items-start md:items-center justify-between px-5 py-3 md:px-6 md:py-0 gap-2 z-20">
        <span class="text-[9px] tracking-[0.15em] text-gray-400">tplog.dev</span>
        <div class="flex-1 flex justify-start md:justify-center w-full md:w-auto">
          <div class="h-0.5 w-16 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/2 bg-[#4a9e8e]"></div>
          </div>
        </div>
        <span class="text-[9px] tracking-[0.12em] text-gray-300">card · card · card</span>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeroCard from './components/cards/HeroCard.vue'
import AboutCard from './components/cards/AboutCard.vue'
import QuoteCard from './components/cards/QuoteCard.vue'
import ElsewhereCard from './components/cards/ElsewhereCard.vue'

/* ===== card type map ===== */
const cardMap = {
  hero: HeroCard,
  about: AboutCard,
  quote: QuoteCard,
  elsewhere: ElsewhereCard
}

/* ===== card data ===== */
const cards = [
  {
    type: 'hero',
    text: '言葉を拾い、光を灯す。',
    href: '/about'
  },
  {
    type: 'about',
    label: 'だれか',
    href: '/about'
  },
  {
    type: 'elsewhere',
    label: 'そこかしこ',
    links: [
      { text: 'GitHub', href: 'https://github.com/tplog' },
      { text: 'X',      href: 'https://x.com/tplog' },
      { text: 'メール',  href: 'mailto:hello@tplog.dev' }
    ]
  },
  {
    type: 'quote',
    text: '恐れず、悩み、知恵を発達させる。より幸福な人間は、より乏しい人間である。',
    author: 'ラルフ・ウォルド・エマーソン'
  },
  {
    type: 'quote',
    text: '冬は春の中にある。夜は朝の中にある。',
    author: 'アーサー・ラッセル'
  },
  {
    type: 'quote',
    text: '詩は、言葉が目標になって息をする瞬間。',
    author: '加藤楸邨'
  },
  {
    type: 'quote',
    text: '発酵は待つことを教えてくれる。焦らず、ただそこにいることの意味。',
    author: 'tplog'
  },
  {
    type: 'quote',
    text: 'ないかもしれない。しかし、あるかもしれない。それ十分だ。',
    author: '野上弥生子'
  }
]

/* ===== layout positions ===== */
const positions = [
  { left: '50px',  top: '30px',  width: '300px', transform: 'rotate(-1.5deg)' },
  { left: '400px', top: '60px',  width: '190px', transform: 'rotate(4deg)' },
  { left: '640px', top: '140px', width: '280px', transform: 'rotate(-2deg)' },
  { left: '970px', top: '70px',  width: '240px', transform: 'rotate(3deg)' },
  { left: '120px', top: '360px', width: '250px', transform: 'rotate(1deg)' },
  { left: '440px', top: '330px', width: '220px', transform: 'rotate(2.5deg)' },
  { left: '720px', top: '350px', width: '260px', transform: 'rotate(-1.5deg)' },
  { left: '1030px',top: '280px', width: '230px', transform: 'rotate(2deg)' }
]

/* ===== shuffle ===== */
function shuffle(arr) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const shuffled = ref([])

onMounted(() => {
  shuffled.value = shuffle(cards.map((c, i) => ({ ...c, _key: i })))
})
</script>
