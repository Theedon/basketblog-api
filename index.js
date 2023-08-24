const express = require("express");
const cors = require("cors");
const app = express();
const teamRoutes = require("./routes/teamsRoutes");
const playerRoutes = require("./routes/playersRoutes");
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${3000}`);
});

app.get("/", (req, res) => {
  res.status(200).send({
    data: "this is a node api serverless function hosted on vercel that serves data to the basketblog project",
  });
});

app.use("/teams", teamRoutes);

app.use("/players", playerRoutes);

app.use((req, res, next) => {
  res.redirect("/");
});
