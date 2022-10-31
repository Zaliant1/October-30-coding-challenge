const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/js", express.static(path.join(__dirname, "js")));
app.listen(4000, () => console.log("up on 4000"));

app.get("/", (req, res) => {
  res.status(200).send();
});
