# Calendar TRAX

A zero-dependency time tracking dashboard powered by Google Calendar. No backend, no OAuth, no build step.

---

## How It Works

Add a `#hashtag` to any Google Calendar event title to categorize it:

```
#work Deep work session
Morning run #workout
Client call #meeting
#sleep Night sleep
```

Your API key and Calendar ID live in the bookmark URL:

```
https://your-app.pages.dev/?key=YOUR_API_KEY&cal=YOUR_CALENDAR_ID
```

Open it and see your time breakdown by category instantly.

---

## File Structure

| File | Purpose |
|---|---|
| `index.html` | The app — rarely needs editing |
| `config.js` | Your settings — edit freely |
| `README.md` | This file |

---

## Setup

### Step 1 — Create a dedicated Google Calendar

1. Open [Google Calendar](https://calendar.google.com)
2. In the left sidebar under "Other calendars", click **+** → **Create new calendar**
3. Name it something like "Time Tracking"
4. Open the calendar's **Settings** (gear icon → Settings → click your calendar)
5. Under **Access permissions**, check **Make available to public** (read-only)
6. Copy the **Calendar ID** — it looks like `abc123xyz@group.calendar.google.com`

### Step 2 — Create a Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or select an existing one)
3. Navigate to **APIs & Services → Library**
4. Search for and enable **Google Calendar API** (not CalDAV API)
5. Go to **APIs & Services → Credentials**
6. Click **+ Create Credentials → API key**
   - If asked what type of data you'll be accessing, select **Application data** — but if this routes you toward creating a service account, go back and select **API key** directly from the dropdown instead
7. Give the key a name like `Calendar TRAX` (for your reference only)
8. Under **API restrictions**, select **Restrict key** → choose **Google Calendar API**
9. Click **Save** and copy your key
   - *(Optional, after deploying)* Add your Cloudflare Pages domain under **Website restrictions**

### Step 3 — Open Your Dashboard

Visit:
```
https://your-app.pages.dev/?key=YOUR_API_KEY&cal=YOUR_CALENDAR_ID
```

Or open `index.html` via a local server (see Local Development below) — the setup screen will help you build the URL.

---

## Categorizing Events

Add a `#hashtag` anywhere in an event title in Google Calendar. The dashboard picks it up automatically — no predefined tags required.

```
#work Strategy session
Gym #workout
#play Movie night
Lunch with team #meeting
#sleep Night sleep
```

**Rules:**
- Tags are case-insensitive (`#Work` = `#work`)
- Only the first hashtag in a title is used for categorization
- The tag is stripped from the event title in the drill-down view
- Events with no hashtag appear as **Uncategorized**
- Underscores and hyphens become spaces: `#deep_work` → "Deep Work"

### Sleep tracking

Events tagged with `#sleep` (configurable) are tracked separately and excluded from all main totals. They appear in a dedicated **Sleep** section at the bottom of the dashboard showing total sleep, average per session, and a per-night breakdown.

---

## Dashboard Features

### Date Range Controls
Two always-visible buttons (**Today** and **This Week**) plus a **More ▾** dropdown containing:
- Yesterday · Last 3 Days · Last 7 Days · Last 30 Days
- Tomorrow · Next 3 Days · Next 7 Days
- Custom (date picker)

### Results / Planned / All Toggle
Filter the dashboard by time:
- **All** — shows everything in the range (default); Total Hours card displays a "Xh results · Yh planned" split
- **Results** — past events only (ended before now)
- **Planned** — future events only (starts after now)

### Donut Chart
Visual breakdown of time by category with a clickable legend. Total hours shown in the center. Clicking any segment or legend row opens the drill-down for that category.

### Summary Cards
Total hours, session count, top category, and average hours per day for the selected range and view mode.

### Category Cards
One card per hashtag showing total hours, % of total, a horizontal bar chart, and session count. Click to open drill-down.

### Breakdown Table
Sortable by: Category · Total Hours · % of Total · Sessions · Avg Session. Click any row to open drill-down.

### Drill-Down
Click any category card, table row, or donut segment to see individual events: title (hashtag stripped), date, time range, duration, and a **Results** / **Planned** badge.

### Sleep Section
Collapsible section at the bottom. Shows total sleep, avg per session, and a visual bar chart of each sleep session for the period.

---

## Configuration (`config.js`)

All user settings live in `config.js`. Edit this file freely — it won't affect the app logic.

### Custom Colors (optional)

Pin specific hashtags to specific hex colors. Any tag not listed gets a color auto-assigned from the palette.

```javascript
const CUSTOM_COLORS = {
  "#work":    "#33B679",
  "#workout": "#616161",
  "#play":    "#8E24AA",
};
```

### Color Palette

Colors used for auto-assigned tags. Reorder or replace them as you like.

```javascript
const COLOR_PALETTE = [
  "#7986CB", "#33B679", "#E67C73", ...
];
```

### Sleep Tag

The hashtag that triggers separate sleep tracking. Change this if you use a different label.

```javascript
const SLEEP_TAG = "#sleep";
```

### Default Date Range

The range selected when the dashboard first loads.

```javascript
const DEFAULT_RANGE = "thisweek"; // options below
```

| Value | Range |
|---|---|
| `"today"` | Today |
| `"thisweek"` | This Week (Mon–Sun) |
| `"1"` | Yesterday |
| `"3"` | Last 3 Days |
| `"7"` | Last 7 Days |
| `"30"` | Last 30 Days |
| `"tomorrow"` | Tomorrow |
| `"next3"` | Next 3 Days |
| `"next7"` | Next 7 Days |

### Uncategorized

Label and color for events with no hashtag.

```javascript
const UNCATEGORIZED = { label: "Uncategorized", hex: "#9E9E9E" };
```

---

## Deploy to Cloudflare Pages

1. Push `index.html`, `config.js`, and `README.md` to a GitHub repository
2. Log in to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
3. Click **Create application → Pages → Connect to Git**
4. Select your repository and configure:
   - **Build command**: *(leave blank)*
   - **Build output directory**: `/` (root)
5. Click **Save and Deploy**
6. Bookmark: `https://your-project.pages.dev/?key=YOUR_KEY&cal=YOUR_CALENDAR_ID`

---

## Local Development

Because `config.js` is a separate file, you can't open `index.html` directly in your browser — it needs to be served. Run a local server from the project folder:

```bash
python3 -m http.server
```

Then open: `http://localhost:8000`

---

## Debug Mode

Add `&debug=1` to your URL to show a debug panel listing all hashtags found in your events and whether they're mapped. Useful for troubleshooting new tags.

```
https://your-app.pages.dev/?key=...&cal=...&debug=1
```

---

## Privacy Note

Your API key is visible in the URL. For personal use this is fine. To harden it:

- Restrict the API key to your Cloudflare Pages domain in Google Cloud Console
- Enable [Cloudflare Access](https://developers.cloudflare.com/cloudflare-one/applications/configure-apps/self-hosted-apps/) to password-protect the page itself

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "Calendar not found" or 404 | Verify the calendar is set to public and the Calendar ID is correct |
| "API key not valid" | Check the key in Google Cloud Console; ensure Calendar API is enabled |
| Events showing as Uncategorized | Add a `#hashtag` to the event title in Google Calendar |
| Sleep events appearing in main totals | Ensure events use the exact tag set in `SLEEP_TAG` in `config.js` |
| Events not showing at all | Events must have start + end **times** — all-day events are excluded by design |
| Wrong timezone | The dashboard uses your browser's local timezone automatically |
| App blank when opening as a file | Open via a local server (`python3 -m http.server`), not directly as a file |
| No data for a range | Extend the range or check that events exist in that period |
