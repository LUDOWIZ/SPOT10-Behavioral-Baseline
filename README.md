SPOT10: Behavioral Baseline Tracker 🌈🛣️
Project Status: Live Pilot (Internal: Op. Rainbow Road)

🚀 The Vision
As an HR expert, music consumption is more than just entertainment—it’s a strategic tool for optimizing cognitive output. SPOT10 is the technical realization of the Cognitive Load Management pilot, designed to extract and quantify mental states via the Spotify Web API.

🧠 The Analysis Model: Insights & BPM Recommendations
Instead of observing static states, SPOT10 utilizes your Top 15 most-played tracks to identify patterns and generate recommendations for future work and study sessions:

BPM Mapping: Identifying your "cognitive pulse" by analyzing the tempo of your current listening habits.

Performance Insights: Analyzing the soundscape to understand which environments actually trigger your deep focus.

Proactive Recommendations: The system suggests musical adjustments to either boost energy during slumps or lower cognitive load before deep work.

🛠 Technical Setup
1. Spotify Developer Portal
Log in to the Spotify Developer Dashboard.

Create a new app and navigate to Settings.

Configure the following (critical for authentication):

Website: http://127.0.0.1:8888

Redirect URI: http://127.0.0.1:8888/callback

Click Save.

2. Node.js & Environment (VS Code)
If node -v does not return a version number in your terminal, run the following steps in the VS Code terminal (Ctrl + ~):

Install & Activate nvm (Node Version Manager):

Bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
. "$HOME/.nvm/nvm.sh"
Install Node 22 (LTS) & Dependencies:

Bash
nvm install 22
npm install express axios dotenv
3. Configuration (.env)
Create a file named .env in the project root folder and paste your credentials:

Kodavsnitt
SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID
SPOTIFY_CLIENT_SECRET=YOUR_CLIENT_SECRET
REDIRECT_URI=http://127.0.0.1:8888/callback
4. Run the Pilot
Start the server:

Bash
node server.js
Open http://127.0.0.1:8888 in your browser to log in and initiate the extraction.

📈 Future Roadmap: Neuro-HR
Predictive Burnout Prevention: Detecting shifts in musical valence (positivity) over time as an early warning signal.

Flow-State Matching: Optimizing team compositions based on synchronized cognitive rhythms.

Developed as a strategic HR-innovation pilot under the internal code name Op. Rainbow Road.
