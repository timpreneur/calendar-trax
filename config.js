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
     "#play":    "#8E24AA",
----------------------------------------------------- */
const CUSTOM_COLORS = {
  // "#work":    "#33B679",
  // "#workout": "#616161",
  // "#play":    "#8E24AA",
};


/* -----------------------------------------------------
   COLOR PALETTE
   Colors used for auto-assigned tags, in order.
   Cycles back to the start if you have more tags
   than colors. Feel free to add, remove, or reorder.
----------------------------------------------------- */
const COLOR_PALETTE = [
  "#7986CB", // indigo
  "#33B679", // green
  "#E67C73", // salmon
  "#F6BF26", // yellow
  "#039BE5", // blue
  "#8E24AA", // purple
  "#D50000", // red
  "#0B8043", // dark green
  "#F4511E", // orange
  "#3F51B5", // deep blue
  "#E91E63", // pink
  "#00897B", // teal
  "#FB8C00", // amber
  "#546E7A", // slate
  "#C0CA33", // lime
];


/* -----------------------------------------------------
   UNCATEGORIZED
   Label and color for events with no #hashtag.
----------------------------------------------------- */
const UNCATEGORIZED = { label: "Uncategorized", hex: "#9E9E9E" };


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
const DEFAULT_RANGE = "7";
