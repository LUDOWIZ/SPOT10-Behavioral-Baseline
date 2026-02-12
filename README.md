SPOT10: Behavioral Baseline Tracker 🌈🛣️
Project Status: Live Pilot (Internal: Op. Rainbow Road)

🚀 The Vision:
Som HR-expert är musikkonsumtion inte bara underhållning – det är ett strategiskt verktyg för att optimera kognitiv output. SPOT10 är den tekniska realiseringen av piloten Cognitive Load Management, designad för att extrahera och kvantifiera mentala tillstånd via Spotify Web API.

🧠 Analysmodellen: Insights & BPM-rekommendationer
Istället för statiska tillstånd använder SPOT10 dina Top 15 mest spelade låtar för att identifiera mönster och generera rekommendationer för framtida arbete och studier:

BPM-mappning: Identifiering av din kognitiva puls genom analys av tempot i din nuvarande lyssning.

Performance Insights: Analys av ljudbilden för att förstå vilka miljöer som faktiskt triggar ditt fokus.

Proaktiva rekommendationer: Systemet föreslår musikaliska justeringar för att antingen höja energin vid svackor eller sänka kognitiv belastning inför djuparbete.

🛠 Kom igång (Technical Setup)
1. Förberedelser i Spotify Developer Portal
Logga in på Spotify Developer Dashboard.

Skapa en ny app och gå till Settings.

Konfigurera följande (kritiskt för autentisering):

Website: http://127.0.0.1:8888

Redirect URI: http://127.0.0.1:8888/callback

Klicka på Save.

2. Installation av Node.js & Miljö (VS Code)
Om node -v inte ger ett versionsnummer i terminalen, kör följande steg i VS Code-terminalen (Ctrl + ö):

Installera nvm (Node Version Manager):

Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
Aktivera nvm:

Bash
. "$HOME/.nvm/nvm.sh"
Installera Node 22 (LTS):

Bash
nvm install 22
Installera bibliotek för SPOT10:

Bash
npm install express axios dotenv
3. Konfiguration (.env)
Skapa en fil döpt till .env i projektets rotmapp och klistra in dina nycklar:

Kodavsnitt
SPOTIFY_CLIENT_ID=DITT_CLIENT_ID
SPOTIFY_CLIENT_SECRET=DITT_CLIENT_SECRET
REDIRECT_URI=http://127.0.0.1:8888/callback
4. Kör piloten
Starta servern med:

Bash
node server.js
Gå till http://127.0.0.1:8888 i din webbläsare för att logga in och initiera extraktionen.

📈 Future Roadmap: Neuro-HR
Predictive Burnout Prevention: Detektering av skiftningar i valence över tid som varningssignal.

Flow-State Matching: Optimering av team-sammansättningar baserat på synkroniserade kognitiva rytmer.

Developed as a strategic HR-innovation pilot under the internal code name Op. Rainbow Road.
