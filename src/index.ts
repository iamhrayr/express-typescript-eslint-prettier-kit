import express from 'express';

// Create Express server
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log('listening on', PORT);
});
