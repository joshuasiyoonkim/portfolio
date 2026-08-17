/* ============================================================
   projects.js — the only file you need to edit to add work.

   Every project on the site is one object in this array.
   The homepage grid, the filter buttons, and each project's
   detail page are all generated from what's here.

   Copy an existing block, change the values, done.
   ============================================================ */

const PROJECTS = [
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
