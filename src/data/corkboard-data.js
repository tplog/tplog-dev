/* tplog corkboard data — items on the board */
export const TPLOG_DATA = {

  allTags: ["cook", "code", "read", "note", "essay", "build", "life", "quote", "photo"],

  items: [

    // ─── WORDMARK DECORATION ───
    { id: "wm", type: "label", cls: "wordmark", x: 2080, y: 900, content: "tplog" },
    { id: "wm2", type: "label", cls: "big vertical", x: 220, y: 300,
      content: "二〇二四 — 今", tags: [] },

    // ─── HERO / NAMECARD ───
    {
      id: "card-0",
      type: "namecard",
      x: 2400, y: 1580,
      rotation: -1.5,
      pin: "red",
      tape: ["tl"],
      tags: ["life"],
      content: {
        label: "tplog · the cook",
        name: "tp",
        bio: "料理人。喜欢 <b>cook 软件</b>，也喜欢 <b>cook 菜</b>。",
        links: [
          { label: "GitHub", href: "#" },
          { label: "X / Twitter", href: "#" },
          { label: "hi@tplog.dev", href: "#" },
          { label: "RSS", href: "#" }
        ]
      },
      article: {
        eyebrow: "ABOUT · 関於",
        title: "关于这个 notebook",
        meta: ["TOKYO", "SINCE 2024", "TP"],
        body: `
          <p>这是一个没有边缘的笔记本。拖拽它的任何地方，你会发现更多。</p>
          <p>我叫 tp。是 <b>料理人</b>——喜欢 cook 软件，也喜欢 cook 菜。在东京的厨房与编辑器之间反复切换。</p>
          <p>这里记下的是一些关于代码、味道、和耐心的碎片。有些是文章，有些是引文，有些只是一张当天的拍立得。</p>
          <blockquote>詩は、言葉が目覚めになって息をする瞬間。<cite>— 加藤楸邨</cite></blockquote>
          <p>没有订阅按钮，也没有算法。你翻到哪张算哪张。</p>
        `
      }
    },

    // ─── SECTION HEADERS ───
    { id: "sec-cook", type: "section", x: 3100, y: 1000,
      content: { label: "Cook · 厨房", num: "12" } },
    { id: "sec-code", type: "section", x: 3100, y: 1900,
      content: { label: "Code · 代码", num: "08" } },
    { id: "sec-read", type: "section", x: 900, y: 1100,
      content: { label: "Reading · 読む", num: "06" } },
    { id: "sec-note", type: "section", x: 900, y: 2000,
      content: { label: "Notebook · 随笔", num: "14" } },

    // ─── COOK ────────────────────────────────────────
    {
      id: "cook-1", type: "note", size: "lg", tone: "cream",
      x: 3100, y: 1080, rotation: 1.5, pin: "red",
      tags: ["cook", "essay"],
      content: {
        eyebrow: "04 · 14",
        kind: "ESSAY",
        title: "发酵是一种耐心的练习",
        excerpt: "周末做了一罐味噌。从煮豆到封坛花了一整天——你按部就班，然后等它自己说话。",
        foot: ["Cook", "5 min"]
      },
      article: {
        eyebrow: "ESSAY · 04 · 14 · 2026",
        title: "发酵是一种耐心的练习",
        meta: ["COOK", "5 MIN", "TOKYO"],
        body: `
          <p>周末做了一罐味噌。从煮豆、捣碎、拌盐、到封坛花了一整天。然后等六个月。</p>
          <p>一开始我以为发酵只是化学——盐、菌、温度。做久了才发现那更像一种 <b>信任</b>：你按部就班把该做的做完，然后 <b>退出去</b>，让时间自己工作。</p>
          <blockquote>発酵は待つことを教えてくれる。焦らず、ただそこにいることの意味。<cite>— tplog</cite></blockquote>
          <p>我做软件的时候常常犯的一个错误是：不放心。一有空就想去搅动它、优化它、重构它。</p>
          <p>但好的味噌是不被频繁打开的。好的代码也一样——写完那版，忍住别动。让它自己发出味道。</p>
          <hr class="rule" />
          <p>六个月之后，你再回来，才知道你做对了没有。</p>
        `
      }
    },
    {
      id: "cook-2", type: "note", tone: "ivory",
      x: 3440, y: 1150, rotation: -2, pin: "blue",
      tags: ["cook", "note"],
      content: {
        eyebrow: "03 · 22",
        kind: "NOTE",
        title: "高汤的六个版本",
        excerpt: "昆布 · 鰹节 · 干香菇 · 烤鱼骨 · 煮蔬 · 清水。每一种都是不同的情绪。",
        foot: ["Cook", "6 min"]
      },
      article: {
        eyebrow: "NOTE · 03 · 22 · 2026",
        title: "高汤的六个版本",
        meta: ["COOK", "6 MIN"],
        body: `
          <p>一个月里我试了六种不同的高汤。每一种都像不同的人格。</p>
          <p><b>昆布</b>：克制。水三十分钟泡着，刚要沸之前捞出。汤清，味薄，像夏天的早晨。</p>
          <p><b>鰹节</b>：热闹。撒下去两秒就飘起来，香气猛烈。关火三分钟，过滤，要快。</p>
          <p><b>干香菇</b>：深沉。头天晚上泡水放冰箱，第二天出来时汤像琥珀。</p>
          <p><b>烤鱼骨</b>：温柔。骨头烤到焦黄再煮，油脂会让汤变得像牛奶。</p>
          <p><b>煮蔬</b>：轻描淡写。白菜、萝卜、葱头的水，配豆腐。</p>
          <p><b>清水</b>：诚实。什么都不是也什么都可以。</p>
          <p>厨房里最被低估的是第一种和最后一种。</p>
        `
      }
    },
    {
      id: "cook-3", type: "recipe",
      x: 3280, y: 1450, rotation: 1, pin: "ochre",
      tags: ["cook"],
      content: {
        tag: "RECIPE",
        title: "周日的面包",
        sub: "水合法 · 23°C",
        items: [
          ["强力粉", "400 g"],
          ["水", "320 g"],
          ["盐", "8 g"],
          ["酵母", "2 g"],
          ["时间", "16 h"]
        ]
      }
    },
    {
      id: "cook-4", type: "ticket",
      x: 2940, y: 1380, rotation: -3, pin: "ivory",
      tags: ["cook", "life"],
      content: {
        kind: "KITCHEN · LOG",
        name: "味噌 · 封坛",
        meta: "04 · 06 · 2026 — open 10/06",
        stub: "vol. 03"
      }
    },

    // ─── CODE ────────────────────────────────────────
    {
      id: "code-1", type: "note", tone: "white",
      x: 3100, y: 1980, rotation: -1, pin: "red",
      tags: ["code", "note"],
      content: {
        eyebrow: "04 · 09",
        kind: "NOTE",
        title: "代码像一道菜",
        excerpt: "写到第三版才意识到：调味要分次加，函数也是。先盐、再醋、最后香油。",
        foot: ["Code", "3 min"]
      },
      article: {
        eyebrow: "NOTE · 04 · 09 · 2026",
        title: "代码像一道菜",
        meta: ["CODE", "3 MIN"],
        body: `
          <p>写到第三版才意识到：调味要 <b>分次加</b>，函数也是。</p>
          <p>先盐——定义清楚它做什么。再醋——处理边缘情况。最后香油——优化与命名。顺序错了，味就不对。</p>
          <p>一次性把一整套需求塞进去的函数，像把所有调料一起倒进锅。看似快，其实不可挽回。</p>
          <hr class="rule" />
          <p>厨房和编辑器教我的同一件事：<b>一次只加一样东西，然后尝一口</b>。</p>
        `
      }
    },
    {
      id: "code-2", type: "note", tone: "butter",
      x: 3440, y: 2050, rotation: 2, pin: "blue",
      tags: ["code", "build"],
      content: {
        eyebrow: "04 · 05",
        kind: "BUILD",
        title: "一个很小的 CLI：taste",
        excerpt: "把我每天记录味道的表格变成了 taste——在终端里记味噌汤、咖啡、生活。60 行 Go。",
        foot: ["Build", "4 min"]
      },
      article: {
        eyebrow: "BUILD · 04 · 05 · 2026",
        title: "一个很小的 CLI：taste",
        meta: ["GO", "4 MIN", "60 LOC"],
        body: `
          <p>把我每天记录味道的表格变成了 <b>taste</b>——在终端里记味噌汤、咖啡、今天的心情。</p>
          <p>用 Go 写的，60 行。所有条目存在一个 <code>~/.taste.json</code> 里。</p>
          <p><code>$ taste add coffee 8 "深烘有点过"</code></p>
          <p><code>$ taste list --tag=coffee</code></p>
          <p>不联网，不同步，不备份到任何云——这是故意的。<b>有些东西只属于这一台电脑和我</b>。</p>
        `
      }
    },
    {
      id: "code-3", type: "index-card",
      x: 3260, y: 2320, rotation: -1.5, pin: "ochre",
      tags: ["code", "note"],
      content: {
        head: "02 · 14 · DEBUG · LOG",
        title: "关于时区的 bug",
        lines: [
          "追了三天。",
          "以为是闰秒 / locale。",
          "最后是 UTC 与 JST 的",
          "凌晨边界。",
          "教训：永远用 UTC。"
        ]
      }
    },

    // ─── READING ─────────────────────────────────────
    {
      id: "read-1", type: "note", tone: "white",
      x: 900, y: 1180, rotation: -1.5, pin: "blue",
      tags: ["read"],
      content: {
        eyebrow: "04 · 02",
        kind: "READING",
        title: "读《厨房》吉本芭娜娜",
        excerpt: "夜里的冰箱声、锅底的余温——她写的是厨房，也是人在黑暗里如何重新发光。",
        foot: ["Read", "7 min"]
      },
      article: {
        eyebrow: "READING · 04 · 02 · 2026",
        title: "读《厨房》吉本芭娜娜",
        meta: ["READ", "7 MIN", "吉本ばなな"],
        body: `
          <p>重新读了一次《厨房》。</p>
          <p>大学时读过，那时候在意的是故事——现在在意的是 <b>厨房本身</b>。</p>
          <p>夜里打开冰箱的光、锅底的余温、水龙头一直滴水的声音。她写这些的时候，没有一句是多的。</p>
          <blockquote>冬は春の中にある。夜は朝の中にある。<cite>— アーサー・ラッセル</cite></blockquote>
          <p>厨房在她笔下不是一个功能性的空间，而是人 <b>与自己独处</b> 的地方。在那里伤心可以，发呆可以，吃一碗饭也可以。</p>
          <p>我在东京租的这间公寓厨房很小，只有一口灶。但最近常常觉得：这就够了。</p>
        `
      }
    },
    {
      id: "read-2", type: "note", tone: "blush",
      x: 560, y: 1260, rotation: 2, pin: "red",
      tags: ["read"],
      content: {
        eyebrow: "03 · 15",
        kind: "READING",
        title: "向田邦子的餐桌",
        excerpt: "她写食物就像写人——有克制有温度，从不多一笔。",
        foot: ["Read", "5 min"]
      },
      article: {
        eyebrow: "READING · 03 · 15 · 2026",
        title: "向田邦子的餐桌",
        meta: ["READ", "5 MIN"],
        body: `
          <p>向田邦子写食物，像在写家里的人。</p>
          <p>不华丽。就是昨天吃了什么、今天想吃什么、父亲讨厌秋刀鱼、母亲偷偷放糖。</p>
          <p>她的克制是 <b>知道自己要什么</b>——所以可以省去九成的废话。写作和做饭一样，最难是 "不加"。</p>
        `
      }
    },

    // ─── NOTEBOOK / ESSAYS ───────────────────────────
    {
      id: "note-1", type: "note", size: "lg", tone: "butter",
      x: 900, y: 2080, rotation: 1, pin: "red",
      tags: ["essay", "life", "note"],
      content: {
        eyebrow: "03 · 28",
        kind: "ESSAY",
        title: "慢一点也可以",
        excerpt: "整个三月只发了两篇文章，没什么愧疚。写的人需要时间空着，就像锅需要时间冷着。",
        foot: ["Essay", "4 min"]
      },
      article: {
        eyebrow: "ESSAY · 03 · 28 · 2026",
        title: "慢一点也可以",
        meta: ["ESSAY", "4 MIN"],
        body: `
          <p>整个三月只发了两篇文章，没什么愧疚。</p>
          <p>写的人需要时间空着，就像锅需要时间 <b>冷着</b>。一直在火上的锅，烧什么都一个味。</p>
          <p>我过去以为 productivity 就是 output。后来发现最好的输出都是在 "什么都没做" 的时间里酝酿出来的。看一本闲书、走一段长路、把酱油瓶擦干净。</p>
          <p>慢不是懒。慢是给质量留出空间。</p>
        `
      }
    },
    {
      id: "note-2", type: "note", tone: "cream", size: "sm",
      x: 580, y: 2180, rotation: -2, pin: "ochre",
      tags: ["essay", "life"],
      content: {
        eyebrow: "02 · 20",
        kind: "NOTE",
        title: "早晨六点的厨房",
        excerpt: "水开了，咖啡豆在磨。这是一天唯一只属于自己的半小时。",
        foot: ["Life", "3 min"]
      },
      article: {
        eyebrow: "NOTE · 02 · 20 · 2026",
        title: "早晨六点的厨房",
        meta: ["LIFE", "3 MIN"],
        body: `
          <p>六点的厨房还没有声音。水开了，咖啡豆在磨。</p>
          <p>这是一天里 <b>唯一只属于自己的半小时</b>——没有 notification、没有日程、没有人会来问任何问题。</p>
          <p>我开始觉得：一天过得好不好，很大程度上看这半小时是不是真的只属于自己。</p>
        `
      }
    },
    {
      id: "note-3", type: "index-card",
      x: 1220, y: 2240, rotation: 1.5, pin: "blue",
      tags: ["note", "life"],
      content: {
        head: "03 · 09 · TO REMEMBER",
        title: "七件小事",
        lines: [
          "每天喝足够的水。",
          "擦炉台。",
          "走路的时候不要看手机。",
          "回复等一会儿再回。",
          "三月的樱花。",
          "不买第二把菜刀。",
          "早点睡。"
        ]
      }
    },

    // ─── QUOTES (scattered) ──────────────────────────
    {
      id: "q-1", type: "quote", tone: "blush",
      x: 2280, y: 960, rotation: -2, pin: "red",
      tags: ["quote", "read"],
      content: {
        q: "詩は、言葉が目覚めになって息をする瞬間。",
        attrib: "— 加藤楸邨"
      }
    },
    {
      id: "q-2", type: "quote", tone: "mint",
      x: 1200, y: 2480, rotation: 1.5, pin: "blue",
      tags: ["quote"],
      content: {
        q: "冬は春の中にある。夜は朝の中にある。",
        attrib: "— アーサー・ラッセル"
      }
    },
    {
      id: "q-3", type: "quote", tone: "ivory",
      x: 2100, y: 2760, rotation: -1, pin: "ochre",
      tags: ["quote"],
      content: {
        q: "ないかもしれない。しかし、あるかもしれない。それで十分だ。",
        attrib: "— 野上弥生子"
      }
    },
    {
      id: "q-4", type: "quote", tone: "butter",
      x: 3520, y: 2520, rotation: 2, pin: "red",
      tags: ["quote", "cook"],
      content: {
        q: "料理は、誰かのことを考える時間。",
        attrib: "— tplog"
      }
    },

    // ─── POLAROIDS ───────────────────────────────────
    {
      id: "p-1", type: "polaroid",
      x: 2080, y: 1600, rotation: -4, pin: "red",
      tape: ["tr"],
      tags: ["photo", "life"],
      content: { src: "assets/portrait.jpg", caption: "tp · 2025 spring" }
    },
    {
      id: "p-2", type: "polaroid", size: "sm",
      x: 1680, y: 2300, rotation: 4, pin: "blue",
      tags: ["photo", "cook"],
      content: { src: "assets/portrait.jpg", caption: "kitchen · march" }
    },
    {
      id: "p-3", type: "polaroid", size: "sm",
      x: 3600, y: 2780, rotation: 5, pin: "ochre",
      tags: ["photo"],
      content: { src: "assets/portrait.jpg", caption: "2024 winter" }
    },

    // ─── POSTCARD ────────────────────────────────────
    {
      id: "pc-1", type: "postcard",
      x: 1660, y: 1100, rotation: -2, pin: "ivory",
      tape: ["tl"],
      tags: ["life"],
      content: {
        place: "TOKYO · 東京",
        body: "今天买了一把新的生鱼刀。<br>店主是个 70 岁的老人——<br>他说：刀和人一样，用得好才亮。",
        meta: ["SENT", "04 · 01"]
      }
    },

    // ─── VINYL ───────────────────────────────────────
    {
      id: "v-1", type: "vinyl",
      x: 720, y: 1620, rotation: 0, pin: "red",
      tags: ["life"],
      content: {
        title: "nighthawks",
        artist: "a kitchen mix"
      }
    },

    // ─── STAMPS ──────────────────────────────────────
    {
      id: "st-1", type: "stamp-round",
      x: 2340, y: 780, rotation: 14,
      tags: [],
      content: "TPLOG<br>042"
    },
    {
      id: "st-2", type: "stamp-round",
      x: 4380, y: 1000, rotation: -18,
      tags: [],
      content: "MADE IN<br>TOKYO"
    },

    // ─── MISC LABELS / CORNER MARKS ──────────────────
    { id: "l-ne", type: "label", cls: "tiny", x: 80, y: 80,
      content: "┌ N 35.6895" },
    { id: "l-nw", type: "label", cls: "tiny", x: 5000, y: 80,
      content: "E 139.6917 ┐" },
    { id: "l-se", type: "label", cls: "tiny", x: 80, y: 3500,
      content: "└ 一期一会" },
    { id: "l-sw", type: "label", cls: "tiny", x: 5000, y: 3500,
      content: "fin. ┘" },
    { id: "l-hint", type: "label", cls: "tiny", x: 2500, y: 700,
      content: "↓ drag anywhere · click any card" },
    { id: "l-edge", type: "label", cls: "tiny vertical", x: 4800, y: 1400,
      content: "the notebook has no edges" },
    { id: "l-big", type: "label", cls: "big", x: 3900, y: 300,
      content: "cook · code · and the space between" }

  ],

  // Hand-drawn threads between items (by id)
  threads: [
    ["card-0", "p-1"],
    ["cook-1", "q-4"],
    ["cook-1", "cook-3"],
    ["code-1", "code-2"],
    ["read-1", "q-2"]
  ]
};
