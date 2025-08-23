import multer from "multer";

const storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/temp");
  },
  filename: function (request, file, callback) {
    callback(null, file.originalname);
  },
});

export const upload = multer({ storage });
