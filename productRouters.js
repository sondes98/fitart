const express = require('express');
const {
  deleteProduct,
  addProduct,
  getProducts,
  updateProduct,
  getSingleProduct,

} = require('../controllers/productControllers');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const router = express.Router();
const cloudinary = require('../helpers/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'images'
  },
});


const upload = multer({ storage });

router.post('/addProduct', /* upload.single('picture'), */ addProduct);
router.get('/', getProducts);
router.get('/getproduct/:id', getSingleProduct);
router.put('/update/:id', updateProduct);
router.delete('/:id', deleteProduct);



module.exports = router;