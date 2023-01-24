const path = require('path');
const express = require("express");
const app = express();
const routes = require('./hello');

app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) =>
  res.sendFile(
    path.resolve(__dirname, 'frontend', 'build', 'index.html')
  )
);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
