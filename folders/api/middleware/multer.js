// import multer from "multer";
// //import path from "path";

// // Set up storage engine
// const storage = multer.diskStorage({
//   filename: function (req, file, callback) {
//     // Rename file to avoid overwriting and ensure uniqueness
//     callback(null,file.originalname);
//   },
// });

// // Multer upload configuration
// const upload = multer({storage});

// export default upload;


import multer from 'multer';
import path from 'path';

// Set up the storage for the uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');  // Define the folder where files should be stored
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));  // Generate unique filename
  }
});

// Create the upload middleware
const upload = multer({ storage: storage });

export default upload;
