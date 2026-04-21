<template>
  <div
    ref="rootRef"
    :class="itemClasses"
    :data-id="item.id"
    :data-tags="tagsStr"
    :data-rotation="rotation"
    :style="positionStyle"
    @mousedown="onMouseDown"
    @click="onClick"
  >
    <!-- label / section -->
    <template v-if="item.type === 'label' || item.type === 'section'">
      <template v-if="item.type === 'section'">
        <span>{{ item.content.label }}</span><span class="num">{{ item.content.num }}</span>
      </template>
      <template v-else>{{ item.content }}</template>
    </template>

    <!-- note -->
    <template v-else-if="item.type === 'note'">
      <div class="eyebrow">
        <span>{{ c.eyebrow }}</span><span>{{ c.kind }}</span>
      </div>
      <div class="title">{{ c.title }}</div>
      <div class="excerpt">{{ c.excerpt }}</div>
      <div class="foot">
        <span>{{ c.foot[0] }}</span><span class="read-hint">↗ read</span>
      </div>
    </template>

    <!-- quote -->
    <template v-else-if="item.type === 'quote'">
      <div class="q">{{ c.q }}</div>
      <span class="attrib">{{ c.attrib }}</span>
    </template>

    <!-- polaroid -->
    <template v-else-if="item.type === 'polaroid'">
      <img :src="c.src" :alt="c.caption" />
      <div class="caption">{{ c.caption }}</div>
    </template>

    <!-- index-card -->
    <template v-else-if="item.type === 'index-card'">
      <div class="head">{{ c.head }}</div>
      <div class="title">{{ c.title }}</div>
      <div v-for="(line, i) in c.lines" :key="i">{{ line }}</div>
    </template>

    <!-- namecard -->
    <template v-else-if="item.type === 'namecard'">
      <div class="label">{{ c.label }}</div>
      <div class="name">{{ c.name }}</div>
      <p class="bio" v-html="c.bio"></p>
      <ul>
        <li v-for="link in c.links" :key="link.label">
          <a :href="link.href" @click.stop>{{ link.label }}</a>
        </li>
      </ul>
      <div class="item-read" v-if="item.article">↗ read</div>
    </template>

    <!-- postcard -->
    <template v-else-if="item.type === 'postcard'">
      <div class="pic"><span>{{ c.place }}</span></div>
      <div class="text">
        <div class="stamp-box">¥84</div>
        <div class="body" v-html="c.body"></div>
        <div class="meta">
          <span>{{ c.meta[0] }}</span><span>{{ c.meta[1] }}</span>
        </div>
      </div>
    </template>

    <!-- recipe -->
    <template v-else-if="item.type === 'recipe'">
      <div class="tag">{{ c.tag }}</div>
      <div class="title">{{ c.title }}</div>
      <div class="sub">{{ c.sub }}</div>
      <ul>
        <li v-for="(ing, i) in c.items" :key="i">
          <span>{{ ing[0] }}</span><span>{{ ing[1] }}</span>
        </li>
      </ul>
    </template>

    <!-- ticket -->
    <template v-else-if="item.type === 'ticket'">
      <div class="main">
        <div class="kind">{{ c.kind }}</div>
        <div class="name">{{ c.name }}</div>
        <div class="meta">{{ c.meta }}</div>
      </div>
      <div class="stub">{{ c.stub }}</div>
    </template>

    <!-- vinyl -->
    <template v-else-if="item.type === 'vinyl'">
      <div class="v-inner">
        <div class="v-title">{{ c.title }}</div>
        <div class="v-artist">{{ c.artist }}</div>
      </div>
    </template>

    <!-- stamp-round -->
    <template v-else-if="item.type === 'stamp-round'">
      <div v-html="item.content"></div>
    </template>

    <!-- decorations -->
    <div v-if="item.pin" class="pin" :class="item.pin === 'red' ? '' : item.pin"></div>
    <div
      v-for="(t, i) in item.tape || []"
      :key="i"
      class="tape"
      :class="[t, tapeColor(i)]"
    ></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  savedPosition: { type: Object, default: null }
})

const emit = defineEmits(['mousedown', 'click'])
const rootRef = ref(null)

const c = computed(() => props.item.content)

const itemClasses = computed(() => {
  const cls = ['item', props.item.type]
  if (props.item.cls) cls.push(...props.item.cls.split(' '))
  if (props.item.tone) cls.push(`tone-${props.item.tone}`)
  if (props.item.size) cls.push(`w-${props.item.size}`)
  // 可读的卡片加 cursor 提示
  if (props.item.article && !['label', 'section', 'stamp-round'].includes(props.item.type)) {
    cls.push('has-article')
  }
  return cls
})

const tagsStr = computed(() => (props.item.tags || []).join(','))
const rotation = computed(() => props.savedPosition?.r ?? props.item.rotation ?? 0)

const positionStyle = computed(() => {
  const p = props.savedPosition
  const x = p ? p.x : props.item.x
  const y = p ? p.y : props.item.y
  const r = p ? p.r : (props.item.rotation || 0)
  const z = p?.z ?? ''
  return {
    left: x + 'px',
    top: y + 'px',
    transform: `rotate(${r}deg)`,
    zIndex: z
  }
})

const tapeColors = ['', 'pink', 'blue', 'mint']
function tapeColor(i) {
  return tapeColors[(i + props.item.x) % tapeColors.length] || ''
}

/* click vs drag: 在组件内部判断，如果移动距离小于阈值则认为是 click */
let md = null // mousedown state

function onMouseDown(e) {
  if (e.target.closest('a')) return
  md = { x: e.clientX, y: e.clientY, time: Date.now() }
  emit('mousedown', e, props.item, rootRef.value)
}

function onClick(e) {
  if (e.target.closest('a')) return
  // 如果刚刚 drag 过（由父组件通过 classList 控制），不触发 click
  if (rootRef.value?.classList.contains('dragging')) return
  emit('click', props.item)
}
</script>
