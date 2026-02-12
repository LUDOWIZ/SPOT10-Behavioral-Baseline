require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8888;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.REDIRECT_URI;

app.get('/', (req, res) => {
  res.send('<h1>SPOT10: HR-Energy Bridge</h1><a href="/login">Logga in med Spotify för att se Top 15</a>');
});

app.get('/login', (req, res) => {
  const scope = 'user-top-read';
  res.redirect(`https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${encodeURIComponent(redirect_uri)}`);
});

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const authResponse = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirect_uri,
      client_id: client_id,
      client_secret: client_secret,
    }).toString(), { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

    const accessToken = authResponse.data.access_token;
    const topTracksResponse = await axios.get('https://api.spotify.com/v1/me/top/tracks?limit=15&time_range=short_term', {
      headers: { 'Authorization': `Bearer ${accessToken}` }
    });

    let html = '<h1>Ditt SPOT10 Dataset (Top 15)</h1><ol>';
    topTracksResponse.data.items.forEach(track => {
      html += `<li><strong>${track.name}</strong> av ${track.artists[0].name}</li>`;
    });
    html += '</ol><a href="/">Tillbaka</a>';
    res.send(html);
  } catch (error) {
    res.send('Fel vid hämtning av data. Kontrollera dina nycklar i .env och Redirect URI i Spotify Dashboard.');
  }
});

app.listen(port, () => {
  console.log(`SPOT10 körs! Gå till http://127.0.0.1:${port}`);
});