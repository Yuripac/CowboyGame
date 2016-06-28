let express = require("express");
let app     = express();

app.use(express.static(__dirname + "/assets"));
app.use(express.static(__dirname + "/lib"));
app.use(express.static(__dirname + "/"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
