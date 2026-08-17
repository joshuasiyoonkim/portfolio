/* ============================================================
   projects.js — the only file you need to edit to add work.

   Every project on the site is one object in this array.
   The homepage grid, the filter buttons, and each project's
   detail page are all generated from what's here.

   Copy an existing block, change the values, done.
   ============================================================ */

const PROJECTS = [
  // ==========================================================
  // NOTE FROM CLAUDE: I wrote this entry from your repo and the
  // live site, so every number and technical claim is checked.
  // But the sentences about *why* you built it and what you'd
  // change are my best guess at your reasoning — they're marked
  // with TODO below. Rewrite those in your own voice; they're
  // the parts an interviewer will actually ask you about.
  // ==========================================================
  {
    slug: "spikereport",
    title: "SpikeReport",
    year: "2026",
    accent: "sky",
    cover: "assets/covers/spikereport.png",
    tags: ["Web", "Full-stack", "Writing"],
    role: "Design, engineering, and writing",

    summary:
      "A Valorant editorial site I design, build, and write for — 72 articles " +
      "running on a file-based publishing system with no database.",

    overview:
      "SpikeReport is a personal Valorant hub: patch note breakdowns, pro " +
      "circuit coverage, roster moves, and a curated clip archive. I built the " +
      "whole thing — the design, the front end, the publishing pipeline — and " +
      "I write every article on it.",

    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],

    links: [
      { label: "Live site", url: "https://spike-report.vercel.app" },
      { label: "Source", url: "https://github.com/joshuasiyoonkim/spike-report" },
    ],

    sections: [
      {
        heading: "The problem",
        // TODO(Josh): rewrite in your own words — this is my guess at your motivation.
        body:
          "Valorant coverage is scattered. Patch analysis lives on Reddit, " +
          "roster news breaks on Twitter, and the plays worth rewatching are " +
          "buried in tournament VODs. I wanted one place where all of it sat " +
          "together, written in a voice that had an actual opinion instead of " +
          "just reporting the result.",
      },
      {
        heading: "Publishing without a CMS",
        body:
          "Every article is a markdown file with YAML frontmatter, parsed with " +
          "gray-matter and rendered through marked. There's no database and no " +
          "hosted CMS — publishing is a git commit, which means the content has " +
          "version history for free and the site has nothing to go down. " +
          "Categories, reading time, and the RSS feed are all derived from the " +
          "files themselves, so adding an article means adding one file and " +
          "nothing else.",
      },
      {
        heading: "Built to be shared, not just visited",
        body:
          "Each article generates its own Open Graph image at request time from " +
          "the headline, category, author, and reading time — so a link pasted " +
          "into Discord or Twitter arrives as a designed card rather than a bare " +
          "URL. The site also ships an RSS feed, a sitemap, and a robots policy. " +
          "None of that is visible on the page, but it's the difference between " +
          "a site people can find and share and one that just exists.",
        image: "assets/projects/spikereport-og.png",
        caption:
          "A social card generated automatically for one article — no manual design step per post.",
      },
      {
        heading: "What I'd do differently",
        // TODO(Josh): replace with your real answer. This is the question
        // interviewers ask most, and it should be genuinely yours.
        body:
          "The category system grew organically and now leans heavily on one " +
          "bucket — most posts are Pro Scene, which makes the filters less " +
          "useful than they should be. If I rebuilt the taxonomy I'd design it " +
          "around how I actually publish rather than how I imagined I would.",
      },
    ],
  },

  {
    slug: "fslr-leaderboard",
    title: "FSLR Official Gamer Skill Ranking",
    year: "2026",
    accent: "mustard",
    cover: "assets/covers/fslr-leaderboard.png",
    tags: ["Web", "Design", "Writing"],
    role: "Design, engineering, and writing",

    summary:
      "A fake international ranking body that rates four streamers on a " +
      "made-up skill metric. One HTML file, no dependencies, entirely straight-faced.",

    overview:
      "FSLR is a parody of the sanctioning bodies that publish world rankings — " +
      "the ATP, FIFA, that genre of institution. It ranks four streamers " +
      "(Fuslie, Squeex, Ludwig, and Rae) on the FOGSR™ Rating, a formula I " +
      "invented and have since revised to version 3.1. The entire site is a " +
      "single hand-written HTML file with no framework and no dependencies.",

    stack: ["HTML", "CSS", "JavaScript", "Vercel"],

    links: [
      { label: "Live site", url: "https://fslr-gaming-leaderboard.vercel.app" },
      { label: "Source", url: "https://github.com/joshuasiyoonkim/fslr-gaming-leaderboard" },
    ],

    sections: [
      {
        heading: "The joke only works if nothing winks",
        // TODO(Josh): the design reasoning here is mine, inferred from the
        // execution. Rewrite if you were actually thinking something else.
        body:
          "Every design decision serves the same goal: look like a real " +
          "governing body. Dark navy and gold, a crest, a blinking LIVE " +
          "indicator, a scrolling headline ticker, a ranking table with " +
          "movement arrows and a numeric rating to two decimals. Nothing on " +
          "the page announces that it's a bit. The comedy lives entirely in " +
          "the copy — the methodology cites section numbers, publishes an " +
          "Independence Statement denying the obvious, and notes that a " +
          "player's engagement is \"happiness-neutral and rating-negative.\" " +
          "If the design broke character even once, none of the writing would land.",
      },
      {
        heading: "One file, no dependencies",
        body:
          "The whole site is 517 lines of HTML with the CSS and JavaScript " +
          "inline — no build step, no framework, nothing to install. That " +
          "constraint didn't mean skipping the engineering, though. YouTube " +
          "embeds load as lightweight facades that only swap in the real " +
          "iframe on click, so six videos cost nothing until someone wants " +
          "one. The forfeit deadline is a live countdown rather than a hard-" +
          "coded number, because a static date goes stale and undercuts the " +
          "premise that the committee is watching. The headline ticker loops " +
          "seamlessly in pure CSS by duplicating the track and translating " +
          "exactly one copy-width.",
      },
      {
        heading: "Writing as the product",
        body:
          "Most of the work here was writing, not code. The rating formula " +
          "has named coefficients that each encode a specific joke — a Micro " +
          "Decay Coefficient for time spent away from ranked play, an " +
          "Off-Ladder Life Events deduction weighted by hours removed from " +
          "the queue. The bit holds together because the internal logic is " +
          "consistent: rulings reference clauses, clauses have version " +
          "numbers, and the committee never breaks character, including in " +
          "the disclaimer clarifying it is a parody operated by fans.",
      },
    ],
  },

  {
    slug: "paparazzi-pursuit",
    title: "Paparazzi Pursuit",
    year: "2024",
    accent: "plum",
    cover: "assets/covers/paparazzi-pursuit.png",
    tags: ["Game", "Unity"],
    role: "Programming (four-person team)",

    summary:
      "A pixel-art endless runner where you dodge traffic and paparazzi at " +
      "once — steering and where you're looking are separate controls.",

    overview:
      "Paparazzi Pursuit is a browser-playable Unity endless runner: you're a " +
      "celebrity driving down a highway, dodging oncoming traffic while " +
      "photographers line the roadside. Built by a team of four over about 90 " +
      "commits. I shared programming with Harris Kim; AJ Rivas did the art and " +
      "Lucas did music and sound.",

    stack: ["Unity", "C#", "WebGL"],

    links: [
      { label: "Play in browser", url: "https://joshuasiyoonkim.itch.io/paparazzi-pursuit" },
      { label: "Source", url: "https://github.com/joshuasiyoonkim/PaparazziPursuit" },
    ],

    sections: [
      {
        heading: "Looking is the mechanic",
        body:
          "The idea that makes the game work is splitting movement from " +
          "attention. A and D steer the car; the arrow keys control which way " +
          "your character is facing. Every photographer casts a ray at the " +
          "player along whichever axis you're currently looking — face left " +
          "and a camera on your left catches you. The detail that makes it " +
          "tense is the neutral state: if you aren't looking either way, the " +
          "check fires in both directions at once, so standing still is the " +
          "most exposed you can be. Surviving means actively looking away " +
          "from danger while steering into it, and those two demands rarely " +
          "agree.",
      },
      {
        heading: "Selling depth in a 2D scene",
        body:
          "The road is flat sprites, but the photographers are meant to read " +
          "as approaching from a distance. Each one interpolates its scale " +
          "from its position between the top and bottom of the screen, so it " +
          "grows as it comes down the road — perspective faked with a lerp " +
          "rather than a camera. Everything scrolls off a single shared speed " +
          "value, which means the whole scene stays in lockstep as the game " +
          "accelerates, and there's a recovery routine that eases the player " +
          "back up the screen after a hit, with a cooldown so a bad moment " +
          "doesn't cascade into an unwinnable one.",
      },
      {
        heading: "Working on someone else's systems",
        // TODO(Josh): this is the section an interviewer will dig into, and I
        // can't write it for you — I don't know which parts were yours, where
        // you and Harris divided the work, or what you'd change. Replace this.
        body:
          "This was a team project rather than a solo one, which changed how " +
          "the code had to be written — systems needed to be legible to " +
          "someone else and to survive art and audio being swapped in " +
          "underneath them.",
      },
    ],
  },

  {
    // --- Identity -------------------------------------------
    // `slug` becomes the URL: /work/spotify-wrapped-clone
    // Use lowercase words separated by hyphens. Must be unique.
    slug: "example-web-app",
    title: "Example Web App",
    year: "2025",

    // --- Card appearance ------------------------------------
    // `accent` picks the card's color block.
    // Options: clay, olive, mustard, ink, plum, sky
    accent: "clay",
    // Path to the cover image. SVG, PNG, JPG all fine.
    cover: "assets/covers/example-web-app.svg",

    // --- Categorization -------------------------------------
    // `tags` power the filter buttons on the homepage.
    // They're collected automatically — no need to register them
    // anywhere else. Keep them short and reuse them across projects.
    tags: ["Web", "Full-stack"],
    role: "Design + Engineering",

    // --- Grid card text -------------------------------------
    // One sentence. This is what people read while scanning.
    summary: "A short, plain-language hook that says what this is and why it mattered.",

    // --- Detail page ----------------------------------------
    // Leading paragraph on the project's own page.
    overview:
      "Two or three sentences of context. What was the goal, who was it for, " +
      "and what constraints shaped it? Write this like you're explaining it to " +
      "a friend, not defending a thesis.",

    // Technologies listed in the sidebar. Delete if not relevant.
    stack: ["JavaScript", "HTML/CSS", "Vercel"],

    // Buttons at the top of the detail page.
    // Delete any you don't have — an empty list is fine.
    links: [
      { label: "Live site", url: "https://example.com" },
      { label: "Source", url: "https://github.com/yourname/repo" },
    ],

    // The body of the case study. Add as many sections as you want.
    // `image` and `caption` are both optional — omit them for a
    // text-only section.
    sections: [
      {
        heading: "The problem",
        body:
          "What was broken, missing, or annoying? Concrete beats abstract. " +
          "A specific frustration is more memorable than a general mission statement.",
      },
      {
        heading: "What I built",
        body:
          "Walk through the actual thing. Name the decisions you made and why " +
          "you made them — that's the part that shows judgment.",
        image: "assets/projects/example-detail.svg",
        caption: "A short caption explaining what this image shows.",
      },
      {
        heading: "What I'd do differently",
        body:
          "Optional, but strong. Showing you can critique your own work reads " +
          "as confidence, not weakness.",
      },
    ],
  },

  {
    slug: "example-design-study",
    title: "Example Design Study",
    year: "2024",
    accent: "olive",
    cover: "assets/covers/example-design-study.svg",
    tags: ["Design", "Branding"],
    role: "Design",
    summary: "A design-led project — the same structure works whether the work is visual or technical.",
    overview:
      "Design projects usually live or die on the images. Lean on the section " +
      "images below and keep the writing tight.",
    stack: ["Figma", "Illustrator"],
    links: [{ label: "Case study PDF", url: "#" }],
    sections: [
      {
        heading: "Direction",
        body: "Where the visual direction came from and what you were reacting against.",
        image: "assets/projects/example-detail-2.svg",
        caption: "Early explorations.",
      },
      {
        heading: "Outcome",
        body: "Where it landed, and how you knew it was working.",
      },
    ],
  },

  {
    slug: "example-small-thing",
    title: "Example Small Thing",
    year: "2024",
    accent: "mustard",
    cover: "assets/covers/example-small-thing.svg",
    tags: ["Tools", "Python"],
    role: "Engineering",
    summary: "Small projects belong here too — a script that saved you an hour a week is a real thing.",
    overview: "Not everything needs to be a semester-long build. Short entries keep the grid full and honest.",
    stack: ["Python"],
    links: [{ label: "Source", url: "#" }],
    sections: [
      {
        heading: "Why",
        body: "One or two sections is completely fine for a smaller project.",
      },
    ],
  },
];
