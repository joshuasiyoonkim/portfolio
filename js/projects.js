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
    slug: "ikea-smart",
    title: "IKEA Smart",
    year: "2025",
    accent: "mustard",
    cover: "assets/covers/ikea-smart.png",
    tags: ["Design", "Branding"],
    role: "Identity design",

    summary:
      "A sub-brand identity for a smart lighting line — mark, pattern, and " +
      "packaging, built inside an existing brand's rules. An unaffiliated concept.",

    overview:
      "IKEA Smart is a self-directed identity project: a sub-brand for a " +
      "connected lighting range, designed to sit under IKEA's existing visual " +
      "language rather than compete with it. The work covers the mark, the " +
      "type lockup, a two-colour palette, a repeating pattern, and how all of " +
      "it lands on a box. Not affiliated with or endorsed by IKEA.",

    stack: ["Illustrator", "Photoshop"],

    links: [],

    sections: [
      {
        heading: "A mark that survives being shrunk",
        body:
          "The bulb is drawn with as little as it can stand: one circle, one " +
          "filament line, a screw base, and a single yellow dot where the " +
          "light lives. That dot is the only colour in the whole mark, which " +
          "means the thing still reads at the size of a favicon or an embossed " +
          "corner on a carton — the sizes packaging marks actually get used " +
          "at. The lockup borrows IKEA's existing weight and tight tracking " +
          "so the sub-brand reads as part of the family instead of a guest.",
        image: "assets/projects/ikea-smart-system.jpg",
        caption: "Mark, lockup, palette, and the pattern derived from the bulb.",
      },
      {
        heading: "One shape doing two jobs",
        body:
          "The pattern isn't a separate decorative asset — it's the same bulb " +
          "tiled at a larger scale and cropped by the frame. That's the part " +
          "that makes it a system rather than a logo: the identity has a way " +
          "to fill space when it needs to, and it costs nothing extra to " +
          "produce because it's already drawn. Yellow stays rationed even " +
          "here, one dot per bulb, so a whole surface of pattern still reads " +
          "as mostly black and white.",
      },
      {
        heading: "Proving it on a box",
        body:
          "An identity that only exists on a white artboard hasn't been " +
          "tested yet. Putting it on packaging forces the questions that " +
          "matter — how the mark sits on the primary face, how the lockup " +
          "shrinks onto a side panel, what goes on the hang tab. The flat " +
          "line weight and the single spot of yellow hold up at those sizes, " +
          "which is really what the restraint was for.",
        image: "assets/projects/ikea-smart-packaging.png",
        // TODO(Josh): this render still has the SmartMockups watermark baked
        // into the bottom-left. Re-export without it and swap the file —
        // same filename and it'll just replace itself.
        caption: "The system applied to product packaging.",
      },
    ],
  },

  // ==========================================================
  // NOTE FROM CLAUDE: ignore commit counts on this repo — I
  // leaned on them at first and they're wrong in both directions.
  // Much of the work was done in person with Harris on one
  // machine, so joint work is recorded under a single account;
  // and Daniel was committing every individual change, which
  // inflates his total. Git measured whose laptop was open and
  // how often people pressed commit, not who built what.
  // (That second point is context for you, not for the page —
  // it's deliberately not in the public copy.)
  // ==========================================================
  {
    slug: "plates",
    title: "Plates",
    year: "2024",
    accent: "olive",
    cover: "assets/covers/plates.png",
    tags: ["iOS", "Swift"],
    role: "iOS engineering (four-person team)",

    summary:
      "A fitness social network for iOS. I built the social graph layer " +
      "and the health tracking screens on the profile.",

    overview:
      "Plates is an iOS app where people post from the gym, follow each " +
      "other, message, and track their own health data. It's a four-person " +
      "project — around 40 Swift files across auth, a forum, direct " +
      "messaging, notifications, and health. Much of it was built in person " +
      "with Harris Kim, sharing a machine; the parts most clearly mine are " +
      "the Firestore layer that models users and the follow graph, and the " +
      "health and leaderboard views on the profile.",

    stack: ["Swift", "SwiftUI", "Firebase / Firestore", "HealthKit", "Swift Charts"],

    links: [
      { label: "Source", url: "https://github.com/joshuasiyoonkim/Fitness-App" },
    ],

    sections: [
      {
        heading: "Modelling the follow graph",
        body:
          "Following someone isn't one boolean — it's a small state machine, " +
          "and I wrote the layer that runs it. A request lands in a pending " +
          "array on the recipient's user document; accepting moves that ID " +
          "out of pending and into followers; declining removes it without " +
          "trace. Every one of those transitions also emits a notification, " +
          "so the social feedback people expect isn't bolted on afterwards — " +
          "it's part of the same write. The same layer handles likes and " +
          "comments the same way.",
      },
      {
        heading: "Health data on the profile",
        body:
          "The profile's health section reads step count and active energy " +
          "from HealthKit and renders weekly trends with Swift Charts, " +
          "alongside a calorie log you can add to and delete from. The " +
          "underlying model stores what the user actually typed — feet and " +
          "inches, pounds — and derives the metric values and BMI as computed " +
          "properties rather than converting on input. That way the stored " +
          "data still matches what someone entered, and the derived numbers " +
          "can't drift out of sync with it.",
      },
      {
        heading: "Built two to a keyboard",
        body:
          "Most of this app was written in the same room. Harris and I " +
          "worked through it together in person, usually on one machine, so " +
          "the commit history credits whoever happened to be typing rather " +
          "than who did the thinking. There isn't a clean line where my half " +
          "ends and his begins, and pretending otherwise would be tidier " +
          "than the truth. What pairing bought us was fewer bad decisions " +
          "surviving: the argument about how to model a user, or where " +
          "health data belonged, happened before the code existed instead of " +
          "in review a week later. Daniel Han and Ryan Kim built the forum, " +
          "notifications, and much of the messaging, and the parts had to " +
          "meet in the middle — the user model had to satisfy screens I " +
          "never opened.",
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

];
