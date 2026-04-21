<template>
  <div class="brand"><b>tplog</b><span style="color:var(--ink-3)"> · a corkboard</span><span class="dot">.</span></div>
  <div class="frame-tag l-top">tplog · est. 2024</div>
  <div class="frame-tag l-bot">a notebook with no edges</div>
  <div class="frame-tag r-top">issue · 042</div>
  <div class="frame-tag r-bot">2026 / 04 · tokyo</div>

  <div ref="viewportRef" class="viewport" @mousedown="onViewportMouseDown" @wheel.prevent="onWheel">
    <div ref="canvasRef" class="canvas" :style="canvasStyle">
      <!-- connection threads -->
      <svg class="thread-layer" :width="CW" :height="CH" :viewBox="`0 0 ${CW} ${CH}`">
        <path v-for="(d, i) in threadPaths" :key="i" :d="d" />
      </svg>

      <!-- items -->
      <CorkboardItem
        v-for="item in data.items"
        :key="item.id"
        :item="item"
        :saved-position="savedPositions[item.id]"
        @mousedown="onItemMouseDown"
        @click="handleItemClick"
      />
    </div>
  </div>

  <div class="hint" :class="{ fade: hintFaded }">
    <span class="k">drag</span><span>pan</span>
    <span class="k">scroll</span><span>zoom</span>
    <span class="k">click</span><span>read</span>
    <span class="k">drag card</span><span>rearrange</span>
  </div>

  <div ref="minimapRef" class="minimap" @mousedown="onMinimapMouseDown">
    <div class="vbox" :style="vboxStyle"></div>
    <div
      v-for="dot in minimapDots"
      :key="dot.id"
      class="mdot"
      :style="dot.style"
    ></div>
  </div>

  <div class="canvas-controls">
    <button title="Zoom out" @click="zoomOut">−</button>
    <div class="zoom">{{ zoomPercent }}</div>
    <button title="Zoom in" @click="zoomIn">+</button>
    <button class="text" title="Reset view" @click="home">home</button>
    <button class="text" title="Reset positions" @click="reorganize">tidy</button>
  </div>

  <div class="tagbar">
    <button :class="{ on: !activeTag }" @click="setTag(null)">all</button>
    <button
      v-for="tag in tagList"
      :key="tag.name"
      :class="{ on: activeTag === tag.name }"
      @click="setTag(tag.name)"
    >
      {{ tag.name }}<span class="count">{{ tag.count }}</span>
    </button>
  </div>

  <div class="popover-overlay" :class="{ open: popoverOpen }" @click.self="closePopover">
    <article v-if="popoverArticle" class="popover">
      <button class="close" aria-label="close" @click="closePopover">×</button>
      <div class="eyebrow">
        <span>{{ popoverArticle.eyebrow }}</span><span>tplog</span>
      </div>
      <h1>{{ popoverArticle.title }}</h1>
      <div class="meta">
        <span v-for="m in popoverArticle.meta" :key="m">{{ m }}</span>
      </div>
      <div class="body" v-html="popoverArticle.body"></div>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { TPLOG_DATA } from '../data/corkboard-data.js'
import CorkboardItem from '../components/CorkboardItem.vue'

const data = TPLOG_DATA
const CW = 5200
const CH = 3600
const MIN_S = 0.22
const MAX_S = 1.5
const SAVE_KEY = 'tplog.positions.v2'

/* ── DOM refs ── */
const viewportRef = ref(null)
const canvasRef = ref(null)
const minimapRef = ref(null)

/* ── reactive state ── */
const tx = ref(0)
const ty = ref(0)
const scale = ref(0.55)
const activeTag = ref(null)
const popoverOpen = ref(false)
const popoverArticle = ref(null)
const hintFaded = ref(false)
const savedPositions = ref({})
const minimapDots = ref([])
const zCounter = ref(50)

/* ── computed ── */
const canvasStyle = computed(() => ({
  transform: `translate(${tx.value}px, ${ty.value}px) scale(${scale.value})`
}))

const zoomPercent = computed(() => Math.round(scale.value * 100) + '%')

const vboxStyle = computed(() => {
  const mw = minimapRef.value?.clientWidth || 200
  const mh = minimapRef.value?.clientHeight || 140
  const rx = mw / CW
  const ry = mh / CH
  const vw = viewportRef.value?.clientWidth || window.innerWidth
  const vh = viewportRef.value?.clientHeight || window.innerHeight
  const vx = -tx.value / scale.value
  const vy = -ty.value / scale.value
  const vcw = vw / scale.value
  const vch = vh / scale.value
  return {
    left: (vx * rx) + 'px',
    top: (vy * ry) + 'px',
    width: Math.max(6, vcw * rx) + 'px',
    height: Math.max(6, vch * ry) + 'px'
  }
})

const tagList = computed(() => {
  const counts = {}
  data.items.forEach(it => (it.tags || []).forEach(t => {
    counts[t] = (counts[t] || 0) + 1
  }))
  return data.allTags
    .filter(t => counts[t])
    .map(t => ({ name: t, count: counts[t] }))
})

const threadPaths = computed(() => {
  const positions = {}
  data.items.forEach(it => {
    const p = savedPositions.value[it.id]
    positions[it.id] = { x: p ? p.x : it.x, y: p ? p.y : it.y }
  })
  return data.threads.map(pair => {
    const a = positions[pair[0]]
    const b = positions[pair[1]]
    if (!a || !b) return null
    const ax = a.x + 100
    const ay = a.y + 80
    const bx = b.x + 100
    const by = b.y + 80
    const mx = (ax + bx) / 2 + (Math.random() - 0.5) * 80
    const my = (ay + by) / 2 + (Math.random() - 0.5) * 80
    return `M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}`
  }).filter(Boolean)
})

/* ── localStorage helpers ── */
function loadPositions() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch (e) { return {} }
}

function persistPositions() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(savedPositions.value))
  } catch (e) {}
}

/* ── transform ── */
function apply() {
  scale.value = Math.max(MIN_S, Math.min(MAX_S, scale.value))
}

function home() {
  const hero = data.items.find(i => i.id === 'card-0')
  const vw = viewportRef.value?.clientWidth || window.innerWidth
  const vh = viewportRef.value?.clientHeight || window.innerHeight
  scale.value = Math.min(0.78, (vw / CW) * 2.6)
  tx.value = vw / 2 - (hero.x + 130) * scale.value
  ty.value = vh / 2 - (hero.y + 120) * scale.value
  apply()
}

function zoomIn() {
  const mx = (viewportRef.value?.clientWidth || window.innerWidth) / 2
  const my = (viewportRef.value?.clientHeight || window.innerHeight) / 2
  const cx = (mx - tx.value) / scale.value
  const cy = (my - ty.value) / scale.value
  scale.value = Math.min(MAX_S, scale.value * 1.25)
  tx.value = mx - cx * scale.value
  ty.value = my - cy * scale.value
  apply()
}

function zoomOut() {
  const mx = (viewportRef.value?.clientWidth || window.innerWidth) / 2
  const my = (viewportRef.value?.clientHeight || window.innerHeight) / 2
  const cx = (mx - tx.value) / scale.value
  const cy = (my - ty.value) / scale.value
  scale.value = Math.max(MIN_S, scale.value / 1.25)
  tx.value = mx - cx * scale.value
  ty.value = my - cy * scale.value
  apply()
}

function reorganize() {
  if (confirm('Reset all card positions?')) {
    localStorage.removeItem(SAVE_KEY)
    savedPositions.value = {}
    nextTick(() => {
      buildMinimap()
      applyFilter()
      apply()
    })
  }
}

/* ── pan ── */
let panning = false
let panSx = 0, panSy = 0, panTx0 = 0, panTy0 = 0

function onViewportMouseDown(e) {
  if (e.target.closest('.item:not(.label):not(.section):not(.stamp-round)')) return
  panning = true
  panSx = e.clientX
  panSy = e.clientY
  panTx0 = tx.value
  panTy0 = ty.value
  viewportRef.value?.classList.add('panning')
  hintFaded.value = true
}

/* ── zoom wheel ── */
function onWheel(e) {
  const rect = viewportRef.value.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top
  const cx = (mx - tx.value) / scale.value
  const cy = (my - ty.value) / scale.value
  const factor = e.ctrlKey
    ? Math.exp(-e.deltaY * 0.012)
    : Math.exp(-e.deltaY * 0.0018)
  const ns = Math.max(MIN_S, Math.min(MAX_S, scale.value * factor))
  tx.value = mx - cx * ns
  ty.value = my - cy * ns
  scale.value = ns
  apply()
  hintFaded.value = true
}

/* ── drag items ── */
let dragState = null // { el, item, offX, offY, startX, startY }

function onItemMouseDown(e, item, el) {
  if (['label', 'section', 'stamp-round'].includes(item.type)) return
  if (e.target.closest('a')) return

  const rect = el.getBoundingClientRect()
  dragState = {
    el,
    item,
    offX: (e.clientX - rect.left) / scale.value,
    offY: (e.clientY - rect.top) / scale.value,
    startX: e.clientX,
    startY: e.clientY
  }
  zCounter.value++
  el.style.zIndex = zCounter.value
  e.stopPropagation()
  e.preventDefault()
}

function handleItemClick(item) {
  if (item.article) openPopover(item.article)
}

/* ── global mouse handlers ── */
function onMouseMove(e) {
  if (panning) {
    tx.value = panTx0 + (e.clientX - panSx)
    ty.value = panTy0 + (e.clientY - panSy)
    apply()
  }
  if (dragState) {
    const dx = Math.abs(e.clientX - dragState.startX)
    const dy = Math.abs(e.clientY - dragState.startY)
    if (!dragState.el.classList.contains('dragging') && (dx > 3 || dy > 3)) {
      dragState.el.classList.add('dragging')
    }
    if (dragState.el.classList.contains('dragging')) {
      const cr = canvasRef.value.getBoundingClientRect()
      const x = (e.clientX - cr.left) / scale.value - dragState.offX
      const y = (e.clientY - cr.top) / scale.value - dragState.offY
      dragState.el.style.left = x + 'px'
      dragState.el.style.top = y + 'px'
      dragState.el.style.transform = `rotate(${dragState.el.dataset.rotation || 0}deg)`
    }
  }
  if (mDragging) {
    minimapGoTo(e)
  }
}

function onMouseUp() {
  if (panning) {
    panning = false
    viewportRef.value?.classList.remove('panning')
  }
  if (dragState) {
    if (dragState.el.classList.contains('dragging')) {
      dragState.el.classList.remove('dragging')
      const id = dragState.item.id
      savedPositions.value[id] = {
        x: parseFloat(dragState.el.style.left),
        y: parseFloat(dragState.el.style.top),
        r: dragState.el.dataset.rotation || '0',
        z: dragState.el.style.zIndex
      }
      persistPositions()
      buildMinimap()
    }
    dragState = null
  }
  if (mDragging) {
    mDragging = false
  }
}

/* ── minimap ── */
let mDragging = false

function minimapGoTo(e) {
  const rect = minimapRef.value.getBoundingClientRect()
  const mx = e.clientX - rect.left
  const my = e.clientY - rect.top
  const cx = mx / rect.width * CW
  const cy = my / rect.height * CH
  tx.value = (viewportRef.value?.clientWidth || window.innerWidth) / 2 - cx * scale.value
  ty.value = (viewportRef.value?.clientHeight || window.innerHeight) / 2 - cy * scale.value
  apply()
}

function onMinimapMouseDown(e) {
  mDragging = true
  minimapGoTo(e)
  e.preventDefault()
}

function buildMinimap() {
  const dots = []
  const mw = minimapRef.value?.clientWidth || 200
  const mh = minimapRef.value?.clientHeight || 140
  const rx = mw / CW
  const ry = mh / CH

  const items = canvasRef.value?.querySelectorAll('.item')
  items?.forEach(el => {
    if (el.classList.contains('label')) return
    const left = parseFloat(el.style.left) || 0
    const top = parseFloat(el.style.top) || 0
    const w = el.offsetWidth
    const h = el.offsetHeight

    const style = {
      left: (left * rx) + 'px',
      top: (top * ry) + 'px',
      width: Math.max(2, w * rx) + 'px',
      height: Math.max(2, h * ry) + 'px'
    }

    if (el.classList.contains('namecard')) {
      style.background = 'var(--stamp)'
      style.opacity = '0.85'
    } else if (el.classList.contains('polaroid')) {
      style.background = 'var(--ink)'
      style.opacity = '0.6'
    }

    dots.push({ id: el.dataset.id, style })
  })
  minimapDots.value = dots
}

/* ── tag filter ── */
function setTag(tag) {
  activeTag.value = tag
  applyFilter()
}

function applyFilter() {
  const items = canvasRef.value?.querySelectorAll('.item')
  items?.forEach(el => {
    const tags = (el.dataset.tags || '').split(',')
    if (el.classList.contains('label') || el.classList.contains('section') || el.classList.contains('stamp-round')) {
      el.classList.remove('dim')
      return
    }
    if (!activeTag.value || tags.includes(activeTag.value)) {
      el.classList.remove('dim')
    } else {
      el.classList.add('dim')
    }
  })
}

/* ── popover ── */
function openPopover(article) {
  popoverArticle.value = article
  popoverOpen.value = true
}

function closePopover() {
  popoverOpen.value = false
}

/* ── keyboard ── */
function onKeyDown(e) {
  if (e.key === 'Escape') closePopover()
  if (document.activeElement && document.activeElement.tagName === 'INPUT') return
  if (e.key === '0') home()
  if (e.key === '+' || e.key === '=') zoomIn()
  if (e.key === '-' || e.key === '_') zoomOut()
}

function onResize() {
  if (!initDone) initView()
}

/* ── init ── */
let initDone = false

function initView() {
  if (initDone) return
  if ((viewportRef.value?.clientWidth || 0) === 0) return
  initDone = true
  home()
  nextTick(() => {
    buildMinimap()
    applyFilter()
  })
}

onMounted(() => {
  savedPositions.value = loadPositions()

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('resize', onResize)

  initView()
  requestAnimationFrame(() => requestAnimationFrame(initView))
  window.addEventListener('load', initView)

  let retries = 0
  const retryTimer = setInterval(() => {
    initView()
    if (initDone || ++retries > 40) clearInterval(retryTimer)
  }, 50)

  setTimeout(() => { hintFaded.value = true }, 6000)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('keydown', onKeyDown)
  window.removeEventListener('resize', onResize)
})
</script>
