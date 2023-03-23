const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const upload = multer();

const PORT = process.env.PORT || 8082;

app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//to get welcome message
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "Hello from the backend!",
    },
  });
});

// to get the names of files in the shared folder
app.get("/api/sharedFiles", async (req, res) => {
  try {
    await fs.readdir(path.join(__dirname, "/shared"), (err, files) => {
      if (err) {
        res.status(400).send("Something went wrong!");
        console.log(`Err in reading the shared directory: ${err}`);
      }
      res.status(200).json({
        success: true,
        files,
      });
    });
  } catch (error) {
    res.status(400).send("Something went wrong!");
    console.log(`Err in reading the shared directory: ${error}`);
  }
});

//to recieve files from mobile
app.post("/api/upload", upload.single("inputFile"), async (req, res) => {
  await fs.writeFile(
    `${__dirname}/shared/${req.file.originalname}`,
    req.file.buffer,
    (err) => {
      if (err) console.log(err);
      else {
        console.log("File recieved successfully!");
      }
    }
  );
  res.status(200).redirect("/");
});

// for mobiles to download the selected file
app.get("/api/download/:filename", (req, res) => {
  console.log(req.params.filename);
  const filepath = path.join(__dirname, `/shared/${req.params.filename}`); //path of the file in the pc
  const filename = ""; //name of the file that the browser will show
  res.download(filepath, filename);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
