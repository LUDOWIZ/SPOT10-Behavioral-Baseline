# 📊 SPOT10: Behavioral Baseline Tracker

**Project Status:** Internal Pilot

---

## 🔍 Overview

SPOT10 is a small analytics project that explores how listening habits can be used to build a baseline profile of user preferences and work environments. By analyzing recently played and frequently played tracks, the system generates simple insights based on audio features available through the streaming platform API.

The goal is not to predict behavior, but to identify patterns that may be useful when organizing study sessions, focus work, or daily routines.

---

## 🧠 Analysis

SPOT10 uses the user's Top 15 most-played tracks and associated audio metadata to generate a listening profile.

Current metrics include:

- Tempo (BPM) distribution
- Energy and acousticness levels
- Danceability and valence trends
- Artist and genre concentration
- Listening consistency across the dataset

> [!NOTE]
> These metrics are combined into a baseline profile that can be compared over time as listening habits change.

---

## 🛠️ Technical Setup

### 1. API Configuration
Create an application in the streaming platform developer portal and configure the following:

> [!IMPORTANT]
> - **Website:** `http://127.0.0.1:8888`
> - **Redirect URI:** `http://127.0.0.1:8888/callback`

### 2. Node.js Environment
Install Node.js using NVM if required:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 22
nvm use 22
npm install express axios dotenv
```

### 3. Environment Configuration
Create a `.env` file in the project root:

CLIENT_ID=YOUR_CLIENT_ID
CLIENT_SECRET=YOUR_CLIENT_SECRET
REDIRECT_URI=http://127.0.0.1:8888/callback

### 4. Run
```bash
node server.js
```

> [!TIP]
> Open `http://127.0.0.1:8888` in your browser and complete the authentication flow.

---

## 🚀 Future Work

- [ ] Historical trend tracking
- [ ] Expanded audio feature analysis
- [ ] Comparative profile reporting
- [ ] Automated playlist generation
- [ ] Data export and visualization support
