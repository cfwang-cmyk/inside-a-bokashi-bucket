# Inside a Bokashi Bucket

**An interactive, hand-drawn guide that opens up a Bokashi bucket and explains what happens inside it, for people who have never used one.**

| | |
|---|---|
| **Course** | ESPM 98 DeCal: Intro to Compost and Vermiculture, UC Berkeley, Fall 2026 |
| **Section** | ESPM-98-GRP-007 |
| **Assignment** | Communicating Compost & Understanding Food Waste |
| **Live site** | <https://cfwang-cmyk.github.io/inside-a-bokashi-bucket/> |


![Screenshot of the page: a cutaway Bokashi bucket on the left, with labeled cards for each part on the right](docs/screenshot.png)

---

## Project summary

Bokashi is a way to ferment kitchen scraps in a sealed bucket before they go into the soil. Unlike a typical compost pile, it can take small amounts of meat, dairy and cooked food, and it works indoors and in small spaces. That makes it a practical option for people who want to keep food scraps out of the trash but have little outdoor space.

The method itself is simple, but it can feel intimidating at first, because almost everything happens out of sight inside a closed bucket. This project makes that hidden process visible. It shows a cutaway illustration of a Bokashi bucket, layer by layer, and explains what each part is, what it should look like when things are going well, and what to watch out for.

## How the project addresses the assignment

**Communicating compost.** The page is aimed at complete beginners. It uses plain language, one consistent structure for every part (what it is, what it should look like, tips and watch-outs), and a picture the reader can explore instead of a block of text to read through.

**Understanding food waste.** The three scrap layers show how food scraps change over the roughly two weeks they spend in the bucket: fresh, fermenting, and finished. The page also explains what the finished material is (fermented pre-compost, not soil) and what to do with it next, so the scraps end up in the ground instead of in the trash.

## What the page covers

| Part | What you learn |
|---|---|
| Lid and pressing plate | Why keeping air out is the whole point |
| Bucket body | Two chambers: food above, liquid below |
| Bokashi bran | The microbes that start fermentation |
| Fresh, fermenting and finished scraps | How food scraps change over about two weeks, and how to tell if it is working |
| Drainage tray, leachate, tap and jar | Where the liquid goes and how to use it |

## How to use it

- **Hover** over any part of the bucket, or its card, to highlight it.
- **Click** a part or card to open a detailed explainer for it.
- Press **Back**, **Esc** or your browser's back button to return to the overview.
- Every part has its own link. For example, `#leachate` opens the leachate explainer directly.

The page works on desktop and mobile, and with keyboard only: Tab moves through the cards, and Enter opens one.

## Design approach

- **A cutaway instead of a diagram.** Showing the bucket in section lets the reader see the order of the layers and where the liquid collects, which is hard to describe in words.
- **Hand-drawn colored-pencil style.** The soft, warm look is meant to make a technical process feel approachable, and it keeps the page visually consistent with the topic (gardens, soil, kitchen scraps).
- **Two levels of reading.** The overview gives one short sentence per part, connected to the illustration by a line, so a reader can scan the whole system quickly. Clicking opens the full explanation only for the part the reader is curious about.
- **Highlighting.** Hovering a part or its card highlights both with a soft glow, so the link between a label and the drawing is never ambiguous.
- **Readable at any length.** Card text wraps instead of being cut off, and the explainer panel scrolls, so the copy can grow without breaking the layout.

## Sources and accuracy

The explanations were written from university extension and horticultural society guidance on Bokashi, and each explainer lists the sources it draws on at the bottom of the page:

- [WSU Extension (Kitsap County): Bokashi Composting](https://extension.wsu.edu/kitsap/bokashi-composting/)
- [NC State Extension (Beaufort County): Bokashi Composting](https://beaufort.ces.ncsu.edu/2025/04/bokashi-composting-a-faster-easier-way-to-turn-kitchen-scraps-into-garden-gold/)
- [Royal Horticultural Society: Bokashi](https://rhs.org.uk/garden-inspiration/get-gardening/bokashi)
- [Royal Horticultural Society: plant feed dilution guidance](https://www.rhs.org.uk/advice/profile?PID=1208)
- [Compost Guide: Bokashi (azdeq.gov)](https://air.azdeq.gov/node/7424)
- [FEMS Microbes (2026): Lactic acid bacteria dominate urban Bokashi](https://doi.org/10.1093/femsmc/xtag018)

**Limitations.** Guidance varies between sources and between bran products. For example, sources differ on how much bran to add per layer and on how far to dilute the liquid before using it on plants. Where they disagree, the page gives typical ranges and tells the reader to follow the instructions that come with their own product. The page is an educational overview for beginners, not professional advice.

## Tools and AI use

- **Illustrations:** generated with Google's Nano Banana image model in a soft colored-pencil style, then cut out, cleaned up and layered so each part of the bucket can be highlighted on its own.
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) and [Nunito](https://fonts.google.com/specimen/Nunito) from Google Fonts.

## Technical notes

The site is plain HTML, CSS and JavaScript, with no frameworks and no build step. Hover detection reads each illustration layer's transparency, so only the visible part of a layer responds to the mouse.

### Project structure

```
index.html        page structure (contains no text content)
css/style.css     styling: colored-pencil palette, layout, glow effects
js/content.js     ALL text on the page (edit this file to change the copy)
js/app.js         illustration layout, hover/click logic, connector lines, routing
assets/           illustration layers (transparent PNGs)
docs/             screenshot used in this README
```

### Run it locally

You need Python 3, or any other static file server. From this folder, run:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Opening `index.html` directly from your file system also works. Hover detection is slightly less precise that way, because browsers don't allow pixel-level image reads from local files.

### Publish on GitHub Pages

1. Upload the contents of this folder to a GitHub repository. `index.html` should be at the top level.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**. Select the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute or two, the page is live at `https://<your-username>.github.io/<repository-name>/`.

All paths are relative, so the site works at that address without any changes.

### Editing the text

Every word on the page lives in [`js/content.js`](js/content.js), so the HTML and other code never need to change. Each part of the bucket has one entry:

```js
{
  id: "leachate",               // which part of the bucket this is (don't change)
  title: "Leachate",
  short: "Nutrient-rich liquid pressed out of the scraps.",   // one sentence, about 60 characters
  what:  "What it is ...",
  state: "What it should look like ...",
  tips:  ["Tip one", "Tip two"],

  // optional:
  extra:   [{ heading: "More", paragraphs: ["..."], bullets: ["..."] }],
  note:    "A small footnote at the bottom.",
  sources: ["wsu", "rhs"]       // ids from sourcesList, shown as links at the bottom
}
```

## Acknowledgments and credits

Made for ESPM 98 DeCal: Intro to Compost and Vermiculture, UC Berkeley. The written content is a summary of the published sources listed above; credit for the underlying guidance belongs to those organizations and authors.
