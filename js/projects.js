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
