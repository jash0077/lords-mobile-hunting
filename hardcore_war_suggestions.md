# Hardcore War Tools: Strategic Technical Suggestions for HEM Guild

Since the previous suggestions were too general, here are five **highly specific, technical tools** designed for competitive guild management and war strategy.

---

## 1. Rally Survival (Trap) Calculator
This is the most requested tool for "Trap" accounts (Solo or Rally traps).
*   **The Math**: Input your current troop counts (T2/T4/T5) and your current stats (HP/Defense/Attack).
*   **The Simulation**: Input the "Enemy Profile" (e.g., a 1300% Attack Rally Leader with Maxed Familiars).
*   **The Output**: A prediction of whether you will **"Cap"** (stop) the rally, **"Walk"** (lose but keep your hero), or **"Burn."** It should calculate the exact number of T2 "meat" troops you will lose and how many will go to the Sanctuary vs. Infirmary.

## 2. Kingdom Migration Rank Predictor
Crucial for guilds planning to move to a new kingdom to avoid being "zeroed" by local Titans.
*   **Data Scraper/Input**: Input the top 50 rankings of a target Kingdom (available via in-game leaderboards).
*   **Guild Mapping**: Automatically place your guild members into that leaderboard.
*   **Safety Score**: Assign a "Safety Score" to each member. For example: *"If we move to K123, Player X will be Rank 45. Highly likely to be targeted. Needs to stay shielded 24/7."*

## 3. Stat-Based Rally Leaderboard (OCR)
Kills don't tell the whole story; stats do.
*   **Feature**: Instead of just kills, have members upload screenshots of their **"Player Stats"** page.
*   **OCR Extraction**: Extract "Infantry Attack," "Cavalry Attack," "Ranged Attack," and "Army HP."
*   **The Leaderboard**: Rank players by their **Highest Single-Type Attack**. This tells the R5/R4 exactly who should lead an Inf Rally vs. a Cav Rally during a Wonder War.

## 4. Healing & Sanctuary RSS Calculator
After a massive Wonder War or a failed defense, healing costs can bankrupt a player.
*   **Input**: Number of wounded/dead troops by Tier.
*   **Output**: The exact amount of Food, Wood, Stone, Ore, and Gold needed.
*   **Speedup Calculation**: Total healing time minus the player's "Healing Speed" stat.
*   **Sanctuary Integration**: Calculate how many "Divine Providence" points are needed to recover troops from the Sanctuary.

## 5. Counter-Familiar Strategy Matrix
High-level war is now decided by Familiars (Pyris, Hoarder, etc.).
*   **The Tool**: A logic-based guide where you input the enemy's formation and their active Familiars.
*   **The Result**: It suggests not just the troop counter, but the **Familiar Counter**. (e.g., *"Enemy is using Jade Wyrm? Use X Familiar to trigger your shield earlier."*)

---

### Implementation Path for `lords-mobile-hunting`
Since you already have **Google Sheets integration** and **OCR** in your `admin-control.html`, **Suggestion #3 (Stat Leaderboard)** is the easiest to build next. It would use your existing OCR logic to turn screenshots into a "Best Stats" database.

Which of these fits your guild's current needs better?
