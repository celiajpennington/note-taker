const express = require('express');
const htmlRoutes = require("./Routes/html-routes")
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));
app.use("/", htmlRoutes);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

