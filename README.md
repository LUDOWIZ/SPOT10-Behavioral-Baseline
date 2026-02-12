# SPOT10: Behavioral Baseline Tracker 🌈🛣️
Detta projekt är en del av den interna strategin **Op. Rainbow Road**. Syftet är att skapa en teknisk brygga för att extrahera användardata (Top 15 tracks) för att analysera kognitiva och beteendemässiga baslinjer.

## 🚀 Kom igång

### 1. Förberedelser i Spotify Developer Portal
* Skapa en app på [Spotify Developer Dashboard](https://developer.spotify.com/dashboard).
* Gå till **Settings** och sätt följande adresser:
    * **Website:** `http://127.0.0.1:8888`
    * **Redirect URI:** `http://127.0.0.1:8888/callback`
* Spara ändringarna.

### 2. Lokal Installation
* Klona detta arkiv.
* Installera nödvändiga bibliotek via terminalen:
  ```bash
  npm install express axios dotenv