const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.resolve(__dirname, "./build")));

const manifest = require("./build/asset-manifest.json");

const getImagePath = (originalFilename) => {
  const filename = Object.keys(manifest.files).find((key) => key.includes(originalFilename));
  return filename ? manifest.files[filename] : "";
};

app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    const imagePath = getImagePath("aboutImg.webp");
    data = data
      .replace(/__TITLE__/g, "About Page")
      .replace(/__DESCRIPTION__/g, "About page description.")
      .replace(/__IMAGE__/g, `https://arsdop.com/${imagePath}`)
      .replace(/__URL__/g, "https://arsdop.com/about");

    console.log(data); // Log the HTML content
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
