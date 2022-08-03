const {
  check,
  validationResult,
} = require('express-validator');

const imageValidator = [
  check('image')
    .custom((value, {
      req,
    }) => {
      const { file } = req;

      if (!file) {
        throw new Error('You must complete the image field');
      } else {
        const fileExtension = (file.originalname);
        if (!fileExtension.match(/.(jpg|jpeg|png|gif)$/i)) {
          throw new Error('The file must be JPG, JEPG, PNG or GIF');
        }
      }
      return true;
    }),
];

module.exports = imageValidator;
