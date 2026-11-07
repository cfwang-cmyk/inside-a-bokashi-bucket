/*
 * PLACEHOLDER COPY: not reviewed. Edit freely.
 *
 * This file is the single source of truth for every piece of text on the page.
 * Edit, reorder, add or remove text here only; no other file needs to change.
 *
 * site  : page title, footer line and credit line (`credit`, shown under the footer; empty or missing = hidden). (An optional `subtitle` is also supported and
 *         shown under the title if present; by default there is none.)
 * items : one entry per hotspot. The `id` must match a part of the bucket
 *         (lid, plate, body, bran, fresh, fermenting, finished, tray, leachate, tap, jar).
 *         The on-screen card order follows the parts' positions on the bucket (top to bottom),
 *         so the order of this array does not matter for layout.
 *
 * Fields per item:
 *   id      (required) hotspot id, see above
 *   title   (required) card + detail title
 *   short   (required) ONE standalone sentence for the overview card, about 60 characters max
 *           so it fits on one line at desktop width. Never truncated: longer text wraps.
 *           Also shown as the lead line of the detail view.
 *   what    "What it is" paragraph
 *   state   "What it should look like" paragraph
 *   tips    "Tips & watch-outs" bullet list (array of strings)
 *   extra   OPTIONAL. Additional sections shown after the tips:
 *             extra: [{ heading: "...", paragraphs: ["...", "..."], bullets: ["...", "..."] }]
 *           paragraphs and bullets are both optional inside each section.
 *   note    OPTIONAL. A small footnote line at the bottom of the detail view.
 *   sources OPTIONAL. Array of ids from `sourcesList` (bottom of this file), listed as links
 *           under a "Sources" heading at the end of the detail view.
 *
 * Section headings ("What it is", ...) and small interface labels also live here, in `labels`.
 */
window.BOKASHI_CONTENT = {
  site: {
    title: "Inside a Bokashi Bucket",
    footer: "Timings and ratios are typical guidelines. Always follow the instructions of your bran manufacturer.",
    credit: "Final Project for UC Berkeley ESPM-98-GRP-007 Fall 2026"   // small line under the footer; leave empty "" to hide it
  },

  labels: {
    what: "What it is",
    state: "What it should look like",
    tips: "Tips & watch-outs",
    back: "← Back",
    sources: "Sources",
    sceneHint: "Hover over any layer to explore. Click for details.",   // screen-reader-only hint for the illustration
    sceneDescription: "Cutaway illustration of a Bokashi bucket: a lid lifted above the bucket, a pressing plate, layers of bran and fresh, fermenting and finished food scraps, a perforated drainage tray, amber leachate in the bottom chamber, and a tap dripping into a collection jar.",
    cardHint: "Open details"
  },

  items: [
    {
      id: "lid",
      title: "Lid",
      short: "Seals the bucket airtight to keep oxygen out.",
      what: "The lid is what turns a bucket into a Bokashi bin. Bokashi is fermentation, and fermentation here happens without oxygen, so a tight seal keeps air out and keeps the friendly microbes in charge. A leaky or often-open bucket drifts toward ordinary rotting instead.",
      state: "Pressed down firmly all the way around, with a clean rim and gasket. It stays closed except for the few moments it takes to add scraps or drain the tap.",
      tips: ["Close it right after each addition so as little air as possible gets in.", "Wipe the rim and gasket clean so crumbs and drips don't leave gaps.", "Fruit flies or a stronger smell often point to a poor seal. Add bran, clean the rim and press the lid down firmly.", "A slightly swollen bucket is usually just gas from active fermentation. Release the pressure briefly and check the tap. If it still smells sour, it is generally fine."],
      extra: [{ heading: "Why airtight matters", paragraphs: ["The microbes in bokashi bran ferment the sugars in your scraps into acids, which turns the contents sour and keeps them from rotting. Oxygen works against that, which is why guides stress keeping the bucket sealed. If white mold shows up in large amounts, it can be a hint that some air is leaking in."] }],
      sources: ["ncsu", "wsu", "rhs"]
    },
    {
      id: "plate",
      title: "Pressing plate",
      short: "Presses each new layer flat to squeeze out air.",
      what: "A flat disc that sits on top of the scraps so you can press each new layer down. Pressing squeezes out air pockets and keeps the surface level, which helps the bran and microbes reach every piece.",
      state: "Lying flat on the top layer, with the scraps compacted firmly and evenly beneath it. Kits usually include a purpose-made presser or plate, but a dinner plate or a piece of cardboard also works.",
      tips: ["Press after every addition. Trapped air invites unwanted mold.", "Leaving the plate on top between additions keeps the contents weighed down.", "Rinse it between batches so residue doesn't build up.", "For very wet scraps, press down and then drain the tap so the liquid doesn't pool."],
      sources: ["azdeq", "rhs"]
    },
    {
      id: "body",
      title: "Bucket body",
      short: "An airtight bucket with a liquid chamber below.",
      what: "A food-grade plastic bucket with an airtight lid and a tap near the base. Scraps sit in the upper chamber on a perforated tray, and the liquid they release collects in the chamber below. A typical kit includes the bucket, a drainer tray, a tap, bran with a scoop and a tool for pressing, and many people make their own from a 5-gallon (about 19 L) bucket.",
      state: "Somewhere convenient indoors, such as under the sink, out of direct sunlight, and in a comfortable range of about 65-85°F (18-29°C). Cold slows the microbes down.",
      tips: ["Keep it where you will actually use it, so adding scraps becomes a habit.", "Keep it out of direct sunlight.", "If fermentation seems slow or you don't notice a sour smell, move it somewhere warmer and add a little more bran.", "Rinse the bucket between batches so it is clean for the next one."],
      extra: [{ heading: "The two-bucket rhythm", paragraphs: ["When one bucket is full, seal it and let it ferment for about two weeks while you fill a second bucket. Then empty the first one into soil or a compost pile, rinse it and start again. Most kits come with two buckets for this reason."] }],
      sources: ["rhs", "wsu", "azdeq"]
    },
    {
      id: "bran",
      title: "Bokashi bran",
      short: "Microbe-rich bran sprinkled over every layer.",
      what: "Bokashi bran is the starter that gets fermentation going. It is usually wheat or rice bran (sometimes sawdust) infused with beneficial microbes, mainly lactic acid bacteria, yeasts and phototrophic bacteria. Sprinkled over the scraps, these microbes ferment the food instead of letting it rot.",
      state: "A thin, even sprinkle over every layer of scraps, with some at the bottom of the bucket before the first scraps go in. Fresh bran is dry and smells mild. Musty bran is past its best and should be replaced.",
      tips: ["Follow your product's label. Guidance ranges from a handful for every inch (2.5 cm) of scraps to a handful for every 2 to 3 inches (5 to 7.5 cm).", "Add a handful each time you add food, then press down.", "If the contents smell rotten instead of sour, add a generous layer of bran right away.", "Bran is an ongoing cost. One UK guide suggests allowing roughly 1 kg every three months for regular use."],
      extra: [{ heading: "Meet the microbes", paragraphs: ["Lactic acid bacteria (the same broad family used to make yogurt and sauerkraut) do much of the work by turning sugars into acids. Yeasts and phototrophic bacteria are also common in bokashi mixes. A 2026 pilot study of household Bokashi bins found that lactic acid bacteria dominated the microbial communities."] }],
      sources: ["ncsu", "rhs", "azdeq", "wsu", "fems"]
    },
    {
      id: "fresh",
      title: "Fresh scraps",
      short: "The newest layer: chopped scraps, pressed flat.",
      what: "The newest layer, made of whatever you added most recently. Bokashi can handle a wider range of food than a regular compost pile, including cooked food, dairy, meat and small bones, alongside fruit and vegetable scraps, coffee grounds and tea bags.",
      state: "Bright and firm, chopped into small pieces, with excess liquid drained off, topped with a thin sprinkle of bran and pressed flat. At this stage it still looks like the food it came from.",
      tips: ["Chop large scraps smaller. More surface area means faster fermentation.", "Drain wet scraps and avoid adding free liquids, soups or sauces, since too much moisture makes the contents slimy.", "Skip food that is already moldy or rotten, which can disrupt the process, and go easy on oil and grease.", "Break up large bones or leave them out, because they take a long time to break down."],
      extra: [{ heading: "What goes in, at a glance", bullets: ["Good to add: fruit and vegetable scraps, cooked food, dairy, meat, small bones, coffee grounds, tea bags.", "Best avoided: free liquids, soups and sauces; large amounts of oil or grease; moldy or rotten food; large bones."] }],
      sources: ["wsu", "ncsu", "rhs", "azdeq"]
    },
    {
      id: "fermenting",
      title: "Fermenting scraps",
      short: "Scraps soften and darken as microbes get to work.",
      what: "Once the lid is on, the microbes get to work. Lactic acid bacteria turn the sugars in the scraps into acids, making the contents sour. This is fermentation, not decomposition: the scraps are being pickled, not broken down into soil.",
      state: "Appearance varies. Some pieces look almost unchanged because fermentation preserves their structure, while others soften and dull in color. Smell is a better guide than looks. You want sour, tangy or vinegar-like, not sulfur, rot or ammonia. White fuzzy growth is a healthy sign.",
      tips: ["White mold is a good sign. Green, blue or black mold points to air getting in, too little bran or too much moisture.", "If it smells rotten, add a generous layer of bran, press firmly to push out air and drain the liquid.", "If mold takes over the bucket, discard or compost the contents and restart with more bran.", "Slimy or very wet contents usually mean too much liquid. Drain more often, add dry material such as extra bran, shredded paper or cardboard, and tilt the bucket toward the tap when draining."],
      extra: [{ heading: "Healthy or not?", bullets: ["Healthy: sour or pickle-like smell, white fuzzy growth, softened texture, liquid draining normally.", "Needs attention: rotten, sulfur or ammonia smell, green, blue or black mold, slimy contents, fruit flies."] }],
      sources: ["wsu", "rhs", "ncsu"]
    },
    {
      id: "finished",
      title: "Finished scraps",
      short: "Pickled, not rotted: soft, brown and ready to bury.",
      what: "After the bucket is full and has been sealed for about two weeks, the contents are fermented pre-compost. It is not finished compost: it looks like pickled food and is very acidic. The final breakdown happens when you mix it into soil or a compost pile.",
      state: "Soft pieces that often keep much of their shape, with a sour, pickle-like smell and possibly white fuzz. Don't expect soil. Once buried, the sour smell fades within a week or two, and the material breaks down over the next few weeks.",
      tips: ["Bury it 8 to 12 inches (20 to 30 cm) deep in a spot away from existing plants. Mix it with at least 2 to 3 times its volume in soil, then cover completely.", "Wait before planting there: at least 2 weeks in warm, active soil, 3 to 4 weeks in cool or compacted soil, and 4 or more weeks in containers.", "Keep it away from roots and trunks, and never leave it on the surface or use it as mulch.", "No spare soil? Bury it in the middle of a compost pile, or add small amounts to a worm bin."],
      extra: [{ heading: "Why wait before planting?", paragraphs: ["Straight from the bucket the material is very acidic and can harm plant roots. Mixed into soil, it neutralizes as soil life breaks it down, which is why guides recommend leaving at least a couple of weeks before planting on top of it."] }],
      sources: ["wsu", "ncsu", "rhs", "azdeq"]
    },
    {
      id: "tray",
      title: "Drainage tray",
      short: "Lets liquid drip through so scraps stay out of it.",
      what: "A perforated plate that holds the scraps above the lower chamber. Liquid squeezed out of the food drips through the holes and collects below, so the scraps don't sit in a puddle. Too much moisture can leave the contents slimy and stress the microbes.",
      state: "Sitting level and firmly in place, with the holes clear. A well-fitted tray lets liquid flow freely to the bottom and keeps solids out of the liquid chamber.",
      tips: ["Set the tray in place before you add the first scraps.", "Rinse it when you empty a batch. Clogged holes make liquid back up into the food.", "If the contents look wet or slimy, drain more often and tilt the bucket slightly toward the tap when you drain.", "Add dry material such as extra bran or shredded paper if the bucket keeps getting too wet."],
      sources: ["wsu", "rhs"]
    },
    {
      id: "leachate",
      title: "Leachate",
      short: "Nutrient-rich liquid pressed out of the scraps.",
      what: "Leachate, often called Bokashi tea, is the liquid that drains from the scraps as they ferment. It carries nutrients and microbes and is acidic, which makes it a useful by-product that needs some care. Draining it also keeps the contents from getting too wet.",
      state: "Golden to dark amber, with a sour or tangy smell. How much you get depends on how wet your scraps are, and dry scraps may give very little. Drain it every 2 to 3 days, or daily if the contents are wet or smelly.",
      tips: ["Before watering plants, dilute it to about 1:100 with water (roughly 10 ml, or 2 teaspoons, per litre) and apply it to the soil.", "Use the diluted mix within about a day.", "Poured undiluted down a drain, it can help prevent buildup and keep pipes clear.", "Never use it undiluted on plants. It is acidic and can harm them."],
      extra: [{ heading: "Why dilute?", paragraphs: ["Straight from the bucket, the liquid is concentrated and acidic. Dilution advice varies between sources, from about 1:10 to 1:100 or weaker, and 1:100 is the most commonly cited figure. If you are unsure, dilute more and try it on one plant first."] }],
      note: "Dilution guidance varies between sources. When in doubt, dilute more.",
      sources: ["azdeq", "rhs", "rhsfeeds", "wsu"]
    },
    {
      id: "tap",
      title: "Tap",
      short: "Drains the leachate without opening the lid.",
      what: "A small spigot near the base that lets you drain the leachate without opening the lid, so the contents stay sealed from the air.",
      state: "Closed between drains and opened fully when you drain. It should not drip, and nothing should be blocking it.",
      tips: ["Drain every 2 to 3 days, or daily when the contents are wet or smelly, so the liquid doesn't rise up to the tray.", "Close it fully afterward. A tap left open or dripping lets air in.", "No liquid coming out? The scraps may just be dry. If liquid should be there, check for a clogged tray or tap.", "If the bucket swells, release the pressure briefly and check the tap."],
      extra: [{ heading: "Draining, step by step", bullets: ["Put a clean container under the tap.", "Open the tap fully and let the liquid run out.", "Close the tap fully.", "Dilute and use the liquid, or pour it down a drain."] }],
      sources: ["azdeq", "wsu"]
    },
    {
      id: "jar",
      title: "Collection jar",
      short: "Catches the leachate; dilute it before feeding plants.",
      what: "A container placed under the tap to catch the leachate. Any sturdy, clean jar, bottle or small watering can will do.",
      state: "Standing directly under the tap on a stable surface, with the amber liquid at a safe level. Move it out of the way as soon as you have drained.",
      tips: ["Dilute before using on plants (about 1:100) and use the diluted mix within about a day.", "Label the container clearly so no one mistakes it for something drinkable.", "The liquid is best used fresh rather than stored for long.", "Empty and rinse the jar after each use."],
      extra: [{ heading: "What to do with it", bullets: ["Diluted to about 1:100, water garden plants or houseplants at the soil.", "Poured undiluted down a drain to help keep it clear."] }],
      sources: ["azdeq", "rhsfeeds", "wsu"]
    }
  ],

  /* Sources referenced by each item's `sources` array (shown as links at the bottom of the detail view). */
  sourcesList: {
    wsu: { label: "WSU Extension (Kitsap County): Bokashi Composting", url: "https://extension.wsu.edu/kitsap/bokashi-composting/" },
    ncsu: { label: "NC State Extension (Beaufort County): Bokashi Composting", url: "https://beaufort.ces.ncsu.edu/2025/04/bokashi-composting-a-faster-easier-way-to-turn-kitchen-scraps-into-garden-gold/" },
    rhs: { label: "Royal Horticultural Society: Bokashi", url: "https://rhs.org.uk/garden-inspiration/get-gardening/bokashi" },
    rhsfeeds: { label: "Royal Horticultural Society: plant feed dilution guidance", url: "https://www.rhs.org.uk/advice/profile?PID=1208" },
    azdeq: { label: "Compost Guide: Bokashi (azdeq.gov)", url: "https://air.azdeq.gov/node/7424" },
    fems: { label: "FEMS Microbes (2026): Lactic acid bacteria dominate urban Bokashi", url: "https://doi.org/10.1093/femsmc/xtag018" }
  }
};
