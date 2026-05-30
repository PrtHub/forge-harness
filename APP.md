# Forge — Product Reference

**What this is:** the single source of truth for the app as built. Every tab, every modal flow, every store, every wired feature. If code disagrees with this doc, fix the outlier.

**What this is not:** a spec, a plan, or a wishlist. Aspirational features live in §16 _Not built_.

**Last updated:** 2026-05-06

---

## 1. Concept

Forge is a local-only, offline-first iOS/Android app that helps men break compulsive porn-use loops by reframing the work as **energy sublimation, not deprivation**. It targets the Huberman/Goggins-aligned demographic — men in their 20s-40s who self-identify with discipline, peak performance, and identity work.

The thesis: men in this category resist therapy framing and shame mechanics. They respond to **severity, tactile feedback, and visible identity progression**. The app treats the user as an operator working on something hard, not a patient being managed.

Core mechanic: a daily ritual (the **Strike**) plus a forge metaphor — cold iron heats and forms a blade over 90+ days.

**Brand:** Forge / Harness (used interchangeably in copy depending on context — Forge is the app, Harness is the active commitment / streak run).

---

## 2. Brand Voice

The whole app is in one consistent voice — call it the **Operator's voice**. Terse, slightly operatic, present-tense. Cormac McCarthy crossed with a strength coach. Marcus Aurelius writing notes to himself, not lecturing.

**Allowed:**

- Imperatives ("Strike the iron.")
- Statements ("Day 1. Iron Heat.")
- Quiet questions ("How far are you going?")
- Body-text uses of "pick" as a natural verb

**Forbidden:**

- "Welcome" / "Let's begin" / "Get started"
- "Great choice!" / "Awesome!" / "Nice job!"
- "We're so glad you're here"
- "You've got this!"
- Exclamation marks outside milestone unlocks
- Em-dashes that should be periods
- "Click" — say "tap"
- "Pick one" as instructional header — say "Choose one"

**Color palette:**

- **Ink** (`#050503` → `#3B3730`) — backgrounds, surfaces, cold steel at rest
- **Ember** (`#3B1F00` → `#FFAA66`, with `ember-500` `#FF6B1A` as the signature) — heated iron, active CTAs, accents
- **White-hot** (`#FFDA6A`) — peak emotion only: milestone unlocks, sealed pledges, sacred moments
- **Crimson** / red-500 — fracture only

---

## 3. Architecture

### 3.1 Routing

```
app/
├── _layout.tsx           Root: theme, notifications listeners, AppState reconcile, store subscriptions
├── index.tsx             Gate → onboarding or tabs
├── (onboarding)/         24-screen first-run flow
├── (tabs)/               Bottom tab bar (Anvil · Journal · Crucible · Oracle · Settings)
├── (crucible)/           Modal: urge → intensity → protocol → harvested
├── (fracture)/           Modal: autopsy form → confirm
├── (sunday)/             Modal: weekly review
├── (milestone)/          Modal: full-screen day 1/3/7/14/30/60/90/180/365 unlock
└── (blade)/              Modal: tap-blade detail sheet (live counter + lifetime stats + roadmap)
```

### 3.2 Tab bar

```
┌──────┬────────┬──────────────┬─────────┬─────────┐
│Anvil │Journal │  CRUCIBLE    │ Oracle  │Settings │
└──────┴────────┴──────────────┴─────────┴─────────┘
```

Center Crucible button intercepts the tab press and opens `/(crucible)/` modal — never navigates to a tab destination. The `app/(tabs)/crucible.tsx` file is a 4-line dummy stub satisfying expo-router's file-based routing.

### 3.3 Stack

- **Expo SDK 54** (Expo Router v6, file-based routing)
- **NativeWind v4** (TailwindCSS for React Native)
- **Zustand** with `persist` + AsyncStorage (4 stores)
- **Expo SQLite** (1 table for Operator's Log)
- **react-native-reanimated** (all motion)
- **react-native-svg** (blade silhouettes, fracture crack visual, etc.)
- **expo-haptics** (all tactile feedback)
- **expo-notifications** (local scheduled notifications, no remote push)
- **expo-sensors** (Crucible accelerometer for pushup counting + walk verification)
- **@react-native-community/datetimepicker** (custom quit-date picker)

Local-only by design. **No backend, ever.** Privacy is the brand.

---

## 4. Onboarding — 24 Screens

Six acts, ~20 minutes end-to-end. Resumable via `useOnboardingStore.lastScreenVisited` — kill the app at any screen, return to that screen with all prior inputs intact.

### Act 1 — Hook (3 screens)

| #   | Screen    | Purpose                                                                                                           |
| --- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| 1   | `welcome` | Plant the metaphor: "Don't fight the urge. Harvest it." Ember pulse animation, Light haptic on Begin.             |
| 2   | `problem` | 3-slide pager: most apps call it disease → that framing keeps you focused on what to escape → Harness inverts it. |
| 3   | `promise` | 5-bullet "what 90 days does" — restored dopamine, sharper focus, drive, sleep, energy.                            |

### Act 2 — Calibration (7 screens)

All screens carry the "THE ORACLE · CALIBRATING" micro-header.
| # | Screen | Captures |
|---|---|---|
| 4 | `gender` | `gender: 'male' \| 'other'`. Soft-exit redirect if not male. |
| 5 | `age` | `ageBracket: '18-24' \| '25-34' \| '35-44' \| '45+'`. |
| 6 | `frequency` | `currentFrequency` — five buckets from "Multiple times a day" to "Rarely". |
| 7 | `years-streak` | Combined: `yearsStruggling` + `longestStreak` via two segmented controls. |
| 8 | `triggers` | `triggers[]` multi-select (Boredom / Stress or Anxiety / Loneliness / etc.). |
| 9 | `when-where` | Combined: `urgeTimes[]` (4 time bands, format: "Late night (10pm–2am)") + `locations[]` (Bed/Bathroom/Desk/Couch/Travel/Other). |
| 10 | `impact` | `impacts[]` multi-select — Focus, Confidence, Drive, Sleep, etc. |

### Act 3 — Reflection (2 screens)

| #   | Screen      | What it does                                                                                                                                                                                                                          |
| --- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | `analyzing` | 4.4-second cinematic sequence. Orb intensifies + slow rotating dashed ring + builds to white-hot flare. Computes `computedProfile { label, hoursLostEstimate, daysLostEstimate, weeklyHoursLost, dominantTriggerClass, peakWindow }`. |
| 12  | `profile`   | Full v2 dossier. "You are: The Late-Night Operator." + 3 fact rows + reclaim block (per week / per month / per goal in tick-counter animation).                                                                                       |

### Act 4 — Identity (5 screens)

| #   | Screen         | Captures                                                                                                                          |
| --- | -------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 13  | `why`          | `why: string` — multiline, 10–280 chars. Surfaces in pledge, paywall, Sunday Review.                                              |
| 14  | `archetype`    | `archetype: 'The Operator' \| 'The Builder' \| 'The Athlete' \| 'The Warrior'`. Drives Crucible protocols.                        |
| 15  | `blade-choice` | `equippedSkin: 'forge-steel' \| 'roman-gladius' \| 'norse-seax'`. Three breathing SVG silhouettes, selected one breathes + glows. |
| 16  | `goal`         | `goalDays: 7 \| 30 \| 90`. 90 marked as recommended.                                                                              |
| 17  | `quit-date`    | `harnessStartDate: ISO`. Three options: Right Now (recommended badge + Heavy haptic) / Tomorrow 6 AM / Custom (DateTimePicker).   |

### Act 5 — Forge (3 screens) — the v2 differentiator

| #   | Screen         | What it does                                                                                                                                                                                                                                                                                                                                |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18  | `pledge`       | Captures `firstName` + `pledgeSignedAt`. Document-style layout, "Hold to Seal" button (long-press). White-hot flash on seal.                                                                                                                                                                                                                |
| 19  | `first-strike` | The user's first Strike. Full Strike sequence: double-haptic (Heavy + 80ms + Medium), 12 ember sparks burst with gravity, iron lump heats + glows ember-500/700, "+10 ⚡" floats up. Logs the strike, bumps streak to 1. **Resume-safe** — if user kills app between strike and continue, returns to post-strike state without duplicating. |
| 20  | `first-blade`  | Day-1 reveal in chosen skin. Day counter ticks 0 → 1 with Light haptic. Blade breathes per `tactile.md §2.2`.                                                                                                                                                                                                                               |

### Act 6 — Permissions + Paywall (4 screens)

| #   | Screen          | What it does                                                                                                                                                                                                                                                                                                                                                  |
| --- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | `notifications` | Pulse dot mock notification. "Turn it on" → real OS permission request via `requestNotificationPermissions()`. On grant: schedules strike reminder + Sunday review immediately.                                                                                                                                                                               |
| 22  | `biometric`     | "Nobody gets in but you." Trust strip (3 cards: On this device / Never synced / No account) + FaceID visual. Toggle persists `biometricEnabled`.                                                                                                                                                                                                              |
| 23  | `rating`        | StoreReview prompt on 4-5 star tap. Auto-advances to paywall after 3s if untouched.                                                                                                                                                                                                                                                                           |
| 24  | `paywall`       | User-customized. Hard paywall (no close button) with 3-tier commitment selection: Annual Mastery ($49.99/year with a 3-Day Challenge trial, Only $4.17/mo), 90-Day Reset ($24.99/3-months, Only $8.33/mo), and Monthly Tactical ($12.99/month, Cancel anytime). Only subscribing unlocks the tabs by calling `setCompleted()` + `startHarness(goalDays, why)`. |

---

## 5. Tab 1: The Anvil (Home)

The single most-opened screen. Top to bottom:

### 5.1 Top nav

- Micro-label: `{firstName}'s Anvil` or `The Anvil`
- Settings icon (top-right). Long-press = dev shortcut to Sunday Review preview.

### 5.2 Stat strip — 3 cards

| Card          | Source                                                                 |
| ------------- | ---------------------------------------------------------------------- |
| Day           | `computeCurrentStreak(startedAt)`                                      |
| Strike streak | `strikeStreak` (consecutive days struck, separate from harness streak) |
| Energy        | `lifetimeEnergy = sum of energyTransactions deltas`                    |

### 5.3 Hero card — the forge

Wrapped in a single `LinearGradient` (ink-700 → ink-950) container. Contains:

- Phase label + description ("Iron Heat — The hammer is falling. You're taking shape.")
- **Blade visual** at size 170, breathing, in the user's chosen skin. **Tap → opens `/(blade)` detail sheet.**
- **Sparks layer** — 14 spark particles, fire on Strike
- **Energy delta** — `+N ⚡` floater rises after Strike
- **Anvil base** — stylized slab the blade visually rests on (ember rim + 2-tier dark gradient)
- **Strike button** — full-width ember CTA with hammer icon and reward chip. Disabled state when struck today: "Struck for today · Come back tomorrow."
- **Strike streak indicator** below — `🔥 N-day strike streak`

### 5.4 Today's Quests

3 quest cards generated daily by `useQuestStore.refreshIfNeeded()`. Each domain (prevention / physical / mindset) contributes 1.

Card: domain icon (shield/barbell/eye) + title + reward chip + checkbox.

- Tap → marks complete, fires `tap()` haptic, logs `EnergyTx(+reward, 'quest:{id}')`
- Completed = 50% opacity + line-through
- All 3 done: "All struck. Come back tomorrow."

### 5.5 Energy progress bar

Bar to next milestone tier (250 / 500 / 1000 / 2500 / 5000 / 10000 / 25000). Shows `lifetime / target` and weekly delta. Tap → routes to Settings.

### 5.6 Log a Fracture

Muted text-only link at the bottom. Tap → opens `/(fracture)/autopsy`.

### 5.7 Auto-open hooks

Two effects on mount:

- **Sunday Review** — auto-opens `/(sunday)` if today is Sunday, daysIn ≥ 7, and `lastSundayReviewWeek !== currentSundayKey`. 600ms delay.
- **Milestone celebration** — picks the largest unshown reached milestone via `pickMilestoneToShow()`, opens `/(milestone)?day=N`. 900ms delay.

---

## 6. Tab 2: Journal (Timeline)

Single chronological feed merging three event types — **not** four separate tabs. Reads like a diary, not an app.

### 6.1 Header

- Micro-label "THE MEMORY OF THE HARNESS" + "Journal" headline
- **Compact stats strip** — 4 chips: Cycles · Best · Avg · Trend (↑/↓/→)

### 6.2 Filter pills

Horizontal scroll: `All · Harvested {n} · Fractures {n} · Lines {n}`. Tap = Light haptic + filter switch.

### 6.3 Composer (only on All / Lines + not yet written today)

SQLite-backed Operator's Log entry composer:

- Multiline TextInput, 280-char counter, min 3 chars to enable
- "Mark it" button → Medium haptic + `addLogEntry({ text, dayAtWrite, phaseAtWrite })`
- Once filed: replaced with "Today's line marked" pill. **One per calendar day.**

### 6.4 Timeline cards

Three event shapes, sorted newest-first:

**Harvested** (urge logs where `harvested === true`)

- Ember flash icon + date/time + intensity + archetype + `+N ⚡` chip

**Fracture**

- Red-500 left accent border + alert icon + date/time + "Closed #N · Yd" badge (which cycle and how long)
- DataRow grid: Where / Trigger / Protocol next time / Phase reached

**Log Line** (from SQLite `operator_log` table)

- Ember-500 left accent + document icon + "Day N · Phase" + date/time + the user's text

### 6.5 Empty states

Filter-aware. No fractures: "No fractures logged. Stay sharp. The day you log one, the autopsy is the data — not the identity."

---

## 7. Tab 3: Crucible (Center Modal)

The crisis tool — fires when an urge hits. Always opens fresh, even if already open. **Spec: ≤ 3 taps and ≤ 10 seconds from button-press to "protocol issued."**

### 7.1 Flow

```
/(crucible)/index       Urge Detected — pulsing ember ring + "Tap to begin"
   ↓
/(crucible)/intensity   1-10 slider with color escalation (amber → ember → red)
   ↓
/(crucible)/protocol    Archetype × Intensity command + execution
   ↓
/(crucible)/harvested   Energy reward + "Back to the Anvil"
```

### 7.2 Protocol types

Defined in `lib/protocols.ts`. Five execution kinds:

| Type            | Sensor         | Behavior                                                                                                                           |
| --------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `timer`         | None           | Countdown auto-completes.                                                                                                          |
| `accelerometer` | `expo-sensors` | Pushup detection via Z-axis spike pattern with 450ms debounce. Tap-to-count fallback if sensor unavailable.                        |
| `motion_timer`  | `expo-sensors` | Walk verification — countdown only advances while user is moving. Idle 30s+ pauses timer + shows "Idle · timer paused".            |
| `breath`        | None           | Guided 4-7-8 / 4-4-4-4 with phase haptics on each breath cycle, expanding/contracting orb.                                         |
| `wim_hof`       | None           | 3 rounds × 30 power breaths → exhale-and-hold (60s) → recovery breath (15s). Heavy haptic on hold transition, success on recovery. |

### 7.3 Archetype × Intensity matrix

Every archetype has 5 intensity bands (1-2 / 3-4 / 5-6 / 7-8 / 9-10). Examples:

- **Operator 7-8:** "40 pushups, then cold water on face and wrists." (accelerometer)
- **Builder 1-2:** "Close every open tab. Open your project. 20-minute deep work sprint." (timer 1200s)
- **Athlete 9-10:** "Go to the gym right now. Or run until your legs hurt." (motion_timer 900s)
- **Warrior 9-10:** "Wim Hof breathing — 3 rounds." (wim_hof)

Generic free-tier fallback when archetype is unset.

### 7.4 Harvested screen

- Heavy success haptic + 3-ring concentric burst (Reanimated)
- "Fuel Harvested" + intensity recap + `+N` energy points (intensity × 5)
- Lifetime energy delta display
- Auto-dismisses after 4s if no interaction

---

## 8. Tab 3: Oracle (Predictive Intelligence)

Pattern intelligence on the user's logged data.

### 8.1 Risk model

`computeRiskNow()` returns 0-100 score from five signals:

1. Current hour matches `urgeTimes` bands (+30)
2. Today's day-of-week is over-represented in past fractures (+20)
3. Current streak day is within ±2 of past failure days (+25)
4. Long gap since last logged urge (+15 / +8)
5. Within 1 hour of stated peak window (+15)

Score → `LOW` (<25) / `MEDIUM` (25-49) / `HIGH` (50-69) / `CRITICAL` (70+) with copy and color-coded card.

### 8.2 24-Hour heatmap

Bar per hour, weighted (urge=1, fracture=3), normalized 0-1, mapped to ember-900/700/500. Current hour gets a primary border.

### 8.3 Top triggers

Counts fractures by `trigger`, top 5, with 14-day-vs-prior trend (↑ red / ↓ green / → gray). Footer: "Top 3 account for {N}%".

### 8.4 Pattern insights

Auto-generated from data:

- Past-the-wall ("Your historical failure window centered around day {N}. You're at day {M}. You're past the wall.")
- In-the-wall (current day in failure zone — "Tighten everything for the next 48 hours.")
- Late-night pattern (% after 11 PM)
- Clean stretch (longest run on record)
- Trajectory (closing on lifetime best)
- Empty state when insufficient data

### 8.5 Next warning preview

Bottom card: "Tonight, 20 minutes before {peakWindow}." Shows what the next pre-window notification will say.

### 8.6 Live tick

Re-renders every 60s so risk + current-hour indicator follow real time.

---

## 9. Tab 4: Settings

Sectioned list. Every row functional — no "coming soon" placeholders.

### 9.1 Profile

- Name (edit via Alert.prompt — iOS only)
- Goal (change via three-button dialog)
- View pledge (read pledge as Alert)

### 9.2 Forge Skins

Section header shows live energy balance ("{N} ⚡ available").
Horizontal-scrolling SkinCard gallery — 9 skins:

- 3 starters (Forge Steel / Roman Gladius / Norse Seax) — owned by default
- 6 premium (Katana 500 / Kukri 500 / Claymore 750 / Tomahawk 750 / War Hammer 1000 / Spear 1000)
- States: equipped (ember border + breathing) / owned (tap to equip) / locked (tap to unlock)
- Tap locked → confirmation dialog → spends energy via `unlockSkin()`, auto-equips

### 9.3 Sound & Haptics

- **Haptics** toggle — fully wired to `lib/tactile`. Off = every haptic in app silenced.
- **Interaction sounds** toggle — persists state for when audio assets ship.

### 9.4 Security & Privacy

- Biometric lock toggle (FaceID — `biometricEnabled` flag set, real `expo-local-authentication` integration TBD)
- Data transparency alert — explains what's stored locally

### 9.5 Notifications

Master toggle. ON: requests OS permission + reconciles all schedules. OFF: cancels everything via `cancelAllForgeNotifications()`. Sublabel lists what's scheduled when on.

### 9.6 About

Rate / Support / Privacy / Terms / Version.

### 9.7 Danger Zone

- Log a Fracture → `/(fracture)/autopsy`
- Emergency reset (no fracture logged) — two-step confirm
- Delete all data — wipes both stores, returns to onboarding

---

## 10. Modal: Fracture Autopsy

`/(fracture)/autopsy` — required form. Cannot swipe-down dismiss.

### 10.1 Form (4 steps)

- **Step 1:** Where were you? — chip selector, uses user's diagnostic locations from onboarding when available
- **Step 2:** What was the trigger? — chip selector, uses user's diagnostic triggers
- **Step 3:** Emotional state — Bored / Stressed / Lonely / Anxious / Drunk / Tired / Angry / Numb
- **Step 4:** Protocol for next time — multiline textarea, min 10 chars

4-segment progress bar. Back button on steps 2+. Light haptic on chip select / step advance, Medium confirm on press-in of File button, **Warning haptic on file**.

On file: `logFracture({ location, trigger, protocol })` → routes to confirm.

### 10.2 Confirm

`/(fracture)/confirm`:

- Crack SVG appears at top quarter — single jagged horizontal line, 600ms reveal with scaleX growing from 0.4 to 1.0
- Subtle dim — content fades to 50% opacity 400ms after the crack
- "THE AUTOPSY IS FILED" → "Day 0." (7xl black) → "The fracture is data, not identity." → "The harness restarts now."
- Lifetime best pill (only if ≥ 3 days)
- "Restart the Harness" CTA → `router.dismissAll()` → Anvil

No shame language. No countdown. Spec voice exact match.

---

## 11. Modal: Sunday Review

`/(sunday)` — Whoop-style weekly stats reveal.

### 11.1 Auto-trigger

Fires once per Sunday on the first Anvil mount of that day. Conditions:

- Today is Sunday (`getDay() === 0`)
- `daysIn ≥ 7` (no review for week 1)
- `lastSundayReviewWeek !== currentSundayKey`

Once dismissed, `markSundayReviewShown()` blocks re-fire that week.

### 11.2 Layout

- **Hero card** — full ember gradient (ember-500 → ember-700 → ember-900 → ink) with diagonal warmth fade. Shows `Week N · Day X`, huge `7 / 7 days clean`, energy pill `+210 ⚡`, trend pill `↑ 15% vs last week`.
- **Stat row** — Strikes (struck/days) · Quests (completed/target) · Crucibles
- **Standout card** — auto-generated from week's data. High-intensity Crucible if any: `"Fri 10 PM — intensity 8 urge, harvested. The urge had no power."` Otherwise clean-streak callout.
- **Quote card** — left-bordered ember accent, rotates through 5 free-tier quotes by week number (Aurelius / Jocko / Frost / Clear / Anonymous)
- **Closing line** — `"{firstName}, the iron is on day {day}. Strike it again tomorrow."`
- **Sticky "Step Out" CTA**

Medium haptic on mount, Success haptic 300ms later.

---

## 12. Modal: Milestone Unlocks

`/(milestone)?day={N}` — full-screen white-hot celebration for day 1/3/7/14/30/60/90/180/365.

### 12.1 Sequence

1. Black flash overlay fades out (220ms)
2. White-hot screen flash 200ms in / 500ms out
3. Blade scales in via spring + slow rotating halo
4. Heavy haptic + 24-spark burst (mixed ember + white-hot, gravity-affected)
5. Success haptic 300ms after
6. Phase name reveal (5xl black) → subtitle → reward card

### 12.2 Reward dispensing

Milestone catalog in `lib/milestones.ts`. Each entry has `day`, `phaseName`, `subtitle`, `energy`, `unlocks[]`. On modal mount:

- `logEnergy(milestone.energy, 'milestone:{day}')`
- `markMilestonesShown(reachedMilestoneDays(currentDay))` — marks this and all earlier reached so we don't cascade

### 12.3 Dismiss lock

"Step Out" button disabled for first 3000ms. Heavy moments earn their pause.

---

## 13. Modal: Blade Detail

`/(blade)` — opens by tapping the blade on the Anvil.

- Top bar: "BLADE DETAIL · {SkinName}" + close
- **Big day count** (7xl ember) + phase label + phase description
- **Center blade visual** at size 170, breathing
- **Live elapsed counter** updating every 1s: `Xd · Yh · Zm · Ws`
- **2×2 stats grid**: Best streak / Total strikes / Quests done / Harvests · Fractures
- **Phase roadmap** — 8-stage timeline with each stage's start day, ember dots show reached/current/locked. Footer: "Next: {NextPhase} in {N} days" or "Tempered. Mastery Mode unlocked."

---

## 14. Data & State

### 14.1 Zustand stores

All persist via AsyncStorage.

**`useOnboardingStore`** — captured during the 24-screen flow:

```ts
{
  gender, ageBracket,
  currentFrequency, yearsStruggling, longestStreak,
  triggers[], urgeTimes[], locations[], impacts[],
  computedProfile?: { label, hoursLostEstimate, daysLostEstimate, weeklyHoursLost, dominantTriggerClass, peakWindow },
  why, archetype, equippedSkin,
  goalDays, harnessStartDate, firstName, pledgeSignedAt,
  notificationsEnabled?, biometricEnabled?,
  isCompleted, isPro, lastScreenVisited, startedAt
}
```

**`useHarnessStore`** — runtime state of the active harness:

```ts
{
  startedAt: string | null,    // current cycle start
  goalDays, why,
  fractures: Fracture[],       // historical fractures
  urgeLogs: UrgeLog[],         // Crucible log
  strikes: Strike[],           // daily Strike log
  strikeStreak: number,        // consecutive days struck
  energyTransactions: EnergyTx[],  // earn + spend log (negative deltas for spends)
  lifetimeStreak: number,      // all-time longest harness streak
  lastSundayReviewWeek: string | null,
  milestonesShown: number[],   // [1, 3, 7, ...] of celebrated days
  ownedSkins: string[],        // includes 3 free starters by default
}
```

Actions: `startHarness`, `logFracture`, `logUrge`, `logStrike`, `logEnergy`, `unlockSkin`, `markSundayReviewShown`, `markMilestonesShown`, `reset`. Migration via `onRehydrateStorage` ensures legacy state always has `ownedSkins` populated.

**`useQuestStore`** — daily-rotating quest set:

```ts
{
  generatedFor: string | null,  // YYYY-MM-DD
  quests: Quest[],              // 3 active for today
  completed: string[],          // questIds done today
}
```

`refreshIfNeeded()` regenerates if `generatedFor !== today`. Library has 12 quests (4 per domain). Picks 1 from each domain randomly.

**`useSettingsStore`** — user preferences:

```ts
{
  (hapticsEnabled, interactionSoundsEnabled, ambientPack);
}
```

`lib/tactile.ts` reads `hapticsEnabled` synchronously via `getState()` so every haptic call site stays a one-liner that respects the toggle.

### 14.2 SQLite (`expo-sqlite`)

One DB file: `harness.db`. Initialized via `initDb()` at root layout mount.

Tables:

- `user`, `diagnostic`, `harness` — declared in schema, not yet wired (Zustand stores cover these for now)
- `operator_log` — **the only actively used table.** Schema:
  ```sql
  CREATE TABLE operator_log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    written_at TEXT NOT NULL,
    day_at_write INTEGER NOT NULL,
    phase_at_write TEXT NOT NULL
  );
  CREATE INDEX idx_operator_log_written_at ON operator_log (written_at DESC);
  ```
  Helpers in `db/operatorLog.ts`: `addLogEntry`, `getLogEntries`, `getTodaysLogEntry`, `getLogCount`.

---

## 15. Notification System

Local-only, scheduled via `expo-notifications`. No remote push, no APNs/FCM.

### 15.1 Notification types

| Identifier              | When                                    | Content                                                  | Tap-route              |
| ----------------------- | --------------------------------------- | -------------------------------------------------------- | ---------------------- |
| `forge.strike-reminder` | 8 PM daily, cancelled if struck today   | "The iron is still cold."                                | Anvil                  |
| `forge.sunday-review`   | Sunday 9 AM                             | "The week is in. Your Sunday Review is ready."           | `/(sunday)`            |
| `forge.pre-window`      | Daily, 20 min before stated peak window | "High-risk window in 20 min. Phone outside the bedroom." | Anvil                  |
| `forge.quest-reminder`  | 10 PM if any quest still open           | "{N} quests still open. Two hours until midnight."       | Anvil                  |
| `forge.milestone.{day}` | Exact moment streak crosses threshold   | "Day {N}. {PhaseName}." + subtitle                       | `/(milestone)?day={N}` |

### 15.2 Reconciliation

`reconcileNotifications(snapshot)` is the single source of truth — takes a full state snapshot, gates on permission + master flag, schedules all 5 categories. Idempotent. Returns `{ permissionsGranted }` so caller can sync the master flag if OS revoked.

Called from:

- **App launch** — root `useEffect` mount
- **App foreground** — `AppState.addEventListener('change')` (5s throttle)
- **Strike fires** — store subscriber
- **Quest completion** — store subscriber
- **Fracture logged** — store subscriber → milestones cancel + reschedule from new `startedAt`
- **Settings master toggle** — direct call

### 15.3 Tap routing

`Notifications.addNotificationResponseReceivedListener` reads the `data.type` discriminator and routes via `expo-router`. `getLastNotificationResponseAsync()` handles cold-launch taps (300ms defer so router is ready).

### 15.4 OS revocation guard

On launch + every foreground transition, checks `hasNotificationPermissions()`. If `notificationsEnabled === true` in store but OS now says denied, automatically syncs the flag to false and cancels schedules.

---

## 16. Tactile Design Language

Every interaction has weight. Defined in `lib/tactile.ts`:

### 16.1 Haptic vocabulary

| Helper           | Mapping                   | When                                                       |
| ---------------- | ------------------------- | ---------------------------------------------------------- |
| `tap()`          | `Light`                   | Selection, secondary press                                 |
| `confirm()`      | `Medium`                  | Forward navigation, primary action                         |
| `heavy()`        | `Heavy`                   | Critical confirmation, milestone                           |
| `success()`      | `Notification.Success`    | Completion, celebration                                    |
| `warn()`         | `Notification.Warning`    | Fracture log, motion-timer stall                           |
| `select()`       | Selection                 | Slider scrub, segment change                               |
| `strikeHaptic()` | `Heavy` + 80ms + `Medium` | **Reserved for the Strike only.** The protected signature. |

All helpers respect `useSettingsStore.hapticsEnabled` — flip it off and every haptic in the app silences.

### 16.2 Named visual primitives

| Primitive         | Use                           | Composition                                                                                           |
| ----------------- | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| **The Strike**    | Daily ritual                  | Double haptic + iron flash (ember-500/30) + 12 sparks + iron heats + +energy floater                  |
| **The Spark**     | Quest complete, energy event  | Light haptic + 4-6 ember dots radiate outward                                                         |
| **The Harvest**   | Crucible complete             | Success haptic + 3-ring concentric burst (Reanimated) + energy ticker                                 |
| **The Milestone** | Day 7/30/90/etc.              | Heavy + Success haptics + black flash + white-hot screen flash + 24 mixed-color sparks + blade reveal |
| **The Crack**     | Fracture confirm              | Warning haptic + jagged SVG line scaleX 0.4→1.0 + content dim to 50%                                  |
| **The Pulse**     | Crucible "Urge Detected" idle | Continuous ember ring breathing                                                                       |

### 16.3 Motion tokens

- Durations: `INSTANT 100ms` / `FAST 200ms` / `BRISK 320ms` / `STANDARD 500ms` / `EXPANSIVE 800ms` / `CINEMATIC 1400ms`
- Easings: `enterEase` (out cubic), `exitEase` (in cubic), `breatheEase` (inOut ease), `springTactile`, `springBouncy`, `linear`

### 16.4 Component primitives (in `components/forge/`)

- **`BladeVisual`** — 8 evolution stages (Raw Iron → Tempered Steel) × 9 SVG silhouettes (3 free + 6 premium) with linear gradient fills, edge stripe, breathing scale + glow halo
- **`AnvilBase`** — stylized slab the blade rests on, with ember rim
- **`Spark`** — single ember particle with random angle/distance/delay, gravity-affected
- **`EnergyDelta`** — `+N ⚡` floater
- **`StrikeButton`** — pre-strike pulsing CTA / post-strike "Struck for today"
- **`SkinCard`** — equipped / owned / locked states for Settings gallery

---

## 17. Energy Economy

### 17.1 Earn rates

| Action                | Energy                                             |
| --------------------- | -------------------------------------------------- |
| Daily Strike          | +10 (+5 at day 7+, +15 at day 30+, +25 at day 90+) |
| Quest complete        | +15 to +25 (depends on quest)                      |
| Crucible harvested    | intensity × 5                                      |
| Self-managed Crucible | +5 (intensity 1)                                   |
| Milestone             | +50 (day 1) → +10000 (day 365)                     |

All earns log positive `EnergyTx` deltas to the harness store.

### 17.2 Spend (currently)

| Item               | Cost                                  |
| ------------------ | ------------------------------------- |
| Premium blade skin | 500 / 750 / 1000 ⚡ depending on skin |

Spends log negative deltas with reason `spend:skin:{id}` so transaction history is auditable.

### 17.3 Critical rules

- **Energy cannot be purchased with money.** Earned only.
- **Energy never decays.**
- **Energy survives fracture** — only the abstinence streak resets.
- Lifetime balance = sum of all `energyTransactions` deltas (negatives included).

---

## 18. Not Built (Deferred)

| Item                                                                                                          | Why deferred                                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Sound assets (`.wav` bank: strike / spark / harvest / milestone / crack / tap / quest_complete)               | External audio work needed. Code wiring is small (~1 hr) once assets exist. Toggle UI is already in Settings. |
| RevenueCat subscription flow                                                                                  | Needs RevenueCat keys + product IDs. Pre-App-Store work.                                                      |
| `isPro` flag + Pro feature gates (Oracle restrictions, archetype protocol gating, Sunday Review history caps) | Depends on RevenueCat. Currently everyone gets full features.                                                 |
| Quote Library packs (Goggins / Jocko / Huberman / Cal Newport / Aurelius II)                                  | Needs curated quote content. Aurelius pack is bundled implicitly via Sunday Review rotation.                  |
| Sunday Review share-as-image                                                                                  | Needs `react-native-view-shot`.                                                                               |
| Operator's Log community feed                                                                                 | Cut from spec — Forge stays local-only forever. The personal SQLite diary is what shipped.                    |
| Real accelerometer pushup detection edge cases                                                                | Tap-to-count fallback works. Counts gameable but acceptable v1.                                               |
| Quiet hours for notifications                                                                                 | Not retention-critical for the typical user (8 PM strike + 9 AM Sunday don't hit quiet hours anyway).         |
| Daily morning check-in notification                                                                           | Adds complexity, no Settings UI built for time-picker.                                                        |
| iOS notification actions ("Strike now" inline button)                                                         | iOS-only complexity, requires category registration.                                                          |
| App disguise icon (Calculator/Notes/Weather)                                                                  | Pro-tier feature, no native icon-switching wired.                                                             |

---

## 19. Pre-Ship Calibration Checklist

Per `tactile.md §11`, do a one-day calibration pass before submitting v2 to TestFlight. Walk through every interaction with headphones, in a quiet room. Anything that doesn't make you smile or feel weight = redesign.

- [ ] Reset onboarding from Settings → walk all 24 screens
- [ ] First Strike — does the double-haptic + spark burst land?
- [ ] Anvil → strike → confirm sparks + blade flash + +energy floater are crisp
- [ ] Complete all 3 Quests → energy increments → "All struck"
- [ ] Long-press settings icon → Sunday Review preview opens
- [ ] Manually navigate to `/(milestone)?day=7` → 3-second dismiss lock works
- [ ] Tap "Log a Fracture" → autopsy 4 steps → confirm crack animation → restart drops on Anvil with Day 0
- [ ] Open Journal → write Operator's Log line → composer replaced with "Today's line marked"
- [ ] Toggle Haptics OFF in Settings → confirm every interaction goes silent
- [ ] Settings → Forge Skins → tap locked Katana → confirmation → unlock + auto-equip → Anvil's blade switches
- [ ] Notifications: Settings master OFF → confirm `cancelAllForgeNotifications` clears all scheduled
- [ ] Notifications: Settings master ON → confirm strike reminder is scheduled for 8 PM today (or tomorrow if struck)
- [ ] Tap a fired notification → routes to correct screen (sunday → /(sunday), milestone → /(milestone)/?day=N, others → Anvil)
- [ ] Reduced Motion ON in iOS settings → re-test Anvil (not yet implemented — flagged in §18)
- [ ] Cold launch on a slow device → first paint <1.2s, Strike-press to haptic <50ms

---

## 20. File Map

```
app/
├── _layout.tsx                       Root: theme, notification listeners, store subscriptions
├── index.tsx                         Gate redirect
├── (onboarding)/                     24 screens — see §4
├── (tabs)/
│   ├── _layout.tsx                   Tab bar config + center Crucible interceptor
│   ├── index.tsx                     Anvil — see §5
│   ├── journal.tsx                   Timeline — see §6
│   ├── crucible.tsx                  Stub for tab routing
│   ├── oracle.tsx                    Risk + insights — see §8
│   └── settings.tsx                  Settings — see §9
├── (crucible)/                       Crucible flow — see §7
├── (fracture)/                       Autopsy + confirm — see §10
├── (sunday)/index.tsx                Weekly review — see §11
├── (milestone)/index.tsx             Day-threshold celebration — see §12
└── (blade)/index.tsx                 Blade detail sheet — see §13

components/forge/
├── BladeVisual.tsx                   Evolving blade SVG + 9 skins
├── AnvilBase.tsx                     Slab under blade
├── Spark.tsx                         Single ember particle
├── EnergyDelta.tsx                   +N ⚡ floater
├── StrikeButton.tsx                  Daily ritual button
└── SkinCard.tsx                      Settings gallery card

lib/
├── tactile.ts                        Haptic vocabulary
├── notifications.ts                  Local notification scheduler + reconcile
├── milestones.ts                     Milestone catalog + helpers
└── protocols.ts                      Crucible archetype × intensity matrix

store/
├── useOnboardingStore.ts             Onboarding draft + isCompleted
├── useHarnessStore.ts                Active harness state + skin ownership
├── useQuestStore.ts                  Daily quest rotation
└── useSettingsStore.ts               Haptics / sounds / ambient toggles

db/
├── index.ts                          SQLite schema + initDb
└── operatorLog.ts                    Operator's Log CRUD helpers
```

---

## 21. Build Order (for re-implementation)

If you ever rebuild from scratch, build in this order:

1. **Stores** — useOnboardingStore + useHarnessStore (skeleton)
2. **`lib/tactile.ts`** — haptic helpers
3. **`components/forge/`** — BladeVisual, Spark, EnergyDelta, StrikeButton, AnvilBase, SkinCard
4. **Onboarding** — 24 screens in act order; First Strike + First Blade are the v2 differentiators
5. **Anvil** — home screen consuming the stores + components
6. **Crucible flow** — protocol matrix in `lib/protocols.ts`, then 4-screen modal
7. **Quest system** — useQuestStore + Anvil quest panel
8. **Energy economy** — `unlockSkin`, Settings gallery, energy display on Anvil
9. **Journal** — timeline merge of harvested + fractures + log
10. **Fracture autopsy** — 4-step form + confirm
11. **Sunday Review** — weekly stats modal + auto-trigger
12. **Milestone unlocks** — celebration modal + auto-trigger from Anvil
13. **Blade detail sheet**
14. **Oracle** — risk model + heatmap + insights
15. **SQLite Operator's Log** — schema + CRUD + Journal sub-feed
16. **Notification system** — schedules + reconcile + tap routing
17. **Settings** — Profile / Skins / Sound & Haptics / Notifications / Privacy / About / Danger
18. **Calibration day** — pre-ship checklist (§19)
