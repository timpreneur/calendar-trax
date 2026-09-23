/* =====================================================
   CALENDAR TRAX — Configuration
   Edit this file to customize your dashboard.
   Changes here won't affect the app code in index.html.
===================================================== */


/* -----------------------------------------------------
   CUSTOM COLORS (optional)
   Pin specific hashtags to specific hex colors.
   Any tag not listed here gets a color auto-assigned.

   Format:
     "#tagname": "#hexcolor",

   Example:
     "#workout": "#616161",
     "#play":    "#977ab7",
----------------------------------------------------- */
const CUSTOM_COLORS = {
  // "#work":    "#39a88c",
  // "#workout": "#616161",
  // "#play":    "#977ab7",
};


/* -----------------------------------------------------
   COLOR PALETTE
   Colors used for auto-assigned tags, in order.
   Cycles back to the start if you have more tags
   than colors. Feel free to add, remove, or reorder.
----------------------------------------------------- */
const COLOR_PALETTE = [
  "#6b90a6", // indigo
  "#39a88c", // green
  "#d8868e", // salmon
  "#d4ad45", // yellow
  "#169db5", // blue
  "#977ab7", // purple
  "#bd6070", // red
  "#39866b", // dark green
  "#c48b5d", // orange
  "#7784ac", // deep blue
  "#bd799b", // pink
  "#398f94", // teal
  "#bd9a54", // amber
  "#617d8b", // slate
  "#939c64", // lime
];


/* -----------------------------------------------------
   UNCATEGORIZED
   Label and color for events with no #hashtag.
----------------------------------------------------- */
const UNCATEGORIZED = { label: "Uncategorized", hex: "#81949d" };


/* -----------------------------------------------------
   SLEEP TAG
   Events with this hashtag are tracked separately and
   excluded from all main totals (summary, chart, table).
   They appear in their own Sleep section at the bottom.
   Change the tag here if you use a different label.
----------------------------------------------------- */
const SLEEP_TAG = "#sleep";


/* -----------------------------------------------------
   DEFAULT DATE RANGE
   The range selected when the dashboard first loads.

   Options:
     "today"    → Today
     "thisweek" → This Week (Mon–Sun)
     "1"        → Yesterday
     "3"        → Last 3 Days
     "7"        → Last 7 Days
     "30"       → Last 30 Days
     "tomorrow" → Tomorrow
     "next3"    → Next 3 Days
     "next7"    → Next 7 Days
----------------------------------------------------- */
const DEFAULT_RANGE = "today";
