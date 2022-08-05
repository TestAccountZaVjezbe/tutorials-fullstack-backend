import mongoose from "mongoose";
import Category from "../models/category.model";
import SubCategory from "../models/subcategory.model";

const getOneSubCategory = async(id) => {
    return await SubCategory.findOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getAllSubCategories = async() => {
    return await SubCategory.find({});
};
const deleteOneSubCategory = async (id) => {
    return await SubCategory.deleteOne({
        _id: mongoose.Types.ObjectId(id)
    })
};
const getSubCategoryByCategory = async(id) => {
    return await SubCategory.find({
        categoryId: mongoose.Types.ObjectId(id)
    })
}


const validateCategory = async(categoryId) => {
    //checks
    const category = await Category.findOne({_id: categoryId})
    //validations
    if(!category) throw new Error(`Category does not exists with the id ${categoryId}`)
    return category._id
}

const createOneSubCategory = async(data) => {
    const cid = await validateCategory(data.categoryId);

    return await SubCategory.create({
        ...data,
        categoryId: cid
    })
};
const updateOneSubCategory = async(id, data) => {
    const { categoryId, ...restOfTheData} = data;

    if(categoryId){
        await validateCategory(data.categoryId);
    }
    
    const objectToUpdate = categoryId ? data : restOfTheData;

    return await SubCategory.updateOne({
        _id: mongoose.Types.ObjectId(id)
    }, {
        $set: {
            ...objectToUpdate
        }
    }, {
        upsert: true
    });
};

const subCategoryServiceHandler = {
    getOneSubCategory,
    getAllSubCategories,
    createOneSubCategory,
    updateOneSubCategory,
    deleteOneSubCategory,
    getSubCategoryByCategory
}
export default subCategoryServiceHandler