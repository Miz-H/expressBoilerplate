const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8181;

app.use(express.static(path.join(__dirname, "public")))


//route(s)
app.use("/foo", require("./routes/foo"))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => console.log(`Server listening on localhost:${PORT}`))