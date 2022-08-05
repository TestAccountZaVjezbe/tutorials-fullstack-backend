import express from 'express';
import subCategoryController from '../controllers/subCategory.controller';


const subCategoryRouter = express.Router();

subCategoryRouter.route('/').post(subCategoryController.createOneSubCategory);
subCategoryRouter.route('/:id').post(subCategoryController.updateOneSubCategory);


export default subCategoryRouter;