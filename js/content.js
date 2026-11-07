/*
 * PLACEHOLDER COPY: not reviewed. Edit freely.
 *
 * This file is the single source of truth for every piece of text on the page.
 * Edit, reorder, add or remove text here only; no other file needs to change.
 *
 * site  : page title and footer line. (An optional `subtitle` is also supported and
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
 *
 * Section headings ("What it is", ...) and small interface labels also live here, in `labels`.
 */
window.BOKASHI_CONTENT = {
  site: {
    title: "Inside a Bokashi Bucket",
    footer: "Timings and ratios are typical guidelines. Always follow the instructions of your bran manufacturer."
  },

  labels: {
    what: "What it is",
    state: "What it should look like",
    tips: "Tips & watch-outs",
    back: "← Back",
    sceneHint: "Hover over any layer to explore. Click for details.",   // screen-reader-only hint for the illustration
    sceneDescription: "Cutaway illustration of a Bokashi bucket: a lid lifted above the bucket, a pressing plate, layers of bran and fresh, fermenting and finished food scraps, a perforated drainage tray, amber leachate in the bottom chamber, and a tap dripping into a collection jar.",
    cardHint: "Open details"
  },

  items: [
    {
      id: "lid",
      title: "Lid",
      short: "Seals the bucket airtight to keep oxygen out.",
      what: "A tight-fitting, airtight cover. Bokashi microbes work without oxygen, so the lid is what separates fermenting from rotting.",
      state: "Fully seated, with the seal pressed closed all the way around. Open only for the few seconds it takes to add scraps.",
      tips: [
        "Close it right after adding scraps.",
        "Wipe the rim and seal so crumbs don't break the airtight fit.",
        "A cracked or loose lid lets air in, and mold can take over."
      ]
    },
    {
      id: "plate",
      title: "Pressing plate",
      short: "Presses each new layer flat to squeeze out air.",
      what: "A flat disc that rests on top of the scraps. You press it down after every addition.",
      state: "Lying flat on the top layer, with the scraps pressed firmly and evenly beneath it.",
      tips: [
        "Press firmly each time. Trapped air invites unwanted mold.",
        "Keep it clean so sticky residue doesn't build up.",
        "No plate? A potato masher does the job."
      ]
    },
    {
      id: "body",
      title: "Bucket body",
      short: "An airtight bucket with a liquid chamber below.",
      what: "A food-grade plastic bucket, commonly around 15-20 L (4-5 US gallons). The upper chamber holds the scraps; the lower chamber collects liquid.",
      state: "Kept indoors at a comfortable room temperature, roughly 15-30°C (60-85°F), out of direct sun.",
      tips: [
        "Keep it out of direct sun and away from freezing temperatures.",
        "Rinse with warm water and mild soap between batches.",
        "Use two buckets: fill one while the other ferments for about 2 weeks."
      ]
    },
    {
      id: "bran",
      title: "Bokashi bran",
      short: "Microbe-rich bran sprinkled over every layer.",
      what: "Wheat bran (sometimes sawdust) inoculated with beneficial microbes, mainly lactic acid bacteria and yeasts.",
      state: "A thin, even dusting over each layer of scraps. The grains are pale beige and dry, with a mild sweet-sour smell.",
      tips: [
        "Follow the product label. A common guide is a small handful per 5 cm (2 in) layer of scraps.",
        "Add a little extra bran to wet or meaty scraps.",
        "Store bran dry and sealed. Damp, smelly or moldy bran is spoiled."
      ]
    },
    {
      id: "fresh",
      title: "Fresh scraps",
      short: "The newest layer: chopped scraps, pressed flat.",
      what: "Fruit and vegetable trimmings, coffee grounds, tea bags, crushed eggshells and cooked leftovers. Small amounts of meat, fish and dairy are fine in Bokashi, unlike in a regular compost pile.",
      state: "Bright and firm, chopped into roughly 2-3 cm (1 in) pieces, drained of excess liquid, and pressed flat under a thin sprinkle of bran.",
      tips: [
        "Chop big pieces. Smaller pieces ferment faster.",
        "Drain wet scraps before adding them.",
        "Skip food that is already moldy (blue, green or black), large bones, and large amounts of liquid or oil."
      ]
    },
    {
      id: "fermenting",
      title: "Fermenting scraps",
      short: "Scraps soften and darken as microbes get to work.",
      what: "Lactic acid bacteria turn the scraps acidic, which holds back the microbes that cause rot.",
      state: "Colors fade and darken, pieces soften and shrink, and the smell is sweet-sour, like pickles or cider. White fuzzy patches are a good sign.",
      tips: [
        "White fuzz is healthy. Blue, green or black mold, or a rotten (not sour) smell, usually means air is getting in.",
        "If that happens, add more bran, press harder and check the lid seal.",
        "Discard badly spoiled batches (bury or compost them) and start fresh."
      ]
    },
    {
      id: "finished",
      title: "Finished scraps",
      short: "Pickled, not rotted: soft, brown and ready to bury.",
      what: "Fermented, pre-compost material. Bokashi doesn't turn scraps into soil; it pickles them. The pieces keep their shape but are much softer and acidic.",
      state: "Soft, glossy pieces in olive-brown and amber with white fuzz, smelling sweet-sour like pickles. Once the bucket is full, keep it sealed for about 2 weeks.",
      tips: [
        "Bury it about 20 cm (8 in) deep in garden soil, or add it to a compost pile.",
        "It is acidic, so keep it away from seeds and roots; wait about 2-4 weeks before planting there.",
        "Mix it into the soil and let soil life finish the job."
      ]
    },
    {
      id: "tray",
      title: "Drainage tray",
      short: "Lets liquid drip through so scraps stay out of it.",
      what: "A perforated plate that holds the food above a lower chamber. Liquid squeezed out of the scraps drips through the holes.",
      state: "Level and secure on its supports, with the holes clear.",
      tips: [
        "Rinse it when you empty a batch. Blocked holes make liquid back up.",
        "Make sure it sits level so liquid drains evenly.",
        "Scraps sitting in liquid can turn rotten, so keep the liquid below the tray."
      ]
    },
    {
      id: "leachate",
      title: "Leachate",
      short: "Nutrient-rich liquid pressed out of the scraps.",
      what: "A liquid by-product often called \"Bokashi tea\", rich in nutrients and beneficial microbes.",
      state: "Golden to dark amber with a sweet-sour smell. How much you get depends on how wet your scraps are.",
      tips: [
        "Dilute roughly 1:100 with water (about 2 teaspoons per litre) before using on plants. Undiluted, it is too acidic.",
        "Use it fresh rather than storing it for long.",
        "Many people also pour it, undiluted, down drains to keep them fresh."
      ],
      note: "Ratios and timings vary; follow your product's instructions."
    },
    {
      id: "tap",
      title: "Tap",
      short: "Drains the leachate without opening the lid.",
      what: "A small spigot near the base that lets you drain the liquid without opening the lid.",
      state: "Closed between drains. Opened fully when draining.",
      tips: [
        "Drain every 1-3 days, before the liquid reaches the tray.",
        "Close it fully afterward. An open tap lets air in.",
        "No flow? Check for a clogged tray or tap."
      ]
    },
    {
      id: "jar",
      title: "Collection jar",
      short: "Catches the leachate; dilute it before feeding plants.",
      what: "A container placed under the tap to catch the leachate.",
      state: "Standing directly beneath the tap, holding amber liquid at a safe level.",
      tips: [
        "Use a sturdy container on a stable surface.",
        "Label it so nobody mistakes it for a drink.",
        "Use or dilute it soon rather than letting it sit for weeks."
      ]
    }
  ]
};
