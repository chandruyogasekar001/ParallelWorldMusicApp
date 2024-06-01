const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

// Define your music files with corrected raw GitHub URLs
const musicFiles = [
  { id: 1, title: "Katchi Sera", url: "https://raw.githubusercontent.com/darkmatterwebspace/parallelspace/main/Katchi%20Sera.mp3" },
  { id: 2, title: "Toofan", url: "https://raw.githubusercontent.com/darkmatterwebspace/parallelspace/main/Toofan.mp3" },
  
  // Add more music files with their correct raw GitHub URLs
];

// Endpoint to get the list of music files
app.get('/api/music', (req, res) => {
  res.json(musicFiles);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
