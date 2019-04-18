const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("/", express.static("index.html"));

app.listen(process.env.PORT || 3000, process.env.IP, function() {
    console.log("The Planto App Has Started!");
});
