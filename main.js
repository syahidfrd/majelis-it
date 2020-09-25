const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// http://localhost:5000/product (GET)
app.get('/product', (req, res) => {
  res.status(200).json({
    message: 'Data products',
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
